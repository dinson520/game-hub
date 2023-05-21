import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          <GridItem area="asign" bg="gold">
            ASIGN
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          MAIN
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
