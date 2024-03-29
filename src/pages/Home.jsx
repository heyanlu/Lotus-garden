import Footer from "../components/Footer";
import Cards from "../components/Cards";
import './Home.css';

function Home({ setPage, onThemeToggle, isDarkMode }) {
  return (
    <>
      <Cards setPage={setPage} onThemeToggle={onThemeToggle} isDarkMode={isDarkMode} />
      <Footer />
    </>
  );
}

export default Home;
