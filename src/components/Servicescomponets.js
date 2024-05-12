import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Mobile Application",
    description:
      "We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Web Application",
    description:
      "Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "E-Commerce & Business Consultant",
    description:
      "Elevate your business with our comprehensive E-Commerce consultancy services. From strategic planning to execution, we specialize in optimizing your online presence, enhancing customer experience, and boosting sales. Harness the power of digital commerce and take your business to new heights with our expert guidance",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Digital Marketing",
    description:
      "The Digital Marketing Services That We Provide Have Their Own Set Of Charms. By Taking Our Digital Marketing Services, Our Clients Will Be Able To Increase Visibility And Engage With Their Customers At The Online Platform.",
    icon: MegaphoneIcon,
  },
];

export default function Servicescomponets() {
  return (
    <div className="mt-10xl">
      <div className="dark:bg-slate-800 py-10 sm:py-10">
        <div className=" dark:bg-slate-800 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-primary-light text-gray-900 sm:text-4xl">
              Our Services
            </p>
            <p className="mt-6 text-lg dark:text-primary-light leading-8 text-gray-600">
              We Help You To Build High-Quality Digital Solutions And Products
              As Well As Deliver A Wide Range Of Related Professional Services.
              We Are Providing World-Class Service To Our Clients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative  pl-16">
                  <dt className="text-base dark:text-primary-light font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 dark:text-primary-light text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
