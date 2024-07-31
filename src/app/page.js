import About from "./HomeLayout/About/About";
import Choose from "./HomeLayout/Choose/Choose";
import Intro from "./HomeLayout/Intro/Intro";
import ProductsMain from "./HomeLayout/Product/ProductsMain";


export default function Home() {
  return (
    <> 
      <Intro />
      <Choose />
      {/* */}
      <ProductsMain/>
      <div className="pb-20"></div>
      <About /> 
    </>
  );
}
