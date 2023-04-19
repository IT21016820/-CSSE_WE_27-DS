import React from "react";
import NavigationBar from "../components/Home/navbar";
import HomeBanner from "../components/Home/banner";
import Wrapper from "../components/Home/wrapper";
import HomeProduct from "../components/Home/productcard";
// import { Button } from "react-bootstrap";
// import HomeProduct from "./homeproduct";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <HomeBanner />
      <Wrapper />
      <hr />
      {/* <Link to={HomeProduct}>
        <Button variant="primary">View All</Button>
      </Link> */}
      <HomeProduct />
    </div>
  );
}