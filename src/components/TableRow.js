import React from "react";
import Table from "react-bootstrap/Table";

function TableRow({ display }){
    console.log(display);
    return(
    <>
        <Table striped bordered hover>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Cell Phone</th>
            </tr>
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
        </Table>
    </>
    )
};

export default TableRow;