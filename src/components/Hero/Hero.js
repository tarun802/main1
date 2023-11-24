import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {
	HeroSection,
	Heading,
	HeroText,
	ButtonContainer,
	HeroButton,
	ImageCharacter,
	HeroImage,
	HeroContent,
	ButtonWrapper,
	CharacterContainer,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';

const Hero = () => {
	const [showModal, setShowModal] = useState(false);
	const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

	const handleGetStarted = () => {
		window.location.href = 'https://main-tau-one.vercel.app/'; // Replace with the actual path or URL
	  };

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};

	const variants = {
		hover: {
			y: 15,
			transition: {
				yoyo: Infinity,
				duration: 0.6,
			},
		},
	};
	const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<>
			<HeroSection id="hero">
				<HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
				<HeroImage className="guy" src="" />
				<CharacterContainer>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="one"
						src=""
					/>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="two"
						src=""
					/>
					<ImageCharacter
						variants={variants}
						whileHover="hover"
						drag
						dragConstraints={dragConstraints}
						className="three"
						src=""
					/>
				</CharacterContainer>
				<HeroContent>
					<Heading>Podcasts Reimagined</Heading>
					<HeroText>
						Redefining your listening experience with a fresh, curated approach to diverse and engaging content.
					</HeroText>
					<ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={handleGetStarted}>
									<> Get Started</>
								
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
				</HeroContent>
			</HeroSection>
			<Modal showModal={showModal} toggleModal={toggleModal} />
		</>
	);
};

export default Hero;
