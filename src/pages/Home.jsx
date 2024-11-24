import { useState } from "react";
import FabricForm from "../components/FabricForm";
import Recommendations from "../components/Recommendations";

const Home = () => {
  const [recommendations, setRecommendations] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fabric Recommendation System</h1>
      <FabricForm setRecommendations={setRecommendations} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default Home;
