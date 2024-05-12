import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 2500, duration: 5 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 5 });
  useCountUp({ ref: "feedbackCounter", end: 95, duration: 5 });
  useCountUp({ ref: "EdTechsCounter", end: 98, duration: 5 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Working Hours"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Completed EdTechs"
          counter={<span id="githubStarsCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Happy Client"
          counter={<span id="EdTechsCounter" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
