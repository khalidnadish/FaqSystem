import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { border, borderColor } from "@mui/system";

// ToDO  : chekc icon align in responsive  not fit well
const BadgeBtn = ({
  variant,
  startIcon,
  count,
  xpad,
  xcolor,
  onClick,
  toolTip,
  xborderColor = "inherint",
  
}) => {
  return (
    <>
      <Tooltip title={toolTip}>
        <Button
          variant={variant}
          startIcon={startIcon}
          color={xcolor}
          sx={{
            display:"flex",
            alignItems:"center",

            padding: xpad,
            width:"95%",
            minWidth: 0,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            border: 1,
            borderColor: xborderColor,
            "& .MuiButton-startIcon": {
             margin:0
            },



 
          }}
          onClick={onClick}
        >
          <Typography sx={{ padding: 0, margin: 0 }}>{count}</Typography>
        </Button>
      </Tooltip>
    </>
  );
};

export default BadgeBtn;
