import React, { useState, useEffect } from 'react'
import './Styles.css'
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import { apiRepos } from '../../service/api'
import loadingImg from '../../assets/spinner.gif'

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
                    <ul>
                        {repos && repos.map((repo) => (
                            <li key={ repo.id }>
                                <img src={ repo.owner.avatar_url } alt={repo.owner.avatar_url} />
                                <footer>
                                    <strong>{ repo.name }</strong>
                                    <p><a href={repo.svn_url}>Acessar</a></p>
                                </footer>
                                <div className="buttons">
                                    <button type="button">
                                        <img src={like} alt="like" />
                                    </button>
                                    <button type="button">
                                        <img src={dislike} alt="dislike" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>            
                </>
            }
        </div>
    )
}