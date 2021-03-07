import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class EmployeeDirectory extends Component {
    state = {
        result: [],
        display: [],
        search: ""
    };

    componentDidMount() {
        API.search()
            .then(({ data }) => {
                // console.log(data);
                this.setState({ result: data.results, display: data.results });
            })
            .catch(err => console.log(err))
    }

    searchDirectory = query => {
        console.log(this.state.search);
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.searchDirectory();
    };

    render() {
        return(
        <>
            <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            {this.state.display.map(result => {
                return(
                    <p>{result.name.first}</p>
                )
            })}
        </>
        )
    }
}

export default EmployeeDirectory;