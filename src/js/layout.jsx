import React from "react";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/scrollToTop.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import Home from "./views/home/home.jsx";
import injectContext from "./store/appContext.jsx";
import Vehicle from "./views/vehicle/vehicle.jsx";
import Jedi from "./views/jedi/jedi.jsx";
import Planet from "./views/planet/planet.jsx";


const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/people/:theid">
              <Jedi />
            </Route>
            <Route exact path="/planets/:theid">
              <Planet />
            </Route>
            <Route exact path="/vehicles/:theid">
              <Vehicle />
            </Route>
            <Route>
              <h1 style="color:white;">Not found!</h1>
            </Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
