import IconBurgerClose from "@/assets/icons/burgerClose.svg?react";

export const BurgerBlock = () => {
  return (
    <>
      <button type="button">
        <IconBurgerClose />
      </button>
      <ul>
        <li><a href="#">Репродукции</a></li>
        <li><a href="#">Новинки</a></li>
        <li><a href="#">О нас</a></li>
      </ul>
    </>
  );
}