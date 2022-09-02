import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const Main = styled.div`
  width: 100%;
  margin: auto;
`;

export const Capa = styled.div`
  .FOOTER {
    display: none;
  }
  margin: 0 auto;
  height: 100vh;
  ${Media.Tablet} {
    /* height: 50vh; */
  }
  .containerCapa {
    width: 90%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    ${Media.PhoneLarge} {
      height: 100vh;
      flex-direction: column-reverse;
      float: none;
      margin: auto;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }
    .tittle {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      img {
        display: none;
        ${Media.Tablet} {
          display: block;
        }
      }
      h1 {
        font-family: "Lilita One";
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        text-align: center;
        color: #312e2e;
        ${Media.Laptop} {
          font-size: 35px;
        }
        ${Media.Tablet} {
          font-size: 33px;
        }
        ${Media.PhoneLarge} {
          font-size: 30px;
        }
      }
    }
    .background {
      .tabletBackground {
        display: none;
        ${Media.Tablet} {
          display: block;
          height: 100vh;
          width: 100%;
        }
        ${Media.PhoneLarge} {
          display: none;
        }
      }
      .phoneBackground {
        display: none;
        ${Media.PhoneLarge} {
          display: block;
          height: auto;
          width: 70vw;
        }
      }
      .desktopBackground {
        height: 100vh;
        width: 100%;
        ${Media.Tablet} {
          display: none;
        }
      }
    }
  }
`;

export const Box = styled.div`
  position: relative;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .whitePart {
    width: 80%;
    height: 180px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    margin-bottom: 200px;
    position: absolute;
    top: -200px;
    ${Media.Tablet} {
      width: 90%;
      background-color: transparent;
      box-shadow: none;
      height: 0;
      position: relative;
      top: 0;
    }
  }
  .textArea {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }
  .tittleBox {
    margin: auto;
    p {
      margin-top: 30px;
      font-family: "Lilita One";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      text-align: center;
      color: #312e2e;
      ${Media.Laptop} {
        font-size: 35px;
      }
      ${Media.Tablet} {
        font-size: 33px;
      }
      ${Media.PhoneLarge} {
        font-size: 30px;
      }
    }
  }
  .options {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    span {
      display: none;
      ${Media.PhoneLarge} {
        display: block;
        width: 100%;
        height: 35vh;
        position: absolute;
        z-index: -1;
        top: 14vh;
        right: 8vh;
        transform: rotate(11deg);
        background: #8c2e2e;
      }
    }
    ${Media.Tablet} {
      width: 90%;
      flex-direction: column;
      gap: 30px;
      float: left;
      align-items: flex-start;
    }
    p {
      font-family: "lato";
      font-style: normal;
      font-size: 25px;
      text-align: center;
      color: #000000;
      ${Media.Tablet} {
        text-align: left;
      }

      ${Media.Laptop} {
        font-size: 20px;
      }
      ${Media.Tablet} {
        font-size: 17px;
      }
      ${Media.PhoneLarge} {
        font-size: 15px;
        color: #fff;
      }
    }
  }
  button {
    bottom: -50px;
    left: -76px;
    position: absolute;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 20px 50px;
    background: #107fb5;
    ${Media.Tablet} {
      display: block;
      margin: auto;
      margin-top: 50px;
      position: relative;
      bottom: auto;
      left: auto;
    }
  }
`;
