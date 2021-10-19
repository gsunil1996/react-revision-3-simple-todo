import React from 'react'

function Completed({ id, title, completedTask }) {
    return (
        <>
            <h1>Completed Tasks</h1>
            {completedTask.map(e => {
                return <h2>{e.title}</h2>
            })}
        </>
    )
}

export default Completed;
