import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import MyFab from "./components/widgets/MyFab"

//mui stuff

import { createTheme, Stack, Box, ThemeProvider } from "@mui/material"

const App = () => {
  const [mode, setMode] = useState("light")
  const toogleThemeMode = () => setMode(mode === "light" ? "dark" : "light")

  const theme = createTheme({
    palette: {
      mode,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction='row' justifyContent='space-between' gap='10px'>
          <Sidebar toogleThemeMode={toogleThemeMode} themeMode={mode} />
          <Feed />
          <Rightbar />
        </Stack>

        <MyFab />
      </Box>
    </ThemeProvider>
  )
}

export default App
