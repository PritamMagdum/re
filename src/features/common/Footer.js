import React from "react";

function Footer() {
  return (
    //   <div className="flex items-end w-full min-h-screen bg-white">
    <footer className="w-full text-gray-700 bg-gray-800 body-font">
      <div className="container flex flex-col flex-wrap px-5 pt-20 pb-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <h2 className="text italic text-2xl">Magdum E-Commerce</h2>
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Make Your Life Easy with Fast Delivery
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://www.facebook.com/pritam.magdumpm/"
                target="_"
                className="text-gray-500 cursor-pointer hover:text-white"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/pritam1622"
                target="_"
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/pritam_magdum_72_12/"
                target="_"
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                target="_"
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>

              <a
                href="https://github.com/PritamMagdum"
                target="_"
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.17 6.839 9.493.5.09.682-.217.682-.482 0-.238-.009-.868-.014-1.704-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.109-1.459-1.109-1.459-.91-.62.069-.607.069-.607 1.006.071 1.53 1.03 1.53 1.03.89 1.53 2.34 1.088 2.91.832.09-.646.35-1.088.635-1.338-2.225-.253-4.561-1.112-4.561-4.947 0-1.092.39-1.987 1.03-2.684-.103-.253-.448-1.274.098-2.655 0 0 .84-.269 2.75 1.03a9.6 9.6 0 012.514-.336 9.558 9.558 0 012.514.336c1.909-1.299 2.75-1.03 2.75-1.03.548 1.381.202 2.402.1 2.655.64.697 1.03 1.592 1.03 2.684 0 3.845-2.34 4.691-4.571 4.937.358.309.677.919.677 1.854 0 1.338-.013 2.414-.013 2.743 0 .268.181.581.688.481C19.138 20.168 22 16.419 22 12c0-5.523-4.477-10-10-10z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                  target="_"
                  className="text-gray-500 cursor-pointer hover:text-white"
                >
                  +91-869-869-4008
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container px-5 py-4 flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-white capitalize xl:text-center ">
            © Magdum E-Commerce 2024 All rights reserved ||
          </p>
          <p className="items-center mt-2 md:mt-0">
            <span className="text-sm text-white capitalize mx-2">
              Developer -{" "}
              <a
                href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                target="_"
                className="cursor-pointer text-black font-medium bg-white p-2 hover:bg-gray-500 hover:text-white rounded-md"
              >
                Pritam Magdum{" "}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
