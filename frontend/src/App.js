import './App.css';
import Header from './components/Header/Header';
import { LandingPage } from './pages/landing-page/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { MyNotes } from './pages/my-notes/MyNotes';
function App() { 
  return (
    <BrowserRouter>
      <Header />
      Hello World
      <main>
        <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/my-notes" element={<MyNotes/>}/>
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
