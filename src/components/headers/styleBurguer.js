import styled, { css } from "styled-components";

const Media = {
  Nav: "@media(max-width:1000px)",
};

export const Header = styled.header`
  display: none;
  ${Media.Nav} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: auto;
    background: white;

    nav {
      position: fixed;
      z-index: 1;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      display: flex;
      align-content: center;
      align-items: center;
      background: linear-gradient(
        146.69deg,
        rgba(217, 217, 217, 0.4) 1.12%,
        rgba(217, 217, 217, 0) 100%
      );
      box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(20px);
      .options {
        .closeIcon {
          position: absolute;
          top: -17%;
          right: -12%;
        }
        width: 100%;
        margin: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;

        a {
          font-family: "Lato";
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
          color: #312e2e;
        }
        transform: scale(0.7);
        transition: 0.7s;
      }
      opacity: 0;
      display: none;
      pointer-events: none;
      transition: 0.5s;
      ${({ isVisible }) =>
        isVisible &&
        css`
          display: block;
          opacity: 1;
          pointer-events: auto;

          transform: translateY(0px);
        `}
    }

    .containter {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      z-index: 99;
      margin: auto;
      width: 90%;
      z-index: 99;
      margin: auto;
      display: flex;
      top: 0;
      position: fixed;
      align-items: center;
      justify-content: space-between;
      /* margin-top: 40px; */
      padding: 15px 10%;
      background: white;
    }
    img {
      width: 190px;
      z-index: 100;
    }

    .icons {
      /* z-index: 100; */
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
`;
