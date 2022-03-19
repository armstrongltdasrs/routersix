import {Route, Routes} from 'react-router-dom'

// import ThemeContext from './context/ThemeContext'

import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

function App() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/saved-videos" element={<SavedVideos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default App
