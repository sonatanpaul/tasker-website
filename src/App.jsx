import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import TaskBoard from "./components/task-board/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </>
  );
}

export default App;
