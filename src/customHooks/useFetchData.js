import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:1337/";

export default function useFetchData({
  loadOnMount = false,
  clearDataOnLoad = false,
  fetchUrl = "",
  params = {},
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const loadData = async () => {
    setIsLoading(true);
    setError();
    if (clearDataOnLoad) setData();
    try {
      const res = await axios.get(`${API_URL}${fetchUrl}`, {
        params,
      });
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    if (loadOnMount && fetchUrl !== "") loadData();
  }, []);

  return { isLoading, error, data, loadData };
}
