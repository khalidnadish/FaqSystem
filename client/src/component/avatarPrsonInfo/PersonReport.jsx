import  Chip  from '@mui/material/Chip';


const PersonReport = ({}) => {
  return (
    <Chip
      color="warning"
      size="small"
      sx={{
        width: "100%",
        borderRadius: "8px",
      }}
      label={`Reporting`}
    />
  );
};
export default PersonReport
