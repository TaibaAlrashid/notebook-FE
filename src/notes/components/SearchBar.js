import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {


    return (
        <SearchBarStyled placeholder="Search for note" onChange={(event) =>
            props.setQuery(event.target.value)} />
    )
}

export default SearchBar;

