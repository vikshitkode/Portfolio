import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import dial from "../../Assets/Projects/dial.jpg";
import movie from "../../Assets/Projects/movie.jpg";
import superhero from "../../Assets/Projects/superhero.png";
import gameshare from "../../Assets/Projects/gameshare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superhero}
              isBlog={false}
              title="Super Heroes"
              description="The Super Heroes is a one stop shop website for Super Hero Zealots. We sell Super Hero Merchandise for all age groups. We embedded all the essential CRUDi functions and added animations for a fun user experience. We had achieved a 100% code coverage and we used agile methodology to develop and deployed the product on Microsoft Azure."
              ghLink="https://github.com/vikshitkode/Team-14-Super-Heroes"
              demoLink="https://5110superheroes.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameshare}
              isBlog={false}
              title="Game Share UX Design"
              description="Introducing GameShare, the ultimate solution for gamers seeking flexibility without long-term commitment. Our app empowers community members to effortlessly rent and return a wide array of gaming essentials, from games and consoles to accessories and controllers. With user-friendly features like product posting, seamless rental and return processes, and the ability to post their experiences or queries on the community forum, GameShare ensures a streamlined and trustworthy experience."
              ghLink="https://github.com/vikshitkode/GameShare-UXDesign"
              demoLink="https://gameshare.my.canva.site/gameshare-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie_plot_LLM"
              description="Fine-tuned the DistilGPT-2 language model using the Hugging Face Transformers library and PyTorch to generate creative movie plots. Trained the NLP model on a Kaggle dataset in Python 3, ensuring efficient code management. Implemented advanced NLP techniques to construct meaningful sentences and used Streamlit to create an intuitive UI, demonstrating the potential of AI in creative writing and achieving high-quality plot generation."
              ghLink="https://github.com/vikshitkode/Movie_plot_LLM"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherWise"
              description="WeatherWise is a sleek and intuitive weather application built using Flutter, designed to provide real-time weather updates with ease. Powered by a reliable weather API, the app offers accurate and up-to-date information, including current temperature, weather conditions, humidity levels, wind speed, and forecasts for the coming days. The user-friendly interface ensures a seamless experience, with features such as location-based weather tracking, easy-to-read visualizations, and a customizable dashboard. Whether you're planning your day or checking for potential storms, WeatherWise keeps you informed with all the essential weather data at your fingertips."
              ghLink="https://github.com/vikshitkode/weather_app_flutter"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dial}
              isBlog={false}
              title="Dial-a-Ride Problem with Constraint Satisfaction"
              description="Dial-a-ride problems (DARP) have become a popular topic in logistics in recent years. They are frequently used in transportation, goods distribution, and fast delivery. The DARP is an NP-hard optimization problem in which the objective is to organize transmutations from pickup to delivery locations of geographically dispersed customers. Multiple exact and heuristic approaches have been proposed in the literature to solve the DARP. In this paper, we propose a novel algorithm that combines a variable neighborhood search with constraint propagation to solve this problem. Variable neighborhood search is a metaheuristic that iteratively modifies routes to improve the quality of an incumbent solution. Constraint propagation makes use of techniques like backtracking, forward filtering, consistency enforcement to iteratively restrict the possible routes in the problem. Combining the two approaches, one obtains an algorithm that has good properties in terms of runtime and solution quality."
              ghLink="https://github.com/vikshitkode/VRP_with_CSP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
