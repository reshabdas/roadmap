import { FaTwitter, FaLinkedin, FaFacebook, FaLink } from "react-icons/fa";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const text = `Check out this awesome developer roadmap for ${title} on Roadmap Pro!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-4 my-6">
      <span className="text-md font-semibold text-gray-400">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={22} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Share on Facebook"
      >
        <FaFacebook size={22} />
      </a>
      <button
        onClick={copyToClipboard}
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Copy link"
      >
        <FaLink size={22} />
      </button>
      {copied && (
        <span className="text-sm text-green-400 animate-pulse">Copied!</span>
      )}
    </div>
  );
};

export default ShareButtons;
