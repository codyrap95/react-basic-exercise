import React from "react";
import axios from "axios";

export default function RandomUser() {
  const [fetchData, setFetchData] = React.useState([]);
  const fetchHandler = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      const users = response.data.results;
      setFetchData((prev) => {
        return prev !== [] ? [...prev, ...users] : users;
      });
    } catch (e) {
      setFetchData("Fetch Failed. Reason: " + e.toString());
    }
  };
  React.useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <div>
      <button onClick={fetchHandler}>Fetch Random User</button>
      <ul>
        {console.log(fetchData)}
        {fetchData.length === 0 || typeof fetchData !== "object"
          ? "Loading..."
          : fetchData.map((user) => (
              <li key={user.login.uuid}>
                <p>
                  <img src={user.picture.thumbnail} alt="user photo" />
                </p>
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
}
