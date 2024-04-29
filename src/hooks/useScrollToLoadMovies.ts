import { useState, useEffect, useMemo } from "react";
import { Movie, MoviesByYear } from "../types";

const useScrollToLoadMovies = (
  initialYear: number,
  genres: number[],
  endYear: number
): { moviesByYear: MoviesByYear | undefined } => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [fetchedYears, setFetchedYears] = useState<number[]>([]);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setYear((prevYear) => prevYear - 1);
    } else if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9 &&
      year <= endYear
    ) {
      setYear((nextYear) => nextYear + 1);
    }
  };

  const fetchMovies = async (year: number) => {
    if (!fetchedYears.includes(year)) {
      let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`;

      if (genres.length) {
        apiUrl += `&with_genres=${genres.join(",")}`;
      }

      const response = await fetch(apiUrl);
      const result = await response.json();

      setFetchedYears((prev) => [...prev, year]);

      if (year === initialYear - 1) {
        setMovies((prev) => [...result?.results, ...prev]);
      } else {
        setMovies((prev) => [...prev, ...result?.results]);
      }
    }
  };

  const [year, setYear] = useState<number>(initialYear);

  useEffect(() => {
    if (year <= endYear) {
      fetchMovies(year);
    }
  }, [year, genres, initialYear]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moviesByYear = useMemo(() => {
    if (movies?.length) {
      const moviesByYear: MoviesByYear = {};

      movies.forEach((movie) => {
        const releaseYear = new Date(movie.release_date).getFullYear();
        if (!moviesByYear[releaseYear]) {
          moviesByYear[releaseYear] = [];
        }
        moviesByYear[releaseYear].push(movie);
      });
      return moviesByYear;
    }
  }, [movies]);

  return { moviesByYear };
};

export default useScrollToLoadMovies;
