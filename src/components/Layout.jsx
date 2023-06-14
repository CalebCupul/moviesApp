import Header from "./navigation/Header";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
