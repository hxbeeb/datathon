import { useState } from "react";
import axios from "../api/axios";

const FabricForm = ({ setRecommendations }) => {
  const [inputs, setInputs] = useState({
    fabricType: "",
    durability: "",
    texture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/predict", inputs);
      setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-4">Predict Your Fabric</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="font-medium">Fabric Type:</span>
          <select
            name="fabricType"
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-white text-black rounded border focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select</option>
            <option value="Natural Fiber">Natural Fiber</option>
            <option value="Synthetic Fiber">Synthetic Fiber</option>
          </select>
        </label>
        <label className="block">
          <span className="font-medium">Durability:</span>
          <select
            name="durability"
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-white text-black rounded border focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label className="block">
          <span className="font-medium">Texture:</span>
          <select
            name="texture"
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-white text-black rounded border focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select</option>
            <option value="Smooth">Smooth</option>
            <option value="Rough">Rough</option>
            <option value="Soft">Soft</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-gray-100 transition-colors"
        >
          Predict Fabric
        </button>
      </form>
    </div>
  );
};

export default FabricForm;
