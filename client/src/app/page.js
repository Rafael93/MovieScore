"use client";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/movie");
      const result = await response.data;
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1>Movie Score</h1>

      <Link href="/newMovie">
        <Button variant="contained" color="primary">
          New Movie
        </Button>
      </Link>

      {/* Table */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Link href={`/editMovie/${item._id}`}>
                        <Button variant="contained" color="info">
                          Edit
                        </Button>
                      </Link>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
