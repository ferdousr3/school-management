import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
    searchLeftBorder: (theme: Theme) => ({
        borderLeft: '3px solid #e05a36',
        display: 'block',
        paddingLeft: '11px',
        lineHeight: '0.9',
  }),

 
});

export { styles };
