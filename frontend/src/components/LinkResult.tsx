"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import { useFetchLinkInfo } from "@/hooks/useFetchLinkInfo";
import { toast } from "react-hot-toast";


interface LinkResultProps {
  shortUrl: string;
}

export default function LinkResult({ shortUrl }: LinkResultProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchInfo, info, loading, error } = useFetchLinkInfo();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
     toast.success("Copied to clipboard! 🚀");
  };

  const handleViewStats = async () => {
    const shortKey = shortUrl.split("/").pop(); 
    if (shortKey) {
      await fetchInfo(shortKey);
      setIsModalOpen(true);
    }
  };

  return (
    <motion.div
      className="mt-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-700 mb-2">Your short link:</p>
      <a
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold break-all hover:underline"
      >
        {shortUrl}
      </a>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Copy Link
        </button>

        <button
          onClick={handleViewStats}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
        >
          View Stats
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : info ? (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">Link Stats</h2>
            <p>
              <span className="font-semibold">Original URL:</span> <br />
              <a
                href={info.original_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                {info.original_url}
              </a>
            </p>
            <p>
              <span className="font-semibold">Clicks:</span> {info.clicks}
            </p>
            <p>
              <span className="font-semibold">Created at:</span>{" "}
              {new Date(info.created_at).toLocaleString()}
            </p>
          </div>
        ) : null}
      </Modal>
    </motion.div>
  );
}
