import Loader from "Components/Loader";
import { useState, useEffect } from "react";
import { testDatas } from "../api";
import styled from "styled-components";
import TestTypes from "Components/Tests/TestTypes";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-gap: 25px;
`;

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(testDatas);
  }, []);

  return (
    <Container>
      <Grid>
        {data ? (
          data.map((item) => <TestTypes key={item.id} data={{ ...item }} />)
        ) : (
          <Loader />
        )}
      </Grid>
    </Container>
  );

  /*
   * Test Datas 개수만큼 TestTypes 컴포넌트 만들어서 보여주기
   */
};
export default Home;
