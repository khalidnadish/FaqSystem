import { useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import AntModal from "../modal/AntModal";
import ShowQuastionDetail from "./ShowQuastionDetail";


const PersonQuastions = ({ quastion,avatarSrc, username, cr_date, userid  }) => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <>
    <BadgeBtn
      variant={"contained"}
      startIcon={<GoCommentDiscussion />}
      count={quastion}
      xpad={"3px 10px 3px 10px"}
      xcolor={"success"}
      xborderColor="primary.light"
      onClick={() => setShowModal(true)}
      toolTip="Quastion Create"
    />
     {showModal && (
        <AntModal
          setShowModal={setShowModal}
          showModal={showModal}
          username={username}
          cr_date={cr_date}
          userid={userid}
          avatarSrc={avatarSrc}
          count={quastion}
          title={`${username}  Have ${quastion}  Quastion `}
          prefix1={"Quastion's"}
        >
          <ShowQuastionDetail
            avatarSrc={avatarSrc}
            username={username}
            cr_date={cr_date}
            userid={userid}
          />
        </AntModal>
      )}
      </>
  );
};
export default PersonQuastions;
