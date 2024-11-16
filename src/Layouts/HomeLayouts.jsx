import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import LeftAside from "../components/LayoutComponents/LeftAside";
import RightAside from "../components/LayoutComponents/RightAside";
import NavBar from "../components/NavBar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <Latest></Latest>
        </section>
      </header>

      <nav className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </nav>

      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12   gap-5 py-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
