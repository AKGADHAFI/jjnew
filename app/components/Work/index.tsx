"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/cake.svg",
    heading: "Birthday Special Cake",
    subheading: "Celebration Cakes, Festive Cakes, Party Cakes.",
  },
  {
    imgSrc: "/images/Features/snacks.svg",
    heading: "Snacks",
    subheading: "Appetizers, Finger Foods, Bite.",
  },
  {
    imgSrc: "/images/Features/cookies.svg",
    heading: "Cookies",
    subheading: "Biscuits, Sweet Treats, Baked Delights.",
  },
  {
    imgSrc: "/images/Features/drink.svg",
    heading: "Cooldrinks and Juices",
    subheading: "Beverages, Refreshments, Chilled Drinks.",
  },
  {
    imgSrc: "/images/Features/ice-cream.svg",
    heading: "Ice Creams",
    subheading: "Frozen Desserts, Gelato, Creamy Delights.",
  },
  {
    imgSrc: "/images/Features/coffee.svg",
    heading: "Tea-Coffee",
    subheading: "Hot Beverages, Brewed Drinks, Warm Sips.",
  },
  {
    imgSrc: "/images/Features/laddu.svg",
    heading: "Sweets and Desserts",
    subheading: "Sweet Treats, Sugary Delights.",
  },
  {
    imgSrc: "/images/Features/sweets.svg",
    heading: "Candies and Chocolates",
    subheading: "Confections, Candy Treats, Sugar Drops.",
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              Our Distinctive Bakes
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-lightgrey">
              Indulge in Our Signature Flavors and <br /> Specialities.
            </p>
          </Fade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          <Fade
            direction={"up"}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="card-b p-8 relative rounded-3xl" key={i}>
                <div className="work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-1/2 transform -translate-x-1/2">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={150}
                    height={140}
                    className="w-[150px] h-[140px] sm:h-[100px] md:h-[90px] lg:h-[120px]"
                  />
                </div>

                <h3 className="text-2xl text-black font-semibold text-center mt-16">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
                  {items.subheading} <br /> <br />
                </p>
                <div className="flex items-center justify-center">
                  {/* <Link href='/'><p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>{items.link}</p></Link> */}
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
