import ShowGroupDetail from "./ShowQuastionDetail";

const ShowGroupData = ({ avatarSrc, userid, username, cr_date }) => {
  return (
    <>
      <ShowGroupDetail userid={userid} username={username} />
    </>
  );
};

export default ShowGroupData;
