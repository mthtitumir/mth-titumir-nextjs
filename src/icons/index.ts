import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram, FaGithubSquare, FaRegLightbulb, FaAward } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMenuBook, MdManageAccounts, MdApps } from "react-icons/md";

export const icons = {
    contact: {
        email: HiOutlineMail,
        phone: IoPhonePortraitOutline,
        location: IoLocationOutline,
    },
    social: {
        facebook: FaFacebook,
        linkedIn: FaLinkedin,
        twitter: FaTwitterSquare,
        instagram: FaInstagram,
        github: FaGithubSquare,
        codeForces: SiCodeforces,
        browser: TbWorld,
    },
    resume: {
        education: MdOutlineMenuBook,
        experience: MdManageAccounts,
        projects: MdApps,
        skills: FaRegLightbulb,
        language: TbWorld,
        certificate: FaAward
    }
}