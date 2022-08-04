import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { bgcolor } from "@mui/system";

function MySearch() {
  return (
    <>
      <Box
        sx={{
          borderRadius: 1,
          bgcolor: "gert.100",
          border: "1px solid ",
          padding: "2px",
        }}
      >
        <TextField
         
          id="filled-size-small"
          // defaultValue="Small"
          variant="filled"
          size="small"
          fullWidth
        
          // helperText="Please write  what are looking for ...."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  <SearchIcon
                    sx={{
                      border: "1px solid",
                      borderRadius: 1,
                      borderColor: "grey.500",
                      fontSize: "2rem",
                    }}
                    />
                </IconButton>
              </InputAdornment>
            ),
            
          }}
          sx={{ input: { bgcolor: "white",borderRadius:1,padding:1,textAlign:"left",margin:0 } }} 
        />
      </Box>
    </>
  );
}

export default MySearch;
