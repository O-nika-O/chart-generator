import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import List from './List.js';
import Error from './Error.js'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/chartlisting' element={<List />} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;