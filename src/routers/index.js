import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
// import PublicRoute from "routers/PublicRoute";
import RecursionRoute from 'routers/RecursionRoute';

const RouterWrapper = () => (
  <Router>
    <RecursionRoute routes={routes} />
  </Router>
);

export default RouterWrapper;
