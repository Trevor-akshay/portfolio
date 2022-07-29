import { Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({
	title,
	description,
	techStack,
	sourceCode,
	imgUrl,
}) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">
				<img src={imgUrl} alt="logo" className="logo" />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
					<br></br>
					<h6>TechStack : {techStack}</h6>
					<br></br>

					<a href={sourceCode} target="_blank" rel="noreferrer">
						<button
							style={{
								color: 'white',
								padding: '10px',
							}}
						>
							Source Code <ArrowRightCircle size={25} />
						</button>
					</a>
				</div>
			</div>
		</Col>
	);
};
