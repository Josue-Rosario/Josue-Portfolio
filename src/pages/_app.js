import Theme from "../styles/theme";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
}
