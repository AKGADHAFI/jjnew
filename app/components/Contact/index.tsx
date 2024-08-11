"use client"
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
// import emailjs from "@emailjs/browser";

// Define the shape of the data prop
interface ContactProps {
  data?: {
    address?: string;
    phone?: string;
    email?: string;
  };
}

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ data }: ContactProps) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "J J Black Forest",
      message: message,
    };

    // emailjs
    //   .send("service_1j93fle", "template_h8vl1t5", templateParams, "LAX-a0cAWUDoia4Ja")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       clearState();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div id="contact-section" className='bg-lightpink'>
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-6 col-start-4 flex flex-col justify-center mx-auto max-w-lg'>
            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Get In Touch
              </h2>
            </Fade>
            <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
              <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
              Fill out the form below and send us your message. We will respond as quickly as we can.
              </p>
            </Fade>
            <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control px-4 py-3 border rounded-md"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control px-4 py-3 border rounded-md"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  className="form-control px-4 py-3 border rounded-md w-full"
                  rows={4}
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className='w-full md:w-auto text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14'>
                  Send Message
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
