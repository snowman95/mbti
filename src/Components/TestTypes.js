import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultImg from "../assets/defaultImg.png";

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

const TestTypes = ({ id, img_path, title, description, page }) => (
  <Link
    to={{
      pathname: `/test_types/${id}`,
      state: {
        id,
        img_path,
        title,
      },
    }}
  >
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <Image
          bgUrl={
            img_path
              ? `https://image.tmdb.org/t/p/w300${img_path}`
              : `${defaultImg}`
          }
        />
      </ImageContainer>
    </Container>
  </Link>
);

export default TestTypes;
