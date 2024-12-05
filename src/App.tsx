import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./Routes";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <MainContent>
          <AppRoutes />
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
