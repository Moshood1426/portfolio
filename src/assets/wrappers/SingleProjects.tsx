import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2em;
  background-color: var(--primary-300);
  margin-bottom: 1em;

  h4,
  p {
    margin: 0;
  }

  .single-project-title {
    font-weight: bold;
  }

  .single-project-stack {
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--primary-green);
  }

  .single-project-details {
    margin-top: 2em;
    margin-bottom: 1em;
    color: #d9d9d9ba;
  }

  .single-project-links {
    display: flex;
    gap: 1.2em;
    font-weight: bold;
  }
`;
export default Wrapper;
