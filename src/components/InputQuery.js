import React from 'react'

function InputQuery() {
    return (
        <input placeholder={'Enter your query here..'} value={props.value} onChange={props.onChange} />
    
    )
}

export default InputQuery
