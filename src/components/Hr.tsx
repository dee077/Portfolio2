import styled from "styled-components";

const Hr = () => {
  return <HorizontalRuler />;
};

const HorizontalRuler = styled.hr`
  margin-top: 7rem;
  margin-bottom: 6rem;
  height: 3.5rem;
  width: 100%;
  border-style: none;
  text-align: center;

  &::before {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: rgb(209 213 219 / 1);
    content: "∿∿∿";
  }
`;

export default Hr;
