import React from 'react';

import { Route, Routes } from 'react-router-dom';

// Importing routes
import Home from './pages/Home';
import Createbook from './pages/Createbook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

function App() {
  return (
    
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/book/create' element={<Createbook />} />
      <Route path='/book/details/:id' element={<ShowBook />} />
      <Route path='/book/edit/:id' element={<EditBook />} />
      <Route path='/book/delete/:id' element={<DeleteBook />} />

    </Routes>

  )
}

export default App