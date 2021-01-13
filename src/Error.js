import React from 'react';
import './Error.css'

const Error = props => {
    return (
        <div className="error-warper">
            <h1>{props.msg}</h1>
        </div>
    );
}

Error.defaultProps = {
    msg: 'Something went wrong...!'
}

export default Error;