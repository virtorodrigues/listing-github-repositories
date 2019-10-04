import React, { useState } from 'react'

import logo from '../../assets/logo.svg'

import './styles.css'

export default function Search({ history }) {
    
    const [username, setUsername] = useState('')

    async function handleInput(e) {
        e.preventDefault()
        history.push(`/main/${username}`)
    }
    
    return (
        <div className="search-container">
            <form onSubmit={handleInput}>
                <img src={logo} alt="logo" />
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Digíte um repositório"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}