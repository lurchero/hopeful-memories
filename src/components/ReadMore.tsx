"use client";

import { useState } from "react";

const CHAR_LIMIT = 150;

export default function ReadMore({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = text.length > CHAR_LIMIT;

  if (!needsTruncation) {
    return <p className={className}>{text}</p>;
  }

  const truncated = text.slice(0, CHAR_LIMIT).replace(/\s+\S*$/, "") + "...";

  return (
    <p className={className}>
      {expanded ? text : truncated}{" "}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-accent text-sm font-medium underline-offset-4 hover:underline transition-colors duration-200 inline"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
