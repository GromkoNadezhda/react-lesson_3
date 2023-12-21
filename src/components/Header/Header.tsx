import icon from "../../assets/icon.png";
import "./Header.css";

export const Header = ({
  columns,
  sortTableFunc,
}: {
  columns: { label: string; sort: string }[];
  sortTableFunc: (id: number, sortMethod: string) => void;
}) => (
  <div className="header">
    {columns.map((data, index) => (
      <div
        className="header__item"
        key={index}
        id={data.label}
        onClick={() => sortTableFunc(index, data.sort)}
      >
        <h2 className="header__title">{data.label}</h2>
        <img className="header__img" src={icon} alt="icon" />
      </div>
    ))}
  </div>
);
