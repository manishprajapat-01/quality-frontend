import React, { useState } from 'react'

function Filterform({ filter, setFilter }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="" className="form-label"> Search In table</label>
                <input type="search" value={filter} className="form-control" id="" onChange={(e) => setFilter(e.target.value)} />
            </div>
        </>
    )
}

export default Filterform