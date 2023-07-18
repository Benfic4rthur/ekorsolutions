import Card1 from "./Card1";
import Card2 from "./Card2";
import { ProductCard } from "./ProductCard";

export default function Products() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold">Products</h1>
        <Card1 />
        <Card2 />
        <ProductCard />
      </div>
    </>
  );
}
