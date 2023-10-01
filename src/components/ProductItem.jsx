import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Grid, Card, CardContent, Rating, Badge } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <h4>{item.title.slice(0, 25)}...</h4>
          <Badge badgeContent={`$${item.price}`} color="warning">
            <img src={item.image} alt="" />
          </Badge>
          <p>{item.description.slice(0, 100)}...</p>
          <ThumbUpIcon sx={{ color: "blue" }} />
          <Rating value={item.rating.rate} />({item.rating.count})
          <h6>{item.category}</h6>
        </CardContent>
      </Card>
    </Grid>
  );
};
