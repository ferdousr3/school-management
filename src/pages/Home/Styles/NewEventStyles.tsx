import { styled, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}
const EventBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: 4,
  padding: "2rem",
  maxWidth: "7.5rem",
  maxHeight: "7.5rem",
  width: "7.25rem",
  height: "7.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const EventBoxRight = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.extraColor.white}`,
  borderRadius: 4,
  padding: "2rem",
  maxWidth: "7.5rem",
  maxHeight: "7.5rem",
  width: "7.25rem",
  height: "7.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const styles = sxStyles({
  eventTitle: (theme: Theme) => ({
    color: theme.extraColor.white,
    textTransform: "uppercase",
    fontSize: "2.5rem",
    fontWeight: 700,
    pt: 0,
    mt: 0,
    pb: "2rem",
  }),
  eventDay: (theme: Theme) => ({
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    fontSize: "2.5rem",
    fontWeight: 900,
    pt: 0,
    mt: 0,
  }),
  eventMonth: (theme: Theme) => ({
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    fontSize: ".875rem",
    fontWeight: 900,
    pt: 0,
    mt: "-8px",
  }),
  eventTime: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontSize: '1rem"',
    fontWeight: 700,
  }),
  eventName: (theme: Theme) => ({
    color: theme.extraColor.white,
    fontSize: "1.25rem",
    pl: "2px",
    fontWeight: 700,
    pb: ".775rem",
    pt: ".2rem",
  }),
  eventPlace: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontSize: ".875rem",
    fontWeight: 400,
  }),
  eventIcon: (theme: Theme) => ({
    fontSize: ".875rem",
    mr: "2px",
  }),

  eventDayRight: (theme: Theme) => ({
    color: theme.extraColor.white,
    textTransform: "uppercase",
    fontSize: "2.5rem",
    fontWeight: 900,
    pt: 0,
    mt: 0,
  }),
  eventMonthRight: (theme: Theme) => ({
    color: theme.extraColor.white,
    textTransform: "uppercase",
    fontSize: ".875rem",
    fontWeight: 900,
    pt: 0,
    mt: "-8px",
  }),
  eventTimeRight: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    color: theme.extraColor.white,
    fontSize: '1rem"',
    fontWeight: 700,
  }),
  eventNameRight: (theme: Theme) => ({
    color: theme.extraColor.white,
    fontSize: "1.25rem",
    pl: "2px",
    fontWeight: 700,
    pb: ".775rem",
    pt: ".2rem",
  }),
  eventPlaceRight: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    color: theme.extraColor.white,
    fontSize: ".875rem",
    fontWeight: 400,
  }),
});

export { EventBox, EventBoxRight, styles };
