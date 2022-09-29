
import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  listTitle: (theme: Theme) => ({
    color: theme.extraColor.titleGrayLite,
    fontSize: "1rem",
    fontWeight: 400,
    ml:'-6px'
  }),
});

export { styles };
