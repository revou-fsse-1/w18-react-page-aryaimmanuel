import { Fragment, useState } from "react";
import { Title } from "./components/Title";
import allMovies from "./components/products-data.json";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { BudgetSetting } from "./components/BudgetSetting";
import { LikedProducts } from "./components/LikedProducts";
const App = () => {
  const [budget, setBudget] = useState<number>(0);
  const [movies, setMovies] = useState(allMovies);

  const LikeMovie = (id: number, isLiked: boolean) => {
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.isLiked = isLiked;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  const LikedCarCount = movies.filter((movie) => Boolean(movie.isLiked)).length;

  return (
    <Fragment>
      <div>
        <Title />
        <LikedProducts count={LikedCarCount} />
        <BudgetSetting budget={budget} setBudget={setBudget} />
        {allMovies.map((movie) => {
          return (
            <ProductCard
              id={movie.id}
              isLiked={movie.isLiked}
              customerBudget={budget}
              title={movie.title}
              credit={movie.credit}
              imgUrl={movie.imageUrl}
              likeMovie={LikeMovie}
            />
          );
        })}
      </div>
      <footer>
        <span>Ghibli Gallery 2023</span>
      </footer>
    </Fragment>
  );
};

export default App;
