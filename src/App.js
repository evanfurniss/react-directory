import React from "react";
import EmployeeDirectory from "./components/EmployeeContainer";
import Header from "./components/Header";

//Landing page for all main html components (header/body)
function App() {

    return (
        <>
            <Header />
            <EmployeeDirectory />
        </>
    );
};

export default App;