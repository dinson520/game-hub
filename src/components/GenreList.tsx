import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error.length > 0) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => {
          return (
            <ListItem paddingY="5px" key={genre.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius={8}
                ></Image>
                <Button onClick={() => onSelectGenre(genre)} fontSize="lg">
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
