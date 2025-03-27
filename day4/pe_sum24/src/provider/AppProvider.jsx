import React, { useState, useEffect } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  const [producers, setProducers] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [stars, setStars] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data in parallel
        const [resProducers, resDirectors, resMovies, resStars] = await Promise.all([
          axios.get("http://localhost:9999/producers"),
          axios.get("http://localhost:9999/directors"),
          axios.get("http://localhost:9999/movies"),
          axios.get("http://localhost:9999/stars"),
        ]);

        setProducers(resProducers.data);
        setDirectors(resDirectors.data);
        setMovies(resMovies.data);
        setStars(resStars.data);

        // Extract unique genres
        const genres = [...new Set(resMovies.data.flatMap(movie => movie.genres))];
        setGenres(genres);
        console.log(genres); // check        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // ChangeFormat date function
  const changeFormatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  // Get producer name by id
  const getProducerNameById = (producerId) => {
    const producer = producers.find((producer) => producer.id == producerId);
    return producer?.name;
  }

  // Get director name by id
  const getDirectorNameById = (directorId) => {
    const director = directors.find((director) => director.id == directorId);
    return director?.fullname;
  }

  // Get star name by id
  const getStarNameById = (starId) => {
    const star = stars.find((star) => star.id == starId);
    return star?.fullname;
  }

  const data = {
    producers,
    directors,
    movies,
    stars,
    genres,
    setDirectors,
    setProducers,
    setMovies,
    setStars,
    setGenres,
    changeFormatDate, getProducerNameById, getDirectorNameById, getStarNameById
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
