import Head from "../home/head";
import Footer from "../footer/footer";
import Header from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head title="Charanga al carrer"></Head>
      <div
        id="outer-container"
        className="main-container flex flex-col min-h-screen"
      >
        <header>
          <Header />
        </header>
        <main id="content-wrapper" className="content-wrapper flex-grow">
          {children}
        </main>
        <footer className="fixed bottom-0 w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default MainLayout;
