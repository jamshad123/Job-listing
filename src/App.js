import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import AddJob from './components/AddJob'
import EditJob from './components/EditJob'
import Jobs from './components/Jobs'
import ViewJob from './components/ViewJob'
import Model from './components/Model'

const App = () => {


  return (
    <>

      <Routes>
        <Route path='/' element={<Jobs />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/edit-job' element={<EditJob />} />
        <Route path='/view-job' element={<ViewJob />} />
      </Routes>


    </>
  )
}

export default App