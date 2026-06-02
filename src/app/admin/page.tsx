export default function AdminPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <p className="mt-2">Manage products, customers and service requests.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Products</h2>
            <p>Add, edit or delete product details.</p>
            <button className="btn btn-primary">Manage Products</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Customers</h2>
            <p>View customer database and enquiries.</p>
            <button className="btn btn-primary">View Customers</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Service Requests</h2>
            <p>Track new service requests from customers.</p>
            <button className="btn btn-primary">View Requests</button>
          </div>
        </div>
      </div>
    </main>
  );
}
