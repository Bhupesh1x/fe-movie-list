import MovieGenre from "../Genre/MovieGenre";

import "./Header.css";

type Props = {
  genres: number[];
  toggleGenre: (genreId: number) => void;
  isGenreSelected: (genreId: number) => boolean;
};

function Header({ genres, toggleGenre, isGenreSelected }: Props) {
  return (
    <div className="header">
      <div className="header__container">
        <p>MovieFix</p>

        <MovieGenre
          genres={genres}
          toggleGenre={toggleGenre}
          isGenreSelected={isGenreSelected}
        />
      </div>
    </div>
  );
}

export default Header;
