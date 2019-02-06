import Head from 'next/head';

import * as React from 'react';

import { css, styled } from 'react-emotion';

const STYLES_LAYOUT_LEFT = css`
  font-size: 64px;
  width: 320px;
  height: calc(100vh - 48px);
  background: red;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const STYLES_LAYOUT_RIGHT = css`
  min-width: 20%;
  width: 100%;
  background: blue;
  height: calc(100vh - 48px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const STYLES_NAVIGATION = css`
  height: 48px;
  background: green;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>next-express-emotion</title>
        </Head>
        <nav className={STYLES_NAVIGATION}>A</nav>
        <div className={STYLES_LAYOUT}>
          <span className={STYLES_LAYOUT_LEFT}>B</span>
          <span className={STYLES_LAYOUT_RIGHT}>C</span>
        </div>
      </React.Fragment>
    );
  }
}
