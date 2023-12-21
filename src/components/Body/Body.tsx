import { v4 as key } from "uuid";

import "./Body.css";

export const Body = ({ bodyData }: { bodyData: number[][] }) => (
  <div className="body">
    {bodyData.map((data) => (
      <div className="body__item" key={key()}>
        {data.map((number, index) => (
          <p className="body__number" key={index}>
            {number}
          </p>
        ))}
      </div>
    ))}
  </div>
);
