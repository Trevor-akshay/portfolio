import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import hotelBooking from '../assets/img/hotelBooking.png';
import ecommerce from '../assets/img/ecommerce.png';
import reddit from '../assets/img/Reddit.png';

export const Projects = () => {
	const projects = [
		{
			title: 'Hotel reservation application',
			description: `Full-stack app with an internal admin dashboard to manage all the users and hotels.
			Responsive design with pagination and react custom hooks and react calendar.
			Improved security by adding JWT tokens for sign-up and refresh token for login.
			4-Layer architecture system consisting of Controllers, Services, Models, Routes, and Middleware.`,
			techStack: `Node.js, Express.js, React.js, Bootstrap, MongoDB, RESTful API, CSS3, JSX`,
			sourceCode: `https://github.com/Trevor-akshay/Hotel-Tonight`,
			imgUrl: hotelBooking,
		},
		{
			title: 'E-commerce website (Backend)',
			description: `100% full-fledged RESTful API CRUD app using Express.JS with MongoDB as a persistence layer.
			Followed Test Driven Development (TDD) with proper test automation for integration test.
			Developed role-based authorization and authentication using JSON Web Token (JWT) as a refresh token.	
			Improved security by 35% by adding email-verification and two-factor authentication with support to pagination`,
			techStack: `Node.js, Express.js, MongoDB, RESTful API`,
			sourceCode: `https://github.com/Trevor-akshay/E-Commerce-app`,
			imgUrl: ecommerce,
		},
		{
			title: 'Reddit website clone (Backend)',
			description: `Developed a reddit website clone with user authentication and authorization using JSON Web tokens and optimizations on Database by B-Trees`,
			techStack: `Spring-boot, MySQL, RESTful API, Hibernate`,
			sourceCode: 'https://github.com/Trevor-akshay/Reddit-Clone-Spring-boot',
			imgUrl: reddit,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Projects</h2>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
									<p>
										<a
											href="https://github.com/Trevor-akshay/"
											target="_blank"
											rel="noreferrer"
										>
											<p>
												Love to see more of my work ?
												<span>
													{'  '}
													<ArrowRightCircle size={25} />
												</span>
											</p>
										</a>
									</p>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
				alt="Background-img"
			></img>
		</section>
	);
};
