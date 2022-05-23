import React from 'react';
// import './ViewUser.css';

import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Card from './Card';
import FormGroup from './FormGroup';
import LineTable from './LineTable';

class ViewLines extends React.Component{

    state = {
        codigoCor:'',
        lines : []
    }

    find = () =>{
        var params = '?';

        if(this.state.codigoCor != ''){
            if(params != '?'){
                params = `${params}&`;
            }
            params = `${params}id=${this.state.codigoCor}`;

        }

        axios.get(`http://localhost:8080/api/linha/${params}`)
        .then(response =>{
            const lines = response.data;
            this.setState({lines});
            console.log(lines);
        })
    }

    delete = (lineId) =>{
        axios.delete(`http://localhost:8080/api/linha/${lineId}`
        ).then(response =>
            {
                this.find();
            }
        ).catch(error =>
            {
                console.log(error.response);
            }
        )

    }

    edit = () => {
        this.props.history.push('/UpdateLine');
    }

}