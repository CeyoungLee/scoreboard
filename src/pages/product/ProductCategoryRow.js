import React from 'react';
import './ProductRow.module.scss';

export const ProductCategoryRow = (props) => {
  return (
    <tr colSpan="2">
      <th>{props.category}</th>
    </tr>
  );
}