import style from "../styles/globals.scss?type=global";
import "../styles/style.css";
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
      <style jsx>{style}</style>
		</>
	);
}

export default MyApp;
