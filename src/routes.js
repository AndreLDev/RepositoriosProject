import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';


export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Main} />
                <Route exact path='/repositorio/:nomeRepositorio' Component={Repositorio} />
            </Routes>
            
        </BrowserRouter>
    );
};