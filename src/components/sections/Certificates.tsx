import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { certificactions } from "../../constants";
// import { TCertification } from "../../types";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { Link } from "react-router-dom";

interface ICertificateCard {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  // icon: string;
  // link: string;
  image: string;
}

const CertificateCard: React.FC<ICertificateCard> = ({ index,
  testimonial,
  name,
  designation,
  company,
  image, }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <Link to={designation} target="_blank" rel="noopener noreferrer">
    <div className="xs:w-[355px] w-full" >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[320px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={image}
            alt="certificate"
            className="h-48 w-96"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {name}
          </h3>
          <h2 className="text-center text-[16px] font-bold text-white">
            {testimonial}
          </h2>
          <h2 className="text-center text-[16px] font-bold text-white">
            {company}
          </h2>
        </div>
      </motion.div>
    </div>
    </Link>
  </Tilt>
);

const Certificates = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.feedbacks} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {/* {config.sections.about.content} */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {certificactions.map((certificate, index) => (
          <CertificateCard key={certificate.name} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
