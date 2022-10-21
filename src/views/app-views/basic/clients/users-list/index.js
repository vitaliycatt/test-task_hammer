import React from "react";
import "./styles.css";
import axios from "axios";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { API_URL } from "constants/ApiConstant";
import { Link } from "react-router-dom";
import Loading from "components/shared-components/Loading";

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
              <Link to={`${APP_PREFIX_PATH}/basic/clients/user/${user.id}`}>
                Edit
              </Link>
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
