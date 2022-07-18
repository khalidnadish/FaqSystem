import React from "react";

import TextField from "@mui/material/TextField";

function MySearch() {
  return (
    <>
      {/* <Box sx={{ display: "flex", alignItems: "center" }}> */}
      {/* <SearchIcon sx={{ color: "background.paper" }} /> */}
      <TextField
        // sx={{ color: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        margin="dense"
        fullWidth
        label="Name"
      />
      {/* </Box> */}

      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search… "
          inputProps={{ "aria-label": "search" }}
        />
      </Search> */}
    </>
  );
}

export default MySearch;
