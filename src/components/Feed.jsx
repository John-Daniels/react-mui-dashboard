import React from "react"
import Box from "@mui/material/Box"

import Post from "./widgets/Post"
import { images } from "../constants"

const Feed = () => {
  const posts = [
    {
      avatar: "/logo.png",
      username: "John Daniels",
      createdAt: "Tuesday 30, 2022",
      image: "/images/paella.jpg",
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "Godwin Daniel",
      createdAt: "Tuesday 29, 2022",
      image: images.about02,
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "John Daniels",
      createdAt: "Tuesday, 30 2022",
      image: images.about03,
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "John Daniels",
      createdAt: "Tuesday, 30 2022",
      image: images.about04,
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
  ]

  return (
    <Box flex={4} m='5px'>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </Box>
  )
}

export default Feed
