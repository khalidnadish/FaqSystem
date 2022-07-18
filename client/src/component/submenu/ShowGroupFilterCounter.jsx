import { GoCommentDiscussion } from "react-icons/go";
import Typography from "@mui/material/Typography";
import BoxInfo from "../BoxInfo/BoxInfo";
export function ShowGroupFilterCounter({ conter }) {
  return (
    <>
      <BoxInfo backColor={"warning.light"} forColor={"background.paper"}>
        <GoCommentDiscussion size={"2em"} /> <Typography>{conter}</Typography>
      </BoxInfo>
    </>
  );
}
