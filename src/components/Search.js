import { Search_content, Search_wrapper } from "../styled/styledSearch";

const Search = ({ modalsearch, Setmodalsearch }) => {
  return (
    <div>
      <input
        placeholder="Please, search"
        onFocus={() => Setmodalsearch(true)}
      />
      <Search_wrapper
        modalsearch={modalsearch}
        onClick={() => Setmodalsearch(false)}
      >
        <Search_content></Search_content>
      </Search_wrapper>
    </div>
  );
};
export default Search;
