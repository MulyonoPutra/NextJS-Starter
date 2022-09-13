import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
	return (
		<div>
			<header>
				<nav className={styles.navbar}>
					<div className={styles.wrapper}>
						<Link href="/" className="flex items-center">
							<img
								src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
								className="mr-3 h-12 sm:h-9"
								alt="Next Logo"
							/>
						</Link>
						<div className={styles.listWrapper}>
							<ul className={styles.ulWrapper}>
								<li>
									<Link href="/" className={styles.titles}>
                    Home
									</Link>
								</li>
								<li>
									<Link href="/user" className={styles.titles}>
                    User
									</Link>
								</li>
								<li>
									<Link href="/articles" className={styles.titles}>
                    Articles
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

