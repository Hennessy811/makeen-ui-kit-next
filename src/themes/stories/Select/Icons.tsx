import React from 'react';

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const Plus = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="#eceff4"
      d="M20.25 10.5H13.5V3.75c0-.414-.336-.75-.75-.75h-1.5c-.414 0-.75.336-.75.75v6.75H3.75c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75h6.75v6.75c0 .414.336.75.75.75h1.5c.414 0 .75-.336.75-.75V13.5h6.75c.414 0 .75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z"
      transform="translate(-192 -391) translate(48 279) translate(0 112) translate(144)"
    />
  </SvgIcon>
);

export const Check = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="#60e36b"
      d="M3.278 12.623c-.37-.366-.37-.96 0-1.327l1.344-1.328c.37-.366.972-.366 1.343 0l4.16 4.11 8.91-8.803c.37-.367.972-.367 1.343 0l1.344 1.327c.37.367.37.961 0 1.328L10.797 18.725c-.371.367-.973.367-1.344 0l-6.175-6.102z"
      transform="translate(-288 -895) translate(48 279) translate(0 616) translate(240)"
    />
  </SvgIcon>
);
