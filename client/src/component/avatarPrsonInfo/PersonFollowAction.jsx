
import  Chip  from '@mui/material/Chip';
const PersonFollowAction=({})=> {
  return (
    <Chip
      color="warning"
      size="small"
      sx={{
        width: "100%",
        borderRadius: "8px",
      }}
      label={`Follw`}
    />
  );
}
export default PersonFollowAction
