import {useState} from 'react'
import { VscLayersActive } from "react-icons/vsc";
import AntModal from '../modal/AntModal';
import ShowGroupData from './ShowGroupData';
import BadgeBtn from '../badgeBtn/BadgeBtn';

const PersonGroup=({category,avatarSrc,username,cr_date,userid })=> {
 

  const [showModal, setShowModal] = useState(false);


  return (
    <>


<BadgeBtn
        variant={"contained"}
        startIcon={<VscLayersActive />}
        count={category}
        xpad={"3px 10px 3px 10px"}
        xcolor={"success"}
        xborderColor="primary.light"
        onClick={() => setShowModal(true)}
        
        toolTip="Groups Joined"
      />
    {showModal && <AntModal setShowModal={setShowModal} showModal={showModal} username={username} cr_date={cr_date} userid={userid} avatarSrc={avatarSrc} >
      <ShowGroupData avatarSrc={avatarSrc} username={username} cr_date={cr_date} userid={userid} />
      </AntModal>}
    </>
  );
}
export default PersonGroup
