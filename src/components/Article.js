import { withRouter } from "react-router-dom";

const Article = (props) => {
  return (
    <>
      <h1>{props.match.params.slug}</h1>
    </>
  );
};

export default withRouter(Article);
