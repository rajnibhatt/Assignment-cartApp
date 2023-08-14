import React, { useEffect } from "react";
import { Checkbox, CheckboxGroup } from "rsuite";
import { useProduct } from "./Product/product.context";

export const FiltersList = ({ handleFilterChange }) => {
  return (
    <CheckboxGroup name="checkboxList">
      <Checkbox
        value="delivery"
        onChange={(value, checked, event) => {
          handleFilterChange(checked, value);
        }}
      >
        Delivery
      </Checkbox>
      <Checkbox
        value="expensive"
        onChange={(value, checked, event) => {
          handleFilterChange(
            checked,
            value
          );
        }}
      >
        Expensive
      </Checkbox>
      <Checkbox value="best selling">Best Selling</Checkbox>
    </CheckboxGroup>
  );
};