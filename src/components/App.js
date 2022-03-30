import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>🚀 Welcome to Homepage!</h1>
      <div className="content">
        <Link to="/articles">
          <button className="btn">Article Page</button>
        </Link>
        <Link to="/help">
          <button className="btn">Help Page</button>
        </Link>
      </div>
    </>
  );
}

export default App;
