import React from "react";
import axios from "axios";

export default function RandomUser() {
  const [fetchData, setFetchData] = React.useState("");
  const fetchHandler = async () => {
    try {
      setFetchData("Loading...");
      const response = await axios.get("https://randomuser.me/api");
      const user = response.data.results[0];
      setFetchData(JSON.stringify(user));
    } catch (e) {
      setFetchData("Fetch Failed. Reason: " + e.toString());
    }
  };

  return (
    <div>
      <button onClick={fetchHandler}>Fetch Random User</button>
      <ul>{fetchData}</ul>
    </div>
  );
}
