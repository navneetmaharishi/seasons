import React from 'react'

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.msg}
                {/* Using or Operator we can set default prop value but not a good approach */}
                {/* {props.msg || 'Loading...'} */}
            </div>
        </div>
    );
};

Loader.defaultProps = {
    msg: 'Loading...'
}

export default Loader;