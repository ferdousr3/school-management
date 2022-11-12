import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  dataTable: (theme: Theme) => ({
    // "& .MuiDataGrid-root": {
    //   border: "none",
    // },
    "& .MuiDataGrid-cell": {
      // fontSize: ".80rem !important",
      fontFamily: `${theme.myFont} !important`,
    },
    "& .status-column--cell": {
      color: theme.palette.secondary.main,
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: theme.palette.primary.main,
      borderBottom: "none",
      color: theme.extraColor.white,
      // fontWeight: 900,
      // fontSize: ".80rem !important",
      fontFamily: `${theme.myFont} !important`,
    },
    // "& .MuiDataGrid-columnHeaderTitleContainerContent": {
    //   ml: 2,
    // },
    // "& .MuiDataGrid-iconSeparator": {
    //   ml: 4,
    // },
    "& .MuiDataGrid-columnHeaderTitle": {
      color: theme.extraColor.white,
      fontWeight: 500,
      fontSize: ".8rem",
    },
    "& .MuiDataGrid-sortIcon": {
      color: theme.extraColor.white,
      // fontWeight: 700,
    },
    "& .MuiSvgIcon-fontSizeSmall": {
      color: theme.extraColor.white,
      // fontWeight: 700,
    },
    "& .MuiDataGrid-cellContent": {
      color: theme.extraColor.titleGrayLite,
      fontWeight: 500,
      fontSize: ".8rem",
    },

    // "& .MuiDataGrid-virtualScroller": {
    //   backgroundColor: theme.palette.primary.main,
    // },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiTablePagination-selectLabel": {
      color: theme.extraColor.white,
    },
    "& .MuiInputBase-root ": {
      color: theme.extraColor.white,
    },
    "& .MuiTablePagination-displayedRows ": {
      color: theme.extraColor.white,
    },
    "& .MuiCheckbox-root": {
      color: `${theme.palette.secondary.main} !important`,
    },
  }),
});

export { styles };
