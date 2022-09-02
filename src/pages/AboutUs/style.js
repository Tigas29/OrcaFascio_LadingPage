import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};

export const FrontCover = styled.div`
  width: 100%;
  .container {
    width: 90%;
    height: 100vh;

    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Media.Tablet} {
      margin-top: 10vh;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
    }
    .backgroundImage {
      width: 49%;
      max-width: 80vw;
      height: 100%;
      margin-left: -10%;
      ${Media.Tablet} {
        flex-direction: column;
        justify-content: center;
        margin-left: 0;
        height: auto;
        width: 50%;
      }
      ${Media.PhoneLarge} {
        width: 90%;
      }
      img {
        width: 86%;
        height: 95%;
        object-fit: cover;
        border-radius: 0 0 150px 0;

        ${Media.Tablet} {
          border-radius: 50%;
          width: 100%;
          height: auto;
        }
      }
    }
    .textContainer {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      ${Media.Tablet} {
        width: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      ${Media.PhoneLarge} {
        width: 90%;
      }
      h1 {
        font-family: "Lato";
        font-weight: 300;
        font-size: 40px;
        text-align: center;
        color: #312e2e;
        padding: 16px 100px;
        border: 1px solid #312e2e;
        ${Media.Laptop} {
          font-size: 35px;
          padding: 14px 95px;
        }
        ${Media.Tablet} {
          width: 90%;
          font-size: 33px;
          padding: 12px 92px;
        }
        ${Media.PhoneLarge} {
          font-size: 30px;
          padding: 8px 30px;
        }
      }

      p {
        /* width: 50%; */
        display: block;
        margin: auto;
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 36px;
        color: #000000;
        /* text-align: center; */
        ${Media.Laptop} {
          font-size: 20px;
          line-height: 31px;
        }
        ${Media.Tablet} {
          width: 90%;
          font-size: 17px;
          line-height: 28px;

          text-align: center;
        }
        ${Media.PhoneLarge} {
          font-size: 15px;
          line-height: 26px;
        }
      }
    }
  }
`;

export const RoadMap = styled.div`
  display: block;
  margin: auto;
  width: 90%;

  .Container {
    clear: both;
    .redLine {
      position: absolute;
      z-index: -1;
      margin-left: 5%;
      float: left;
      border: none;
      background-color: #8c2e2e;
      border: 97px solid #8c2e2e;
      height: 100vh;
      ${Media.Laptop} {
        border: 90px solid #8c2e2e;
      }
      ${Media.Tablet} {
        border: 50px solid #8c2e2e;
      }
      ${Media.PhoneLarge} {
        border: 20px solid #8c2e2e;
        left: 0;
        height: 100vh;
        margin-top: -40vh;
      }
    }
    .history {
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 2;
      margin-top: 25vh;
      ${Media.PhoneLarge} {
        margin-top: 20vh;
        flex-direction: column;
      }
      .contText {
        .textArea {
          display: flex;
          align-items: center;
          justify-content: space-between;
          ${Media.PhoneLarge} {
            flex-direction: column;
          }
          .year {
            font-family: "Lato";
            font-style: normal;
            font-weight: 900;
            font-size: 100px;
            ${Media.Laptop} {
              font-size: 90px;
            }

            ${Media.Tablet} {
              font-size: 60px;
            }
            ${Media.PhoneLarge} {
              font-size: 40px;
              text-align: center;
            }
          }
          .text {
            width: 70%;
            font-family: "Lato";
            font-weight: 300;
            font-size: 25px;
            float: left;
            ${Media.Laptop} {
              font-size: 20px;
            }
            ${Media.Tablet} {
              font-size: 17px;
            }
            ${Media.PhoneLarge} {
              font-size: 16px;
              text-align: center;
              margin-top: 20px;
              line-height: 21px;
            }
          }
        }
        .imagePioneiro {
          width: 70%;
          ${Media.Tablet} {
            width: 100%;
          }
        }
        .img {
          /* float: left; */
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
    }
  }
  .finalPart {
    ${Media.PhoneLarge} {
      margin-top: 150px;
    }
    margin-top: 200px;
    img {
      display: block;
      margin: auto;
      width: 80%;
      ${Media.Tablet} {
        width: 100%;
      }

      /* max-width: 70vw; */
    }
  }
`;
