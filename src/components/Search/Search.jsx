
import styles from "./styles.module.css";
const Search = ({keywords, setKeywords}) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
