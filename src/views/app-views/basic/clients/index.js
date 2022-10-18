import React from "react";
import axios from "axios";
import { API_URL } from "constants/ApiConstant";

const Clients = () => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${API_URL}/users`).then((response) => {
      setState(response.data);
    });
  }, []);

  console.log(state);
  if (!state) return null;

  return (
    <div>
      <h1>Clients page!</h1>
      <ul>
        {state.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
