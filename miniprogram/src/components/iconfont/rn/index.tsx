/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCloseCircleFill from './IconCloseCircleFill';
import IconCheckCircleFill from './IconCheckCircleFill';
import IconRight from './IconRight';

export type IconNames = 'close-circle-fill' | 'check-circle-fill' | 'right';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'close-circle-fill':
      return <IconCloseCircleFill {...rest} />;
    case 'check-circle-fill':
      return <IconCheckCircleFill {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
  }

  return null;
};

export default IconFont;
