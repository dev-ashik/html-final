import React from "react";
import Layout from "../../Layout/Layout";

const TextStyles = () => {
  return (
    <Layout>
      <div className="topicName">
        <h2>Text Styles</h2>
      </div>
      <section className="section">
        <h1 className="section_title">block tag</h1>
        <div className="codeRunDiv">
          <em>Empharsize</em>
          <br />
          <strong>strong</strong>
          <br />
          <dfn>define a term</dfn>
          <br />
          <samp>sample</samp>
          <br />
          <var>Vareable</var>
          <br />
        </div>
        <div className="codeDiv"></div>
      </section>

      <section className="section">
        <h1 className="section_title">inline tag</h1>
        <div className="codeRunDiv">
          <p>
            <b>Bold</b>
          </p>
          <p>
            <i>Italic</i>
          </p>
          <p>
            <u>Underline</u>
          </p>
          <p>
            This is a <sub>subscript text</sub>
          </p>
          <p>
            This is a <sup>supeerscript text</sup>
          </p>
          <p>
            This is <small>small text</small>
          </p>
          <p>
            <s>Strikeout</s>
          </p>
          <p>
            <del>Delite</del>
          </p>
        </div>
        <div className="codeDiv"></div>
      </section>

      <section className="section">
        <h1 className="section_title">paragraph, Ancor, Mark, span tag</h1>
        <div className="codeRunDiv">
          <p>
            hello every one i am <a href="">lerning HTML</a> from online corse.
            becouse of I want to be a web developer. At first I will learn
            HTML-5 then also CSS-3. Then i will start react for my Professional
            life.
          </p>
          <br />

          <p>
            hello every one i am{" "}
            <mark >
              lerning HTML
            </mark>{" "}
            from online corse. becouse of I want to be a web developer. At first
            I will learn HTML-5 then also CSS-3. Then i will start react for my
            Professional life.
          </p>
          <br />

          <p>
            hello every one i am <span>lerning HTML</span>{" "}
            from online corse. becouse of I want to be a web developer. At first
            I will learn HTML-5 then also CSS-3. Then i will start react for my
            Professional life.
          </p>
          <br />
        </div>
        <div className="codeDiv"></div>
      </section>

      <section className="section">
        <h1 className="section_title">quortation</h1>
        <div className="codeRunDiv">
          <p>hello world. &nbsp;I am learning <q>html-5</q>.</p>
          <p>quotation test <q>quotation</q></p>
        </div>
        <div className="codeDiv"></div>
      </section>
    </Layout>
  );
};

export default TextStyles;
