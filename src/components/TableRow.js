import React from "react";
import Table from "react-bootstrap/Table";

//Named it to only be the Table Row, ended up making it the whole table
//Added react-bootstrap to add Table component
function TableRow({ display }){
    return(
    <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Cell Phone</th>
                </tr>
            </thead>
            <tbody>
                {display.map(result => {
                    return(
                        <>
                            <tr>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.cell}</td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </Table>
    </>
    )
};

export default TableRow;