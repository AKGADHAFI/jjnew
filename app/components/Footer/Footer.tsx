import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLink[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const FooterSocialLinks = () => {
  return (
    <div className="py-10 border-t border-t-bordertop">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                <Image
                  src={item.imgSrc}
                  alt={item.link}
                  width={item.width}
                  height={item.width}
                  className="sepiaa"
                />
              </div>
            </Link>
          ))}
        </div>
        {/* Footer Text */}
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal mt-5 md:mt-0">
          @ 2024 J J Black Forest Web Page. Design by{" "}
          <Link
            href="https://www.linkedin.com/in/abdul-kareem-gadhafi-a-355533213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AKG
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
