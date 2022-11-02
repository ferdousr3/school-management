import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  imageInput: (theme: Theme) => ({
    mb: 1,
    "& input": {
      pb: 1,
    },
    "& small": {
      color: theme.extraColor.error,
    },
    "& .MuiTextField-root": {
      border: "none",
    },
  }),
});

export { styles };
