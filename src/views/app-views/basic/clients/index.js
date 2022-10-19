import { Redirect, Route, Switch } from "react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import UsersList from "./users-list";
import User from "./user";

const Clients = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${APP_PREFIX_PATH}/basic/clients`}
        to={`${APP_PREFIX_PATH}/basic/clients/users-list`}
      />
      <Route
        path={`${APP_PREFIX_PATH}/basic/clients/users-list`}
        component={UsersList}
      />
      <Route path={`${APP_PREFIX_PATH}/basic/clients/user`} component={User} />
    </Switch>
  );
};

export default Clients;
