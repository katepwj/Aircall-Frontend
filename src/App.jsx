import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header.jsx';
import { BrowserRouter } from "react-router-dom";
 import Footer from './components/Footer/Footer.js';
import HeaderTabs from './components/HeaderTabs/HeaderTabs.js';
import Activity from './pages/Activity/Activity'
import Detail from './pages/Detail/Detail'
import Archived from './pages/Archived/Archived'


const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className="container-view">
        <HeaderTabs />
           <Switch>
          <Route exact path="/" component={Activity} />
          <Route path="/activity" component={Activity} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/archived" component={Archived} />
        </Switch>
        <Footer />
      </div>

    </div>
  );
};


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('app'));

export default App;
