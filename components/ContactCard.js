import Image from "next/image";
import { HeartOutline } from "./Icons";

const ContactCard = ({
  imageUrl = "/assets/image.png",
  name = "John Doe",
  description = "New Connection",
}) => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </div>
        <div>
          <h2 className="font-semibold">{name}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <div>
        <HeartOutline />
      </div>
    </div>
  );
};

export default ContactCard;
