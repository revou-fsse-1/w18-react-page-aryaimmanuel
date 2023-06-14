type ProductCardTitleProps = {
  title: string;
};

export const ProductCardTitle = (props: ProductCardTitleProps) => {
  return (
    <div>
      <h3>Product Name : {props.title} </h3>
    </div>
  );
};
