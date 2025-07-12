import { memo } from "react";
import type { IPaintings } from "../../types/typePaintings";
import { Button } from "../button/Button";

interface IReproduction {
  reproduction: IPaintings
}

export const Reproduction = memo(({ reproduction }: IReproduction) => {
  return (
    <li>
      <img src={reproduction.image} alt={`Картина ${reproduction.title}`} />
      <div>
        <div>
          <p>{reproduction.author}</p>
          <h3>{reproduction.title}</h3>
          <p>{reproduction.param}</p>
        </div>

        <div>
          <p>{reproduction.price}</p>
          <Button
            type="button"
            ariaLabel={`Купить картину ${reproduction.title}`}
          >
            В корзину
          </Button>
        </div>
      </div>
    </li>
  );
});
