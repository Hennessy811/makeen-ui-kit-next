import React, { FC } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core';
import { ButtonSize } from '../../themes/default/sizes';
import { Modify } from '../../shared/types';

// Usage of Modify allow us to omit original type for 'size' prop and extend interfaces normally
export type ButtonProps = Modify<
  MuiButtonProps,
  {
    /** Define the size of the item */
    size: ButtonSize;
  }
>;

/**
 * Its very prefferable to use makeStyles, as it provide same functionality as styled-components do,
 * but if we use styled()`` with custom theme properties it may result with errors, and passing theme props may break
 */
const useStyles = makeStyles((theme: Theme) => {
  return {
    root: (props: ButtonProps) => theme.sizes.button[props.size],
  };
});

/**
 * Primary interaction item
 *
 * We can use this comments to populate the documentation section in `storybook`.
 *
 * Please note that its **not a real override**, just an introductory demo to overrides.
 *
 */
const Button: FC<ButtonProps> = ({ children, size, ...props }) => {
  const classes = useStyles({ size });
  return (
    <MuiButton className={classes.root} {...props}>
      {children}
    </MuiButton>
  );
};

Button.defaultProps = { size: 'medium' };

export default Button;
