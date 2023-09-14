import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container" style={{'justifyContent':'center','alignItems':'center'}}>
      <Link to="/Selfregister" className="btn btn-primary">SelfRegister</Link>{" "}
      <Link to="/register" className="btn btn-primary">Register</Link>{" "}
      </div>
    </>
  );
};
export default Home;
