import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh" },
  4: { src: thumbsUp, alt: "recommended" },
  5: { src: bullsEye, alt: "exceptional" },
};

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} boxSize={"25px"} />;
};

export default Emoji;
