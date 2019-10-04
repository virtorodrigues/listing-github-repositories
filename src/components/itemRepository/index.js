import React from 'react'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

export default function ItemRepository({ repository }) {
    console.log(repository.id)
    return(
        <li key={ repository.id }>
            <img src={ repository.owner.avatar_url } alt={repository.owner.avatar_url} />
            <footer>
                <strong>{ repository.name }</strong>
                <p><a href={repository.svn_url}>Acessar</a></p>
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
    )
}