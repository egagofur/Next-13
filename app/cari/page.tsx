"use client";

import { useState } from "react";
import SectionResult from "./sectionResult";

export default function Cari() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div className="bg-gray-800">
      <form onSubmit={onSearch}>
        <input type="text" placeholder="cari orang github" />
        <button type="submit">Cari orang</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
