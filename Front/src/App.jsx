import { useEffect } from "react";
import { Button } from "./components/ui/button";
import Hero from "./Madecomp/Hero";
import Timeline from "./Madecomp/Timeline";
import UploadShc from "./Madecomp/UploadShc";
import Test from "./Madecomp/Test";
function App() {
  return (
    <>
      <Hero />
      <UploadShc />
      <Timeline />
      <Test />
    </>
  );
}

export default App;
