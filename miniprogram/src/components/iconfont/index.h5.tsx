/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

export type IconNames = 'close-circle-fill' | 'check-circle-fill' | 'right';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 750))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 32,
};

export default IconFont;
