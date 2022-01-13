import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ChartGenerator from './ChartGenerator.js'
import Error from './Error.js';
import ChartListing from './ChartListing.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ChartGenerator />} />
                <Route path='/chartlisting' element={<ChartListing />}>
                </Route>
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;