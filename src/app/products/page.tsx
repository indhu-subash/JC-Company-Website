export default function ProductsPage() {
  const products = ["Steel Tanks", "Machine Frames", "Industrial Platforms"];

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Products</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div key={product} className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{product}</h2>
              <p>Custom fabricated product for industrial applications.</p>
              <button className="btn btn-primary">Request Quote</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
