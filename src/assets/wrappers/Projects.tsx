import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 4em;

  .projects-container {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
  }
  .projects-intro-subtitle {
    font-size: 0.9rem;
    margin: 0;
  }

  .projects-intro-title {
    color: var(--primary-green);
    border-top: #4c5e4f solid 2px;
    border-bottom: #4c5e4f solid 2px;
  }

  .projects-intro-details {
    color: var(--grey-100);
    text-align: justify;
  }

  .view-more {
    grid-column: 1/-1;
    max-width: 100%;
    width: fit-content;
    margin: 0 auto;
    margin-top: 2em;
    padding: 0.6em 2.35em;
    border: var(--primary-green) solid 2px;
    place-self: center center;
  }

  .view-more:hover {
    background-color: var(--primary-300);
  }

  @media (min-width: 750px) {
    .projects-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 1em;
    }

    .projects-intro {
      place-self: center left;
      max-width: 95%;
    }

    .span-two {
      grid-column: 1/3;
    }
  }
`;
export default Wrapper;
