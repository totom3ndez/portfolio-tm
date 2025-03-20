import {
  skills,
  interest,
  certificates,
  boxStyle,
  subTitleStyle,
  pillStyle,
  certificateStyle,
  flagText,
} from "@/variables";
import ReactCountryFlag from "react-country-flag";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:grid lg:grid-cols-2 lg:w-1/2 2xl:max-w-4xl gap-4 pt-30"
    >
      <h2 className="text-3xl font-bold mb-10 col-span-full text-center">
        Know me
      </h2>
      <article className={`col-start-1 h-full ${boxStyle}`}>
        <h3 className={subTitleStyle}>Interests</h3>
        <div className="flex flex-wrap gap-2 w-full h-full z-5 justify-center lg:justify-start">
          {interest.map((item, index) => (
            <span key={index} className={pillStyle}>
              {item}
            </span>
          ))}
        </div>
      </article>
      <article className={`col-start-2 h-full ${boxStyle}`}>
        <h3 className={subTitleStyle}>Languages</h3>
        <ul className="flex lg:flex-col gap-8 justify-center">
          <li className="flex gap-4 items-center">
            <ReactCountryFlag
              countryCode="ES"
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "10px",
              }}
              title="ES"
            />
            <span className={flagText}>
              Spanish <i className="opacity-70">Native</i>
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "10px",
              }}
              title="US"
            />
            <span className={flagText}>
              English <i className="opacity-70">Fluent</i>
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <ReactCountryFlag
              countryCode="IT"
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "10px",
              }}
              title="IT"
            />
            <span className={flagText}>
              Italian <i className="opacity-70">Advanced</i>
            </span>
          </li>
        </ul>
      </article>
      <article className={`overflow-hidden ${boxStyle} w-1/3`}>
        <h3 className="text-center lg:text-left text-xl mb-4 font-bold">
          Skills
        </h3>
        <ul className="flex gap-8 flex-wrap justify-center lg:justify-start">
          {skills.map(({ icon, name }) => (
            <li
              key={name}
              className="relative flex flex-col items-center group text-4xl"
            >
              <div className="flex gap-4 items-center hover:text-white transition ease-in-out">
                {icon}
              </div>
              <span className="z-100 absolute transform -top-12 mt-2 px-2 py-1 bg-yellow text-dark text-sm rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </article>
      <article className={boxStyle}>
        <h3 className={subTitleStyle}>Certificates</h3>
        <ul
          id="certificates"
          className="flex gap-2 flex-wrap justify-center lg:justify-start"
        >
          {certificates.map(({ name, imgAlt, imgUrl, credential }, index) => (
            <li key={index}>
              <a href={credential} target="blank">
                <div className={certificateStyle}>
                  <img
                    width={50}
                    src={imgUrl}
                  alt={imgAlt}
                  className="rounded-full"
                />
                {name}
              </div>
            </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default About;
