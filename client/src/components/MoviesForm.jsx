"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MoviesForm = ({ onSubmit, preset }) => {
  const router = useRouter();

  const [name, setName] = useState(preset.name);
  const [year, setYear] = useState(preset.year);
  const [category, setCategory] = useState(preset.category);
  const [director, setDirector] = useState(preset.director);
  const [description, setDescription] = useState(preset.description);

  const handleCancel = () => {
    router.push("/");
  };

  const createdOk = () => {
    router.push("/");
  };
  const createdFail = (errorMsg) => {
    setError(errorMsg.response.data.errors);
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      year: year,
      category: category,
      director: director,
      description: description,
    };
    console.log(data);
    onSubmit(data, createdOk, createdFail);
  };

  useEffect(() => {
    if (preset) {
      setName(preset.name);
      setYear(preset.year);
      setDirector(preset.director);
      setCategory(preset.category);
      setDescription(preset.description);
    }
  }, [preset]);

  return (
    <Fragment>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h4">Movie Form</Typography>
        <TextField
          name="name"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          name="year"
          label="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          name="category"
          label="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          name="director"
          label="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <TextField
          name="description"
          label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar
        </Button>
        <Button variant="contained" color="error" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>
    </Fragment>
  );
};

export default MoviesForm;
