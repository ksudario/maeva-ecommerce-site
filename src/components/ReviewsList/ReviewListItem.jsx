import React from 'react';

export default props => {
    return (
            <li style={{display:'flex', justifyContent: 'space-between, width:300px'}}>
                <span>{props.review}</span>
                <span>{props.reviewer}</span>

            </li>
    );
}