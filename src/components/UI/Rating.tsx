import Star from "./Star";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <Star key={index} />
  ));

  return stars;
};

export default Rating;
