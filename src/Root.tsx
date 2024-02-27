import { Outlet } from "react-router-dom";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { SideBar } from "./components/SideBar/SideBar";

function Root() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Content>
          <Outlet />
          <Footer />
        </Content>
      </div>
    </>
  );
}

export default Root;
