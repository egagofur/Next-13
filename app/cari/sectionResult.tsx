"use client";

import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  query: string;
};

export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );
  let loading = !data && !error;
  return (
    <div>
      Hasil pencarian : {query}
      {loading && <div>Loading...</div>}
      <div>
        {data &&
          data.items.map((user: any, index: number) => {
            return (
              <div key={index}>
                <li>
                  <Link href={`/cari/${user.login}`}>{user.login}</Link>
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
}
