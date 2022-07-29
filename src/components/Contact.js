import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import emailjs from '@emailjs/browser';

import MuiAlert from '@material-ui/lab/Alert';

export const Contact = () => {
	const form = useRef();
	const formInitialDetails = {
		name: '',
		email: '',
		message: '',
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});

	const Alert = (props) => {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	};

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formDetails.name === '' || formDetails.email === '' || formDetails.message === '') {
			setStatus({ success: false, message: 'Please enter form details' });
			setButtonText('Send');
			return;
		}
		setButtonText('Sending...');
		emailjs
			.sendForm(
				'service_fsl6f3t',
				'template_6oacyw5',
				form.current,
				'i2meHKESeE_v5A7jX'
			)
			.then(
				(result) => {
					setStatus({ success: true, message: 'Message sent successfully' });
					setFormDetails(formInitialDetails);
					setButtonText('Send');
				},
				(error) => {
					console.log(error);
					setStatus({
						success: false,
						message: `${error.text}`,
					});
					setButtonText('Send');
				}
			);
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}
									src={contactImg}
									alt="Contact Us"
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Get In Touch</h2>
									<form ref={form} onSubmit={handleSubmit}>
										<Row>
											<Col size={12} sm={6} className="px-1">
												<input
													type="text"
													name="name"
													value={formDetails.name}
													placeholder="Name"
													onChange={(e) => onFormUpdate('name', e.target.value)}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													type="email"
													name="email"
													value={formDetails.email}
													placeholder="Email Address"
													onChange={(e) =>
														onFormUpdate('email', e.target.value)
													}
												/>
											</Col>
											<Col size={12} className="px-1">
												<textarea
													rows="6"
													name="message"
													value={formDetails.message}
													placeholder="Message"
													onChange={(e) =>
														onFormUpdate('message', e.target.value)
													}
												></textarea>
												<button type="submit">
													<span>{buttonText}</span>
												</button>
												<br></br>
												<br></br>

												{status.message === 'Please enter form details' &&
													<Alert severity="warning">Please enter form details!</Alert>

												}
												{status.message && status.message !== 'Please enter form details' && (
													<Alert
														Alert
														severity={
															status.status === false ? 'error' : 'success'
														}
													>
														{status.status === false ? 'Error' : 'Successful'}
													</Alert>
												)}
											</Col>
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
