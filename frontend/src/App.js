import './App.css';
import Header from './components/Header/Header';
import { LandingPage } from './pages/landing-page/LandingPage';
function App() {
  return (
    <div className="App">
      <Header />
      Hello World
      <LandingPage />
    </div>
  );
}

export default App;
