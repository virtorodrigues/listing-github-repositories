import React, { useState } from 'react'

import logo from '../../assets/logo.svg'

import './Styles.css'

export default function Login({ history }) {
    
    const [username, setUsername] = useState('')

    async function handleInput(e) {
        e.preventDefault()

        history.push(`/main/${username}`)
    }
    
    return (
        <div className="login-container">
            <form onSubmit={handleInput}>
                <img src={logo} alt="logo" />
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Digite seu nome do GIT"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}