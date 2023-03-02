import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import pkg from "./data/data.json";
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={pkg.banner.start} />
      <Offers offer={pkg.offer} />
      <Heading text="STAR PRODUCTS"/> 
      <StarProduct starProduct={pkg.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      
      
      {/* <Routes>
        <Route exact path="/music"  element = {<HotAccessories music={pkg.HotAccessories.music} musicCover={pkg.HotAccessoriesCover.musicCover}  />}/>
        <Route exact path="/smartDevice"  element = {<HotAccessories smartDevice={pkg.HotAccessories.smartDevice} smartDeviceCover={pkg.HotAccessoriesCover.smartDeviceCover}  />}/>
        <Route exact path="/home"  element = {<HotAccessories home={pkg.HotAccessories.home} homeCover={pkg.HotAccessoriesCover.homeCover}  />}/>
        <Route exact path="/lifestyle"  element = {<HotAccessories lifeStyle={pkg.HotAccessories.lifeStyle} lifeStyleCover={pkg.HotAccessoriesCover.lifeStyleCover}  />}/>
        <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories={pkg.HotAccessories.mobileAccessories} mobileAccessoriesCover={pkg.HotAccessoriesCover.mobileAccessoriesCover}  />}/>
      </Routes>     */}
      

      <Heading text="Product Reviews" />
      <ProductReviews productReviews={pkg.productReviews}/>

      <Heading text="VIDEOS" />
      <Videos videos={pkg.videos} />

      <Heading  text="IN THE PRESS"/>
      <Banner  banner={pkg.banner}/>

      <Footer footer={pkg.footer} />
    </Router>
  );
}

export default App;
 