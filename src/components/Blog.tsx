import tw from "twin.macro";

const Blog = () => {
  return (
    <>
      <Div id="Blog">
        <H2>Achivements</H2>
        <div className="dark:text-white mt-16 gap-10 text-3xl grid grid-cols-2">
          <a href="https://www.codechef.com/rankings/START49C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold"> Scored 185 rank among 3k+ contestants</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Codechef Starter 49 challenge on 27 July 2022</p>
            </div>
          </a>
          <a href="https://www.codechef.com/rankings/START36C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold"> Scored 237 rank among 3k+ contestants</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Codechef Starter 36 challenge on 27 April 2022</p>
            </div>
          </a>
          <a href="https://www.codechef.com/rankings/START82C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold"> Scored 237 rank among 4k+ contestants</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Codechef Starter 82 challenge on 23 March 2023</p>
            </div>
          </a>
          <a href="https://www.codechef.com/rankings/START38C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold"> Scored 256 rank among 2k+ contestants</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Codechef Starter 38 challenge on 11 May 2022</p>
            </div>
          </a>
          <a href="https://www.codechef.com/rankings/START72C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold"> Scored 354 rank among 3.5k+ contestants</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Codechef Starter 72 challenge on 04 January 2023</p>
            </div>
          </a>
          <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold">Solved 800+ Coding Problems</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">Leetcode, Codeforces, Codechef, Codestudio, Hackerank</p>
            </div>
        </div>
        {/* <P>Stay Tuned!</P> */}
      </Div>
    </>
  );
};

const Div = tw.main`
  bg-[#F8FAFC] 
  border-slate-200 
  !px-20
  !py-16
  rounded-[1.9rem]
  mb-24
  drop-shadow-md
  mx-4
  dark:bg-midnight 
  dark:border-slate-700
  sm:py-16 
  sm:px-12 
`;

const H2 = tw.h2`
  [font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]
  text-slate-800
  text-5xl 
  tracking-wider 
  font-bold
  mb-4 
  mt-6
  tablet:text-7xl 
  dark:text-teal-500
`;

export default Blog;
