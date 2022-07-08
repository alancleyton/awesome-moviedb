import {
  FontsType,
  FontSizesType,
  FontWeightsType,
  fonts,
  fontSizes,
  fontWeights,
} from './typography';
import { ColorsType, colors } from './colors';

export type ThemeType = {
  font: FontsType;
  fontWeight: FontWeightsType;
  fontSize: FontSizesType;
  color: ColorsType;
};

const theme: ThemeType = {
  font: fonts,
  fontWeight: fontWeights,
  fontSize: fontSizes,
  color: colors,
};

export default theme;
