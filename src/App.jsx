
import Header from "./components/header.jsx";
import ProductItem from "./components/productItem.jsx";
const productList = [
    {
      name: "Apple",
      price: 100,
      description: "This is a fruit 3",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Samsung",
      price: 200,
      description: "This is a fruit 1",
      image: "https://picsum.photos/200/500",
    }
  ]
const App = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <main>
                <h2>Sản phẩm mới</h2>
                <div className="grid grid-cols-3 gap-8">
                   {productList.map((item) => {
                    return <ProductItem product={item} key={item.id} />;
                   })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;