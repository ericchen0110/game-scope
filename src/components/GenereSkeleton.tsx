import { HStack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenereSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle />
      <SkeletonText />
    </HStack>
  );
};

export default GenereSkeleton;
