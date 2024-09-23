import ReactGa from "react-ga4";
import styled from "styled-components";
import tw from "twin.macro";

const Project = () => {
  return (
    <>
      <header
        id="Project"
        className="flex flex-col items-center gap-4 mt-28 mb-16"
      >
        <h2 className="text-3xl tablet:text-4xl text-center font-headings text-indigo-500 dark:text-teal-500">
          PROJECTS
        </h2>
        <h1 className="text-5xl tablet:text-6xl text-center font-headings dark:text-gray-200">
          A collection of my favorite works.
        </h1>
      </header>

      {/* //* 1st Card  */}
      <MainGrid className="bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-indigo-900 dark:border-indigo-800 dark:border-t ">
        <LeftGrid className="order-2 ">
          <h2 className="text-6xl dark:text-gray-200">Food App</h2>
          <p>
            A responsive web app with React and Tailwind CSS, using Swiggy’s Live public API for
            real-time restaurant data. Implemented infinite scroll and Multer for image handling. Enhanced cart with
            Redux, used JWT for secure authentication and deployed on AWS EC2 with Nginx on a custom domain
          </p>
          <div>
            <Button
              href="https://food-app.deepanshu-sahu-projects.live/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Communisafe",
                  action: "Visited Communisafe",
                });
                navigator.vibrate(900);
              }}
            >
              Visit Food App
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
            <a
              href="https://github.com/dee077/Food_App-FE"
              target="_blank"
              rel="noreferrer"
            >
              <Button2
                aria-label="button"
                className="group"
                onClick={() => {
                  navigator.vibrate(400);
                }}
              >
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Food App"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/dee777/Food%20App%20Mockup-Photoroom.png?updatedAt=1727034026690"
              className="!-ml-16 !max-w-[110%] !max-h-[110%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 2nd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200">Netflix Gpt</h2>
          <p>
            A movie recommendation platform built with React, styled using Tailwind CSS. It integrates
            YouTube iframe for movie trailers, ChatGPT API for personalized recommendations and searching, and
            TMDb API for comprehensive movie data, with Cloudflare Worker used to make the TMDb API accessible
            in regions with restrictions. Firebase is utilized for backend services like authentication and hosting.
          </p>
          <div>
            <Button
              href="https://netflix-gpt.deepanshu-sahu-projects.live/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({ category: "Npm_NextJs", action: "Website" });
                navigator.vibrate(900);
              }}
            >
              Visit NetflixGPT
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
            <a
              href="https://github.com/dee077/NetflixGpt"
              target="_blank"
              rel="noreferrer"
            >
              <Button2
                aria-label="button"
                className="group"
                onClick={() => {
                  navigator.vibrate(400);
                }}
              >
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="NetflixGpt"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/dee777/NetflixGPT%20Mockup-Photoroom.png?updatedAt=1727034026344"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
      
      {/* //* 3rd Card  */}
      <MainGrid className="bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-6xl dark:text-gray-200">Online Judge</h2>
          <p>
            A coding challenge website using Django for problem statements and code evaluation securely using 
            Docker Container to provide a secure environment for code executions.
          </p>
          <div>
            <Button
              href="https://online-judge.deepanshu-sahu-projects.live"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "JellyFish Marketplace",
                  action: "Marketplace",
                });
                navigator.vibrate(900);
              }}
            >
              Visit Online Judge
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
            <a
              href="https://github.com/dee077/Online_Judge"
              target="_blank"
              rel="noreferrer"
            >
              <Button2
                aria-label="button"
                className="group"
                onClick={() => {
                  navigator.vibrate(400);
                }}
              >
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Online Judge"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/dee777/Online%20Judge%20Mockup-Photoroom.png?updatedAt=1727034026574"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 4th Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-sky-900 dark:border-sky-700 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200">Crypto Checker</h2>
          <p>
            This Angular app tracks cryptocurrency prices, featuring real-time updates for the top 10 coins,
            a Material UI table with search, sort, and pagination, currency switching between USD and INR,
            and detailed price graphs with user-selectable timeframes.
          </p>
          <div>
            <Button
              href="https://crypto-checker.deepanshu-sahu-projects.live/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Freelansters",
                  action: "Visited Freelansters",
                });
                navigator.vibrate(900);
              }}
            >
              Visit Crypto Checker
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
            <a
              href="https://github.com/dee077/Crypto-Checker"
              target="_blank"
              rel="noreferrer"
            >
              <Button2
                aria-label="button"
                className="group"
                onClick={() => {
                  navigator.vibrate(400);
                }}
              >
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Crypto Checker"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/dee777/Crypto%20Checker%20Mockup-Photoroom.png?updatedAt=1727034024775"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 5th Card  */}
      <MainGrid className="bg-gradient-to-b  from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2 ">
          <h2 className="text-6xl dark:text-gray-200">Keeper App</h2>
          <p>
            A React-based To-Do List app lets users add, edit, delete, and mark tasks as complete,
            providing real-time updates and a smooth UI. It uses React's state management for task handling
            and may include features like local storage or API integration for syncing tasks.
          </p>
          <div>
            <Button
              href="https://keeper-app.deepanshu-sahu-projects.live/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Youtube Extended",
                  action: "Visited Youtube Extended",
                });
                navigator.vibrate(900);
              }}
            >
              Visit Keeper App
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
            <a
              href="https://github.com/dee077/Keeper_App"
              target="_blank"
              rel="noreferrer"
            >
              <Button2
                aria-label="button"
                className="group"
                onClick={() => {
                  navigator.vibrate(400);
                }}
              >
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Npm package"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/dee777/Keeper%20App%20Mockup-Photoroom.png?updatedAt=1727034024673"
              className="!-ml-14 !max-w-[110%] !max-h-[110%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 6th Card  */}
      {/* <MainGrid className="bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Gatherable</h2>
          <p>
            Venue booking system is a Desktop application where venue owners can
            register their venues and customers can book venues for events as
            per their location, availability and interest. Built using Java
            Swing and MySQL.
          </p>
          <div>
            <Button
              href="https://github.com/Bhanu1776/Java_Project"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Venue Booking System",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
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
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Venue Booking"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Venue.png?updatedAt=1679832379601"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid> */}

      {/* //* 7th Card  */}
      {/* <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
            Hotel Management System
          </h2>
          <p>
            It is a simple web application that allows the hotel manager to
            handle all hotel activities online. This application is built using
            Python Flask.
          </p>
          <div>
            <Button
              href="https://github.com/Bhanu1776/Python-Project"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Hotel Management",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              View Source Code
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
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Hotel Management"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Hotel.png?updatedAt=1679832380233"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid> */}

    </>
  );
};

const MainGrid = styled.section`
  ${tw`
    grid
    grid-cols-1
    gap-2
    rounded-[2.5rem]
    mb-20
    p-2
    md:p-0
    md:grid-cols-2
    `}
`;

const LeftGrid = styled.article`
  ${tw`
  flex
  flex-col
  self-end 
  col-span-1 
  text-center 
  !mb-20 
  md:text-left
  md:m-8
  md:ml-20 
`}

  &>h2 {
    ${tw` 
    font-headings 
    font-bold 
    mt-0 
    ml-2 
    mb-10
    `}
  }

  & > p {
    ${tw`
      font-sans 
      text-3xl
      ml-2 
      pr-4
      md:text-left
      dark:text-gray-200
    `}
  }
`;

const Button = styled.a`
  ${tw`
    bg-midnight 
    text-white 
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    font-semibold 
    no-underline
    transition
    px-10 
    py-3.5 
    mt-16 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    select-none
  `}

  svg {
    ${tw`
      stroke-2 
      stroke-white 
      mt-0.5 
      ml-4 
      -mr-3 
      dark:stroke-midnight
    `}
  }
`;

const Button2 = tw.button`
  inline-flex 
  relative
  z-10
  font-semibold 
  transition 
  text-midnight 
  text-[1.7rem] 
  items-center 
  rounded-full 
  px-9 
  py-4 
  bg-transparent
  dark:text-white
  select-none
`;

const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  max-width: 100%;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  object-fit: fill;
  border: none;
  padding: 0rem;
  margin: auto;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export { Button, Project };

