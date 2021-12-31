import ContactCard from "@/molecules/ContactCard";

const ContactList = () => {
  return (
    <div>
      <ContactCard favourite={true} />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard favourite={true} />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default ContactList;
