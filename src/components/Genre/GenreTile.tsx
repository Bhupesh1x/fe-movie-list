import { Genre } from "../../types";

import "./GenreTile.css";

type Props = {
  genre: Genre;
  selected: boolean;
  onClick: (genreId: number) => void;
};

function GenreTile({ genre, selected, onClick }: Props) {
  return (
    <div
      className={`genre__name ${selected ? "selected" : ""}`}
      onClick={() => onClick(genre.id)}
      onDoubleClick={() => onClick(genre.id)}
    >
      {genre.name}
    </div>
  );
}

export default GenreTile;
