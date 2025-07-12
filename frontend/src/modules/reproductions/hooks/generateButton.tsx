import { useStore } from "../../../store/store";

interface INameButton {
  franch: "Франция";
  germany: "Германия";
  england: "Англия";
}

const nameButton: INameButton = {
  franch: "Франция",
  germany: "Германия",
  england: "Англия",
};

export const useButtons = () => {
  const { type, handleType } = useStore();

  const getButtons = (styles: { base: string, active: string }) => {
    return (Object.keys(nameButton) as Array<keyof INameButton>).map((key) => (
      <button
        key={key}
        type="button"
        className={`${styles.base} ${type === key ? styles.active : ''} `}
        onClick={() => handleType(key)}
      >
        {nameButton[key]}
      </button>
    ))
  }

  return { getButtons };
};
