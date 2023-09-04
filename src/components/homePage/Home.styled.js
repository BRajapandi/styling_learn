import styled from "styled-components";

export const Selection = styled.div`
  background-color: ${(props) =>
    props.variant === "home" ? "#ffeeff" : "#4caf50"};

  .hero_area {
    color: ${(props) => (props.st ? "black" : "teal")};
  }
  &:hover {
    background-color: black;
  }
  .hero_area:hover {
    color: white;
  }
`;
