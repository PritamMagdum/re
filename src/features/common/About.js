import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="overflow-hidden pt-10 pb-20 -my-10 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full pl-10 pr-10 lg:pl-20 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      // src="/Pritam.png"
                      src="https://res.cloudinary.com/pritam1622/image/upload/v1709987894/Pritam_1_afbpi4.jpg"
                      alt="Pritam"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pl-10 pr-10 lg:pr-0  lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-2xl text-blue-800 font-bold">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Shop Smart, Shop Simple, Shop with Us
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Magdum E-Commerce is the brainchild of{" "}
                  <a
                    className="text-blue-700 cursor-pointer"
                    href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                    target="_"
                  >
                    Pritam Magdum
                  </a>
                  , a passionate software developer with a vision to
                  revolutionize online shopping. With a keen eye for innovation
                  and a dedication to delivering exceptional customer
                  experiences, Pritam embarked on this journey to create a
                  platform where shopping meets seamless technology.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Driven by our founder's expertise in software development, we
                  constantly push the boundaries of what's possible in
                  e-commerce. From streamlining the checkout process to
                  implementing state-of-the-art security measures, we prioritize
                  innovation to ensure that our customers have the best possible
                  shopping experience.{" "}
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Thank you for choosing Magdum E-Commerce. We're excited to
                  embark on this journey with you.
                </p>
                <Link
                  to="/"
                  className="text-xl bg-blue-800 hover:bg-blue-900 text-white rounded-md px-5 py-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
