import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableRow from "./TableRow";
import API from "../utils/API";

// Creates 
class EmployeeDirectory extends Component {
    state = {
        result: [],
        display: [],
        search: ""
    };

    componentDidMount() {
        API.search()
            .then(({ data }) => {
                this.setState({ result: data.results, display: data.results });
            })
            .catch(err => console.log(err))
    }

    searchDirectory = (query) => {
        const searching = query.toLowerCase().trim();
        const searchResults = [];
        this.state.display.filter(({ display }) => {
            if(display.name.first === searching || display.name.last === searching || display.email === searching || display.cell === searching){
                searchResults.push(display);
            };
            return searchResults;
        });
        return(searchResults);
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        console.log();
        this.searchDirectory(e.target.value);
    };

    render() {
        return(
        <>
            <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            <TableRow display={this.state.display}/>
        </>
        )
    }
}

export default EmployeeDirectory;