import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const items = [
    {
      title: "How Much Will It Cost?",
      content:
        "To Get A Better Idea Of The Cost Of What You Want To Build, Give Us A Quick Phone Call. We’ll Ask You A Few Questions About The Nature Of The Site, What Sort Of Interactivity The Site Will Have, Your Graphic Design Needs, Etc. Then We’ll Be Able To Give You A Ballpark Figure. If You’re Still Interested, We’ll Come To Your Place Of Business And Come Up With A Firm Quote.",
    },
    {
      title: "How Long It Takes To Design?",
      content:
        "The Time Limit Of Any Assignment Is Normally Dictated By The Client. If You Have Any Time Limit In Mind We Will Attempt To Assemble It For You. The Main General Delay In The Making Of A Website Is Waiting For The Content Of The Pages To Be Sent To Us By The Client.",
    },
    {
      title: " How Do I Associate With IT Company?",
      content:
        "The Process Begins When You Contact Us With Your Requirements. We Analyze Your Requirements And Respond To You. On The Basis Of The Further Discussion, You Can Choose An Engagement Model That Suits You The Best. After That, We Begin The Process Of Development.",
    },
    {
      title: " Can You Help My Current Site Look More Professional?",
      content:
        "Yes. Give Us Your Requirements And We Have Experienced Expertise To Help You Give A New Professional Look That Really Wonders!",
    },
    {
      title: " When Do I Pay?",
      content:
        "For Most EdTechs, Equal Payments Are Made At The Start, Midway, And The End Of The EdTech, But We Can Work With You To Set Up A Schedule That Meets Your Needs. We Understand That This Is A Big Investment And Want To Help You Budget For The Expense In Whatever Way Possible. We Accept Checks, PayPal, And All Major Credit Cards.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <section className="max-w-4xl mx-auto mt-5 px-3">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-2  dark:text-primary-light">
          F.A.Q
        </h3>
        <p className="text-lg text-gray-600 font-semibold  dark:text-primary-light">
          Questions on your mind? We've got the answers you need.
        </p>
      </div>
      {items.map(({ title, content }, index) => (
        <div
          key={index}
          className="border border-gray-300 mb-3 rounded-2xl p-4 hover:bg-blue-300  "
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between w-full items-center focus:outline-none"
          >
            <h4 className="flex-1 text-lg text-left font-semibold  dark:text-primary-light">
              {title}
            </h4>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                activeIndex.includes(index) ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex.includes(index) && (
            <div className="mt-3">
              <p className="text-base  dark:text-primary-light">{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
