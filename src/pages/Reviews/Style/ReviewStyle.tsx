// import { styled, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

// const ReviewBox = styled(Box)(({ theme }) => ({

// }))

// const styles = sxStyles({

// });

// export { ReviewBox, styles };