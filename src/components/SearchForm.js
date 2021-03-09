import React from "react";

//Functional component that returns the the search form
function SearchForm(props) {
  return (
    <>
      <form>
        <div className="form-group">
          <input
            value={props.search}
            name="search"
            type="text"
            onChange={props.handleInputChange}
            className="form-control"
            placeholder="Search..."
            id="name"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;