import styled, { keyframes } from "styled-components";
import backgroundchoseUs from "../../imgs/backgroundChosenUs.png";
import backgroundFrontCover from "../../imgs/Computador/backgroundFrontCover.png";
import backgroundBenefits from "../../imgs/backgroundBenefits.png";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};

const Down = keyframes`
  0%   { transform: translateY(0); }
        50%  { transform: translateY(10px); }
`;
export const Main = styled.body`
  body {
    scroll-behavior: smooth;
  }
`;
export const Capa = styled.header`
  background: url(${backgroundFrontCover}) no-repeat center;
  background-size: cover;
  .line {
    position: absolute;
    right: 0;
    width: 30vw;
    height: 100vh;
    background: linear-gradient(
      180deg,
      #333333 1.06%,
      #302f2f 51.7%,
      #333333 100%
    );
  }
  .containerCapa {
    mix-blend-mode: normal;
    width: 70%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;

    .containerText {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 52px;
      z-index: 10;
    }

    .textContainer {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-family: "Inter", sans-serif;
        font-weight: 900;
        font-size: 40px;
        background: -webkit-linear-gradient(
          90deg,
          #ffc107 0%,
          #ffd145 57.94%,
          #ffc107 104.06%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;

        ${Media.Laptop} {
          font-size: 36px;
        }
        ${Media.Tablet} {
          font-size: 34px;
        }
        ${Media.PhoneLarge} {
          font-size: 30px;
        }
      }
      span {
        font-family: "Inter", sans-serif;
        font-weight: 900;
        font-size: 40px;
        color: #f0fbff;
        text-align: center;
        color: ${Media.Laptop} {
          font-size: 36px;
        }
        ${Media.Tablet} {
          font-size: 34px;
        }
        ${Media.PhoneLarge} {
          font-size: 30px;
        }
      }
    }

    p {
      width: 70%;
      margin: auto;
      text-align: center;
      font-family: "inter";
      font-weight: 900;
      font-size: 25px;
      background: linear-gradient(
        90deg,
        #ffc107 0%,
        #ffd145 57.94%,
        #ffc107 104.06%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      ${Media.Laptop} {
        font-size: 20px;
      }
      ${Media.Tablet} {
        font-size: 18px;
        display: flex;
      }
      ${Media.PhoneLarge} {
        display: block;
        margin: auto;
        font-size: 15px;
        text-align: center;
      }
    }

    .imageArrowContr {
      .imageArrowDown {
        width: 75px;
        height: 78px;
        cursor: pointer;
        :hover {
          animation: ${Down} 1s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
      }
    }
  }
`;

export const Promocao = styled.section`
  background: url(${backgroundBenefits}) no-repeat;
  background-size: cover;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Media.PhoneLarge} {
    min-height: 80vh;
  }
  .containerPromotion {
    width: 70%;
    max-width: 1660px;

    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.Laptop} {
      flex-direction: column;
      gap: 15px;
    }
    ${Media.PhoneLarge} {
      width: 90%;
    }
    .promotionText {
      display: flex;
      flex-direction: column;
      margin: auto;
      gap: 32px;

      h2 {
        width: 50%;
        text-align: left;
        font-family: "inter";
        font-size: 40px;
        font-weight: 900;
        color: #f6f6f6;

        ${Media.Laptop} {
          font-size: 35px;
        }
        ${Media.Tablet} {
          margin: auto;
          text-align: center;
          width: 80%;
          font-size: 33px;
        }

        ${Media.PhoneLarge} {
          width: 100%;
          font-size: 33px;
          text-align: center;
        }

        span {
          color: #ffd145;
        }
      }
      p {
        width: 50%;
        text-align: left;
        font-family: "inter";
        font-size: 37px;
        font-weight: 400;
        color: #f6f6f6;
        ${Media.Laptop} {
          width: 100%;
          font-size: 35px;
          text-align: center;
        }
        ${Media.Tablet} {
          font-size: 25px;
        }
        ${Media.PhoneLarge} {
          font-size: 20px;
        }
      }
    }
  }
  .btnContainer {
    .moreButton {
      display: block;
      width: 30vw;
      cursor: pointer;
      height: 44px;
      background: linear-gradient(
        180deg,
        #333333 1.06%,
        #302f2f 51.7%,
        #333333 100%
      );
      border-radius: 4px;
      width: 100%;
      ${Media.Laptop} {
        width: 100%;
      }
      /* texto do botao */
      font-family: "Lato";
      font-size: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #ffffff;
      :hover {
        animation: ${Down} 1s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
    }
  }
  .imageArea {
    width: 38vw;
    img {
      max-width: 600px;
    }
    ${Media.Tablet} {
      width: 30vw;
    }
    ${Media.PhoneLarge} {
      width: 70vw;
    }
  }
`;
export const Benefits = styled.div`
  margin: auto;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  max-width: 1660px;
  gap: 32px;
  margin-top: 30px;
  ${Media.Tablet} {
    min-height: 80vh;
    overflow: auto;
  }
  .tittle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    h1 {
      font-family: "inter";
      font-weight: 900;
      font-size: 40px;
      text-align: center;
      color: #f0fbff;

      ${Media.Laptop} {
        font-size: 35px;
        margin-top: 30px;
      }
      ${Media.Tablet} {
        font-size: 33px;
      }
      ${Media.PhoneLarge} {
        font-size: 30px;
      }
    }
    img {
      margin: auto;
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
        max-width: 500px;
        margin-left: 2vw;
        height: 439px;
        background: linear-gradient(
          180deg,
          rgba(51, 51, 51, 1) 50%,
          rgba(240, 251, 255, 1) 50%
        );
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

        ${Media.Tablet} {
          min-width: 260px;
        }

        .cardBody {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto;
          width: 80%;
          height: 100%;
          gap: 154px;
          .iconService {
            width: 150px;
            height: 150px;
            ${Media.Laptop} {
              width: 130px;
              height: 140px;
            }
            ${Media.Tablet} {
              width: 300px;
              height: 120px;
            }
            ${Media.PhoneLarge} {
              width: 200px;
              height: 100px;
            }
          }

          .cardtittle {
            font-family: "inter";
            font-style: normal;
            font-size: 30px;
            font-weight: 900;
            text-align: center;
            background: linear-gradient(
              180deg,
              #333333 1.06%,
              #302f2f 51.7%,
              #333333 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            ${Media.Laptop} {
              font-size: 25px;
            }

            ${Media.Tablet} {
              font-size: 20px;
            }
          }

          .descriptionItem {
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
        }
      }
    }
  }
  .btnContainer {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    .moreButton {
      display: block;
      cursor: pointer;
      height: 44px;
      background: linear-gradient(
        90.08deg,
        #11437e 0.07%,
        #2c4c71 45.64%,
        #093b76 91.63%
      );
      border-radius: 4px;
      width: 15vw;
      margin: auto;
      ${Media.Laptop} {
        width: 100%;
      }
      /* texto do botao */
      font-family: "Lato";
      font-size: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #ffffff;
      :hover {
        animation: ${Down} 1s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
    }
  }
`;
export const Benefits2 = styled.div`
  width: 100%;
  min-height: 80vh;
  background: url(${backgroundchoseUs});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 70%;
    max-width: 1600px;
    gap: 32px;

    ${Media.PhoneLarge} {
      width: 90%;
      flex-direction: column;
      gap: 90px;
    }

    .tittle {
      h1 {
        font-family: "inter";
        font-weight: 900;
        font-size: 37px;
        text-align: center;
        color: #f0fbff;
        ${Media.Laptop} {
          font-size: 32px;
        }
        ${Media.Tablet} {
          font-size: 25px;
        }
        ${Media.PhoneLarge} {
          font-size: 30px;
        }
      }
    }

    .boxSection {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      ${Media.Tablet} {
        flex-direction: column;
        gap: 50px;
      }

      .pattern {
        &:nth-child(2) {
          color: black;
        }
        h1 {
          font-family: "Inter";
          font-size: 37px;
          font-weight: 400;
          text-align: center;
          color: #f0fbff;

          ${Media.Laptop} {
            font-size: 32px;
          }

          ${Media.Tablet} {
            font-size: 25px;
          }
          ${Media.PhoneLarge} {
            font-size: 20px;
          }

          span {
            font-weight: 700;
          }
        }
        .ribbon {
          background: linear-gradient(
            90.08deg,
            #11437e 0.07%,
            #2c4c71 45.64%,
            #093b76 91.63%
          );
          padding: 10px;
          margin-top: 12px;
          p {
            font-family: "Inter";
            font-style: normal;
            font-size: 25px;
            text-align: center;
            background: linear-gradient(
              90deg,
              #ffc107 0%,
              #ffd145 57.94%,
              #ffc107 104.06%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;

            ${Media.Laptop} {
              font-size: 20px;
            }
            ${Media.Tablet} {
              font-size: 17px;
            }
            ${Media.PhoneLarge} {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;

export const Feedbacks = styled.div`
  width: 70%;
  max-width: 1660px;
  margin: auto;
  min-height: 70vh;
  margin-top: 10vh;
  ${Media.PhoneLarge} {
    width: 90%;
  }

  h1 {
    margin: auto;
    text-align: center;
    font-family: "Inter";
    font-size: 40px;
    color: #f0fbff;
    font-weight: 900;
    color: ${Media.Laptop} {
      font-size: 35px;
    }
    ${Media.Tablet} {
      font-size: 33px;
    }
    ${Media.PhoneLarge} {
      font-size: 30px;
    }
  }
  .Container {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    background: linear-gradient(
      90.08deg,
      #11437e 0.07%,
      #2c4c71 34.92%,
      #093b76 91.63%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 5vh;
    .rowcontent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 100%;
      height: 50vh;
      gap: 60px;

      ${Media.PhoneLarge} {
        height: 60vh;
      }
      p {
        margin: auto;
        text-align: center;
        font-family: "Inter";
        font-weight: 500;
        font-size: 37px;
        color: #ffffff;
        ${Media.Laptop} {
          font-size: 32px;
        }

        ${Media.Tablet} {
          font-size: 25px;
        }
        ${Media.PhoneLarge} {
          font-size: 20px;
        }
      }
      .depoimentsArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: auto;
        width: 80%;
        height: 50vh;
        ${Media.Laptop} {
          width: 100%;
        }
        .depoimentsAreaContentTittle {
          margin-top: 30px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          top: 25%;

          ${Media.Laptop} {
            display: none;
          }
        }
        .swiper {
          cursor: grab;
          width: 100%;
          --swiper-theme-color: #ffffff;
          margin-left: auto;
          margin-right: auto;
          .swiper-pagination,
          .swiper-pagination-clickable .swiper-pagination-bullets {
            /* display: none; */
            bottom: 50px;
          }
        }
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        gap: 100px;
        align-items: center;
        flex-direction: column;
        /* gap: 30px; */
        .depoimentText {
          width: 80%;
          ${Media.PhoneLarge} {
            margin-top: 50px;
          }
          p {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            text-align: center;
            color: #e8edff;

            ${Media.Laptop} {
              font-size: 20px;
            }
            ${Media.Tablet} {
              font-size: 17px;
            }
            ${Media.PhoneLarge} {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;
