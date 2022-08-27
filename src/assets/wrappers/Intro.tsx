import styled from "styled-components";

const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  position: relative;

  ::after {
    content: "";
    background-color: var(--primary-200);
    height: 300px;
    width: 300px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-30%, 30%);
    border-radius: 50%;
  }

  .intro-container {
    max-width: 1250px;
    position: relative;
    width: 90%;
    margin: 3em auto;
    background-color: rgba(50, 50, 54, 0.65);
    z-index: 1;
    height: 75vh;
    display: flex;
    align-items: center;
    padding: 2em;
    box-shadow: var(--shadow-1);
    border-radius: 10px;
  }

  .intro-img-container {
    display: none;
    position: absolute;
    z-index: -2;
    width: 200px;
    right: 2em;
  }

  .intro-img {
    position: relative;
    z-index: -1;
    height: 65vh;
    opacity: 0.4;
  }

  .intro-content-container {
    width: 90%;
  }

  .intro-actions {
    display: flex;
    gap: 1.5em;
  }

  .title {
    line-height: 1;
    color: var(--primary-green);
    position: relative;
  }

  .title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--primary-green);
    height: 2px;
    width: 100%;
  }

  .nav-item {
    color: var(--primary-green);
    position: relative;
    align-self: flex-end;
  }

  .nav-item::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--white);
    height: 5px;
    width: 100%;
  }

  @media (min-width: 600px) {
    .intro-img-container {
      display: block;
    }
  }

  @media (min-width: 650px) {
    .intro-container {
      padding: 4em;
    }

    ::after {
      height: 450px;
      width: 450px;
    }
    .intro-img-container {
      width: 300px;
    }

    .nav-item {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1100px) {
    .intro-img-container {
      width: 500px;
      right: 4em;
    }
  }
`;
export default Wrapper;
