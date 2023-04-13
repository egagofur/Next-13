"use client";

import { Suspense } from "react";
import useSWR from "swr";

const getDataUser = async (param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
};

const getDataRepos = async (param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((r) => setTimeout(r, 1000));
  return res.json();
};

type Props = {
  slug: string;
};

const RepoList = ({ slug }: Props) => {
  const { data: dataRepos, error } = useSWR(slug, getDataRepos, {
    revalidateOnMount: true,
    refreshInterval: 2000,
  });

  if (error) return <div>Error loading repositories.</div>;
  if (!dataRepos) return <div>Loading repositories...</div>;

  return (
    <>
      <h2>List repository</h2>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default function DetailCari({ params }: { params: { slug: string } }) {
  const { data: dataUser, error } = useSWR(params.slug, getDataUser, {
    revalidateOnMount: true,
  });

  if (error) return <div>Error loading user data.</div>;
  if (!dataUser) return <div>Loading user data...</div>;

  return (
    <div>
      <p>Detail user github : {params.slug}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <RepoList slug={params.slug} />
      </Suspense>
    </div>
  );
}
