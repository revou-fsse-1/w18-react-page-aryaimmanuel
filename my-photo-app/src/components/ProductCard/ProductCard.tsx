import { LoanSimulation } from "./LoanSimulation";
import { ProductCardTitle } from "./ProductCardTitle";

type ProductCardProps = {
  id: number;
  title: string;
  imgUrl: string;
  credit: number;
  customerBudget: number;
  isLiked: boolean;
  likeMovie: (id: number, isLiked: boolean) => void;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div>
      <ProductCardTitle title={props.title} />
      <p>Credits : {props.credit}</p>
      <LoanSimulation
        credit={props.credit}
        customerBudget={props.customerBudget}
      />
      <img src={props.imgUrl} />
      <div>
        {!props.isLiked ? (
          <button onClick={() => props.likeMovie(props.id, true)}>
            Like movie
          </button>
        ) : (
          <button onClick={() => props.likeMovie(props.id, false)}>
            Unlike movie
          </button>
        )}
      </div>
    </div>
  );
};
