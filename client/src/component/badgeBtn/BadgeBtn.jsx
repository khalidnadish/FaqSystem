import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// ToDO  : chekc icon align in responsive  not fit well
const BadgeBtn = ({
  variant,
  startIcon,
  count,
  xpad,
  xcolor = "inherint",
  onClick,
  toolTip,
  xborderColor = "inherint",
  iconcolor = "inherint",
  xborder = 1,
  xdisableElevation = false,
  TypographyVariant = "body1",
  TypographyColor="text.disabled"
}) => {
  return (
    <>
      <Tooltip title={toolTip}>
        <Button
          variant={variant}
          startIcon={startIcon}
          color={xcolor}
          disableElevation={xdisableElevation}
          sx={{
            display: "flex",
            alignItems: "center",

            padding: xpad,
            width: "95%",
            minWidth: 0,
           
            flexDirection: { xs: "column", md: "column" },
            border: xborder,
            borderColor: xborderColor,
            "& .MuiButton-startIcon": {
              margin: 0,
              color: iconcolor,
            },
          }}
          onClick={onClick}
        >
          <Typography variant={TypographyVariant} color={TypographyColor} sx={{ margin: "auto" }}>
            {count}
          </Typography>
        </Button>
      </Tooltip>
    </>
  );
};

export default BadgeBtn;
