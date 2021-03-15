/* eslint-disable no-restricted-syntax */
import React, { FC } from 'react';

import { SvgIcon } from '@material-ui/core';

const icons: Record<string, unknown> = {};

function importAll(r: any) {
  for (const key of r.keys()) {
    icons[key.replace('./', '')] = r(key);
    // eslint-disable-next-line no-continue
    continue;
  }
}

importAll(require.context('!@svgr/webpack!../../../public/icons', true, /\.svg$/));

export interface IconProps {
  /** Define fill color */
  fill?: string;
  group?: '' | 'color' | 'filled' | 'linear' | 'thin';
  /** Height & viewbox height, default to 24, and 40 - if group is thin */
  height?: number | string;
  /** Icon name from public folder */
  name: string;
  /** Custom viewbox size */
  viewBox?: string;
  /** Width & viewbox width, default to 24, and 40 - if group is thin */
  width?: number | string;
}

const Icon: FC<IconProps> = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const defaultSize = props.group === 'thin' ? 40 : 24;
  // eslint-disable-next-line react/destructuring-assignment
  const defaultFill = props.group === 'color' ? '' : 'gray';
  const {
    fill = defaultFill,
    group,
    height = defaultSize,
    name,
    width = defaultSize,
    viewBox = `0 0 ${defaultSize} ${defaultSize}`,
    ...restProps
  } = props;

  const IconElem = React.useMemo(() => {
    const iconPath = `${group && `${group}/`}${name}.svg`;

    let iconItem = icons[iconPath] as { default: any };

    if (!iconItem) iconItem = icons['close-circle.svg'] as { default: any };
    return iconItem.default;
  }, [group, name]);

  return <SvgIcon component={IconElem} height={height} width={width} fill={fill} viewBox={viewBox} {...restProps} />;
};

export default Icon;
