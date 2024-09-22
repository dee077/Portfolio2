import styled from "styled-components";
import tw from "twin.macro";
// import Images from "../Images/Imgindex";

interface content {
  title: string;
  para: string;
  img: string;
  btnText: string;
  reset: string;
  color: string;
}

const ProjectCards = ({ title, para, img, btnText, reset, color }: content) => {
  return (
    <>
      <MainGrid className="">
        <div className="self-end col-span-1 order-2 m-8 ml-20 mb-20 text-center md:text-left">
          <h2 className="mt-0 ml-2 font-headings font-bold text-5xl mb-8">
            {title}
          </h2>
          <p className="font-sans text-3xl ml-2">{para}</p>
          <a
            href="https://www.cssartchallenge.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex text-[1.7rem] items-center rounded-full px-10 py-3.5 mt-14 font-semibold transitionbg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700 bg-midnight no-underline"
          >
            {btnText}
            <svg
              className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-white dark:stroke-midnight"
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
          </a>
        </div>
        <div>
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="CSS Art Challenge on a Macbook Pro"
              decoding="async"
              data-nimg="intrinsic"
              srcSet={img}
              className={reset}
            />
          </Span1>
        </div>
      </MainGrid>
    </>
  );
};

const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  max-width: 100%;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0rem;
  border: none;
  margin: auto;
  display: block;
  width: auto !important;
  height: 68rem !important;
  min-width: 100%;
  /* max-width: 100%; */
  min-height: 100%;
  /* max-height: 100%; */
  object-fit: fill;
  /* border: 2px solid blue; */
  margin-left: 10rem;
  /* margin-top: 5rem; */
`;

const MainGrid = styled.div`
  ${tw`

    border-purple-100
    mb-20
    grid
    grid-cols-2
    gap-2
    bg-gradient-to-b
    from-purple-50
    to-purple-300
    rounded-[2.5rem]

    `}/* ${tw`border-t-2 `} */
`;

export default ProjectCards;
