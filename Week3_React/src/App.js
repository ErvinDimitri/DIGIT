import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import UserList from './components/UserList';
import UsersListWithHook from './components/UsersListWithHook';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/users" exact component={UserList} />
      <Route path="/hook-fetch-users" component={UsersListWithHook} />
      <Route path="/create-user"  component={UserForm} />
      </Switch>    
    </BrowserRouter>
  )
}

export default App