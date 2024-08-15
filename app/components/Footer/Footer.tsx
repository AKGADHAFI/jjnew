import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="py-10 border-t border-t-bordertop">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Contact Info */}
        <div className="mb-8">
          <Image
            src="/images/Logo/img.svg"
            alt="J J Black Forest Logo"
            width={50}
            height={50}
          />
          <h4 className="text-darkgrey text-xl md:text-2xl font-semibold mt-4">J J Black Forest</h4>
          
          {/* Address */}
          <div className="flex items-center text-base md:text-lg text-darkgrey mt-4">
            <FaMapMarkerAlt className="mr-2" />
            <span>Madurai Road , APSA College, Thirupathur, Sivagangai-630 211, Tamil Nadu.</span>
          </div>
          
          {/* Phone */}
          <div className="flex items-center text-base md:text-lg text-darkgrey mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>+91 90807 95769</span>
          </div>
          
          {/* Email */}
          <div className="flex items-center text-base md:text-lg text-darkgrey mt-2">
            <FaEnvelope className="mr-2" />
            <span>jjblackforest@gmail.com</span>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-auto w-full text-center md:text-left">
          <h4 className="text-darkgrey text-sm font-normal mt-5">
            @ 2024 J J Black Forest Web Page. Design by{" "}
            <Link
              href="https://www.linkedin.com/in/abdul-kareem-gadhafi-a-355533213/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              AKG
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
