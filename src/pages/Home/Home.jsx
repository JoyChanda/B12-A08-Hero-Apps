import React from "react";
import Banner from "../../components/Banner/Banner";
import StatsBanner from "../../components/Banner/StatsBanner";
import Apps from "../../components/Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <StatsBanner></StatsBanner>
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
