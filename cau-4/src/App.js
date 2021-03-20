import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import NotMatch from './components/notMatch';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionGetUserData } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(document.cookie);
    if(document.cookie) {
      let userId = document.cookie[document.cookie.length - 1];
      dispatch(actionGetUserData(userId));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route
            path='/' exact
            render={props => (
              <HomePage {...props}/>
            )}
          />
          <Route
            path='/login'
            render={props => (
              <LoginPage {...props}/>
            )}
          />
          <Route
            path='*'
            render={props => (
              <NotMatch {...props}/>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;