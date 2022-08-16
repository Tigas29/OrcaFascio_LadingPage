import styled, { keyframes } from "styled-components";
import backgroundchoseUs from "../../imgs/backgroundChosenUs.svg";
import backgroundDepoiments from "../../imgs/backgroundDepoiments.svg";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1024px)",
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

  .containerCapa {
    position: relative;
    height: 94vh;
    width: 90%;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
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
    }
    .textContainer {
      max-width: 30vw;
      h1 {
        font-family: "Lilita One";
        font-weight: 400;
        font-size: 40px;
        line-height: 36px;
        color: #312e2e;

        span {
          font-family: "Lilita One";
          font-weight: 400;
          font-size: 40px;
          line-height: 36px;
          color: #8c2e2e;
        }
      }

      p {
        margin-top: 10px;
        font-family: "Lato";
        font-weight: 400;
        font-size: 20px;
        color: #000000;
        opacity: 0.6;
      }
    }
    .imageContainer {
      max-width: 70vw;
      .capaImage {
        width: 30vw;
        max-width: 34vw;
      }
    }
  }

  .socialMediasCont {
    background-color: #f6f6f6;
    width: 100%;
    height: 5vh;
    padding: 5px 0;
    .socialMedia {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 60px;

      img {
        width: 45px;
        cursor: pointer;
      }
    }
  }
`;

export const WhoWeAre = styled.div`
  height: 40vw;
  background: white;
  display: flex;
  .whoWeAreCont {
    width: 88%;
    /* padding: 50px 0; */
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .imageArea {
      width: 20vw;
      max-width: 35vw;
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
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #312e2e;
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
      width: 103px;
      cursor: pointer;
      height: 33px;
      background: #107fb5;

      /* texto do botao */
      font-family: "Lato";
      font-size: 15px;
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

export const WhyChooseUs = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${backgroundchoseUs});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 90%;

    .ourEmplyess {
      position: relative;
      .photoemplyees {
        width: 40vw;
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

        p {
          font-family: "Lato";
          font-size: 24px;
          text-align: center;
          color: #312e2e;
          margin-bottom: 30px;
        }

        span {
          display: block;
          margin: auto;
          font-family: "Lato";
          font-weight: 700;
          font-size: 24px;
          text-align: center;
          color: #03608d;
        }
      }
    }

    .WhyChooseUs {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 70px;

      .tittle {
        h1 {
          font-family: "Lilita One";
          font-weight: 400;
          font-size: 30px;
          text-align: center;
          color: #ffffff;
          margin-bottom: 30px;
        }
        .detailsRed {
          position: absolute;
          right: 500px;
        }
      }
    }
    .skills {
      img {
        width: 19vw;
      }
    }
  }
`;

export const OurServices = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 100px;
  width: 90%;

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
      color: #000000;
    }
    img {
      display: block;
      margin: auto;
      margin-top: 10px;
      width: 200px;
    }
  }
  .cardsServices {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    .card {
      width: 28vw;
      max-width: 480px;
      height: 439px;
      background: #ffffff;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

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
          width: 10vw;
          height: 10vh;
        }

        .cardtittle {
          font-family: "Lilita One";
          font-style: normal;
          font-weight: 400;
          font-size: 30px;
          line-height: 34px;
          text-align: center;
          color: #312e2e;
        }

        .showMoreMessage {
          font-family: "Lato";
          font-size: 18px;
          text-align: center;
          color: #312e2e;
          opacity: 0.5;
          display: block;
          margin: auto;
        }

        .buttonGoToPage {
          transform: rotate(270deg);
          width: 90px;
          cursor: pointer;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
`;

export const Feedbacks = styled.div`
  width: 100%;
  background: #03608d;

  .Container {
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .depoimentsArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* gap: 70px; */
      margin: auto;
      width: 50%;
      height: 80vh;

      p {
        text-align: center;
        font-family: "Lilita One";
        font-weight: 400;
        font-size: 30px;
        color: #ffffff;
      }
      .swiper {
        width: 100%;
        --swiper-theme-color: #ffffff;
        margin-left: auto;
        margin-right: auto;

        .swiper-pagination,
        .swiper-pagination-clickable .swiper-pagination-bullets {
          bottom: 2%;
        }
      }

      .swiper-slide {
        height: 50vh;
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* gap: -30px; */

        .depoimentText {
          width: 80%;

          p {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 36px;
            text-align: center;
            color: #e8edff;
          }
          span {
            font-family: "Secular One", sans-serif;
            font-style: italic;
            font-size: 100px;
            text-align: center;
            color: #e8edff;
            display: flex;
            align-items: flex-start;
            :nth-child(3) {
              float: right;
              font-size: 100px;
            }
          }
        }
      }
    }
    .imageArea {
      width: 40vw;
      img {
        /* width: 100%; */
      }
    }
  }
`;

export const ContactUs = styled.div`
  width: 90%;
  margin: auto;
  .tittle {
    margin-top: 20px;
    font-family: "Lilita One";
    font-style: normal;
    font-size: 50px;
    text-align: center;
    color: #000000;
  }

  .contactContainer {
    margin: auto;
    margin-top: 100px;
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
        }

        img {
          margin: 20px;
          width: 10vw;
          float: left;
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
        }
        .icons {
          width: 30px;
          height: 30px;
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
