import React, { Fragment, useState } from "react";
import useCustomFetch from "./UseCustomFetch";

function UseCustomHook() {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  function getFollowers(e) {
    if (e.key === "Enter") {
      setUrl("https://api.github.com/users/" + e.target.value);
    }
  }
  return (
    <Fragment>
      <h2>
        GitID:
        <input onKeyPress={getFollowers}></input>
        {loading && url && <div>Loading ....</div>}
        {!loading && data && data.rData && data.rData.followers && (
          <div>Followers: {data.rData.followers}</div>
        )}
        {error && <div>Error: {error}</div>}
      </h2>
    </Fragment>
  );
}

export default UseCustomHook;
