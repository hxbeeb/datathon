import { Link } from "react-router-dom";

const LearningPathCard = ({ fabric, progress }) => (
  <div className="p-4 bg-gradient-to-br from-gray-100 via-white to-gray-50 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-blue-700 mb-2">{fabric.name}</h3>
    <p className="text-gray-700">Type: {fabric.type}</p>
    <p className="text-gray-700">Durability: {fabric.durability}</p>

    {/* Progress Bar */}
    <div className="mt-4">
      <div className="h-2 w-full bg-gray-200 rounded">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        {progress}% completed
      </p>
    </div>

    <Link
      to={`/learning-path/${fabric.name}`}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block"
    >
      Explore {fabric.name}
    </Link>
  </div>
);

export default LearningPathCard;
