import React from "react";
import Wrapper from "../assets/wrappers/Quizzal";
import { Link } from "react-router-dom"
//import register from "../assets/images/register.JPG";

const Quizzal = () => {
  return (
    <Wrapper>
      <Link className="back" to="/">{"<"} back</Link>
      <div className="header">
        <p className="sub-title">
          📅 2022-04-11 - ⏱️ 17 mins read - ✍️ Written by Moshood Abdullahi
        </p>
        <h2 className="title">
          The Quizzal Project
          <a
            className="link"
            href="https://quizzal.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            🔗
          </a>
        </h2>
      </div>
      <p>
        The quizzal project was created with the primary motive of enhancing
        easiness with conducting tests and quizzes for students.
      </p>

      <article>
        <h4>Sign Up and Register</h4>
        <p>
          The sign up and register process is pretty easy. User needs to input a
          unique email address, their username, and a secure password to create
          account. Signing in requires inputting the user's email address and
          password after which a token is generated and further request sent
          during this session is authenticated with this token. However, only a
          tutor can sign up though.
        </p>
      </article>

      <article>
        <h4>Creating Quiz</h4>
        <p>
          Creating quiz was also made up of a seamless process. User is required
          to select between creating a quick quiz where the quiz is populated
          with questions from the OpenTD api or create a moderated quiz where
          user inputs questions by themselves. User can proceed to choose if the
          quiz will be available to the public by setting the quiz type to
          Public or if the quiz is only open to restricted persons where the
          user can set the quiz type to "Private". If the quiz is private, User
          will need to add participant by their unique info and only
          participants added can take quiz.
        </p>
      </article>

      <article>
        <h4>Publishing Quiz</h4>
        <p>
          However, before participants can access the quiz, it needs to be
          published and this will be done by the tutor. The tutor is required to
          publish quiz for a specified start date and set the end date to a date
          of his choice. The tutor also has the option of publushing the quiz
          for "anytime" i.e when a date is not specified, it is tagged anytime
          and the quiz can be accessed as long as it doesn't supercede the quiz
          limit date.
        </p>
      </article>

      <article>
        <h4>Participants Taking Tests</h4>
        <p>
          After publishing, partcipants can proceed to the take test page to
          sign in for their tests. The participant is therefore required to
          enter a valid quiz code. The result returns an error message if the
          quiz was requested outside of published time frame. If the test is a
          private test, user will be required to input their unique
          participantID which may be their gmail or their student number.
          However, if the quiz is private, the participant will be required to
          input their email alongside little identification details so results
          can be attributed to their details. After provision or verification of
          these personal details, users can now take test and submit after
          conclusion.
        </p>
      </article>

      <article>
        <h4>Handling Submissions</h4>
        <p>
          The tutor gets students result for each quiz on the submissions page
          and an alogorithm assists in calculating student percentage alongside
          grading their performances. The tutor can proceed to publish this
          results for public viewing or withdraw participant chance to check
          results after publishing by withdrawing results. Participants can
          therefore proceed to the check results page to check their results by
          inputting their unique participantID and the unique quiz code.
        </p>
      </article>

      <article>
        <h4>Development Summary</h4>
        <p>
          The app was designed by yours truly on Figma before proceeding to
          implement the User interface with React + Typescript. Styled
          Components was used to style the frontend and the useContextAPI was
          used as store for state management. The axios library was used for
          sending request to the server. The Server was created with Express
          framework and MongoDB Atlas was used as Database. Mongoose was used as
          ORM to enhance easiness working with the database and REST API
          principles was used in creation of endpoints. The system was
          dockerised using docker compose for development and the frontend and
          backend was deployed as separate services on Amazon ECS.
        </p>
      </article>
    </Wrapper>
  );
};

export default Quizzal;
