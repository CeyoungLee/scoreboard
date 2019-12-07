import React from 'react';
import style from './ProductRow.module.scss';
import className from 'classnames';

export const ProductRow = (props) => {
  //[key]=> computed property
  return (
    <tr className={className({[style.stock]: !props.stocked })}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}