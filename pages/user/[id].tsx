import React from 'react'
import { useRouter } from 'next/router';
import Layout from './../../components/layout/index';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
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
            <Layout>
                <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                </div>
            </Layout>
        </>
    )
}

// Fungsi getStaticPaths adalah untuk generate halaman static HTML sejumlah data yang kita miliki
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userInfo = await response.json();
    const paths = userInfo.map((user:User) => {
        return {
            params: {
                id: `${user.id}`
            }
        }
    })
    return {
        paths,
        fallback: true
    }
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
    }
}