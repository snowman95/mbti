import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home";
import Header from "Components/Header";
import TestBook from "Components/Tests/TestBook";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Routes>
        {/* Routes는 오직 하나의 Route만 Render하게 해줌  5이하버전의 Switch와 동일 */}
        <Route path="/" exact element={<Home />} />
        <Route path="testbook:id" exact element={<TestBook />} />

        {/* <Redirect from="*" to="/" /> ->  5이하버전 사용 */}
        <Route path="*" render={() => <Redirect to="/" />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
    </>
  </HashRouter>
);
