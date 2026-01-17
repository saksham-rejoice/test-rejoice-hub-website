import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import WhatsappIcon from "/assets/icons/whatsapp.svg";
import EmailIcon from "/assets/icons/email.svg";
import LineIcon from "/assets/icons/line.svg";

interface ContactCardProps {
  title: string;
  phone: string;
  email: string;
  index: number;
}

const ContactCard: FC<ContactCardProps> = ({ title, phone, email, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 200,
  });

  return (
    <div
      ref={ref}
      className={`group relative bg-accent-50 backdrop-blur-sm p-8 max-mobile:p-5 max-mobile:rounded-lg rounded-2xl h-full border border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } hover:-translate-y-2 hover:scale-[1.02]`}
    >
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <h3 className="text-2xl  mb-6 text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
          {title}
        </h3>

        <div className="space-y-4">
          <div className="group/item flex items-center gap-4 p-3 rounded-lg">
            <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300">
              <FaWhatsapp className="text-navy-950 text-xl" />
            </div>
            <div className="flex-grow">
              <p className="text-xs text-gray-600 mb-1">Call us</p>
              <a
                href={`tel:${phone}`}
                className="text-navy-900  hover:text-navy-900 transition-colors duration-300 text-lg"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="group/item flex items-center gap-4 p-3 rounded-xl">
            <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300">
              <MdOutlineMail className="text-navy-950 text-xl" />
            </div>
            <div className="flex-grow">
              <p className="text-xs text-gray-600 mb-1">Email us</p>
              <a
                href={`mailto:${email}`}
                className="text-navy-900 transition-colors duration-300 text-lg break-all"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkWithUs: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* <div className="py-20 max-mobile:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="">
          <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <div className="text-center mb-12 max-mobile:mb-10">
              <h2 className="heading3 text-center mb-4 text-primary">
                Work With Us
              </h2>

              <h2 className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
                We Would Love To Hear More About Your Project
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ContactCard
                title="For Sales"
                phone="+91 9825 122 840"
                email="info@rejoicehub.com"
                index={0}
              />
              <ContactCard
                title="For Hiring"
                phone="+91 8734 001 285"
                email="hr@rejoicehub.com"
                index={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <section className="py-[100px] max-mobile:py-12">
        <div className="container-lg">
          <div className="grid grid-cols-1fr xl:grid-cols-[410px_1fr] lg:grid-cols-[260px_1fr] xl:gap-10 gap-[60px] max-mobile:grid-cols-1">
            <div>
              <h2 className="heading3 text-primary mb-4">
                Work <span className="text-blue-100"> With Us</span>
              </h2>
              <p className="text-lg max-mobile:text-base text-grey-600  ">
                We Would Love To Hear More About Your Project
              </p>
              <div className="lg:flex justify-center pt-4 hidden">
                <img src={LineIcon} alt="LineIcon" className="block" />
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 md:gap-10 sm:gap-5 gap-10 grid-cols-1">
                <div className="relative max-mobile:min-h-auto sm:min-h-[320px] rounded-[20px] bg-[#E9F1FF] max-mobile:rounded-lg xl:py-[30px] xl:px-9 p-0">
                  <div className="absolute top-[-10px] w-full h-full bg-[#BFD6FF] z-[1] left-0  rounded-[20px]"></div>
                  <div className="absolute top-[-20px] w-full h-full bg-[#A9C8FF] left-0  rounded-[20px]"></div>
                  <div className="xl:absolute relative top-[6px] w-full h-full bg-[#E9F1FF] min-h-auto left-0 rounded-[20px] z-[9] md:py-[30px] md:px-9 p-5">
                    <h3 className="text-2xl font-medium text-blue-100 mb-6">
                      For Sales
                    </h3>
                    <div className="flex items-center gap-5 pb-10 md:pb-5">
                      <img
                        className="block max-mobile:w-[50px] w-auto"
                        src={WhatsappIcon}
                        alt="WhatsappIcon"
                      />
                      <div>
                        <span className="text-lg text-grey-600 font-normal block">
                          Call us
                        </span>
                        <a
                          href="callto:+91 9825 122 840"
                          className="text-xl text-primary font-medium cursor-pointer"
                        >
                          +91 9825 122 840
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                      <img className="block max-mobile:w-[50px] w-auto" src={EmailIcon} alt="EmailIcon" />
                      <div>
                        <span className="text-lg text-grey-600 font-normal block">
                          Email us
                        </span>
                        <a
                          href="mailto:info@rejoicehub.com"
                          className="text-xl text-primary font-medium cursor-pointer"
                        >
                          info@rejoicehub.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative max-mobile:min-h-auto sm:min-h-[320px] rounded-[20px] bg-[#E9F1FF] max-mobile:rounded-lg xl:py-[30px] xl:px-9 p-0">
                  <div className="absolute top-[-10px] w-full h-full bg-[#BFD6FF] z-[1] left-0  rounded-[20px]"></div>
                  <div className="absolute top-[-20px] w-full h-full bg-[#A9C8FF] left-0  rounded-[20px]"></div>
                  <div className="xl:absolute relative top-[6px] w-full min-h-auto h-full bg-[#E9F1FF] left-0 rounded-[20px] z-[9] md:py-[30px] md:px-9 p-5">
                    <h3 className="text-2xl font-medium text-blue-100 mb-6">
                      For Hiring
                    </h3>
                    <div className="flex items-center gap-5 pb-10 md:pb-5">
                      <img
                        className="block max-mobile:w-[50px] w-auto"
                        src={WhatsappIcon}
                        alt="WhatsappIcon"
                      />
                      <div>
                        <span className="text-lg text-grey-600 font-normal block">
                          Call us
                        </span>
                        <a
                          href="callto:+91 8734 001 285"
                          className="text-xl text-primary font-medium cursor-pointer"
                        >
                          +91 8734 001 285
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                      <img className="block max-mobile:w-[50px] w-auto" src={EmailIcon} alt="EmailIcon" />
                      <div>
                        <span className="text-lg text-grey-600 font-normal block">
                          Email us
                        </span>
                        <a
                          href="mailto:hr@rejoicehub.com"
                          className="text-xl text-primary font-medium cursor-pointer"
                        >
                          hr@rejoicehub.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithUs;
