import { Overrides } from "@material-ui/core/styles/overrides";

const overrides: Overrides = {
  MuiButton: {
    root: {
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      margin: "5px",
    },
  },
  MuiDialog: {
    container: {
      overflowY: "scroll",
    },
  },
  MuiFormControl: {
    root: {
      width: "100%",
    },
  },
  MuiSlider: {
    root: {
      height: 4,
    },
    rail: {
      height: 4,
    },
    track: {
      height: 4,
    },
  },
  MuiInputLabel: {
    outlined: {
      fontSize: 15,
      transform: "translate(14px, 16px) scale(1)",
    },
  },
  MuiOutlinedInput: {
    adornedEnd: {
      paddingRight: 0,
    },
    input: {
      fontSize: 15,
      lineHeight: "20px",
      padding: "14px 16px",
    },
    notchedOutline: {
      borderColor: "#e4e9f2",
      top: -2,
    },
  },
  MuiTabs: {
    indicator: {
      backgroundColor: "transparent",
    },
  },
};

export default overrides;
