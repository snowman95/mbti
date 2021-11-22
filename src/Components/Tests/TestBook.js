import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultImg from "images/defaultImg.png";
import { useState } from "react";
import { testDatas } from "api";

const Container = styled.div`
  font-size: 12px;
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 300px;
  border-radius: 50px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  margin-bottom: 3px;
  width: 100%;
  font-size: 12px;
  line-height: 14px;
  display: block;
  /* 글자 튀어나가는 부분 깔끔하게 처리 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const TestBook = ({ id, img_path, title, description, page }) => {
  const [data, setData] = useState({ id, img_path, title, description, page });

  if (!data) {
    setData(testDatas);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <Image bgUrl={img_path ? `${img_path}` : `${defaultImg}`} />
      </ImageContainer>
    </Container>
  );
};

export default TestBook;
