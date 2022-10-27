import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Search_content,
  Search_input,
  Search_wrapper,
} from "../styled/styledSearch";

const Search = ({ modalsearch, Setmodalsearch }) => {
  const [search, Setsearch] = useState("");
  const phones = useSelector((state) => state.shop.phones);
  const filterPhone = phones.filter((phones) => {
    return search !== ""
      ? phones.name.toLowerCase().startsWith(search.toLowerCase())
      : null;
  });
  return (
    <div>
      <Search_wrapper
        modalsearch={modalsearch}
        onClick={() => Setmodalsearch(false)}
      >
        <Search_content onClick={(e) => e.stopPropagation()}>
          <Search_input
            placeholder="Please, search"
            value={search}
            onChange={(e) => {
              Setsearch(e.target.value);
            }}
          />
          {filterPhone.map((el) => (
            <div>{el.name}</div>
          ))}
        </Search_content>
      </Search_wrapper>
    </div>
  );
};
export default Search;
