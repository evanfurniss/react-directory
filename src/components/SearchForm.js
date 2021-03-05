import React from "react";

function SearchForm(props) {
  return (
    <wrapper>
      <div>
        <h1>Directory</h1>
        <div>
          <p>---------------------------------</p>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <br /> 
                <input
                  value=""
                  name=""
                  type="text"
                  className=""
                  placeholder="Full Name"
                  id="name"
                />
              <br />
              <label htmlFor="search-options">Search Options</label>
              <br />
              <select 
                class="form-select" 
                aria-label="Default select example"
                name="search-options"
                id="search-options"
              >
                <option selected>none</option>
                <option value="1">Department</option>
                <option value="2">Email</option>
                <option value="3">Office Number</option>
              </select>
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