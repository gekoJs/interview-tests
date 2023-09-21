import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

import style from "./App.module.css";
import Home from "./layouts/Home/Home";
const App = () => {
  return (
    <div className={style.container}>
      <Nav />
      <Home/>
      <Footer />
    </div>
  );
};

export default App;
