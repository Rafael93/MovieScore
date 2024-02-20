"use client";
import MoviesForm from "@/components/MoviesForm";
import { Fragment } from "react";
import axios from "axios";

const page = () => {
  const createNewMovie = async (data, onSuccess, onFail) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/movie",
        data
      );
      const result = await response.data;
      onSuccess(result);
    } catch (error) {
      onFail(error);
    }
  };
  return (
    <Fragment>
      <MoviesForm onSubmit={createNewMovie} />
    </Fragment>
  );
};

export default page;
