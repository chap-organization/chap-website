import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
    return(
        <div>
            <SideBar />
            { children }
            <Footer />
        </div>

    );
}

export default Layout;