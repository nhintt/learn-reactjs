import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      {/* <TodoFeature /> */}
      Header
      <p>
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Albums
        </NavLink>
      </p>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
