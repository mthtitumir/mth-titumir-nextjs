import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 justify-center">
      {socialLinks.map((item) => (
        <Link
          key={item.title}
          target="_blank"
          href={item.url}
          className="project-link"
          title={item.title}
        >
          <item.icon size={20} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
