import React, { Fragment, useState, useEffect } from "react";

const initProfile = {
  followers: null,
  publicRepos: null,
};

function FetchData() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/melliottgithub");
      const json = await response.json();
      
      setProfile({
          followers: json.followers,
          publicRepos:json.public_repos
      })
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
          <h2>Fetch Data</h2>
          <h3>{`followers: ${profile.followers} --- Repos: ${profile.publicRepos}`}</h3>
    </Fragment>
  );
}

export default FetchData;
