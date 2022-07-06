/* eslint-disable import/no-anonymous-default-export */
import React from "react";


export default props => {
    
    const rows = props.lines.map(line => {
        return (
            <tr className="table-primary" key={line.idLinha}>
                <th scope="row">{line.idLinha}</th>
                <td>{line.nomeCor}</td>
                <td>{line.codigoCor}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" 
                        onClick={e => props.edit(line.idLinha)}>edit</button>
                        <button type="button" className="btn btn-secondary"
                        onClick={e => props.delete(line.idLinha)}>delete</button>
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
