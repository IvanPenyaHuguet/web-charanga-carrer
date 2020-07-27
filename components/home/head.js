import Head from "next/head";

function MyHead({ children, title = "Charanga al carrer" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default MyHead;
