import { Movie } from "../../types";

import "./Movies.css";
import useScrollToLoadMovies from "../../hooks/useScrollToLoadMovies";

type Props = {
  genres: number[];
};

function Movies({ genres }: Props) {
  const todayDate = new Date();
  const endYear = todayDate.getFullYear();

  const { moviesByYear } = useScrollToLoadMovies(2012, genres, endYear);

  console.log("mo", moviesByYear);

  return (
    <div className="movies">
      <div className="movies__container">
        {Object.entries(moviesByYear || [])?.map(([year, movies], index) => (
          <div key={`${year}-${index}`}>
            <p className="movie__year">Movies of {year}</p>

            <div className="movies__cards">
              {movies?.map((movie: Movie) => {
                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                return (
                  <div
                    key={`${movie?.id}-${movie.original_title}`}
                    style={{
                      backgroundImage: `url("${imageUrl}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="movie__card"
                  >
                    <div className="movie__details">
                      <div>
                        <h3>{movie?.title}</h3>
                        <p>
                          {movie?.overview?.length > 150
                            ? `${movie.overview.substring(0, 150)}...`
                            : movie?.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
