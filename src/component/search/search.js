import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_API_URL, geo_options } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const handleOnchange = searchData => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputValue) => {
        return fetch(`${geo_API_URL}?minPoulation=1000000&namePrefix=${inputValue}`, geo_options)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <AsyncPaginate placeholder="search a city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnchange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;