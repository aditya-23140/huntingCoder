import "@/styles/globals.css";
import Navbar from "@/components/navbar";
// Used to apply a component in all of the pages;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
 