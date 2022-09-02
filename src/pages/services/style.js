import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const Main = styled.div``;
export const OurServices = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 100px;
  width: 90%;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  /* height: 90vh; */
  .tittle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-family: "Lilita One";
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
    img {
      display: block;
      margin: auto;
      margin-top: 10px;
      width: 200px;

      ${Media.Laptop} {
        width: 160px;
      }
      ${Media.Tablet} {
        width: 120px;
      }
    }
  }
  .cardContainer {
    ${Media.Tablet} {
      width: 100%;
      overflow: auto;
    }

    .cardsServices {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      ${Media.Tablet} {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
      }

      .card {
        width: 28vw;
        height: 439px;
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        ${Media.Laptop} {
          /* width: 160px; */
        }
        ${Media.Tablet} {
          width: 300px;
        }

        .cardBody {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto;
          width: 80%;
          height: 100%;
          gap: 78px;
          /* overflow: hidden; */
          .iconService {
            width: 150px;
            height: 100px;
            ${Media.Laptop} {
              width: 130px;
              height: 80px;
            }
            ${Media.Tablet} {
              width: 300px;
              height: 50px;
            }
            ${Media.PhoneLarge} {
              width: 200px;
              height: 50px;
            }
          }

          .cardtittle {
            font-family: "Lilita One";
            font-style: normal;
            font-size: 30px;
            text-align: center;
            color: #312e2e;
            ${Media.Laptop} {
              font-size: 25px;
            }

            ${Media.Tablet} {
              font-size: 20px;
            }
          }

          .showMoreMessage {
            font-family: "Lato";
            font-size: 20px;
            text-align: center;
            color: #312e2e;
            opacity: 0.5;
            display: block;
            margin: auto;
            ${Media.Laptop} {
              font-size: 15px;
            }
            ${Media.Tablet} {
              font-size: 13px;
            }
          }

          .buttonGoToPage {
            transform: rotate(270deg);
            width: 90px;
            cursor: pointer;
            transition: all 0.3s ease-out;
            ${Media.Laptop} {
              width: 70px;
            }
            ${Media.PhoneLarge} {
              width: 50px;
            }
          }
        }
      }
    }
  }
`;
