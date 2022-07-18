
import  Chip  from '@mui/material/Chip';
 const PersonVote=({}) =>{
  return (
    <Chip
      color="warning"
      size="small"
      sx={{
        width: "100%",
        borderRadius: "8px",
      }}
      label={`Vote`}
    />
  );
}
export default PersonVote
