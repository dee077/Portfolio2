import Images from "../Images/Imgindex";
import tw from "twin.macro";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [theme, setTheme] = useState("dark");

  // * Uncomment this to select dark mode on the preference of system
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const MiniDialog = styled.div`
    display: ${() => (openMenu ? "block" : "none")};
    ${tw`
    fixed 
    w-full 
    max-w-sm 
    p-9 
    text-base 
    font-semibold
    text-gray-900 
    bg-white 
    shadow-2xl
    rounded-3xl 
    top-4 
    right-4 
    dark:bg-gray-800 
    dark:text-gray-400
  `}
  `;

  return (
    <>
      <NavbarDiv>
        <ActualNavbar>
          <LeftLogo>
            <span className="sr-only">Logo</span>
            <span className="block">
              <img
                alt="Deepanshu Sahu"
                width="48"
                height="48"
                className="rounded-full invert dark:invert-0"
                style={{ color: "transparent" }}
                src={Images?.DLogo}
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </span>
          </LeftLogo>

          <nav className="hidden gap-x-[4rem] text-[1.9rem] md:flex">
            <Link
              to="Home"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              offset={-100}
              duration={200}
            >
              <NavLinks>Home</NavLinks>
            </Link>
            <Link
              to="About"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              offset={-105}
              duration={300}
            >
              <NavLinks>About</NavLinks>
            </Link>
            <Link
              to="Project"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              offset={-100}
              duration={400}
            >
              <NavLinks>Projects</NavLinks>
            </Link>
            <Link
              to="Work"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              offset={-240}
              duration={500}
            >
              <NavLinks>Work</NavLinks>
            </Link>
            <Link
              to="Blog"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              offset={-200}
              duration={400}
            >
              <NavLinks>Achievements</NavLinks>
            </Link>
          </nav>

          <ButtonDiv>
            <DarkModeBtn onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                  id="sun"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                  id="moon"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </DarkModeBtn>
          </ButtonDiv>

          <div className="-my-2 -mr-2 md:hidden">
            <Hamburger
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 12H19.25"
                ></path>
              </svg>
            </Hamburger>
          </div>

          <MiniDialog>
            <CloseBtn
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-4 h-4 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </CloseBtn>
            <ul className="space-y-9">
              <li>
                <Link
                  to="Home"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500 cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="Project"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500 cursor-pointer">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="Work"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500 cursor-pointer">
                    Work
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="Blog"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-200}
                  duration={400}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500 cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
            </ul>
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10">
              <DialogDarkBtn
                aria-label="Toggle Dark Mode"
                type="button"
                onClick={handleThemeSwitch}
              >
                <p className="pb-3 text-2xl font-semibold dark:text-slate-200">
                  Change to {theme === "dark" ? "Light" : "Dark"} Theme
                </p>
              </DialogDarkBtn>
            </div>
          </MiniDialog>
        </ActualNavbar>
      </NavbarDiv>
    </>
  );
};

const NavbarDiv = tw.div`
fixed
z-50 
w-full 
text-gray-900 
bg-white 
bg-opacity-50 
h-[7rem] 
dark:bg-dark 
dark:text-gray-100 
backdrop-filter 
backdrop-blur-md 
dark:bg-opacity-50
transition-all
duration-300 
ease-in-out
`;

const ActualNavbar = tw.div`
flex 
items-center 
justify-between 
max-w-[112rem] 
px-4 
py-4 
mx-auto 
sm:px-6 
md:space-x-10
`;

const NavLinks = styled.span`
  ${tw`
  cursor-pointer 
  hidden 
  md:inline-block 
  rounded-full 
  hover:text-gray-900 
  // dark:hover:text-gray-200 
  transition-all
  font-normal 
  text-gray-500 
  dark:text-gray-400
  active:text-teal-500
  active:font-bold
  active:dark:text-teal-400
  dark:hover:text-teal-400
`}

  &:active {
    font-style: italic ${tw`
      font-bold 
      text-teal-500 
      dark:text-teal-400
  `};
  }
`;

const LeftLogo = tw.div`
flex 
justify-start 
mt-1
pl-2
tablet:pl-0
lg:w-0
lg:flex-1
select-none
`;

const ButtonDiv = tw.div`
items-center 
justify-end 
hidden 
md:flex 
md:flex-1 
lg:w-0
`;

const DarkModeBtn = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    /* border: 2px solid black; */
  }
  ${tw`
    p-5 
    border-2 
    border-coolGray-100 
    border-solid 
    rounded-full 
    bg-coolGray-200
    hover:outline
    hover:outline-[3px]
    hover:outline-offset-2
    hover:shadow-md
    dark:bg-midnight
    dark:border-midnight
  `}
`;

const Hamburger = tw.div`
bg-gray-200
dark:bg-midnight 
text-gray-600 
dark:text-gray-300 
rounded-full 
p-3.5 
inline-flex 
items-center 
justify-center 
hover:text-gray-700 
hover:bg-gray-300 
cursor-pointer 
focus:outline-none 
`;

const CloseBtn = tw.button`
absolute 
flex 
items-center 
justify-center 
w-8 
h-8 
text-gray-500 
top-7 
right-7 
hover:text-gray-600 
dark:text-gray-400 
dark:hover:text-gray-300
`;

const DialogDarkBtn = tw.button`
flex 
items-center 
justify-center 
w-full 
py-2 
bg-gray-200 
rounded-full 
dark:bg-midnight-hover
`;

export default Navbar;
