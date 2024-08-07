import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import PlaylistCardItem from "./components/playlist-card-item";
import usePlaylists from "./hooks/usePlaylists";

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                playlistId={item.playlistId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];
  console.log("Current Course -->", current);

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        {current.playlistTitle}
      </Typography>
      <Typography variant="body1">{current.playlistDescription}</Typography>
    </Container>
  );
};

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        404 Page Not Found!
      </Typography>
    </Container>
  );
};

function App() {
  const { playlists, error, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
