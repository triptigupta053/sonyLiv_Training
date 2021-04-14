import React , { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import axios from "axios";
import config from './config';
import Communication from "./communication";


export function ApiCall () {

    let [responseData, setResponseData] = useState();
    
    useEffect(() => {
        Communication.getMethod(`${config.endPoints.todos}`)
            ?.then((response) => {
                setResponseData(response.data);
                alert('Data fetched successfully');
            })
            .catch((error) => {
                console.log(error);
                <Redirect to='/error'/>
            })
    }, [])    

    return(
        <div>
            <Link to="/about">About</Link>
            <h1>Hello ! Let's learn Api consumption with axios</h1> 
            {responseData && responseData.map(todo => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </div>
    );

}

export default ApiCall