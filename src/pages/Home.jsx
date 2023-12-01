import React from 'react'
import Header from "components/Header";
import Members from "components/Members";
import Input from "components/Input";
import CardList from "components/CardList";

function Home() {

  return (
    <div>
      <Header />
      <Members />
      <Input />
      <CardList />
    </div>
  );
}

export default Home;
