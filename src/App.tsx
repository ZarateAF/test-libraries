import "./App.css";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "zaf-product-card";

const product = {
  id: "2",
  title: "Coffee test",
  // img: "./coffee-mug.png",
};

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10
        }}
      >
        {({ count, isMaxCountReached, reset, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
