import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Friend from './FriendCard';

import friends from './friends.json';

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard />
    <FriendCard />
    <FriendCard />
  </Wrapper>
);

export default App;
