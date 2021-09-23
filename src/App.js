import "./App.css";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import SubscriptionPage from "./pages/Subscription";
import WelcomePage from "./pages/Welcome";
import DiscordHelpPage from "./pages/DiscordHelp";
import MainNavigation from "./components/layout/MainNavigation";
import GovernancePage from "./pages/Governance";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/inscriptions">
          <SubscriptionPage />
        </Route>
        <Route path="/discord">
          <DiscordHelpPage />
        </Route>
        <Route path="/gouvernance">
          <GovernancePage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
