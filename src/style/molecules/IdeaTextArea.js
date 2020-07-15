import styled from "styled-components";

export const IdeaTextAreaWrapper = styled.article`
  & input {
    width: 100%;
  }

  & button {
    margin-left: 0.5rem;
  }

  & + & {
    margin-bottom: 3rem;
  }

  & h1 {
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const ToggleButtonAndTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
