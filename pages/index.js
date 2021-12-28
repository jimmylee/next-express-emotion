import * as React from "react";
import * as Constants from "~/common/constants";

import Page from "~/components/Page";

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
        <Page title={title} description={description} url={url}>
          <nav css={STYLES_NAVIGATION}>Navigation</nav>
          <div css={STYLES_LAYOUT}>
            <span css={STYLES_LAYOUT_LEFT}>Left Sidebar</span>
            <span css={STYLES_LAYOUT_RIGHT}>Right Content</span>
          </div>
        </Page>
      </React.Fragment>
    );
  }
}
