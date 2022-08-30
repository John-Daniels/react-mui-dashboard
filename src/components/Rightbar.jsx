import React from "react"
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  styled,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from "@mui/material"

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={300} gap={2}>
        <Typography variant='h6' fontWeight={200}>
          Online Freinds
        </Typography>

        <AvatarGroup max={7} sx={{ justifyContent: "center" }}>
          <Avatar
            alt='Remy Sharp'
            src='https://mui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://mui.com/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://mui.com/static/images/avatar/3.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://mui.com/static/images/avatar/4.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://mui.com/static/images/avatar/5.jpg'
          />
        </AvatarGroup>

        {/* latest photos */}
        <Typography
          variant='h6'
          fontWeight={200}
          sx={{ margin: "1rem 0 2px 0" }}
        >
          Latest Photos
        </Typography>
        <LatestPhotos />

        {/*Latest conversations */}
        <Typography variant='h6' fontWeight={200} sx={{ marginTop: "1rem" }}>
          Latest Conversations
        </Typography>

        {[
          {
            username: "Godwin Daniels",
            body: "Do you have Paris recommendations? Have you ever...",
            createdAt: Date.now(),
            avatar: "",
          },
          {
            username: "TobiTheAlpha",
            body: "Bruv, you won't believe how many users joined our waitlist in the past 2 days",
            createdAt: Date.now(),
            avatar: "",
          },
          {
            username: "Mercy",
            body: "Are your up for bungle jumping this weekend",
            createdAt: Date.now(),
            avatar: "",
          },
        ].map((message, index) => (
          <Conversation key={index} message={message} />
        ))}
      </Box>
    </Box>
  )
}

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

function LatestPhotos() {
  return (
    <ImageList
      variant='quilted'
      cols={4}
      rowHeight={121}
      sx={{ borderRadius: "0.5rem" }}
    >
      {itemData.map(
        (item, index) =>
          index < 4 && (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          )
      )}
    </ImageList>
  )
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
]

const Conversation = ({ message: { avater, username, body, createdAt } }) => (
  <>
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar src={avater} sx={{ bgcolor: "red" }}>
          {username[0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        // primary={"Hafa"}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {username}
            </Typography>
            {" - " + body}
          </>
        }
      />
    </ListItem>
    <Divider variant='inset' />
  </>
)

export default Rightbar
