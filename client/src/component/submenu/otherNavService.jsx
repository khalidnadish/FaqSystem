import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";

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

export const QuastionFromPepoleYouFollow = (userId) => {
  const { data, dataIsLoading } = useAxiosToGetData(
    `/user/PepoleYouFollow/${userId}`
  );
  if (dataIsLoading) {
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
