import { useState } from "react";
import sortMultidimensionalArrayFunc from "sort-multidimensional-array-func";
import { Body } from "../Body/Body";
import { Header } from "../Header/Header";
import { DATA_BODY_LiST, DATA_HEADER_LIST } from "../../constants/constants";
import "./Table.css";

export const Table = () => {
  const [table, setTable] = useState<{
    data: number[][];
    columns: { label: string; sort: string }[];
  }>({ data: DATA_BODY_LiST, columns: DATA_HEADER_LIST });

  const sortTableFunc = (id: number, sortMethod: string) => {
    const { columns } = table;

    let currentSortMethod = "default";

    switch (sortMethod) {
      case "default":
        currentSortMethod = "asc";
        break;
      case "asc":
        currentSortMethod = "desc";
        break;
      case "desc":
        currentSortMethod = "asc";
        break;
      default:
        currentSortMethod = "asc";
    }

    const changeColumn = columns.map((e, index) => ({
      ...e,
      sort: index === id ? currentSortMethod : "default",
    }));

    const sortData = sortMultidimensionalArrayFunc(
      table.data,
      id,
      currentSortMethod
    );
    setTable({
      data: sortData,
      columns: changeColumn,
    });
  };

  return (
    <div className="table">
      <Header columns={table.columns} sortTableFunc={sortTableFunc} />
      <Body bodyData={table.data} />
    </div>
  );
};
