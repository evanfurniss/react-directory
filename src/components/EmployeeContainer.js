import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableRow from "./TableRow";
import API from "../utils/API";

// Creates 
class EmployeeDirectory extends Component {
    state = {
        result: [],
        display: [],
        search: "",
        sort: "ascending"
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
        let searchResults = this.state.result.filter(result => {
            return (result.name.first + result.name.last + result.email + result.cell).includes(searching)
        });
        if(this.state.sort == "ascending"){
            console.log("ascending");
            searchResults = searchResults.sort((a,b)=>{
                return(a.email.localeCompare(b.email));
            });
        } else {
            console.log("descending");
            searchResults = searchResults.sort((a,b)=> {
                return(b.email.localeCompare(a.email));
            });
        };
        this.setState({
            display: searchResults
        });
    };

    handleSort = () => {
        this.searchDirectory(this.state.search)
        if(this.state.sort == "ascending") {
            this.setState({
                sort: "descending"
            });
        } else {
            this.setState({
                sort: "ascending"
            });
        };
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
        this.searchDirectory(this.state.search);
    };

    render() {
        return(
        <>
            <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            <button onClick={this.handleSort} className="btn btn-primary">Sort by email</button>
            <TableRow display={this.state.display}/>
        </>
        )
    }
}

export default EmployeeDirectory;