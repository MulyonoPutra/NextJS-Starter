import React from 'react';
import Layout from './../../components/layout/index';
import { IUser } from '../../interface/user.interface';

interface UserDetailProps {
    user: IUser;
}

interface GetStaticProps {
    params: {
        id: string
    }
}

export default function UserDetails(props: UserDetailProps) {
	const { user } = props;
	return (
		<>
			<Layout pageTitle='User Details'>
				<div className='flex justify-center'>
					<div className="block p-6 w-full m-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user?.name}</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">{user?.email}</p>
						<p className="font-normal text-gray-700 dark:text-gray-400">{user?.phone}</p>
						<p className="font-normal text-gray-700 dark:text-gray-400">{user?.website}</p>
					</div>
				</div>
			</Layout>
		</>
	);
}

// Fungsi getStaticPaths adalah untuk generate halaman static HTML sejumlah data yang kita miliki
export async function getStaticPaths() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const userInfo = await response.json();
	const paths = userInfo.map((user: IUser) => {
		return {
			params: {
				id: `${user.id}`
			}
		};
	});
	return {
		paths,
		fallback: true
	};
}

// Fungsi getStaticProps: untuk memberikan data permasing-masing User
export async function getStaticProps(context: GetStaticProps) {
	const { id } = context.params;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const user = await response.json();
	return {
		props: {
			user
		}
	};
}