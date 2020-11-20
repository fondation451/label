import React from 'react';
import { SvgImage } from '../generic';
import { useCustomTheme } from '../../styles';

export { Logo };

function Logo(props: { size: 'medium' }) {
  const theme = useCustomTheme();
  const styles = buildStyles();

  return (
    <SvgImage style={styles[props.size]}>
      <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 1494.3 871.7">
        <path
          fill={theme.colors.primary.background}
          d="M803.4,871.7h-481c-85,0-153.9-68.9-153.9-153.9V153.9C168.5,68.9,237.4,0,322.4,0h481
	c85,0,153.9,68.9,153.9,153.9v563.8C957.3,802.8,888.4,871.7,803.4,871.7z"
        />
        <g>
          <path
            fill={theme.colors.line.level1}
            d="M0,510.5V124.9h58.2v380.8c0,34.6,16.4,54,49.7,54c10.9,0,21.8-3,28.5-6.1l3,47.9c-13.3,4.9-27.9,7.3-41.8,7.3
		C35.2,608.8,0,572.4,0,510.5z"
          />
          <path
            fill={theme.colors.line.level1}
            d="M533,283.8v321.4h-55.8v-50.9c-26.1,36.4-67.3,54.6-114.6,54.6c-94,0-162.5-66.1-162.5-164.3
		s68.5-163.7,162.5-163.7c45.5,0,85.5,17,112.2,51.5v-48.5L533,283.8L533,283.8z M475.4,444.4c0-68.5-46.7-112.8-107.9-112.8
		c-61.8,0-108.5,44.3-108.5,112.8s46.7,113.4,108.5,113.4C428.7,557.8,475.4,513,475.4,444.4z"
          />
          <path
            fill={theme.colors.line.level1}
            d="M926.6,444.4c0,98.2-68.5,164.3-162.5,164.3c-47.3,0-88.5-18.2-114.6-54.6V605h-55.8V124.9H652v207.4
		c26.7-34.6,66.7-51.5,112.2-51.5C858.1,280.7,926.6,346.2,926.6,444.4z M867.8,444.4c0-68.5-46.7-112.8-108.5-112.8
		c-61.2,0-107.9,44.3-107.9,112.8s46.7,113.4,107.9,113.4C821.1,557.8,867.8,513,867.8,444.4z"
          />
          <path
            fill={theme.colors.line.level1}
            d="M1240.8,519l31.5,37.6c-28.5,34-72.8,52.1-126.1,52.1c-103.7,0-172.8-68.5-172.8-164.3
		c0-95.2,67.9-163.7,161.3-163.7c87.9,0,156.4,61.8,158.3,157.7l-255.3,49.7c16.4,44.3,56.4,69.7,110.4,69.7
		C1185.6,557.8,1217.2,545.1,1240.8,519z M1029.8,441.4v6.1l205.6-38.8c-10.3-46.1-48.5-78.8-100.7-78.8
		C1073.4,329.8,1029.8,374.1,1029.8,441.4z"
          />
          <path
            fill={theme.colors.line.level1}
            d="M1354.9,510.5V124.9h58.2v380.8c0,34.6,16.4,54,49.7,54c10.9,0,21.8-3,28.5-6.1l3,47.9
		c-13.3,4.9-27.9,7.3-41.8,7.3C1390,608.8,1354.9,572.4,1354.9,510.5z"
          />
        </g>
        <path
          fill={theme.colors.line.level1}
          d="M764.1,803.6H355.2c-72.5,0-131.4-59-131.4-131.4h53.1c0,43.2,35.2,78.4,78.4,78.4h408.9
	c43.2,0,78.4-35.2,78.4-78.4h53.1C895.6,744.7,836.6,803.6,764.1,803.6z"
        />
      </svg>
    </SvgImage>
  );

  function buildStyles() {
    return {
      medium: {
        height: 150,
        width: 150,
      },
    };
  }
}
