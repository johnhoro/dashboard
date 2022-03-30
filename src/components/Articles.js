import React from "react";
import data from "./data.json";
import { Link, withRouter } from "react-router-dom";

class Articles extends React.Component {
  render() {
    return (
      <>
        <h1>Article</h1>
        <div className="articles">
          <ul>
            {data.map((d) => (
              <li key={d.slug}>
                <Link to={`/articles/${d.slug}`}>{d.title}</Link>
                <p>Author: {d.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(Articles);
