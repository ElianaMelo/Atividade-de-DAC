import React from "react";
import 'bootswatch/dist/vapor/bootstrap.css';

export default props => {

    const rows = props.lines.map( line => {
        return(
            <tr className="table-primary">
                <th scope="row">Primary</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>

        </table>
    )

}
