import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody fontSize="2xl">
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <GameScore critic={game.metacritic}></GameScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
