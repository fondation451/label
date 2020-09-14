import { courtDecisionGenerator } from '@label/core';
import { converter } from './converter';

describe('converter', () => {
  describe('converter.convertToXml(converter.convertFromXml(xml))', () => {
    it('should be identity', () => {
      const xmlCourtDecision = `<DOCUMENT><header1>HEADER 1</header1>
<header2></header2>
<TEXTE_ARRET>COURT DECISION BODY</TEXTE_ARRET>
<footer1>FOOTER 1</footer1></DOCUMENT>`;

      const generatedXmlCourtDecision = converter.convertToXml(
        courtDecisionGenerator.generate(
          converter.convertFromXml(xmlCourtDecision),
        ),
      );

      expect(generatedXmlCourtDecision)
        .toEqual(`<?xml version="1.0" encoding="ISO-8859-1" ?>
<DOCUMENT><header1>HEADER 1</header1><header2></header2>
<TEXTE_ARRET>COURT DECISION BODY</TEXTE_ARRET>
<footer1>FOOTER 1</footer1></DOCUMENT>`);
    });
  });
  describe('convertFromXml(convertToXml)', () => {
    it('should be identity', () => {
      const courtDecision = {
        text: 'COURT DECISION BODY',
        footer: '<footer1>FOOTER 1</footer1>',
        header: '<header1>HEADER 1</header1><header2></header2>',
      };

      const generatedCourtDecision = converter.convertFromXml(
        converter.convertToXml(courtDecisionGenerator.generate(courtDecision)),
      );

      expect(generatedCourtDecision).toEqual({
        text: 'COURT DECISION BODY',
        footer: '<footer1>FOOTER 1</footer1>',
        header: '<header1>HEADER 1</header1><header2></header2>',
      });
    });
  });
});
