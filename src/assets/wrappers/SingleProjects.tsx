import styled from "styled-components";

const Wrapper = styled.section<{ spanTwo: "1 / 3" | "3 / 5" | undefined }>`
  padding: 2em;
  background-color: var(--primary-300);
  margin-bottom: 1em;
  ${({ spanTwo }) =>
    spanTwo &&
    `
    grid-column: ${spanTwo};
  `}

  h4,
  p {
    margin: 0;
  }

  .single-project-title {
    //font-weight: bold;
    margin-bottom: 0.65em;
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
    font-size: 0.85em;
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
