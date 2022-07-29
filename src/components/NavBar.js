import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/coder.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 200) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href="/portfolio">
						<img src={logo} alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('skills')}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#profiles"
								className={
									activeLink === 'profiles'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('profiles')}
							>
								Profiles
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === 'projects'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('projects')}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a
									href="https://www.linkedin.com/in/trevor-akshay/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={navIcon1} alt="linkedIn" />
								</a>
								<a
									href="https://www.facebook.com/akshay.trevor"
									target="_blank"
									rel="noreferrer"
								>
									<img src={navIcon2} alt="facebook" />
								</a>
								<a
									href="https://www.instagram.com/trevor__akshay/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={navIcon3} alt="instagram" />
								</a>
							</div>
							<a href="https://drive.google.com/u/0/uc?id=1c2mK0RNHwtBy7LponTPOOntRcehwlNq6&export=download" target="_blank"
									rel="noreferrer">
								<button className="vvd">
									<span>Resume</span>
								</button>
							</a>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
