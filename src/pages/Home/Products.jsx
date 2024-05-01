import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  //console.log(products);

  //FUNCTION
  //FILTER PRODUCTS
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  //SHOW ALL PRODUCTS
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };

  //SORTING
  const handleSortChange = (options) => {
    setSortOption(options);

    //LOGIN TO SORT
    let sortedItem = [...filteredItems];

    switch (options) {
      case "A-Z":
        sortedItem.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItem.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItem)
  };

  return (
    <div className={`max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12`}>
      <h2 className={`title`}>Or subscribe to the newsletter</h2>

      <div>
        {/* PRODUCT CARDS */}
        <div
          className={`flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8`}
        >
          {/* ALL BUTTONS */}
          <div
            className={`flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap`}
          >
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bags</button>
          </div>

          {/* FILTER */}
          <div className={`flex justify-end mb-4 rounded-sm`}>
            <div className={`bg-black p-2`}>
              <FaFilter className={`text-white h-4 w-4`} />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className={`bg-black text-white px-2 py-1 rounded-sm`}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* CARDS */}
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
