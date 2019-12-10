import React from "react";
import { data } from "../../data/values";

export const Section = (props: any) => {
  return (
    <div>
      <h3>Borrower accounts</h3>
      <ul>
        {data.slice(0, 6).map(({ key, value }) => (
          <li key={key}>
            {key}
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
