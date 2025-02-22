import { useEffect, useState } from "react";

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      // setError(false);
      // try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data);
      // }
      //  catch (error) {
      //   setError(error.message);
      // }
    };
    fetchData();
  }, [endpoint]);
  return { data };
};
export default useApi;
