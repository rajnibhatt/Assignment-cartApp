import React from "react";

export default function productsReducer(products, action) {
  switch (action.type) {
    case "setFilters": {
      const { filters, initialProducts } = action;
      let filteredProducts = initialProducts;

      if (filters.includes("delivery")) {
        filteredProducts = filteredProducts.filter((p) => p.delivery === true);
      }

      if (filters.includes("expensive")) {
        const maxPrice = Math.max(...filteredProducts.map((p) => p.price));
        filteredProducts = filteredProducts.filter((p) => p.price >= maxPrice);
      }

      return filteredProducts;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
