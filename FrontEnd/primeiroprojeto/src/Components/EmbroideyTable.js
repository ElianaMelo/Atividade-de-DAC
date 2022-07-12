/* eslint-disable import/no-anonymous-default-export */
import React from "react";


export default props => {
    
    const rows = props.embroideys.map(embroidey => {
        return (
            <tr className="table-primary" key={embroidey.idBordado}>
                <th scope="row">{embroidey.idBordado}</th>
                <td>{embroidey.nome}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" 
                        onClick={e => props.edit(embroidey.idBordado)}>edit</button>
                        <button type="button" className="btn btn-secondary"
                        onClick={e => props.delete(embroidey.idBordado)}>delete</button>
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
                    <th scope="col">Nome do bordado</th>
                </tr>
            </thead>

            <tbody>
                {rows()}
            </tbody>

        </table>
    )

}
