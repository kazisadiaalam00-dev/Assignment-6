import { Suspense } from "react";
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getAllProducts } from "@/library/api";

async function WorkoutsList() {
  const products = await getAllProducts();
  return <AllProducts products={products} />;
}

export default function WorkoutPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Banner />

      <Suspense
        fallback={
          <div className="px-4 md:px-12 py-10">
            <p className="text-zinc-400 text-sm">Loading workouts...</p>
          </div>
        }
      >
        <WorkoutsList />
      </Suspense>
    </div>
  );
}