import { customColorsType } from './customColorsType';

export { customDarkColors };

const customDarkColors: customColorsType = {
  alert: ['red', 500],
  background: {
    default: ['grey', 900],
    highlight: ['grey', 800],
  },
  button: {
    default: ['grey', 800],
    disabled: {
      background: ['grey', 900],
      color: ['grey', 500],
    },
  },
  document: {
    background: 'black',
  },
  dropdown: {
    border: 'white',
  },
  icon: 'white',
  primary: ['cyan', 800],
  secondary: ['orange', 500],
  separator: ['grey', 500],
  text: {
    default: 'white',
    disabled: ['grey', 500],
  },
};
