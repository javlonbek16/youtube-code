import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900} color="black" mb={3} ml={{ sm: "100px" }}>
                Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> <span>videos</span>
            </Typography>
            <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    );
};

export default SearchFeed;
