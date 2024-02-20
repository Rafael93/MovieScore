"use client";
import MoviesForm from "@/components/MoviesForm";
import axios from "axios";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const updateMovie = async (data, onSuccess, onFail) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/movie/${id}`,
        data
      );
      const result = await response.data;
      onSuccess(result);
    } catch (error) {
      onFail(error);
    }
  };

  const getMovieInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/movie/${id}`);
      const result = await response.data;
      console.log(result);
      setMovie(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <Fragment>
      <MoviesForm onSubmit={updateMovie} preset={movie} />
    </Fragment>
  );
};
export default page;
