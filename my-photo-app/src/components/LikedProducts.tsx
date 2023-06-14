type LikedProductsProps = {
  count: number;
};

export const LikedProducts = (props: LikedProductsProps) => {
  return (
    <div>
      <p>You have liked {props.count} movies </p>
    </div>
  );
};
