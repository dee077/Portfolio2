import styled from "styled-components";
import tw from "twin.macro";
import Hero from "./components/Hero";
import About from "./components/About";
import { Project } from "./components/Project";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="dark:bg-[#0b1121] transition-all duration-300 ease-in-out ">
        {/* <div className="dark:bg-algolia"> */}
        <MainDiv id="Blur">
          <Hero />
          <About />
          <Project />
          <Work />
          <Blog />
          <Footer />
        </MainDiv>
      </div>
    </>
  );
};

const MainDiv = styled.main`
  max-width: 115rem;
  ${tw`relative flex flex-col min-h-screen px-6 mx-auto pt-[8rem]`};
`;

export default App;
