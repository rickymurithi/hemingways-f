import Home from './Home'
import {Route, Switch} from 'react-router-dom'



function App() {
  return (
      <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      </>
  );
}

export default App;
