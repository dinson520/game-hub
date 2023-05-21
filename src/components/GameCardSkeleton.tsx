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
      <Card>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
