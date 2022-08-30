import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 2em;
  background-color: var(--primary-300);
  padding-bottom: 3em;
  position: relative;
  z-index: 1;

  .more-info-container {
    width: 90%;
    margin: 0 auto;
    max-width: 625px;
  }

  .more-info-title {
    color: var(--primary-green);
    border-top: #4c5e4f solid 2px;
    border-bottom: #4c5e4f solid 2px;
    text-align: center;
    font-size: 1.25rem;
  }

  .more-info-subtitle {
    margin-bottom: 2em;
  }

  p {
    margin: 0;
    padding-bottom: 0.65em;
    font-size: 0.85rem;
  }

  @media (min-width: 850px) {
    grid-row: 3/4;
    grid-column: 2/3;
  }
`;
export default Wrapper;
