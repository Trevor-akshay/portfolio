import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp1 from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import nodejs from '../assets/img/nodejs.png';
import expressjs from '../assets/img/expressjs.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import mongodb from '../assets/img/mongodb.png';
import java from '../assets/img/java.png';
import postqresql from '../assets/img/postqresql.png';
import spring from '../assets/img/spring.png';
import git from '../assets/img/git.png';
import typescript from '../assets/img/typescript.png';
import golang from '../assets/img/golang.png';
import html5 from '../assets/img/html5.png';
import css3 from '../assets/img/css3.png';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={nodejs} alt="Node.js" />
									<h5>Node.js</h5>
								</div>
								<div className="item">
									<img src={react} alt="React.js" />
									<h5>React.js</h5>
								</div>
								<div className="item">
									<img src={mongodb} alt="mongodb" />
									<h5>MongoDB</h5>
								</div>
								<div className="item">
									<img src={expressjs} alt="Express.js" />
									<h5>Express.js</h5>
								</div>
								<div className="item">
									<img src={typescript} alt="Typescript" />
									<h5>Typescript</h5>
								</div>
								<div className="item">
									<img src={postqresql} alt="postqresql" />
									<h5>PostqreSQL</h5>
								</div>
								<div className="item">
									<img src={java} alt="java" />
									<h5>Java</h5>
								</div>
								<div className="item">
									<img src={spring} alt="Spring" />
									<h5>Spring-boot</h5>
								</div>
								<div className="item">
									<img src={git} alt="git" />
									<h5>Git</h5>
								</div>
								<div className="item">
									<img src={javascript} alt="javascript" />
									<h5>Javascript</h5>
								</div>
								<div className="item">
									<img src={html5} alt="HTML" />
									<h5>HTML 5</h5>
								</div>
								<div className="item">
									<img src={css3} alt="CSS" />
									<h5>CSS 3</h5>
								</div>
								<div className="item">
									<img src={golang} alt="GoLang" />
									<h5>GoLang</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp1} alt="" />
			<img className="background-image-right" src={colorSharp2} alt="" />
		</section>
	);
};
