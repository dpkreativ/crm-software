import Link from "next/link";

const Tab = ({ url = "/", icon, text, className }) => {
  return (
    <Link href={url} passHref>
      <a>
        <div
          className={`flex space-x-3 p-2 rounded-xl cursor-pointer hover:shadow ${className}`}
        >
          <div>{icon}</div>
          <div>{text}</div>
        </div>
      </a>
    </Link>
  );
};

export default Tab;
