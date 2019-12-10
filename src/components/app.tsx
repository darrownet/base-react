import React from "react";
import { BorrowerAccounts } from "../components/BorrowerAccounts/index";
import { CorporateAccounts } from "../components/CorporateAccounts/index";

interface AppProps {
  compiler: string;
  framework: string;
}

export const App = (props: AppProps) => {
  return (
    <div>
      <div>
        <h2>Parties</h2>
        <ul>
          <li>
            <UserIcon />
            <span>Borrowers</span>
            <div>
              <StatusIcon />
              Status
              <span>3 Active</span>
              <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>
          </li>
          <li>
            <UserIcon />
            <span>1 SII / Non-Obligors</span>
            <div>
              <StatusIcon />
              Status
              <span>1 Active</span>
              <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <main>
        <div>
          <SectionIcon />
          <h2>Financials at time of transfer</h2>
          <BorrowerAccounts />
        </div>
        <div>
          <SectionIcon />
          <h2>Financials at time of transfer</h2>
          <CorporateAccounts />
        </div>
      </main>
    </div>
  );
};

// Rules
// Ensure svgs have color props
// Allow provision for Key Values to have colour props
