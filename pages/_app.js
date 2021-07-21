import "../styles/globals.scss";
import { AppWrapper } from "../context/state";

import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Left from "../components/layout/Left";
// import Right from "../components/layout/Right";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <div className="gds-app-layout__container">
        <Header />
        <Left />
        <Main>
          <Component {...pageProps} />
        </Main>
        {/* <Right /> */}
        {/* <div className="gds-app-layout__bottom">Not used</div> */}
      </div>
    </AppWrapper>
  );
}

export default MyApp;
