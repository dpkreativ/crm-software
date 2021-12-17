import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-lg mx-auto p-5 lg:p-10">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
