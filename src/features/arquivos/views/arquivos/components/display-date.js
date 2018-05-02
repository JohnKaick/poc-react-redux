import React from 'react'

export default ({ value }) => {
    if (!value) return null;
    var current = new Date(value)
    var display = current.toLocaleDateString()
    return (
        <span>{display}</span>
    )
}