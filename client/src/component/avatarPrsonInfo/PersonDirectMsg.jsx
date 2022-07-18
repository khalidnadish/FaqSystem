
import  Chip  from '@mui/material/Chip';

const PersonDirectMsg=({})=> {
  return (
    <Chip
      color="warning"
      size="small"
      sx={{
        width: "100%",
        borderRadius: "8px",
      }}
      label={`Message`}
    />
  );
}

export default PersonDirectMsg
