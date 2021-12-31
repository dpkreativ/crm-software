import Like from "../atoms/Like";
import ProfileImage from "../atoms/ProfileImage";

const ContactCard = ({
  imageUrl = "/assets/image.png",
  name = "John Doe",
  description = "New Connection",
  favourite,
}) => {
  return (
    <div className="p-5 flex items-center justify-between cursor-pointer">
      <div className="flex items-center space-x-5">
        <ProfileImage url={imageUrl} />
        <div>
          <h2 className="font-semibold">{name}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <div>
        <Like checkActive={favourite} />
      </div>
    </div>
  );
};

export default ContactCard;
