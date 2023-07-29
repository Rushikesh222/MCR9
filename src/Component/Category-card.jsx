import { useNavigate } from "react-router-dom";
import { categories } from "../assets/Category";
import "./Category-card.css";
export const CategoryCard = () => {
  const navigate = useNavigate();
  return (
    <div className="category-block">
      {categories.map((items) => {
        const { _id, thumbnail, category } = items;
        return (
          <div
            onClick={() => navigate(`/videolisting/${category}`)}
            key={_id}
            className="category-card"
          >
            <img className="category-image" src={thumbnail} alt={category} />
            <h2>{category}</h2>
          </div>
        );
      })}
    </div>
  );
};
