import Navigation from "components/footer/navigation";
import Header from "components/header/kondisiPengantaran";
import Order from "components/footer/orderNav";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full h-full">{children}</div>
      <Order />
      <Navigation />
    </div>
  );
};

export default Layout;
