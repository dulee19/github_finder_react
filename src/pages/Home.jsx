import React from "react";
import UserResults from "../components/layout/users/UserResults";
import UserSearch from "../components/layout/users/UserSearch";

const Home = () => {
  return (
    <>
      {/* Search Component */}
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
