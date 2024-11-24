const Recommendations = ({ recommendations }) => (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Recommended Fabrics:</h2>
      {recommendations ? (
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index} className="p-2 bg-gray-200 my-2 rounded">{rec}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
  
  export default Recommendations;
  