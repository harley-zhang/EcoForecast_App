import Navbar from "../scenes/Navbar";
import Landing from "../scenes/Landing";
import Info from "../scenes/Info";
import Credits from "../scenes/Credits";
import Footer from "../scenes/Footer";

function Home() {
  return (
    <div className="app bg-grey">
      <Navbar />
      <Landing />
      <Info />
      <Credits />
      <Footer />
    </div>
  );
}

export default Home;
