import React from "react";
import { Link } from 'react-router-dom';

export function About (){

    return(
        <div>
              <p>This is About Page</p>
              <Link to="/">Back</Link>
        </div>
      
    );

}

export default About