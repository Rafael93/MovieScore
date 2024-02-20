"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      const url = "http://localhost:8000/api/user/session";
      const respond = await axios.post(url, data, { withCredentials: true });
      const result = respond.data;
      console.log(result);
      router.push("/");
    } catch (error) {
      console.log(error.response.data.errors);
      setError(error.response.data.errors);
    }
  };

  return (
    <Fragment>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h4">Login</Typography>
        <TextField
          label="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error.email)}
          helperText={error.email?.message}
          autoComplete="false"
        />
        <TextField
          label="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(error.password)}
          helperText={error.password?.message}
          autoComplete="false"
        />
        <Button variant="contained" color="info" onClick={handleSubmit}>
          Login
        </Button>
      </Stack>
    </Fragment>
  );
};

export default LoginForm;
