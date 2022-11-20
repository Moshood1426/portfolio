import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2em;
  background-color: var(--primary-300);
  margin-bottom: 1em;
  grid-column: span 2;

  h4,
  a,
  p {
    margin: 0;
  }

  a {
    color: var(--grey-500);
  }

  a:hover {
    color: white;
  }

  .single-project-title {
    //font-weight: bold;
    margin-bottom: 0.65em;
    color: var(--grey-100);
  }

  .single-project-stack {
    font-size: 0.85rem;
    text-transform: capitalize;
    color: var(--primary-green);
  }

  .single-project-details {
    margin-top: 2em;
    margin-bottom: 3em;
    color: #d9d9d9ba;
    font-size: var(--extra-small-text);
  }

  .single-project-links {
    display: flex;
    gap: 1.2em;
    color: var(--grey-500);
    font-size: 0.9em;
    cursor: pointer;
  }
`;
export default Wrapper;
