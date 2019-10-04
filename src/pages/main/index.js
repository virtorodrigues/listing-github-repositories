import React, { useState, useEffect } from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import { apiRepos } from '../../service/api'
import loadingImg from '../../assets/spinner.gif'

import ListRepository from '../../components/listRepository'

export default function Main({ match, history }) {
    
    const [ repos, setRepos ] = useState([])
    const [ reposOrigin, setReposOrigin ] = useState([])
    const [ search, setSearch ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function loadData(){
            const response = await apiRepos.get(match.params.id)
            setReposOrigin(response.data.items)
            setRepos(response.data.items)
            setLoading(false)
        }
        loadData()
    }, [match.params.id])
    
    useEffect(() => {
        async function loadRepo(){
            const result = reposOrigin.length>0 
            && reposOrigin.filter((repo) => repo.name.toUpperCase().includes(search.toUpperCase()) )
            setRepos(result)
        }
        loadRepo()
    }, [search, reposOrigin])
    
    function goToSearch(e) {
        e.preventDefault()
        history.push(`/`)
    }

   
    return (
        <div className='main-container'>
            { loading && 
                <img src={loadingImg} alt='loading' /> || 
                <>
               
                    <img src={logo} alt='logo' />
                    <div className='detail-user'>
                        <h1>Voce pesquisou por: { match.params.id } </h1>
                        <div>
                            <button onClick={goToSearch} type="submit">Nova busca</button>
                            <input
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Filtrar repositório"/>
                        </div>
                    </div>
                    <ListRepository repository={repos} />
                    
                </>
            }
        </div>
    )
}