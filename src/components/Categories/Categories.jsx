import { formateDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
const Categories = ({ categories,selectedCategory,setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
          onClick={() => setSelectedCategory(category)}
            key={category}
            className={selectedCategory === category ? styles.active : styles.item}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
