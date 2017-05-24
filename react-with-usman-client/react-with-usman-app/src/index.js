import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './components/main';
import NewStudent from './NewStudent'

ReactDOM.render(

  <BrowserRouter>
    <div>
      <Main />
      <Switch>
        <Route exact path='/students' component={App} />
        <Route exact path="/students/new" component={NewStudent} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
