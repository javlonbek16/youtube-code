import React from 'react'
import { Box } from '@mui/system'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components"

const App = () => (
  <>
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </>
);

export default App