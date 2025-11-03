import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodApp from "../../Assets/Projects/food-app.png";
import emotion from "../../Assets/Projects/emotion.png";
import bookStore from "../../Assets/Projects/book-store.png";
import quiz from "../../Assets/Projects/quiz-app.png";
import suicide from "../../Assets/Projects/suicide.png";
import pms from "../../Assets/Projects/pms.png";

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
              imgPath={quiz}
              isBlog={false}
              title="QuizWiz"
              description="A web application built with React, TypeScript, Tailwind CSS, React Hook Form, and Axios. It enables instructors to create and manage quizzes, organize student groups, and schedule exams, while students can take quizzes with a live countdown timer. The system includes dynamic forms, real-time updates, and role-based dashboards for both instructors and students."
              ghLink="https://github.com/RawanSadek/Quiz-App.git"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="Project management System"
              description="A team-built Project Management System designed for efficient task and project tracking. It includes authentication with role-based access, interactive dashboards, and advanced filtering and search. Built using React, TypeScript, Tailwind CSS, Axios, and React Pro Sidebar."
              ghLink="https://github.com/RawanSadek/Project-Management-System.git"
              demoLink="https://lnkd.in/dh9qr4KM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookStore}
              isBlog={false}
              title="Online Book Store"
              description="A fully featured e-commerce web application built with React + TypeScript. This project simulates a real-world online bookstore, complete with user authentication, product filtering, cart functionality, and secure payments using Stripe."
              ghLink="https://github.com/RawanSadek/Online-Book-Store.git"
              demoLink="https://online-bookstore-modern.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food App"
              description="A responsive food app built with Vite + React, featuring complete authentication, admin and user portals, and full CRUD management with React Context."
              ghLink="https://github.com/RawanSadek/FoodApp.git"
              demoLink="https://food-app-zeta-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Manaement System"
              description="A full-featured hotel management and booking system that allows users to explore rooms, view details, manage favorites, and complete secure online payments through Stripe. The admin dashboard provides complete control over rooms, facilities, ads, users, and bookings with full CRUD functionality. Built with React.js, TypeScript, Material UI, React Router, React Hook Form, React Context, Axios, and integrated with Stripe for seamless payment processing."
              ghLink="https://github.com/RawanSadek/hotel-system.git"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Free Land"
              description="A modern and fully responsive UI design built using HTML, Bootstrap and Custom CSS styling. This project focuses purely on the **frontend layout and styling**, showcasing clean design, structured layout, and responsive elements"
              ghLink="https://github.com/RawanSadek/Free-Land.git"
              demoLink="https://rawansadek.github.io/Free-Land//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
