import "../styles/index.css";
import { ResponsiveContext } from "../lib/context";
import getScreenResolution from "../lib/resolution";
import canUseDOM from "../lib/canUseDOM";
import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/mainlayout";

/**
 * Permite declarar todos los contextos y layouts que se comparten entre todas las rutas.
 * @param {components} Component,pageProps componentes de react necesario que pasen abajo para que se cargen las paginas.
 * @todo Hacer que el layout solo se cargue en las rutas asignadas.
 */
const App = ({ Component, pageProps }) => {
  const resolution = useResolution();
  return (
    <ResponsiveContext.Provider value={{ resolution }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ResponsiveContext.Provider>
  );
};

/**
 * Hook para manejar el estado de la resolucion y hacer la web mas responsive.
 * @returns {('xs'|'sm'|'md'|'lg')} Resolución actual, tiene eventos de movimiento de ventana para actualizarse en tiempo real
 */
const useResolution = () => {
  const currentResolution = getScreenResolution();

  const [resolution, setResolution] = useState(currentResolution);

  useEffect(() => {
    const handleResize = () => {
      if (canUseDOM) {
        setResolution(getScreenResolution());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return resolution;
};

export default App;
