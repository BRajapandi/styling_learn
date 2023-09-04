import styled from "styled-components";

export const Selection = styled.div`
  background-color: ${(props) =>
    props.variant === "home" ? "#4caf50" : "#ffeeff"};

  .hero_area {
    color: ${(props) => (props.st ? "black" : "teal")};
  }
`;
