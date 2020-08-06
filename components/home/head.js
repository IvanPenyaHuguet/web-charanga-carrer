import Head from "next/head";
import Vertical from "./../../images/vertical.jpeg";

/**
 *
 *
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
        <meta
          name="description"
          content="Web de la agrupación charanga al carrer, somos un grupo musical joven y dinámico, entra y conócenos de primera mano, podemos tocar en todo tipo de actos festivos."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:image" content={Vertical}></meta>
      </Head>
      {children}
    </>
  );
}

export default MyHead;
