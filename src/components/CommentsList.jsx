import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CommentsItem } from "./CommentsItem";
import axios from "axios";

export const CommentsList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <CommentsItem item={item} />
      ))}
    </Grid>
  );
};
