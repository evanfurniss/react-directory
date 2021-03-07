import React from "react";

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
            className=""
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