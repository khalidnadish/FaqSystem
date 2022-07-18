import { useState, useEffect } from "react";
import { axios } from "../axios/axios";

// axios
//   .get('http://localhost:63711/api/AdminAPI/GetHomeCarousel')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//  });

const useAxiosToGetData = (urlx) => {
  const [data, setData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const collectData = async (urlx) => {
    try {
      const resposn = await axios.get(urlx);
      if (resposn) {
        setData(resposn.data);
        setDataIsLoading(true);
        // console.log(urlx + "<><><><>", JSON.stringify(data));
      }
    } catch (error) {
      setError(error);
      setDataIsLoading(false);
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    collectData(urlx);
  }, [urlx]);
  // console.table(data);
  return { data, error, dataIsLoading };
};

export default useAxiosToGetData;
