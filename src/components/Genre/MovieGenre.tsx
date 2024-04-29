import useGetGeneres from "../../hooks/useGetGenres";
import GenreTile from "./GenreTile";

import "./MovieGenre.css";

type Props = {
  genres: number[];
  toggleGenre: (genreId: number) => void;
  isGenreSelected: (genreId: number) => boolean;
};

function MovieGenre({ genres, toggleGenre, isGenreSelected }: Props) {
  const { data: genresData } = useGetGeneres();

  return (
    <div className="genre">
      <div className="genre__container">
        {genresData?.map((genre) => (
          // <p key={genre.id} className="genre__name">
          //   {genre.name}
          // </p>
          <GenreTile
            key={genre.id}
            genre={genre}
            selected={isGenreSelected(genre.id)}
            onClick={toggleGenre}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieGenre;
