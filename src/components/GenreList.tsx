import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

const GenreList = () => {
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
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
