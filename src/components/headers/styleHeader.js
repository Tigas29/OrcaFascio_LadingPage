import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  header {
    width: 90%;
    margin: auto;
    display: flex;
    top: 0;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 8.66007px 3.60836px 72.1672px rgba(0, 0, 0, 0.18);
    border-radius: 14px;
    margin-top: 40px;
    padding: 15px 0;

    p {
      font-family: "Lato";
      text-align: center;
      color: #312e2e;
      font-weight: 400;
      cursor: pointer;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 80px;
    }
    .right {
      display: flex;
      align-items: center;
      gap: 80px;
    }

    .logo {
      width: 239.13px;
    }
    .LinkContent {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      position: absolute;
      bottom: 0;
      width: 60.57px;
      border: none;
      border: 1px solid #03608d;
    }
  }
`;
