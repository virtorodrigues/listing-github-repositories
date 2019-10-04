import React from 'react'
import ItemRepository from '../itemRepository'

export default function ListRepository({ repository }) {
    return (
        <ul>
            {repository && repository.map((repo) => (
                <ItemRepository repository={repo} />
            ))}
        </ul>            
    )
}