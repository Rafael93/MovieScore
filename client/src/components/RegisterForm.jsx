import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      const url = "http://localhost:8000/api/user";
      const respond = await axios.post(url, data);
      const result = respond.data;
      console.log(result);
      setError({});
      router.push("/session");
    } catch (error) {
      setError(error.response.data.errors);
    }
  };

  return (
    <Fragment>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h4">Register</Typography>
        <TextField
          label="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error.email)}
          helperText={error?.email?.message}
          autoComplete="false"
        />
        <TextField
          label="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(error.password)}
          helperText={error?.password?.message}
          autoComplete="false"
        />
        <TextField
          label="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={Boolean(error.confirmPassword)}
          helperText={error?.confirmPassword?.message}
          autoComplete="false"
        />
        <Button variant="contained" color="info" onClick={handleSubmit}>
          Register
        </Button>
      </Stack>
    </Fragment>
  );
};

export default RegisterForm;
