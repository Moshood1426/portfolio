import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--primary-300);
  padding: 2em 0;

  .contact-container {
    width: 90%;
    max-width: 625px;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 0.85rem;
  }

  .contact-title {
    margin-bottom: 1em;
  }

  .contact-subtitle {
    color: var(--primary-green);
  }

  .form-item {
    margin-bottom: 1.3em;
    position: relative;
    z-index: 1;
  }

  .form-input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: var(--borderRadius);
    border: 1px solid #4c5e4f;
    height: 50px;
    font-size: 1rem;
    background-color: #212123;
    position: relative;
    z-index: 1;
    color: white;
  }

  .text-area {
    height: 10rem;
    margin-bottom: 1em;
  }

  .submit-btn {
    width: 100%;
    padding: 1em;
    background-color: var(--primary-green);
    position: relative;
    z-index: 1;
    transition: var(--transition);
  }

  .submit-btn:hover {
    opacity: 0.7;
  }

  ::after {
    content: "";
    background-color: #212123;
    height: 300px;
    width: 300px;
    position: absolute;
    transform: translate(-40%, -70%);
    border-radius: 50%;
    z-index: 0;
  }

  @media (min-width: 850px) {
    grid-row: 2/4;
    grid-column: 1/2;
    padding-top: 4em;

    ::after {
      height: 450px;
      width: 450px;
    }
  }

  .alert {
    text-align: center;
    width: 100%;
    padding: 0.475rem 0.75rem;
  }

  .alert-danger {
    color: var(--red-dark);
    background: var(--red-light);
  }

  .alert-success {
    color: var(--green-dark);
    background: var(--green-light);
  }
`;
export default Wrapper;
