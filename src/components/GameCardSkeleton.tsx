import {
  Card,
  CardBody,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";
import GameScore from "./GameScore";
import PlatformIconList from "./PlatformIconList";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width="300px" borderRadius={10} overflow="hidden">
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
