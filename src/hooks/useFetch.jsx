//custom hook developed by @becodev
import { useState, useEffect } from "react";

export const useFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const getData = async (url, option = {}) => {
    try {
      let res = await fetch(url, option);

      if (res.status >= 400) {
        throw new Error({
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
        });
      }
      let data = await res.json();

      setIsPending(false);
      setData(data);
      setError({ err: false });
    } catch (err) {
      setIsPending(true);
      setError(err);
    }
  };

  useEffect(() => {
    getData(url, option);
  }, [url, option]);

  return { data, isPending, error };
};
