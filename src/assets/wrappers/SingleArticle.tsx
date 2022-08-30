import styled from "styled-components";

const Wrapper = styled.section`
  background-color: rgba(58, 58, 61, .65);
  padding: 2em 2em;
  margin-bottom: 1em;

  .article-date {
    font-size: .65rem;
    margin: 0;
  }

  .article-category {
    margin: 0;
    text-transform: uppercase;
    font-size: .85rem;
  }

  .article-title {
    margin: 0;
    margin-top: 2.5em;
    text-transform: uppercase;
  }

  .article-time {
    font-size: .75em;
  }
`;
export default Wrapper;
