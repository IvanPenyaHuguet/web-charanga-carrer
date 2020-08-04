import Head from "next/head";

/**
 *
 * @param {*} param0
 * @todo Poner etiquetas SEO y faltantes
 */

function MyHead({ children, title = "Charanga al carrer" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Roboto&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}

export default MyHead;
