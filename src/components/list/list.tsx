import React from 'react';

interface Props {
    items: Array<string>;
}

const List = (props: Props) => {
    return (
        <ul>
            {props.items.map((item, idx) => {
                return(
                  <li key={idx}>{item}</li>
                )
            })}
        </ul>
    );
};

export default List;