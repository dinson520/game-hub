import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genre
      </Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem paddingY="5px" key={genre.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius={8}
                ></Image>
                <Button
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  whiteSpace="normal"
                  textAlign="left"
                  backgroundColor="inherit"
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
