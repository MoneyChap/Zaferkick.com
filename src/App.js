import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ComingSoon from './components/ComingSoon/ComingSoon';


function App() {
  return (
    <Router>
      <section className={styles.appContainer}>
        <Routes>
          <Route path="home" element={<NavBar />} />
          <Route path="home" element={<HomePage />} />
          <Route path="" element={<ComingSoon />} />
          <Route path="home" element={<Footer />} />
        </Routes>

      </section>
    </Router>
  );
}

export default App;
