import SideBar from "./SideBar";

const Layout = ({ children }) => {
    return(
        <div>
            <SideBar />
            { children }
            
        </div>

    );
}

export default Layout;