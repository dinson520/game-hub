import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asign main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="asign">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
