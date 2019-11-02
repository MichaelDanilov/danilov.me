import { createGlobalStyle } from 'styled-components';

import styles from '../../constants/styles';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${styles.backgroundColor};
    font-size: ${styles.fontSize};

    @media (prefers-color-scheme: dark) {
      background-color: ${styles.backgroundColorDark};
    }
  }

  body {
    color: ${styles.color};
    font-size: 1rem;
    font-family: ${styles.fontFamily};
    line-height: ${styles.lineHeight};

    @media (prefers-color-scheme: dark) {
      color: ${styles.colorDark};
    }
  }

  html,
  body {
    margin: 0;
    min-height: 320px;
    overflow-x: hidden;
    padding: 0;
  }

  a {
    color: ${styles.linkColor};
    text-decoration: none;
    transition: color 200ms ease-out;

    @media (prefers-color-scheme: dark) {
      color: ${styles.linkColorDark};
    }

    &:hover {
      color: ${styles.linkHoverColor};

      @media (prefers-color-scheme: dark) {
        color: ${styles.linkHoverColorDark};
      }
    }
  }
`;

export default GlobalStyle;
