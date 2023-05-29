import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
        {isLoading &&
          skeletons.map((i) => {
            return <GameCardContainer key={i} children={<GameCardSkeleton key={i} />} />;
          })}
        {data.map((g) => {
          return <GameCardContainer key={g.id} children={<GameCard key={g.id} game={g} />} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
