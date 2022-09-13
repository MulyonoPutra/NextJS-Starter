import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import styles from '../../styles/User.module.css';
import { IUser } from '../../interface/user.interface';

interface UserProps {
  userInfo: IUser[];
}

export default function User(props: UserProps) {
	const { userInfo } = props;
	const router = useRouter();

	return (
		<Layout pageTitle='Users'>
			<div className={styles.grids}>
				{userInfo?.map(data => {
					return (
						<div key={data?.id}>
							<div className={styles.card} onClick={() => router.push(`/user/${data.id}`)}>
								<a href="#">
									<h5 className={styles.username}>{data.username}</h5>
								</a>
								<p className={styles.text}>{data.name}</p>
								<p className={styles.text}>{data.email}</p>
								<p className={styles.text}>{data.address.street}, {data.address.suite} {data.address.city}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>);
}

// Data disiapkan terlebih dahulu sebelum di render
// Pro: Cocok jika data tidak terlalu sering berubah
// Const: ketika data bersifat dinamis maka harus me-refresh browser
export async function getStaticProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const userInfo = await response.json();
	return {
		props: {
			userInfo,
		},
	};
}
