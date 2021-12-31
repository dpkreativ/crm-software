import Image from "next/image";

const ProfileImage = ({ border, large, url }) => {
  return (
    <div
      className={`relative rounded-full overflow-hidden ${
        large ? "w-32 h-32" : "w-12 h-12"
      } ${border ? "border-primary-100 border-4" : ""}`}
    >
      <Image src={url} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ProfileImage;
