import React,{ useContext } from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { UserDetail } from "@/helper/context/userContext";

export const GroupCount = () => {
  const { data, dataIsLoading } = useAxiosToGetData("/Category/CategoryCount");

  if (dataIsLoading) {
    return data[0].GroupRecord;
  }
};

export const GroupCountYouFollow = (userId) => {
  const { data, dataIsLoading } = useAxiosToGetData(
    `/category/CategoryCountYouFollow/${userId}`
  );

  if (dataIsLoading) {
    return data[0].GroupCountYouFollow;
  }
};

export const PepoleYouFollowing = (userId) => {
  const { followerCounter,setFollowerCounter } = useContext(UserDetail);

  const { data, dataIsLoading } = useAxiosToGetData(
    `/user/PepoleYouFollow/${userId}`
  );
  if (dataIsLoading) {
    // alert(data[0].PepoleYouFollow)
    // setFollowerCounter(data[0].PepoleYouFollow)
    return data[0].PepoleYouFollow;
  }
};

export const pepleFollowingYou = (userId) => {
  const { data, dataIsLoading } = useAxiosToGetData(
    `/user/PepoleFollowinYouCount/${userId}`
  );
  if (dataIsLoading) {
    return data[0].PepoleYouFollow;
  }
};

export const favoriteQuationCount = (userId) => {
  const { data, dataIsLoading } = useAxiosToGetData(
    `/faq/favoriteQuation/${userId}`
  );
  if (dataIsLoading) {
    return data[0].favoritequation;
  }
};
