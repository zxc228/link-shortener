"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCreateLink } from "@/hooks/useCreateLink";
import { useFetchLinkInfo } from "@/hooks/useFetchLinkInfo";
import Modal from "@/components/Modal";
import LinkResult from "@/components/LinkResult";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function LinkForm() {
  const [originalUrl, setOriginalUrl] = useState("");

  const { createLink, loading: creating, error: createError, shortLink } = useCreateLink();
  const { fetchInfo, loading: fetching, error: fetchError, info } = useFetchLinkInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUrl = originalUrl.trim();

    if (trimmedUrl.startsWith("http://localhost:8000/r/")) {
      const shortKey = trimmedUrl.split("/").pop();
      if (shortKey) {
        await fetchInfo(shortKey);
        setIsModalOpen(true);
      }
    } else {
      await createLink(trimmedUrl);
    }
  };

  return (
    <motion.div
      className="max-w-xl w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        🔗 Shorten Your Link
      </h2>

      <p className="text-center text-gray-500 mb-8 text-sm">
        Paste a link to shorten it — or insert a short link to view stats 📊
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="url"
          required
          placeholder="https://your-long-link.com"
          className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />

        <button
          type="submit"
          disabled={creating || fetching}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform active:scale-95"
        >
          {creating || fetching ? <LoadingSpinner /> : "Submit"}
        </button>
      </form>

      {createError && <p className="text-red-500 mt-4 text-center">{createError}</p>}
      {fetchError && <p className="text-red-500 mt-4 text-center">{fetchError}</p>}

      {shortLink && <LinkResult shortUrl={shortLink} />}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {fetching ? (
          <p className="text-center text-gray-700">Loading stats...</p>
        ) : fetchError ? (
          <p className="text-red-500 text-center">{fetchError}</p>
        ) : info ? (
          <div className="text-center space-y-5">
            <h2 className="text-2xl font-bold text-gray-800">📊 Link Stats</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-600">Original URL:</span><br />
                <a
                  href={info.original_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {info.original_url}
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-600">Clicks:</span> {info.clicks}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Created at:</span><br />
                {new Date(info.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        ) : null}
      </Modal>
    </motion.div>
  );
}
