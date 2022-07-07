import Product from "./Product";
import { useEffect, useState } from "react";

import "../styles/Coffee.css";

const Coffee = () => {
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    const fetchCoffee = async () => {
      const response = await fetch("http://localhost:4000/api/coffee"); // Normally with corse we leave in http://localhost:3001
      const json = await response.json(); // array of book objects

      if (response.ok) {
        setCoffee(json);
      }
    };

    fetchCoffee();
  }, []);

  return (
    <div className="coffee_page_container">
      <div className="coffee_page">
        {coffee &&
          coffee.map((coffee) => (
            <Product
              key={coffee._id}
              title={coffee.title}
              year={coffee.type}
              price={coffee.description}
              image={coffee.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Coffee;
