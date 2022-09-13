import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import icons from '../public/icons/404.svg';

export default function PageNotFound404 () {

	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div>
			<section>
				<div className="bg-black text-white">
					<div className="flex h-screen">
						<div className="m-auto text-center">
							<div>
								<Image src={icons} alt="404" height={379} width={631} />
							</div>
							<p className="text-sm md:text-base text-yellow-300 p-2 mb-4">
                                The stuff you were looking for does not exist
							</p>
							<a
								href="/"
								className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
							>
                                Retry
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}