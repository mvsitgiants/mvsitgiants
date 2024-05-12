import { useContext } from "react";
import SingleEdTechContext from "../../context/SingleEdTechContext";

const EdTechInfo = () => {
  const { singleEdTechData } = useContext(SingleEdTechContext);

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single EdTech client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleEdTechData.EdTechInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleEdTechData.EdTechInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href="https://stoman.me"
                    className={
                      info.title === "Website" || info.title === "Phone"
                        ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                        : ""
                    }
                    aria-label="EdTech Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single EdTech objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleEdTechData.EdTechInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleEdTechData.EdTechInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single EdTech technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleEdTechData.EdTechInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleEdTechData.EdTechInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>

        {/* Single EdTech social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleEdTechData.EdTechInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {singleEdTechData.EdTechInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="__blank"
                  aria-label="Share EdTech"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/*  Single EdTech right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleEdTechData.EdTechInfo.EdTechDetailsHeading}
        </p>
        {singleEdTechData.EdTechInfo.EdTechDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default EdTechInfo;
