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
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                >
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
