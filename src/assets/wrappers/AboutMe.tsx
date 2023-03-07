import styled from "styled-components";

const Wrapper = styled.section`
  margin-bottom: 3em;

  .aboutme-container {
    width: 75%;
    margin: 0 auto;
    max-width: 625px;
  }

  .aboutme-title {
    color: var(--primary-green);
    border-top: #4c5e4f solid 2px;
    border-bottom: #4c5e4f solid 2px;
    text-align: center;
  }

  @media (min-width: 850px) {
    grid-row: 1/2;
    grid-column: 1/2;
    place-self: center;
  }
`;
export default Wrapper;
