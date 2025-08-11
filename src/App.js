import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
      <section className={styles.appContainer}>
        <NavBar />
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
