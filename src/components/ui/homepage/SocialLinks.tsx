import Link from "next/link"
import { icons } from "@/icons";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 justify-center">
          <Link target="_blank" href="https://github.com/mthtitumir">
            <icons.social.github size={20} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mthtitumir">
            <icons.social.linkedIn size={20} />
          </Link>
          <Link target="_blank" href="https://facebook.com/mthtitumir2023">
            <icons.social.facebook size={20} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/mthtitumir">
            <icons.social.instagram size={20} />
          </Link>
        </div>
  )
}

export default SocialLinks