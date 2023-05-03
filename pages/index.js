import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Loading, Spacer, Text, Avatar } from '@nextui-org/react';
import Layout from '../components/layout/Layout';
import Alert from '../components/Alerts/Alert';
import Logo from '../components/layout/Logo';
import Social from '../components/layout/Social';
import { InstagramIcon, TwitterIcon } from '../components/icons';

const Home = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');
	const [error, setError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		if (!email){
			setError(true);
			setStatus("Please Enter a valid email address");
		}

		const res = await fetch("/api/subscribe", {
			method: "POST",
			body: JSON.stringify({ email }),
		});
		if (res) {
			setSubmitted(true);
			setSubmitting(false);
			if (res.status === 201){
				setEmail(" ");
				setError(false);
				setStatus("Thank you for joining the waitlist! We'll notify you as soon as spots become available.");
			} else {
				setError(true);
				setStatus("Error something wrong happened");
			}
			setTimeout(() => {
				setSubmitted(false);
			}, 4000);
		}
	};

	return (

	<Layout title="Capital Votes | WaitList "> 
		<div className={styles.container}>
			{ submitted ? (
				<Alert message={status} type={!error ? "success": "error"} />
			): (
				" "
			)}

			<div className={styles.innerWrapper}>
				<div className={styles.nav}>
					<div className={styles.logo}>
						<Logo />

						
					</div>
					<div className={styles.icons}>
						<Social
							url={'https://twitter.com/CapitalVotes'}
							icon={<TwitterIcon />}
						/>
						<Social
							url={'https://www.instagram.com/capitalvotes/'}
							icon={<InstagramIcon />}
						/>
					</div>
				</div>

				<section className={styles.container}>
					<div className={styles.hash}>
						<h3>#voting</h3>
						<h3>#entertainment</h3>
						<h3>#socialmedia</h3>
					</div>
					<Spacer y={1} />
					<h1 className={styles.heading}>
						Welcome to the Future <br />
						of Social Media &amp; Online Voting
					</h1>

					<div className={styles.form}>
						<form id="subscribe" name="waitlist" onSubmit={handleSubmit}>
							<div className={styles.input}>
								<input
									className={styles.formInput}
									aria-label="email"
									id="email"
									name="email"
									required
									type="email"
									placeholder="Your Email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<button type="submit" className={styles.btn}
									// onClick={(e) => {
									// 	handleSubmit(e);
									// }}
									>
									{submitting ? (
										<Loading type="spinner" color="white" size="sm" />
									) : (
										'Join Waitlist'
									)}
								</button>
							</div>
						</form>

						<div className={styles.avatars}>
							<div className={styles.avatar}>
								
								<Avatar 
									className={styles.avatargrid}
									size="xl"
									src="../assets/avatar-one.png"
									width={100}
									heigh={100}
									zoomed
									/>
							</div>
							<div className={styles.avatar}>
								
								<Avatar
									className={styles.avatargrid}
									size="xl"
									src="../assets/avatar-two.png"
									width={100}
									heigh={100}
									zoomed
									
									/>
							</div>
							<div className={styles.avatar}>
							
								<Avatar 
									className={styles.avatargrid}
									size="xl"
									src="../assets/avatar-three.png"
									width={100}
									heigh={100}
									zoomed
									
									/>
							</div>
							<div className={styles.avatar}>
								
								<Avatar 
									size="xl"
									src="../assets/avatar-four.png"
									width={100}
									heigh={100}
									className={styles.avatargrid}
									zoomed
									/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		</Layout>		
	);
};

export default Home;
