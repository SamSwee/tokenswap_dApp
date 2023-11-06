import type { AppProps } from 'next/app';
import '../styles/globals.css'; // If you have global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
      {/* Optional: Add a footer or any other global components here */}
    </div>
  );
}

export default MyApp;