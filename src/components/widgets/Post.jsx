import * as React from "react"
import { styled } from "@mui/material/styles"

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  ShareIcon,
  Checkbox,
} from "@mui/material"

import { red } from "@mui/material/colors"

import { FavoriteBorder, Share, Favorite, MoreVert } from "@mui/icons-material"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function Post({ post }) {
  const { avatar, username, createdAt, image, body, _id } = post

  return (
    <Card sx={{ margin: "5px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: !avatar ? red[500] : "rgba(0,0,0,0.4px)" }}
            aria-label='recipe'
            src={avatar}
          >
            {username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title={username}
        subheader={createdAt}
      />
      <CardMedia
        component='img'
        image={image || "https://mui.com/static/images/cards/paella.jpg"}
        alt={username}
        sx={{
          minHeight: "200px",
        }}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: red[600] }} />}
        />
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}
