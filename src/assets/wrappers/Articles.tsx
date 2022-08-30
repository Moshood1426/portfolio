import styled from "styled-components";

const Wrapper = styled.section`
  background-color: rgba(50, 50, 54, 1);
  padding: 3.5em 0;
  .articles-container {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
  }

  .articles-title {
    color: var(--primary-green);
    border-top: var(--primary-green) solid 2px;
    border-bottom: var(--primary-green) solid 2px;
    text-align: center;
  }
`;
export default Wrapper;
