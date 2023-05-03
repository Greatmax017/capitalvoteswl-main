import { Text } from '@nextui-org/react';
import { AppleIcon, GoogleplayIcon } from '../icons';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer id="footer" className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerText}>
					<h5> Copyright © 2023 Capital Votes </h5>	
					
				</div>

				<div className={styles.footerIcons}>
					<div className={styles.appleIcon}>
						<button type="button">
							<div>
								<AppleIcon />
							</div>
							<div className={styles.appleText}>
								<p className={styles.primary}>Soon on</p>
								<p className={styles.secondary}>App Store</p>
							</div>
						</button>
					</div>

					<div className={styles.googleplayIcon}>
						<button type="button">
							<div>
								<GoogleplayIcon />
							</div>
							<div className={styles.googleplayText}>
								<p className={styles.primary}>Soon on </p>
								<p className={styles.secondary}>Play Store </p>
							</div>
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
