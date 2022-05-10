import styled from "styled-components";

export const Section = styled.section`
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  h1 {
    font-size: 60px;
    line-height: 106px;

    color: #000000;
    text-shadow: 1px 4px 3px rgba(200, 84, 17, 0.9);
  }
  span {
    color: #c85311;
    text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.6);
  }
  h2 {
    max-width: 600px;

    font-size: 30px;
    line-height: 50px;
    text-align: center;

    color: #0c0d0d;
  }

  @media (min-width: 568px) {
    h2 {
      font-size: 40px;
    }
  }
`;
export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button + button {
    margin-left: 10px;
  }
`;
