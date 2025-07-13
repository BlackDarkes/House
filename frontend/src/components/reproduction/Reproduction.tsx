import { memo } from "react";
import type { IPaintings } from "../../types/typePaintings";
import { Button } from "../button/Button";

interface IReproduction {
  reproduction: IPaintings;
  className: Record<string, string>;
}

export const Reproduction = memo(({ reproduction, className }: IReproduction) => {
  return (
    <li className={className.reproductionListItem}>
      <img src={reproduction.image} alt={`Картина ${reproduction.title}`} />
      <div className={className.reproductionInfo}>
        <div>
          <p className={className.reproductionInfoAuthor}>{reproduction.author}</p>
          <h3 className={className.reproductionInfoTitle}>{reproduction.title}</h3>
          <p>{reproduction.param}</p>
        </div>

        <div>
          <p className={className.reproductionInfoPrice}>{reproduction.price}</p>
          <Button
            type="button"
            ariaLabel={`Купить картину ${reproduction.title}`}
            className={className.reproductionInfoButton}
          >
            В корзину
          </Button>
        </div>
      </div>
    </li>
  );
});
