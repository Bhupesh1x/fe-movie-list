import { useState, useEffect } from "react";

import { Genre } from "../types";

const useGetGeneres = () => {
  const [data, setData] = useState<Genre[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=2dca580c2a14b55200e784d157207b4d"
        );
        if (!res.ok) {
          setError("Network response was not ok");
        }
        const result = await res.json();
        setData(result?.genres);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useGetGeneres;
