import ReactGa from "react-ga4";
import tw from "twin.macro";
import Hr from "./Hr";
import { Button } from "./Project";

const Work = () => {
  return (
    <>
      <main>
        <h1
          id="Work"
          className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
        >
          Work Experience
        </h1>
        <p className="font-sans text-3xl mb-16 dark:text-gray-200">
          Here's a quick rundown of my most recent experiences.
        </p>
      </main>

      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13--TYUrNNrC3dTqTKn3d4og5Pkgv8L6D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Google Summer of Code 2025
                </h3>
              </a>
              <a
                href="https://ridecell.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Contributor @ OpenWISP
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp;May 2025 - Present &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-8 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Developed a{" "}
              <span className="font-bold">dedicated standalone map page</span>{" "}
              to display over
              <span className="font-bold"> 1,000 network devices</span>,
              providing a focused, clutter-free view with optimized performance
              for large-scale network monitoring.
            </p>
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Implemented{" "}
              <span className="font-bold">
                real-time mobile device tracking
              </span>{" "}
              using a GeoJSON API endpoint and AJAX updates, ensuring device
              locations are updated dynamically.
            </p>
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Built{" "}
              <span className="font-bold">indoor floor plan integration</span>{" "}
              with multi-floor support, enabling detailed visualization of
              devices within indoor environments as overlays on the geographic
              map.
            </p>
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Added <span className="font-bold">URL-based bookmarking</span>{" "}
              so that specific devices, zoom levels, and map views can be shared
              and directly accessed across geographic, indoor, and logical maps.
            </p>
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Enhanced{" "}
              <span className="font-bold">cross-page navigation</span> by adding
              direct links from device detail and floor plan pages to
              pre-focused map views.
            </p>
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Leveraged{" "}
              <span className="font-bold">Django Admin customization</span>,
              <span className="font-bold"> register_menu_group</span> API,{" "}
              <span className="font-bold">netjsongraph.js</span>, and{" "}
              <span className="font-bold">ECharts v5.6.0</span>, ensuring
              compatibility with
              <span className="font-bold"> Django 5.2</span> and{" "}
              <span className="font-bold">Python 3.13</span>.
            </p>
          </p>
        </Article>

        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13--TYUrNNrC3dTqTKn3d4og5Pkgv8L6D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Django Software Foundation
                </h3>
              </a>
              <a
                href="https://ridecell.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Open Source Contribution
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp;December 2024 - May 2025 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-8 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Fixed{" "}
              <span className="font-bold">ChannelsLiveServerTestCase</span> to
              restore compatibility with
              <span className="font-bold"> Django 5.2</span> in the{" "}
              <span className="font-bold">channels</span> repository, addressing
              cross-version test failures and improving stability for downstream
              projects.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Designed and implemented a{" "}
              <span className="font-bold">
                Selenium-based WebSocket test suite
              </span>{" "}
              and a WebSocket sample project to validate{" "}
              <span className="font-bold">ChannelsLiveServerTestCase</span>{" "}
              behavior in real browser environments.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Contributed{" "}
              <span className="font-bold">800+ lines of code</span> across tests
              and examples, resulting in an increase of{" "}
              <span className="font-bold">~2% test coverage</span> and making
              the test harness CI-friendly.
            </p>
          </p>
        </Article>

        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13--TYUrNNrC3dTqTKn3d4og5Pkgv8L6D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  OpenWISP
                </h3>
              </a>
              <a
                href="https://ridecell.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Open Source Contribution
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp;December 2024 - May 2025 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-8 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              -{" "}
              <span className="font-bold">
                Contributed to multiple OpenWISP repositories
              </span>{" "}
              as part of preparation for Google Summer of Code 2025, raising
              over <span className="font-bold">14+ pull requests</span> and
              reporting
              <span className="font-bold"> 3+ issues</span> across various
              projects.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - In <span className="font-bold">netjsongraph.js</span>, upgraded
              the charting stack to
              <span className="font-bold"> ECharts v5.6.0</span> and added a{" "}
              <span className="font-bold">Selenium test suite</span>
              for verifying UI rendering.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - <span className="font-bold">Refactored django-loci</span> to add
              support for
              <span className="font-bold"> Django 5.2</span> and{" "}
              <span className="font-bold">Python 3.13</span>, improving
              long-term compatibility.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Added <span className="font-bold">REST API reversion</span>{" "}
              support across{" "}
              <span className="font-bold">openwisp-controller</span>
              using <span className="font-bold">django-reversion</span> for{" "}
              <span className="font-bold">20+ API endpoints</span>.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Proposed a{" "}
              <span className="font-bold">UI/UX design in Figma</span> to
              improve the OpenWISP general map as part of the project proposal,
              including multi-floor and bookmarkable view concepts.
            </p>
          </p>
        </Article>

        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13--TYUrNNrC3dTqTKn3d4og5Pkgv8L6D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Hireanything
                </h3>
              </a>
              <a
                href="https://ridecell.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Freelance
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp;October 2024 - December 2024 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-8 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Set up and organized project repositories by creating dedicated{" "}
              <span className="font-bold">GitHub</span> repositories for the
              <span className="font-bold"> Flutter mobile app</span>,{" "}
              <span className="font-bold">web app</span>, and{" "}
              <span className="font-bold">admin portal</span>, establishing a
              clear branching strategy and repo structure.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Created a shared{" "}
              <span className="font-bold">Postman workspace</span> for API
              collaboration and documentation, standardizing request examples
              and onboarding flows for frontend and backend teams.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Implemented{" "}
              <span className="font-bold">
                CI/CD pipelines with GitHub Actions
              </span>{" "}
              to automate build, test, and deployment workflows for mobile and
              web, improving release velocity and reducing manual steps.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Deployed the{" "}
              <span className="font-bold">
                Flutter app to Google Play Store
              </span>{" "}
              and managed release packaging, signing, and store setup.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Supported business growth by onboarding{" "}
              <span className="font-bold">50+ service providers</span>,
              including integration assistance and documentation.
            </p>
          </p>
        </Article>

        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13--TYUrNNrC3dTqTKn3d4og5Pkgv8L6D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Backend Devloper Intern
                </h3>
              </a>
              <a
                href="https://ridecell.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Ridecell
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp;Auguest - November 2023 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-8 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Created a new{" "}
              <span className="font-bold">Spontaneous Return</span> stage for
              users without scheduled appointments before storage drop-off,
              successfully reducing
              <span className="font-bold"> 3 manual API calls</span> and
              improving operational efficiency using{" "}
              <span className="font-bold">Django</span>.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Developed several <span className="font-bold">Celery</span>{" "}
              tasks to identify and address pending edge case errors, along with
              a comprehensive set of
              <span className="font-bold"> test cases</span> to validate various
              scenarios, ensuring robust backend functionality.
            </p>

            <p className="dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
              - Contributed to{" "}
              <span className="font-bold">Spain Hypercare</span> by resolving
              issues, conducting user training, and addressing manual API call
              replication, significantly improving issue resolution time and
              enhancing user adoption and integration.
            </p>
          </p>
        </Article>

        <Button
          className="group cursor-pointer"
          href="https://github.com/dee077"
          target="_blank"
          onClick={() => {
            ReactGa.event({ category: "Github from work", action: "Github" });
            navigator.vibrate(1500);
          }}
        >
          Checkout GitHub
          <svg
            fill="none"
            width="12"
            height="12"
            viewBox="0 0 10 10"
            aria-hidden="true"
            className="group"
          >
            <path
              className="transition opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </Button>
      </section>
      <Hr />
    </>
  );
};

const Article = tw.article` 
  relative 
  grid 
  md:grid-cols-5 
  md:pl-8 
  -mb-12 
  md:gap-10 
  before:content-[''] 
  mx-12 
  before:block 
  before:h-full 
  before:absolute 
  before:left-[-25px] 
  md:before:left-[-17px] 
  before:border-l-2 
  before:border-gray-300 
  dark:before:border-gray-700 
  md:space-x-4 pb-8
`;

export default Work;
