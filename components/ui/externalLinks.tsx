import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const ExternalLink = ({ href, children, className }) => {
    return (
      <Link
        href={href}
        className={`font-medium text-pink-600 hover:text-pink-700 flex items-center ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{children}</span>
        <TbExternalLink className="text-pink-600 inline mx-1" size={20} style={{ verticalAlign: 'middle' }} />
      </Link>
    );
  };
  