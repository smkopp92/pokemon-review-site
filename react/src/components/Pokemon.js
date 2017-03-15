import React from 'react';

const Pokemon = (props) => {
  let type2html = props.type_2 != null ? <li>Type 2: {props.type_2} </li> : null
  return (
    <li>
      <ul>
        <li>
          Name: {props.name}
        </li>
        <li>
          ID: {props.id}
        </li>
        <li>
          <img src={props.img_url}/>
        </li>
        <li>
          Type 1: {props.type_1}
        </li>
        {type2html}
      </ul>
    </li>
  );
}

export default Pokemon;
