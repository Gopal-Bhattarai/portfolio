import AlertState from "@/components/state/AlertContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AlertState>
      <Component {...pageProps} />
    </AlertState>
  );
}
