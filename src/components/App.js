import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Feedback from './Feedback';
import Book from './Book';
import Subscribe from './Subscribe';
import Offers from './Offers';


function App() {
  return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/feedback">
          <Feedback/>
        </Route>
        <Route exact path="/book">
          <Book/>
        </Route>
        <Route exact path="/contact">
          <Subscribe/>
        </Route>
        <Route exact path="/offers">
          <Offers/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
      </>
  );
}

export default App;