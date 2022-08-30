import styled from "styled-components";

const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    max-width: 1250px;
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 1.5em;
    transform: translateY(-40%);
  }

  .logo > span {
    font-size: 1.2rem;
    opacity: 0.6;
  }

  ::after {
    content: "";
    background-color: #272729;
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
    background-color: rgba(37, 37, 40, .65);
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

  .title {
    line-height: 1;
    color: var(--primary-green);
    position: relative;
    text-transform: capitalize;
  }

  .nav-item {
    color: var(--primary-green);
    position: relative;
    align-self: flex-end;
    border-left: var(--white) solid 3px;
    margin-bottom: 0.85em;
    padding: 0.5em 1.2em;
    background-color: var(--primary-200);
    width: fit-content;
  }

  .intro-details {
    color: #d9d9d9ba;
  }

  @media (min-width: 600px) {
    .intro-img-container {
      display: block;
    }

    .intro-actions {
      display: flex;
      gap: 1.5em;
    }

    .nav-item {
      border-left: none;
      border-bottom: var(--white) solid 4px;
      margin-bottom: 0.85em;
      background-color: var(--primary-200);
      width: fit-content;
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
  }

  @media (min-width: 1100px) {
    .intro-img-container {
      width: 500px;
      right: 4em;
    }
  }
`;
export default Wrapper;
