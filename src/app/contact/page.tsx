import { contactData } from "@/constants/contact";
import { icons } from "@/icons";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div>
      <section className="border-main h-[350px] w-full overflow-hidden rounded-xl">
        <figure className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59057.74815598789!2d91.783154!3d22.31170725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdec55dd23931%3A0xb4f7439c6623a22e!2sHalishahar%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1718331933357!5m2!1sen!2sbd"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </figure>
      </section>
      <section className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-main"></div>
        <span className="flex-shrink mx-4 text-2xl text-center text-slate-200">
          Find Me
        </span>
        <div className="flex-grow border-t border-main"></div>
      </section>
      {/* icons  */}
      <div className="flex flex-wrap gap-5 items-center">
        {contactData?.map((contact, index) => (
          <Link
            href={contact.url}
            target="_blank"
            key={index}
            className="flex items-center min-w-full md:min-w-4 gap-4 border-main px-5 py-3 rounded-md hover:bg-slate-800"
            title={contact.url}
          >
            <div className="flex items-center justify-center rounded-lg p-2 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 text-sky-600">
              <contact.icon size={16} />
            </div>
            <div>
              <h1 className="text-md text-slate-400">{contact.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
