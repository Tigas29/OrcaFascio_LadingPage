import styled, { keyframes } from "styled-components";
import backgroundchoseUs from "../../imgs/backgroundChosenUs.svg";
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
    ${Media.PhoneLarge} {
      flex-direction: column-reverse;
      margin-top: -50px;
    }
    .containerLeft {
      ${Media.Tablet} {
        height: 16vh;
        ${Media.PhoneLarge} {
          height: auto;
          width: 100%;
        }
      }

      .textContainer {
        max-width: 30vw;
        ${Media.Tablet} {
          max-width: 40vw;
        }
        ${Media.PhoneLarge} {
          max-width: 100vw;
          margin: auto;
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
          ${Media.PhoneLarge} {
            font-size: 30px;
            text-align: center;
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
            ${Media.PhoneLarge} {
              font-size: 30px;
              text-align: center;
            }
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
        }
        ${Media.PhoneLarge} {
          font-size: 15px;
          text-align: center;
        }
      }

      .iconsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        ${Media.PhoneLarge} {
          justify-content: center;
          gap: 30px;
        }
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
        height: 75vh;
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
          width: 400px;
          max-width: 600px;

          ${Media.Tablet} {
            max-width: 300px;

            margin-top: -9vh;
          }
          ${Media.PhoneLarge} {
            width: 65vw;

            max-width: 280px;
          }
        }
        .backgroundtablet {
          ${Media.Tablet} {
            max-width: 300px;
          }
          ${Media.PhoneLarge} {
            max-width: 280px;
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
  height: 50vh;
  background: #fff;
  display: flex;
  ${Media.Tablet} {
    height: 90vh;
  }
  ${Media.PhoneLarge} {
    padding-top: 90px;
    height: 100vh;
  }
  .whoWeAreCont {
    width: 90%;
    /* padding: 50px 0; */
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.PhoneLarge} {
      flex-direction: column;
      gap: 30px;
    }
    .imageArea {
      width: 30vw;
      ${Media.Tablet} {
        width: 30vw;
      }
      ${Media.PhoneLarge} {
        width: 65vw;
      }
    }

    .depoimentArea {
      display: block;
      width: 60%;
      margin: auto;
      ${Media.PhoneLarge} {
        width: 90%;
      }
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

        ${Media.PhoneLarge} {
          font-size: 15px;
          line-height: 18px;
          text-align: center;
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
    width: 83%;
    margin: auto;
    ${Media.PhoneLarge} {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    .moreButton {
      display: block;
      margin-top: 100px;
      width: 143px;
      cursor: pointer;
      height: 44px;
      background: #107fb5;

      ${Media.PhoneLarge} {
        margin-top: 0;
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
  ${Media.PhoneLarge} {
    height: 100vh;
  }
  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 90%;

    ${Media.PhoneLarge} {
      flex-direction: column;
      gap: 90px;
    }
    .ourEmplyess {
      position: relative;
      .employees {
        ${Media.PhoneLarge} {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .photoemplyees {
        width: 40vw;
        ${Media.Tablet} {
          width: 80%;
        }
        ${Media.PhoneLarge} {
          width: 90vw;
        }
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
        ${Media.PhoneLarge} {
          width: 180px;
          height: 50px;
          left: 30%;
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
          ${Media.PhoneLarge} {
            font-size: 15px;
            margin-bottom: 10px;
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
      ${Media.PhoneLarge} {
        width: 90%;
      }
    }
    .tittle {
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
        ${Media.PhoneLarge} {
          font-size: 30px;
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
        ${Media.PhoneLarge} {
          display: block;
          position: relative;
          margin: auto;
          width: 200px;
        }
      }
    }
  }
  .skills {
    img {
      width: 24vw;
      max-width: 350px;
      /* ${Media.Laptop} {
          width: 24vw;
        } */
      ${Media.PhoneLarge} {
        width: 65vw;
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
        ${Media.PhoneLarge} {
          font-size: 20px;
        }
      }
      .depoimentsArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 95%;
        .depoimentsAreaContentTittle {
          margin-top: 30px;
        }
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
            ${Media.PhoneLarge} {
              font-size: 60px;
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
              ${Media.PhoneLarge} {
                font-size: 60px;
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
    ${Media.PhoneLarge} {
      font-size: 30px;
    }
  }

  .contactContainer {
    margin: auto;
    display: flex;
    align-items: center;
    background-color: #8c2e2e;
    justify-content: space-between;
    ${Media.PhoneLarge} {
      flex-direction: column;
      justify-content: center;
    }

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
            margin: auto;
            width: 90%;
            font-size: 33px;
          }
          ${Media.PhoneLarge} {
            margin-top: 20px;
            width: 100%;
          }
        }

        img {
          margin: 20px;
          width: 10vw;
          float: left;

          ${Media.Tablet} {
            width: 15vw;
          }
          ${Media.PhoneLarge} {
            width: 150px;
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
      ${Media.PhoneLarge} {
        margin-top: 20px;
        gap: 40px;
      }
      .globalSetings {
        display: flex;
        align-items: center;
        justify-content: center;
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
          ${Media.PhoneLarge} {
            font-size: 15px;
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
