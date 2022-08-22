import styled, { keyframes } from "styled-components";
import backgroundchoseUs from "../../imgs/backgroundChosenUs.svg";
import backgroundDepoiments from "../../imgs/backgroundDepoiments.svg";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
};

const Down = keyframes`
  0%   { transform: translateY(0); }
        50%  { transform: translateY(10px); }
`;

export const Capa = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 71%,
    rgba(255, 255, 255, 1) 71%,
    rgba(140, 46, 46, 1) 71%
  );
  ${Media.Tablet} {
    background: white;
  }
  .backgroundtablet {
    display: none;
    ${Media.Tablet} {
      display: block;
    }
  }
  .containerCapa {
    position: relative;
    height: 94vh;
    width: 90%;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
    ${Media.Tablet} {
      height: 100vh;
    }
    .imageArrowContr {
      position: relative;
      .imageArrowDown {
        position: absolute;
        width: 75px;
        height: 78px;
        cursor: pointer;
        display: block;
        margin: 100px auto;
        margin-bottom: 10px;
        :hover {
          animation: ${Down} 1s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
        left: 50%;
      }
      ${Media.Tablet} {
        display: none;
      }
    }

    .textContainer {
      max-width: 30vw;
      ${Media.Tablet} {
        max-width: 40vw;
      }
      h1 {
        font-family: "Lilita One";
        font-weight: 400;
        font-size: 40px;
        color: #312e2e;
        ${Media.Laptop} {
          font-size: 36px;
        }
        ${Media.Tablet} {
          font-size: 34px;
        }
        span {
          font-family: "Lilita One";
          font-weight: 400;
          font-size: 40px;
          color: #8c2e2e;
          ${Media.Laptop} {
            font-size: 36px;
          }
          ${Media.Tablet} {
            font-size: 34px;
          }
        }
      }

      p {
        margin-top: 10px;
        font-family: "Lato";
        font-weight: 400;
        font-size: 25px;
        color: #000000;
        opacity: 0.6;
        ${Media.Laptop} {
          font-size: 20px;
        }
        ${Media.Tablet} {
          font-size: 18px;
          display: flex;
          height: 100%;
        }
      }

      .iconsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        margin-top: 20px;
        .icons {
          color: #8c2e2e;
          width: 50px;
          height: 50px;
        }
      }
    }
    .teste {
      ${Media.Tablet} {
        width: 50vw;
        height: 68vh;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -50px;
      }

      .imageContainer {
        ${Media.Tablet} {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          /* margin-top: -40%; */
          img {
          }
        }
        .capaImage {
          width: 30vw;
          max-width: 34vw;
          ${Media.Tablet} {
            width: 400px;
            margin-top: -9vh;
          }
        }
        .backgroundtablet {
          ${Media.Tablet} {
            max-width: 300px;
          }
        }
      }
    }
  }
  .socialMediasCont {
    ${Media.Tablet} {
      display: none;
    }
    background-color: #f6f6f6;
    width: 100%;
    /* height: 5vh; */
    padding: 30px 0;
    .socialMedia {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 60px;

      img {
        width: 40px;
        cursor: pointer;
      }
    }
  }
`;

export const WhoWeAre = styled.div`
  height: 50vw;
  background: #fff;
  display: flex;
  ${Media.Tablet} {
    height: 90vw;
  }
  .whoWeAreCont {
    width: 90%;
    /* padding: 50px 0; */
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .imageArea {
      width: 30vw;
      ${Media.Tablet} {
        width: 30vw;
      }
    }

    .depoimentArea {
      display: block;
      width: 60%;
      margin: auto;
      h3 {
        width: 86%;
        margin: auto;
        text-align: left;
        font-family: "Lato";
        font-size: 25px;
        color: #312e2e;

        ${Media.Laptop} {
          font-size: 20px;
        }
        ${Media.Tablet} {
          font-size: 17px;
          line-height: 19px;
        }
      }

      span {
        font-family: "Secular One", sans-serif;
        font-style: italic;
        font-size: 100px;
        text-align: center;
        opacity: 0.54;
        :nth-child(3) {
          float: right;
          font-size: 100px;
          ${Media.Laptop} {
            font-size: 90px;
          }
        }
        ${Media.Laptop} {
          font-size: 90px;
        }
        ${Media.Tablet} {
          font-size: 80px;
        }
      }
    }
  }
  .btnContainer {
    width: 85%;
    margin: auto;
    .moreButton {
      display: block;
      margin-top: 100px;
      width: 143px;
      cursor: pointer;
      height: 44px;
      background: #107fb5;

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

      ${Media.Laptop} {
        /* font-size: 90px; */
      }
      ${Media.Tablet} {
        width: 143px;
        cursor: pointer;
        height: 44px;
        border-radius: 5px;
      }
    }
  }
`;

export const WhyChooseUs = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${backgroundchoseUs});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Media.Tablet} {
    height: 50vh;
  }
  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 90%;

    .ourEmplyess {
      position: relative;
      .photoemplyees {
        width: 80%;
      }
      .whitebox {
        position: absolute;
        left: 53%;
        top: 90%;
        width: 292px;
        height: 112px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${Media.Laptop} {
          width: 240px;
          height: 90px;
        }
        ${Media.Tablet} {
          width: 202px;
          height: 60px;
          left: 40%;
        }
        p,
        span {
          font-family: "Lato";
          font-size: 25px;
          text-align: center;
          color: #312e2e;
          margin-bottom: 30px;
          ${Media.Laptop} {
            font-size: 20px;
          }
          ${Media.Tablet} {
            font-size: 17px;
            margin-bottom: 13px;
          }
        }

        span {
          display: block;
          margin: auto;
          font-weight: bold;
          color: #03608d;
        }
      }
    }

    .WhyChooseUs {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 70px;

      .tittle {
        width: 100%;
        h1 {
          font-family: "Lilita One";
          font-weight: 400;
          font-size: 37px;
          text-align: center;
          color: #ffffff;
          margin-bottom: 30px;
          ${Media.Laptop} {
            font-size: 32px;
          }
          ${Media.Tablet} {
            font-size: 25px;
          }
        }
        .detailsRed {
          position: absolute;
          right: 600px;
          width: 250px;
          ${Media.Laptop} {
            right: 350px;
            width: 200px;
          }
          ${Media.Tablet} {
            right: 19%;
            width: 146px;
          }
        }
      }
    }
    .skills {
      img {
        width: 24vw;
        /* ${Media.Laptop} {
          width: 24vw;
        } */
      }
    }
  }
`;

export const OurServices = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 100px;
  width: 90%;
  overflow: auto;
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
          }

          .buttonGoToPage {
            transform: rotate(270deg);
            width: 90px;
            cursor: pointer;
            transition: all 0.3s ease-out;
            ${Media.Laptop} {
              width: 70px;
            }
          }
        }
      }
    }
  }
`;

export const Feedbacks = styled.div`
  width: 90%;
  margin: auto;
  .Container {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    background: #03608d;
    ${Media.Tablet} {
      flex-direction: column;
    }
    .rowcontent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 50%;
      /* height: 50vh; */
      ${Media.Tablet} {
        width: 100%;
      }

      p {
        margin: auto;
        text-align: center;
        font-family: "Lilita One";
        font-weight: 400;
        font-size: 37px;
        color: #ffffff;
        ${Media.Laptop} {
          font-size: 32px;
        }

        ${Media.Tablet} {
          font-size: 25px;
        }
      }
      .depoimentsArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 95%;
        .swiper {
          width: 100%;
          --swiper-theme-color: #ffffff;
          margin-left: auto;
          margin-right: auto;
          .swiper-pagination,
          .swiper-pagination-clickable .swiper-pagination-bullets {
            display: none;
          }
        }
      }
      .swiper-slide {
        /* height: 50vh; */
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* gap: 30px; */
        .depoimentText {
          width: 80%;
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
          }
          span {
            font-family: "Secular One", sans-serif;
            font-style: italic;
            font-size: 100px;
            text-align: center;
            color: #e8edff;
            display: flex;
            align-items: flex-start;

            ${Media.Laptop} {
              font-size: 90px;
            }
            ${Media.Tablet} {
              font-size: 80px;
            }
            :nth-child(3) {
              float: right;
              font-size: 100px;

              ${Media.Laptop} {
                font-size: 90px;
              }
              ${Media.Tablet} {
                font-size: 80px;
              }
            }
          }
        }
      }
    }
    .imageArea {
      width: 100%;
      height: 100%;
      margin: auto;
      .pcDepoiments {
        ${Media.Tablet} {
          display: none;
        }
      }
      .tabletDepoiments {
        display: none;
        ${Media.Tablet} {
          display: block;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const ContactUs = styled.div`
  width: 90%;
  margin: auto;
  .tittle {
    margin: 100px 0;
    font-family: "Lilita One";
    font-style: normal;
    font-size: 40px;
    text-align: center;
    color: #312e2e;

    ${Media.Laptop} {
      margin: 80px 0;
      font-size: 35px;
    }
    ${Media.Tablet} {
      font-size: 33px;
    }
  }

  .contactContainer {
    margin: auto;
    display: flex;
    align-items: center;
    background-color: #8c2e2e;
    justify-content: space-between;
    .areaContact {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      .tittlePart {
        width: 100%;
        h2 {
          font-family: "lilita One";
          font-style: normal;
          font-size: 40px;
          text-align: center;
          color: #d9d9d9;

          ${Media.Laptop} {
            font-size: 35px;
          }
          ${Media.Tablet} {
            width: 90%;
            font-size: 33px;
          }
        }

        img {
          margin: 20px;
          width: 10vw;
          float: left;

          ${Media.Tablet} {
            width: 15vw;
          }
        }
      }
    }
    .infosContact {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      gap: 60px;
      width: 80%;
      margin: auto;
      .globalSetings {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
          font-family: "Lato";
          font-style: normal;
          font-size: 20px;
          color: #d9d9d9;

          ${Media.Laptop} {
            font-size: 15px;
          }
          ${Media.Laptop} {
            font-size: 13px;
          }
        }
        .icons {
          width: 50px;
          height: 50px;
          color: #d9d9d9;
        }
      }
      .location {
      }

      .workTime {
      }

      .telephone {
      }
    }
  }
`;
