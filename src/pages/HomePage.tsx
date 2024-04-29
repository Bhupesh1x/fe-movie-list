import { useCallback, useState } from "react";
import Header from "../components/Header/Header";
import Movies from "../components/Movies/Movies";

import "./HomePage.css";

function HomePage() {
  const [genres, setGenres] = useState<number[]>([]);

  const toggleGenre = (genreId: number) => {
    const index = genres.indexOf(genreId);
    if (index === -1) {
      setGenres([...genres, genreId]);
    } else {
      const updatedGenres = [...genres];
      updatedGenres.splice(index, 1);
      setGenres(updatedGenres);
    }
  };

  const isGenreSelected = useCallback(
    (genreId: number) => {
      return genres.includes(genreId);
    },
    [genres]
  );

  return (
    <div className="home">
      <Header
        genres={genres}
        toggleGenre={toggleGenre}
        isGenreSelected={isGenreSelected}
      />
      <Movies genres={genres} />
    </div>
  );
}

export default HomePage;
