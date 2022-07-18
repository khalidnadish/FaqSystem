import { Box, Grid, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// ToDO  : chekc icon align in responsive  not fit well
const BadgeBtn = ({ variant, startIcon, count, xpad,xcolor ,onClick,toolTip}) => {
  return (
    <>
    <Tooltip title={toolTip}>


      <Button
        variant={variant}
        startIcon={startIcon}
        color={xcolor}
        sx={{
          padding:xpad,
          width:{xs:"90%"},
          // margin:"2px 7px 2px 7px",
          // transform: {xs:"scale(.90)",sm:"scale(.90)",md:"scale(1)",lg:"scale(.90)"},

          minWidth: 0,
          alignItems:"center",
          
          
          flexDirection:{xs:"column",md:"row"}
        }}
        onClick={onClick}
      >

        <Typography sx={{padding:0,margin:0}}>{count}</Typography>

      </Button>

      </Tooltip>
    </>
  );
};

export default BadgeBtn;
