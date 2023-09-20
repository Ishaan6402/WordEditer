import React from 'react';

function Alert(props) {
    const capitalise = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="alert-container" style={{ height: "30px"  }}>
            {
                props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{padding:"3px" , margin:"0px 0px 3px",border:`1px solid ${props.mode==='light'?'black':'white'}`}} role='alert'>
                    <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert