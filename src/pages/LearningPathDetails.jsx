import { useParams } from "react-router-dom";

const fabricDetails = {
  Cotton: {
    clothes: ["T-Shirts", "Dresses", "Casual Shirts"],
    combinations: ["Cotton-Polyester", "Cotton-Silk"],
  },
  Silk: {
    clothes: ["Evening Gowns", "Scarves", "Ties"],
    combinations: ["Silk-Wool", "Silk-Cotton"],
  },
  Wool: {
    clothes: ["Sweaters", "Coats", "Suits"],
    combinations: ["Wool-Cashmere", "Wool-Polyester"],
  },
};

const LearningPathDetails = () => {
  const { fabricName } = useParams();
  const details = fabricDetails[fabricName] || { clothes: [], combinations: [] };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        {fabricName} Learning Path
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Clothes Section */}
        <div className="p-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-white mb-4">
            Clothes Made with {fabricName}:
          </h2>
          <ul className="list-disc ml-6 text-white">
            {details.clothes.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Combinations Section */}
        <div className="p-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-white mb-4">
            Combinations with Other Fabrics:
          </h2>
          <ul className="list-disc ml-6 text-white">
            {details.combinations.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetails;
