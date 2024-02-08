import "./home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
}
