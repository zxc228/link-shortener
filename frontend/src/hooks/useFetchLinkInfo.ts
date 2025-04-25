"use client";

import { useState } from "react";
import { getLinkInfo } from "@/lib/api";
import { LinkInfo } from "@/types/link"; 

export function useFetchLinkInfo() {
  const [info, setInfo] = useState<LinkInfo | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInfo = async (shortKey: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getLinkInfo(shortKey);
      setInfo(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch link info");
    } finally {
      setLoading(false);
    }
  };

  return { fetchInfo, loading, error, info };
}
