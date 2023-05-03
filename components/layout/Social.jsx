import { Link } from '@nextui-org/react';
import Logo from './Logo';
import styled from 'styled-components';
import styles from './Social.module.css';

const Social = ({ url, icon }) => {
	return (
		<div>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<div className={styles.socialIcon}>{icon}</div>
			</a>
		</div>
	);
};

export default Social;
