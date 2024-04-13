import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import UserList from './components/UserList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/users" exact component={UserList} />
      </Switch>    
    </BrowserRouter>
  )
}

export default App