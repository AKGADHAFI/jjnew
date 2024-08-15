"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const images = [
    {
        src: "/images/Gallery/img1.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img2.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img3.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img4.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img5.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img6.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img7.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img8.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img9.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img10.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img11.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img12.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img13.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img14.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img15.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img16.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img17.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img18.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img19.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img20.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img21.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img22.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img23.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img24.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img25.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img26.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img27.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img28.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img29.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img30.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img31.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img32.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img33.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img34.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img35.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img36.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img37.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img38.jpg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img39.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img40.jpg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img41.jpeg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img42.jpeg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img43.jpeg",
        alt: "pizza-one",
        width: 700,
        height: 405,
    },
    {
        src: "/images/Gallery/img44.jpeg",
        alt: "pizza-two",
        width: 700,
        height: 405,
    },
    

];

const Gallery = () => {
    return (
        <div id="gallery-section">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Baked Highlights</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                            Gallery of our Bakery.
                        </h3>
                    </Fade>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-6 my-16 px-6'>
                    {images.map((image, index) => (
                        <div key={index} className='flex justify-center overflow-hidden rounded-3xl'>
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="inner-img"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
