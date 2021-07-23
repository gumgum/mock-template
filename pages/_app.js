import "../styles/globals.scss";
import { AppWrapper } from "../context/state";
import { useRouter } from "next/router";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Left from "../components/layout/Left";
import ModalWrapper from "../components/common/modal/modalWrapper";
// import Right from "../components/layout/Right";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      <ModalWrapper
        isOpen={!!router.query.modalItem}
        title={router.query.modalItem}
        content={router.query.modalItem}
        global={router.query.global}
      />
    </AppWrapper>
  );
}

export default MyApp;
