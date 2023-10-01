import React from "react";
import { Card, CardContent } from "@mui/material";

import { ProductList } from "./ProductList";
import { PostList } from "./PostList";

import { CommentsList } from "./CommentsList";
import { CategoriesList } from "./CategoriesList";
import { Home } from "./Home";
import { NavList } from "./NavList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserList } from "./UserList";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Card sx={{ bgcolor: "gray" }}>
        <CardContent>
          <NavList />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/cat" element={<CategoriesList />} />
            <Route path="/comm" element={<CommentsList />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </CardContent>
      </Card>
    </BrowserRouter>
  );
};
