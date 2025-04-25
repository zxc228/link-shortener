"use client";

import { useState } from "react";
import { createShortLink } from "@/lib/api";

export function useCreateLink() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shortLink, setShortLink] = useState<string | null>(null);

  const createLink = async (originalUrl: string) => {
    setLoading(true);
    setError(null);
    setShortLink(null);

    try {
      const data = await createShortLink(originalUrl);
      setShortLink(`http://localhost:8000/r/${data.short_key}`);
    } catch (err) {
        console.error(err);
      setError("Failed to create short link");
    } finally {
      setLoading(false);
    }
  };

  return { createLink, loading, error, shortLink };
}
