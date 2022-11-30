import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #212123;
  padding: 2em 2em;
  margin-bottom: 1em;

  :hover {
    cursor: pointer;

    .article-title {
      color: var(--green-light);
    }
  }

  .article-date {
    font-size: 0.65rem;
    margin: 0;
    color: rgba(165, 159, 159, 0.73);
  }

  .article-category {
    margin: 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--grey-200);
  }

  .article-title {
    margin: 0;
    margin-top: 2.5em;
    text-transform: capitalize;
  }

  .article-time {
    font-size: 0.75em;
    color: rgba(165, 159, 159, 0.73);
  }

  a:-webkit-any-link {
    color: var(--white);
    cursor: pointer;
}
`;
export default Wrapper;
