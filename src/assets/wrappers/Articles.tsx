import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--primary-300);
  padding: 3em 0;

  .articles-container {
    width: 90%;
    max-width: 625px;
    margin: 0 auto;
  }

  .articles-title {
    color: var(--primary-green);
    border-top: #4C5E4F solid 2px;
    border-bottom: #4C5E4F solid 2px;
    text-align: center;
  }

  @media (min-width: 850px) {
    grid-row: 1/3;
    grid-column: 2/3;
    padding-bottom: 0;
  }
`;
export default Wrapper;
