import { useState } from "react";

import { Header, Footer, TabOptions } from "../components/common";
import { Delivery, DiningOut, NightLife } from "../components/main";

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default Home;
