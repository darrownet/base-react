import React from "react";
import { data } from "../../data/accounts";

export const CorporateAccounts = (props: any) => {
  return (
    <div>
      <h3>Borrower accounts</h3>
      <ul>
        {data.slice(0, 6).map(({ name, balance }) => (
          <li key={name}>
            {name}
            <span>{balance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
