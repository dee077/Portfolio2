import ReactGa from "react-ga4";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import tw from "twin.macro";

const Footer2 = () => {
  return (
    <>
      <footer id="Footer" className="relative">
        <hr className="dark:bg-midnight dark:h-[1px] dark:border-none"></hr>
        <form action="https://formspree.io/f/xldryweb" method="POST">
          <BgImg src="https://ik.imagekit.io/bhanu1776/Portfolio/Footer-bg.png?updatedAt=1679832383622" alt="rays" loading="lazy"/>
          <MainGrid>
            <LeftGrid>
              <LeftHeading1>GENERAL</LeftHeading1>
              <UpperDiv>
                <Link
                  to="Home"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <List>Home</List>
                </Link>
                <Link
                  to="About"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-105}
                  duration={400}
                >
                  <List>About</List>
                </Link>
                <Link
                  to="Project"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  <List>Projects</List>
                </Link>
                <Link
                  to="Work"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-240}
                  duration={200}
                >
                  <List>Work</List>
                </Link>
              </UpperDiv>

              <LeftHeading2>SOCIAL</LeftHeading2>
              <IconsDiv>
                <a
                  href="https://github.com/dee077"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <LinkSvg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="GitHub"
                    data-tooltip-place="left"
                    data-tooltip-delay-show={200}
                    id="Github"
                  >
                    <path
                      d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </LinkSvg>
                  <Tooltip anchorId="Github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/deepanshu-sahu-1a14151a8/"
                  rel="noreferrer"
                  target="_blank"
                  onClick={ ()=>{ ReactGa.event({category: "LinkedIn", action:"LinkedIn"})}}
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkSvg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="LinkedIn"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                    id="LinkedIn"
                  >
                    <path
                      d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.75 11.75V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.75 11.75V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.75 8.75V9.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </LinkSvg>
                  <Tooltip anchorId="LinkedIn" />
                </a>
              </IconsDiv>
            </LeftGrid>

            <RightGrid>
              <RightHeading>Get In Touch</RightHeading>
              <UpperInputDiv>
                <label className="sr-only">Email address</label>
                <UpperInput
                  id="username"
                  name="username"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                  autoComplete="no"
                />
                <UpperInput
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  autoComplete="no"
                />
              </UpperInputDiv>
            </RightGrid>

            <LowerDiv>
              <TextArea
                id="message"
                name="message"
                placeholder="Enter message"
                required
              />
              <ButtonDiv>
                <PurpleBtn type="submit" onClick={()=>{navigator.vibrate(2000)}}>Contact Me!</PurpleBtn>
              </ButtonDiv>
            </LowerDiv>
          </MainGrid>
          <Copyright>
            <span style={{"textAlign": "center", "margin": "auto"}}>
              ©{new Date().getFullYear()} Deepanshu Sahu 
            </span></Copyright>
        </form>
      </footer>
    </>
  );
};

const BgImg = tw.img`
absolute 
mt-[-5.7rem] 
xxsm:h-[60rem] 
xxsm:opacity-50 
xxsm:-ml-8
tablet:ml-0
tablet:h-[40rem] 
tablet:w-[80rem]
tablet:opacity-80 
select-none
`;

const MainGrid = tw.main`
grid 
gap-2 
xxsm:grid-cols-1
md:grid-cols-3 
md:grid-rows-2 
`;

const LeftGrid = tw.section`
flex 
flex-col
row-span-2 
z-10 
!px-2 
py-12 
md:px-20 
`;

const LeftHeading1 = tw.h1`
text-slate-700 
text-[1.7rem] 
font-semibold 
font-headings
dark:text-slate-200
`;

const UpperDiv = tw.section`
flex 
flex-wrap 
gap-8
mt-4
`;

const List = tw.a`
[opacity: .7;]
[font-size: 1.65rem;]
[line-height: 1.5;]
[margin-top: 1rem;]
[font-weight:400;]
font-sans 
cursor-pointer
hover:underline 
hover:text-teal-600 
dark:text-slate-200
`;

const LeftHeading2 = tw.h1`
text-slate-700 
font-semibold 
font-headings
text-[1.7rem] 
z-10 
mt-16 
mb-3 
dark:text-slate-200
`;

const IconsDiv = tw.section`
flex 
flex-row 
z-10
dark:text-slate-400

`;

const LinkSvg = tw.svg`
w-14 
h-14 
transform 
transition 
hover:rotate-[-7deg] 
hover:text-teal-500
`;

const RightGrid = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0 pt-12
`;

const RightHeading = tw.h1`
text-slate-700 
font-headings 
font-bold 
text-4xl 
mb-10
dark:text-teal-500
`;

const UpperInputDiv = tw.div`
relative 
flex 
flex-col
gap-8 
space-y-0 
my-4 
tablet:flex-row 
`;

const UpperInput = tw.input`
bg-[#ffffffa4] 
border-gray-300 
placeholder-slate-500 
rounded-full 
w-full 
px-5 
py-5 
text-2xl 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:text-slate-200
select-none
`;

const LowerDiv = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0
`;

const TextArea = tw.textarea`
bg-[#ffffff8c] 
border-gray-300 
placeholder-slate-500 
text-2xl 
rounded-[2rem] 
resize-none
w-full 
px-5 
py-14 
mb-8 
select-none
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
md:-mt-8 
dark:text-slate-200
`;

const ButtonDiv = tw.section`
flex 
flex-row-reverse
`;

const PurpleBtn = tw.button`
flex 
justify-center 
items-center 
text-2xl 
font-medium 
border 
border-transparent 
rounded-full 
text-white 
bg-indigo-500 
w-full 
mb-4 
px-12 
py-3 
hover:bg-indigo-400 
focus:outline-none 
focus:ring-2 
focus:ring-white 
focus:ring-offset-2 
focus:ring-offset-indigo-700 
sm:mt-0 
sm:ml-3 
sm:w-auto 
sm:flex-shrink-0
select-none
`;

const Copyright = tw.p`
flex 
justify-center 
[font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]
text-xl 
bg-slate-100 
rounded-t-full
px-4 
pt-3 
pb-1 
tablet:text-[1.6rem]
tablet:justify-start 
md:px-20 
dark:bg-midnight
dark:text-slate-200
tracking-widest
`;

export default Footer2;
