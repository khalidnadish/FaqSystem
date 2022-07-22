import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { TbArrowsJoin } from "react-icons/tb";

function ShowGroupDetail({ userid }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonCategory/${userid}`
  );

  return data?.map((grp) => {
    return (
      <React.Fragment key={grp.userid + grp.groupid}>
       
        <ListItem
          secondaryAction={
            <IconButton
              color="primary"
              sx={{ marginLeft: "3px", bgcolor: "warning.light" }}
            
            >
              <TbArrowsJoin size={15} />
            </IconButton>
          }


          sx={{ padding: 0, fontSize: ".8rem",my: 1 }}
        >
          <ListItemButton
          
            sx={{
              padding: 0,
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListItemText disableTypography>
              
                  <Typography
                    color={"primary"}
                    variant="subtitle1"
                    fontWeight={"normal"}
                    align={"left"}
                     ml={2}
                  >
                    {grp.catname}
                  </Typography>
                 
            </ListItemText>
          </ListItemButton>
        </ListItem>
      
      </React.Fragment>
    );
  });
}

export default ShowGroupDetail;
