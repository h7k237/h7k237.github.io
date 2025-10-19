import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from '@/pages/PostPage';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <BrowserRouter basename="/xyz-portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:slug" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
