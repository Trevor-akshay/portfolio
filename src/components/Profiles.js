import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp1 from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import github from '../assets/img/github.png';
import linkedin from '../assets/img/LinkedIn_logo_initials.png';
import leetcode from '../assets/img/LeetCode_logo_black.png';
import hackerrank from '../assets/img/HackerRank.png';
import codeforces from '../assets/img/codeforces.png';
import codechef from '../assets/img/codechef.png';

export const Profiles = () => {
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
		<section className="skill" id="profiles">
			<br></br>
			<br></br>
			<br></br>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Profiles</h2>
							<p>
								<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<a
										href="https://github.com/Trevor-akshay/"
										target="_blank"
										rel="noreferrer"
									>
										<img src={github} alt="github" />
									</a>
									<h5>Github</h5>
								</div>
								<div className="item">
									<a
										href="https://www.linkedin.com/in/trevor-akshay/"
										target="_blank"
										rel="noreferrer"
									>
										<img src={linkedin} alt="linkedin" />
									</a>
									<h5>LinkedIn</h5>
								</div>
								<div className="item">
									<a
										href="https://www.leetcode.com/Trevor-akshay"
										target="_blank"
										rel="noreferrer"
									>
										<img src={leetcode} alt="leetcode" />
									</a>
									<h5>LeetCode</h5>
								</div>
								<div className="item">
									<a
										href="https://www.hackerrank.com/trevorakshay"
										target="_blank"
										rel="noreferrer"
									>
										<img src={hackerrank} alt="hackerrank" />
									</a>
									<h5>HackerRank</h5>
								</div>
								<div className="item">
									<a
										href="https://codeforces.com/profile/Trevor_akshay"
										target="_blank"
										rel="noreferrer"
									>
										<img src={codeforces} alt="codeforces" />
									</a>
									<h5>CodeForces</h5>
								</div>
								<div className="item">
									<a
										href="https://www.codechef.com/users/trevor_akshay"
										target="_blank"
										rel="noreferrer"
									>
										<img src={codechef} alt="codechef" />
									</a>
									<h5>CodeChef</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp1} alt="" />
			<img className="background-image-right" src={colorSharp2} alt="" />
			<br></br>
			<br></br>
			<br></br>
		</section>
	);
};
