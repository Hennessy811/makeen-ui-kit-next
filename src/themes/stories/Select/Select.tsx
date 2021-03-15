/* eslint-disable react/jsx-no-undef */
import { Box, Chip, FormControl, InputLabel, MenuItem, Select as MuiSelect, Typography, makeStyles, Theme } from '@material-ui/core';

import { Check, Plus } from './Icons';
import React, { FC } from 'react';

export interface SelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: { title: string; value: string; subtitle: string }[];
}

const useStyles = makeStyles((theme: Theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  selectOptionAdd: {
    border: '1px solid #393e4b',
    borderRadius: theme.shape.borderRadius,
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createChapterLabel: {
    color: '#1998d5',
  },
}));
/**
 * This Select is a demo for theme customizations.
 * For full set of features refer to official Material UI docs
 *
 * @param {*} { value, onChange, options }
 * @returns
 */
const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  const classes = useStyles();

  return (
    <FormControl size="small" variant="filled" fullWidth>
      <InputLabel>Pick chapters</InputLabel>
      <MuiSelect
        multiple
        value={value}
        onChange={e => {
          onChange(e.target.value as string[]);
        }}
        fullWidth
        disableUnderline
        renderValue={selected => (
          <div className={classes.chips}>
            {(selected as string[]).map(value => (
              <Chip color="primary" size="small" key={value} label={options.find(i => i.value === value)?.title} className={classes.chip} />
            ))}
          </div>
        )}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Box mb={-1}>
                  <Typography>{option.title}</Typography>
                </Box>
                <Typography variant="caption">{option.subtitle}</Typography>
              </Box>
              <Box className={classes.selectOptionAdd}>
                {value.find(i => i === option.value) ? <Plus fontSize="small" /> : <Check fontSize="small" />}
              </Box>
            </Box>
          </MenuItem>
        ))}
        <MenuItem
          onClick={e => {
            e.preventDefault();
          }}
        >
          <Box py={1} textAlign="center" width="100%">
            <Typography className={classes.createChapterLabel}>Create New Chapter</Typography>
          </Box>
        </MenuItem>
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
