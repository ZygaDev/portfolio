import React from 'react';
import { informations } from 'data/data';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
	faCoffee,
	faCode,
	faShoppingCart,
	faCouch,
	faEnvelope,
	faCog,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

class Resume extends React.Component {
	render() {
		return (
			<>
				<Container fluid className='counter' id='counter'>
					<Row>
						<Col sm={3}>
							<FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
							<div className='count' data-target='523'>
								523
							</div>
							<p>Cups of coffee</p>
						</Col>
						<Col sm={3}>
							<FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
							<div className='count' data-target='15'>
								15
							</div>
							<p>Website Complete</p>
						</Col>
						<Col sm={3}>
							<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
							<div className='count' data-target='10'>
								10
							</div>
							<p>Online Shops Complete</p>
						</Col>
						<Col sm={3}>
							<FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
							<div className='count' data-target='440'>
								440
							</div>
							<p>Hours of watching 'Friends'</p>
						</Col>
					</Row>
				</Container>{' '}
				<Container fluid className='resume' id='resume'>
					<Row>
						<Col className='illustration-editor'>
							<div className='code-blocks'>
								<div className='code code-html'>
									<header>
										<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
										<h1>HTML</h1>
										<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
									</header>
									<div className='code-content'>
										{
											<code>
												<span className='c-p'>{`<h2>`}</span>
												<span className='c-w'>
													{' '}
													Find me on my social media
												</span>

												<span className='c-p'>{`</h2>`}</span>
											</code>
										}
									</div>
								</div>
								<div className='code code-css'>
									<header>
										<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
										<h1>CSS</h1>
										<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
									</header>
									<div className='code-content'>
										{
											<>
												<p className='line-1'>
													<span className='c-y'>.icons </span>
													<span className='c-p'>{`{`}</span>
												</p>
												<br />
												<p className='line-2'>
													<span className='fw'>color</span>
													<span>:</span>
													<span className='c-y'> $white;</span>{' '}
												</p>
												<br />
												<p>
													<span className='fw'>height: </span>{' '}
													<span className='c-o'>7rem;</span>
													<br />
													<span className='c-p'>{`}`}</span>
												</p>
											</>
										}
									</div>
								</div>
								<div className='code code-js'>
									<header>
										<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
										<h1>JS</h1>
										<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
									</header>
									<div className='code-content'>
										{
											<code>
												<span className='c-p'>{`import  `}</span>
												<span className='c-w'>{`React`}</span>
												<span className='c-p'>{` from `}</span>
												<span className='c-w'>{`'react';`}</span>
												<br />
												<br />
												<span className='c-p'>{`import  `}</span>
												<span className='c-w'>{`{ FontAwesomeIcon } `}</span>
												<span className='c-p'>{` from `}</span>{' '}
												<span className='c-w'>{`  '@fortawesome/react-fontawesome';`}</span>
												<p className='line-3'>
													{' '}
													<span className='c-p'>{``}</span>
												</p>
											</code>
										}
									</div>
								</div>
							</div>
						</Col>
						<Col>
							<div className='social' id='social'>
								<h2>Let's talk!</h2>
								<div className='icons'>
									<a href='https://github.com/ZygaDev/'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
									<a href='https://www.facebook.com/AmandaZygmanska'>
										<FontAwesomeIcon icon={faFacebook} />
									</a>
									<a href='https://www.linkedin.com/in/azygmanska/'>
										<FontAwesomeIcon icon={faLinkedin} />
									</a>
									<a href='mailto:amandazygmanska@gmail.com'>
										<FontAwesomeIcon icon={faEnvelope} />
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Resume;
