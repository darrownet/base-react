import React from 'react';


interface Props {
  data: {
    heads: Array<string>
    rows: Array<Array<string>>
  };
}

const Table = (props: Props) => {
  return (
    <table>
      <thead>
      {props.data.heads.map((head, idx) => {
        return (
          <th key={idx}>{head}</th>
        )
      })}
      </thead>
      <tbody>
      {props.data.rows.map((row, idx) => {
        return (
          <tr key={idx}>{row.map((item, idx) => {
            return (<td key={idx}>{item}</td>)
          })}</tr>
        )
      })}
      </tbody>
    </table>
  );
};

export default Table;