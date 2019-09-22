import React from 'react'

import { BrowserRouter, Route  } from 'react-router-dom'

import Search from './pages/search/Search'
import Main from './pages/main/Main'

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Search} />
            <Route path="/main/:id" component={Main} />
        </BrowserRouter>
    )
}