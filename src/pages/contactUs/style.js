import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const Main = styled.div`
  width: 100%;
`;
export const ContactUs = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 10vh;
  background-color: #8c2e2e;
  ${Media.PhoneLarge} {
    height: 100vh;
  }
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .contactContainer {
    width: 91%;
    height: 90vh;
    margin: auto;
    display: flex;
    align-items: center;
    background-color: #8c2e2e;
    justify-content: space-between;
    flex-direction: row-reverse;
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
      .iconsContainer {
        display: block;
        margin: auto;
        margin-bottom: 20px;
        .icons {
          align-items: center;
          margin-left: 20px;
          width: 40px;
          height: 40px;
          color: #d9d9d9;
        }
      }

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
