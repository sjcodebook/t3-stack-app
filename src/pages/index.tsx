import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <h1 className="text-4xl font-bold text-white">Sign In</h1>
          {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
