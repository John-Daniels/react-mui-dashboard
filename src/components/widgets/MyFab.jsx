import React, { useState } from "react"
import {
  Tooltip,
  IconButton,
  Fab,
  Typography,
  Modal,
  Box,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material"

import {
  Add,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material"

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
})

const MyFab = () => {
  const [open, setOpen] = useState(false)

  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return (
    <>
      <Tooltip
        title='Post'
        onClick={openMenu}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <Add />
        </Fab>
      </Tooltip>

      <MyModal open={open} onClose={closeMenu}>
        <Box
          width={400}
          minHeight='40%'
          p={3}
          m={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>

          <UserBox>
            <Avatar>JD</Avatar>

            <Typography variant='span' textAlign='center'>
              John Daniels
            </Typography>
          </UserBox>

          {/* form */}

          <TextField
            id='body'
            label='Post'
            rows={4}
            variant='standard'
            placeholder={"What's on your mind?"}
            // value={}
            // onChange={}
            fullWidth
            multiline
          />

          {/* post actions*/}
          <Stack direction='row' gap={1} mt={2} mb={3}>
            {[
              <EmojiEmotions color='primary' />,
              <Image color='secondary' />,
              <VideoCameraBack color='success' />,
              <PersonAdd color='error' />,
            ].map((icon, index) => (
              <IconButton key={index}>{icon}</IconButton>
            ))}
          </Stack>

          <ButtonGroup
            variant='contained'
            color='primary'
            size='small'
            aria-label='buttons'
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  )
}

export default MyFab
