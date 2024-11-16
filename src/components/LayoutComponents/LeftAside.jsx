import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((err) => console.log(err));
  }, []);

  //   {
  //     "category_id": "01",
  //     "category_name": "Breaking News"
  //   },

  return (
    <div>
      <h2 className="text-lg font-semibold ">
        All Caterogy ({categories.length})
      </h2>
      <div className="flex flex-col gap-2 py-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn text-gray-500 "
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
