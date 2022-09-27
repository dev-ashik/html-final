import React from "react";
import Layout from "../../Layout/Layout";

const Preformate = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Preformate</h2>
      </div>
      <section className="section">
        <pre>
          hello <br />
          &nbsp; &nbsp;world.
        </pre>

        <br />
        {/* <a
          href="https://github.com/dev-ashik/grid-card"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          code
        </a> */}
      </section>
    </Layout>
  );
};

export default Preformate;
