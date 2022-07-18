import  Box from "@mui/material/Box";

export default function ShowGroupFilterCounter({children,backColor,forColor}) {
  return (
      <Box
        sx={{
          display:"flex",
          justifyContent:'space-evenly',
          alignItems:"center",
          width: "content",
          height: "32px",
          backgroundColor: backColor,
          color: forColor,
          border: 1,
          borderRadius: 1,
          mx:1,
          boxShadow: 8,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          bgcolor: 'primary.main',
        }}
      >
        {children}
      </Box>

     
  );
}
