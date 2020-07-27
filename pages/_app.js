import "../styles/index.css";
import { ResponsiveContext } from "../lib/context";
import getScreenResolution from "../lib/resolution";
import canUseDOM from "../lib/canUseDOM";
import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/mainlayout";

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
 * Hook to manage screen resolution state in a responsive web design context.
 * @returns {('xs'|'sm'|'md'|'lg')} Current screen resolution
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
