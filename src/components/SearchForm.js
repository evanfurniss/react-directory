import React from "react";

function SearchForm() {
  return (
    <wrapper>
      <div>
        <h2>Directory Search</h2>
        <div>

        </div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <br />
              <input
                onChange=""
                value=""
                name=""
                type=""
                className=""
                placeholder=""
                id="name"
              />
              <br />
              <label htmlFor="search-options">Search Options</label>
              <br />
              <input
                onChange=""
                value=""
                name=""
                type=""
                className=""
                placeholder=""
                id="search-options"
              />
              <br />
              <button onClick='{}' className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </wrapper>
  );
};

export default SearchForm;