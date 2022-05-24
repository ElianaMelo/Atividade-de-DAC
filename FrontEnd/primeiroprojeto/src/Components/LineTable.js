import React from "react";
import 'bootswatch/dist/vapor/bootstrap.css';

export default props => {

    const rows = props.lines.map(line => {
        return (
            <tr className="table-primary" key={line.id}>
                <th scope="row">{line.id}</th>
                <td>{line.nome}</td>
                <td>{line.codigoCor}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" 
                        onClick={e => props.edit(line.id)}>edit</button>
                        <button type="button" className="btn btn-secondary"
                        onClick={e => props.delete(line.id)}>delete</button>
                    </div>
                </td>

            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome da Cor</th>
                    <th scope="col">Codigo da Cor</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>

        </table>
    )

}
