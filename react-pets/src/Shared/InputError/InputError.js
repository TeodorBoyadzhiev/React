import React from 'react'
import './InputError.css'

export default function InputError({ children }) {

    if (!children) {
        return null;
    }
    return (
        <div className="input-error">{children}</div>
    )
}
