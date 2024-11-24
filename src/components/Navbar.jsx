import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-red-600 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold text-black">Fabric Recommendation</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Home</Link>
        <Link to="/predict">Predict</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
 