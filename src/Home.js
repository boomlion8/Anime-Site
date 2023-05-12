import "./App.css";
import Bottombar from "./components/BottomBar/Bottombar";
import Contentpage from "./components/ContentPage/Contentpage";
//import Header from "./components/header/Header";

import Middlebar from "./components/Middlebar/Middlebar";
import Header from "./components/header/Header";

function Home() {
  return (
    <div>
      <div className="myStyle">
        <Header />
        <Middlebar />
      </div>

      <div>
        <Contentpage />
      </div>

      <div>
        <Bottombar />
      </div>
    </div>
  );
}

export default Home;
