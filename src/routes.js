import React from 'react'

import { BrowserRouter, Route  } from 'react-router-dom'

import Search from './pages/search'
import Main from './pages/main'

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Search} />
            <Route path="/main/:id" component={Main} />
        </BrowserRouter>
    )
}