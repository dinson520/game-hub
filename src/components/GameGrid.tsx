import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((i) => {
            return (
              // <GameCardContainer children={<GameCardSkeleton key={i} />} />
              // <GameCardContainer key={i} children={<GameCardSkeleton />} />
              <GameCardContainer
                key={i}
                children={<GameCardSkeleton key={i} />}
              />
            );
          })}
        {games.map((g) => {
          return (
            // <GameCardContainer children={<GameCard key={g.id} game={g} />} />
            // <GameCardContainer key={g.id} children={<GameCard game={g} />} />
            <GameCardContainer
              key={g.id}
              children={<GameCard key={g.id} game={g} />}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
