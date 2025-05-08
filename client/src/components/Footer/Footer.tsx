"use client";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Footer = () => {
    const people = [
        {
          id: 1,
          name: "Sarang Rastogi",
          designation: "FullStack Developer",
          image:
            "./public/sarang.png",
        },
        {
          id: 2,
          name: "Naina Jain",
          designation: "Data Scientist",
          image:
            "./public/naina.png",
        },
      ];
  return (
    <div>
          <footer className="bg-white dark:bg-zinc-950">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                  <div className="md:flex md:justify-between">
                      <div className="mb-6 md:mb-0">
                          <a href="/" className="flex items-center">
                              📈
                              <span className="ml-1 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                  Stocket
                              </span>
                          </a>
                          <p>Stocket is a sophisticated stock price prediction platform.<br/>The application leverages neural networks to forecast stock prices.</p>
                          <div className="flex flex-row items-center justify-left mt-16 w-full">
                          <AnimatedTooltip items={people} />
                          </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                          <div>
                              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                  Follow us
                              </h2>
                              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                                  <li className="mb-4">
                                      <a
                                          href="https://github.com/Sarang19114"
                                          className="hover:underline "
                                      >
                                          Github
                                      </a>
                                  </li>
                                  <li>
                                      <a
                                          href="mailto:rastogi.sarang19@gmail.com"
                                          className="hover:underline"
                                      >
                                          Mail
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                  Legal
                              </h2>
                              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                                  <li className="mb-4">
                                      <a href="/privacypolicy" className="hover:underline">
                                          Privacy Policy
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/termsandconditions" className="hover:underline">
                                          Terms &amp; Conditions
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                  <div className="sm:flex sm:items-center sm:justify-center">
                      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                          © {new Date().getFullYear()}{" "}
                          <a href="/" className="hover:underline">
                              Stocket
                          </a>
                          . All Rights Reserved.
                      </span>
                  </div>
              </div>
          </footer>

    </div>
  )
}

export default Footer