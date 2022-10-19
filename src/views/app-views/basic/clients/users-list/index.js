import React from "react";
import "./styles.css";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { API_URL } from "constants/ApiConstant";
import Loading from "components/shared-components/Loading";
import User from "../user";

const UsersList = () => {
  const [state, setState] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${API_URL}/users`).then((response) => {
      setState(response.data);
      setLoading(false);
    });
  }, []);

  if (loading === true) {
    return <Loading cover="page" />;
  }

  if (!state) return null;

  console.log(state);

  return (
    <div>
      <h1>UsersList page!</h1>
      <table
        style={{
          fontFamily: "arial, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tr>
          <th></th>
          <th>User</th>
          <th>E-mail</th>
          <th>Country</th>
          <th>Edit</th>
        </tr>
        {state.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>
              <button
                onClick={() => (
                  <Switch>
                    <Redirect
                      exact
                      from={`${APP_PREFIX_PATH}/basic/clients/user`}
                      to={`${APP_PREFIX_PATH}/basic/clients/user`}
                    />
                    <Route
                      path={`${APP_PREFIX_PATH}/basic/clients/user`}
                      component={User}
                    />
                  </Switch>
                )}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}

        <tr></tr>
      </table>
      <ul></ul>
    </div>
  );
};

export default UsersList;
