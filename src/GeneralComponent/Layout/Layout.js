
import React  from "react";
import { Navbar } from "../NavBar/Navbar";
import { Sidebar } from "../SideBar/Sidebar";
// LayoutContext


export function Layout({ children }) {

    return (
        <React.Fragment>
            <div>
                <div className= "row m-0 p-0">
                    <div className="col-lg-12 m-0 p-0"><Navbar /></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-lg-2 m-0 p-0"><Sidebar /></div>
                    <div className="col-lg-10 m-0 p-0">{children}</div>
                </div>
            </div>
            {/* <div style={{ position: "fixed", top: "0px", left: "0px" }} className="w-100">
                <header>
                    <Navbar />
                </header>

                <aside>
                    <Sidebar />
                    <article className="content">{children}</article>
                </aside>
            </div> */}

            {/* <footer>
                <p>Footer</p>
            </footer> */}
        </React.Fragment>
    )
}
