import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMoive = async () => {
    const json = await await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMoive();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? null : (
        <div>
          <h1>
            <a href={movie.url}>{movie.title}</a>
          </h1>
          <img src={movie.medium_cover_image} />
          <hr />
          <div>
            <h2>Basic information</h2>
            <span>
              Outline: {movie.genres} | {movie.runtime}min
            </span>
            <br />
            <span>release: {movie.year}</span>
            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
