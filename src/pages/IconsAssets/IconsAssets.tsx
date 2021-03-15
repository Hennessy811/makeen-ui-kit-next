import React, { useMemo, useState } from 'react';

import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';

import { last } from 'lodash';

import Icon from '../../extras/Icon';

interface IconDef {
  icon: string;
  fullname: string;
  group: '' | 'color' | 'filled' | 'linear' | 'thin';
}

let icons: IconDef[] = [];

function importAll(r: any) {
  const tempIcons: any = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key of r.keys()) {
    tempIcons[key.replace('./', '')] = r(key);
    // eslint-disable-next-line no-continue
    continue;
  }
  icons = Object.keys(tempIcons).map((i: string) => {
    const splt = i.split('/');
    if (splt.length > 1) {
      return {
        fullname: i,
        icon: last(splt)!.replace('.svg', ''),
        group: splt[0] as '' | 'color' | 'filled' | 'linear' | 'thin',
      };
    }
    return { group: '', fullname: i, icon: i.replace('.svg', '') };
  });
}

importAll(require.context('!@svgr/webpack!../../../public/icons', true, /\.svg$/));

const IconsAssets = () => {
  const [iconFilter, setIconFilter] = useState('');
  const [iconGroup, setIconGroup] = useState('all');

  const memoizedIcons = useMemo(
    () =>
      icons
        .filter((i: IconDef) => {
          if (iconGroup === 'all') return true;
          return i.group === iconGroup;
        })
        .filter((i: IconDef) => i.fullname.toLowerCase().includes(iconFilter.toLowerCase())),
    [iconFilter, iconGroup]
  );

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h1">Makeen Icons</Typography>

        <Box my={2} display="flex">
          <Box minWidth={200}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Icons Group</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={iconGroup}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIconGroup(e.target.value)}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="" control={<Radio />} label="No group" />
                <FormControlLabel value="filled" control={<Radio />} label="Filled" />
                <FormControlLabel value="color" control={<Radio />} label="Color" />
                <FormControlLabel value="linear" control={<Radio />} label="Linear" />
                <FormControlLabel value="thin" control={<Radio />} label="Thin" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <TextField
                fullWidth
                value={iconFilter}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setIconFilter(e.target.value)}
                variant="outlined"
                placeholder="Search icons"
              />
            </Box>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              {memoizedIcons.map((i: IconDef) => (
                <Box
                  key={`${i.icon}/${i.group || ''}`}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={1}
                >
                  <Icon group={i.group} width={30} height={30} name={i.icon} />
                  <Box width={100} textAlign="center" lineHeight={1}>
                    <Typography variant="caption">
                      {i.icon} {i.group && `(${i.group} group)`}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default IconsAssets;
