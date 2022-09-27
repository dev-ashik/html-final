import React from "react";
import Layout from "../../Layout/Layout";

const Heading = () => {
  return (
    <Layout>
      <div className="topicName">
        <h2>Heading</h2>
      </div>
      <section className="section">
        <div className="codeRunDiv">
          <h1>heading 1</h1>
          <h2>heading 2</h2>
          <h3>heading 3</h3>
          <h4>heading 4</h4>
          <h5>heading 5</h5>
          <h6>heading 6</h6>
        </div>
        {/* <button className="seeCodeButton">Code</button> */}
        <div className="codeDiv">
          
        </div>
      </section>
    </Layout>
  );
};

export default Heading;
