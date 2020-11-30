import * as React from "react";
import * as Constants from "~/common/constants";

import Head from "next/head";

import { css } from "@emotion/react";

const SNIPPET_SCROLLBAR_HIDE = `
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_LEFT = css`
  height: calc(100vh - 64px);
  width: 320px;
  background: red;
  font-size: 2rem;
  overflow-y: scroll;

  ${SNIPPET_SCROLLBAR_HIDE}
`;

const STYLES_LAYOUT_RIGHT = css`
  height: calc(100vh - 64px);
  min-width: 20%;
  width: 100%;
  background: blue;
  font-size: 2rem;
  overflow-y: scroll;

  ${SNIPPET_SCROLLBAR_HIDE}
`;

const STYLES_NAVIGATION = css`
  height: 64px;
  background: green;
  font-size: 2rem;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default class IndexPage extends React.Component {
  render() {
    const title = "next-express-emotion";
    const description =
      "minimal example for a full client server web application with next, express, and emotion.";
    const url = "https://github.com/jimmylee/next-express-emotion";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <nav css={STYLES_NAVIGATION}>Navigation</nav>
        <div css={STYLES_LAYOUT}>
          <span css={STYLES_LAYOUT_LEFT}>Left Sidebar</span>
          <span css={STYLES_LAYOUT_RIGHT}>Right Content</span>
        </div>
      </React.Fragment>
    );
  }
}
