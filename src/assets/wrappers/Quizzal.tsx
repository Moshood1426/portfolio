import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  width: 90%;
  max-width: 40em;
  padding-top: 10vh;

  a:-webkit-any-link {
    color: grey;
  }

  .back {
    padding-bottom: 4em;
    display: block;
  }

  p {
    font-size: 1rem;
    color: #b7b4b4;
  }

  h2 {
    margin-top: 0.35em;
  }

  .title::after {
    content: "";
    height: 4px;
    width: 50px;
    background-color: var(--primary-green);
    display: block;
    margin-top: 0.25em;
  }

  .sub-title {
    margin: 0;
    font-size: 0.75rem;
    color: #a6a4a4;
    text-transform: uppercase;
  }

  .header {
    margin-bottom: 4em;
  }

  .link {
    font-size: 1rem;
    padding-left: 0.5em;
    cursor: pointer;
  }

  article {
    margin-bottom: 3em;
  }
`;

export default Wrapper;
