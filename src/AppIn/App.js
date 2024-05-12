/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import EdTechPage from "pages/EdTechPage";
import EdTechDetailPage from "pages/EdTechDetailPage";
import TeamPage from "pages/TeamPage";
import DiscussEdTechPage from "pages/DiscussEdTechPage";
import NotFoundPage from "pages/NotFoundPage";

import "assets/css/styles.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/EdTech" component={EdTechPage} />
      <Route exact path="/EdTech/:id" component={EdTechDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/discuss-EdTech" component={DiscussEdTechPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
