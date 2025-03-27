import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../provider/Context";
import axios from "axios";

function ListMovie() {
  const {
    movies,
    setMovies,
    changeFormatDate,
    getProducerNameById,
    getDirectorNameById,
    getStarNameById,
  } = useContext(AppContext);

  // get query parameter for genre, director
  const searchParams = new URLSearchParams(useLocation().search);
  const genreParam = searchParams.get("genre") ? searchParams.get("genre") : "";
  const directorParam = searchParams.get("director-id")
    ? searchParams.get("director-id")
    : "";

  // filter movies by genre
  const filteredMovies = movies.filter((mov) => {
    const genreMatch = mov.genres.includes(genreParam) || !genreParam;
    const directorMatch = mov.director == directorParam || !directorParam;
    return genreMatch && directorMatch;
  });

  // handle remove star
  const navigate = useNavigate();


  const handleRemoveStar = async (movieId, starId) => {
    const isConfirm = window.confirm("Are you sure to remove this star?");
    if (!isConfirm) return;
    const starArr = movies.find((mov)=> mov.id == movieId)?.stars;
    const newStarArr = starArr.filter((star) => star != starId);
    const updatedMovie = {
      ... movies.find((mov)=> mov.id == movieId),
      stars: newStarArr
    }
    // axios.put vào movieId với đối số là updatedMovie
    // Set lại state movies
    // alert Xóa thành công
    // navigate to /movie để xem kết quả
    try {
      const res = await axios.put(
        `http://localhost:9999/movies/${movieId}`,
        updatedMovie
      );
      setMovies(movies.map((mov) => (mov.id == movieId ? res.data : mov)));
      alert("Star removed successfully");
      navigate("/movie");
    } catch (error) {
      console.log("Error removing star:", error);
    }
  };
  return (
    <div>
      <h2 className="text-center">List of Movies</h2>
      <Link to="/movie">Show all movies</Link>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Release</th>
            <th>Description</th>
            <th>Producer</th>
            <th>Director</th>
            <th>Genres</th>
            <th style={{ width: "25%" }}>Stars</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((mov, index) => (
            <tr key={index}>
              <td>{mov.id}</td>
              <td>{mov.title}</td>
              <td>{changeFormatDate(mov.release)}</td>
              <td>{mov.description}</td>
              <td>{getProducerNameById(mov.producer)}</td>
              <td>{getDirectorNameById(mov.director)}</td>
              <td>
                {mov.genres.map((genre, index) => (
                  <div key={index}>{genre}</div>
                ))}
              </td>
              <td>
                {mov.stars.map((star, index) => (
                  <div key={index}>
                    {index + 1} - {getStarNameById(star)} -{" "}
                    <p
                      style={{textDecoration: "underline", color: "blue", cursor: "pointer"}}
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveStar(mov.id, star);
                      }}
                    >
                      Remove
                    </p>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListMovie;
