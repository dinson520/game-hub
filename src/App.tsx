import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asign main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          NAV
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
