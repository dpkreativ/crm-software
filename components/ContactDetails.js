import Image from "next/image";
import { Edit, HeartOutline, Mail, Note, PhoneOutline } from "./Icons";

const ContactDetails = ({
  imageUrl = "/assets/image.png",
  name = "John Doe",
  phone = "09087654321",
  email = "johndoe@mail.com",
}) => {
  return (
    <div>
      <section className="sticky top-0 p-5 bg-white shadow-sm">
        {/* Info */}
        <section className="flex space-x-5 items-center w-full">
          <div className="w-1/5">
            <div className="w-32 h-32 rounded-full overflow-hidden relative border-primary-100 border-4">
              <Image src={imageUrl} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-4/5">
            <div className="flex space-x-10 items-baseline">
              <h1 className="font-bold text-4xl">{name}</h1>
              <div>
                <HeartOutline />
              </div>
            </div>
            <div className="flex space-x-5 items-center mt-2">
              <h3 className="font-semibold text-sm">{phone}</h3>
              <h3 className="font-semibold text-sm">{email}</h3>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-5">
                <div className="p-2 rounded-2xl border-primary-100 border-2 w-max text-primary-100 cursor-pointer hover:bg-primary-200 hover:border-primary-200 hover:shadow hover:text-white">
                  <PhoneOutline width="18" height="18" />
                </div>
                <div className="p-2 rounded-2xl border-primary-100 border-2 w-max text-primary-100 cursor-pointer hover:bg-primary-200 hover:border-primary-200 hover:shadow hover:text-white">
                  <Mail width="18" height="18" />
                </div>
                <div className="p-2 rounded-2xl border-primary-100 border-2 w-max text-primary-100 cursor-pointer hover:bg-primary-200 hover:border-primary-200 hover:shadow hover:text-white">
                  <Note width="18" height="18" />
                </div>
              </div>
              <div>
                <div className="p-2 rounded-2xl border-primary-100 border-2 w-max text-primary-100 cursor-pointer hover:bg-primary-200 hover:border-primary-200 hover:shadow hover:text-white">
                  <Edit width="18" height="18" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Short Bio */}
        <section className="mt-5">
          <h3 className="font-semibold">Software Engineer / Tech Writer</h3>
          <p>
            John Doe is a dummy individual that I'm using to test out this app.
          </p>
        </section>
      </section>

      {/* Notes */}
      <section className="grid grid-cols-3 gap-3 p-5">
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note 1
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-100 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
        <div className="p-5 bg-gray-200 rounded-2xl border-2 border-white cursor-pointer hover:border-primary-200 hover:shadow hover:bg-primary-200 hover:text-white">
          This is a note
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
