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
    font-size: .9rem;
    margin: 0;
  }

  .projects-intro-title {
    color: var(--primary-green);
    border-top: var(--primary-green) solid 2px;
    border-bottom: var(--primary-green) solid 2px;
  }

  .view-more {
    grid-column: 1/-1;
    max-width: 100%;
    width: fit-content;
    padding: .6em 2.35em;
    border: var(--primary-green) solid 2px;
    place-self: center;
  }

  @media (min-width: 750px) {
    .projects-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1em;
    }

    .projects-intro {
      place-self: center left;
      max-width: 95%;
    }
  }
`;
export default Wrapper;
