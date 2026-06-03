export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-base-200 p-8">
      <h1 className="mb-2 text-4xl font-bold">Admin Dashboard</h1>

      <p className="mb-8 text-gray-500">
        Manage products, customers, service requests, and website settings.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Products</h2>
            <p>Add, edit or delete products.</p>
            <button type="button" className="btn btn-primary">
              Manage Products
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Customers</h2>
            <p>View customer database.</p>
            <button type="button" className="btn btn-primary">
              View Customers
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Service Requests</h2>
            <p>Track incoming enquiries.</p>
            <button type="button" className="btn btn-primary">
              View Requests
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Analytics</h2>
            <p>Website visits and enquiry statistics.</p>
            <button type="button" className="btn btn-secondary">
              View Analytics
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Email Queries</h2>
            <p>Monitor EmailJS submissions.</p>
            <button type="button" className="btn btn-secondary">
              Open Queries
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Settings</h2>
            <p>Manage website settings.</p>
            <button type="button" className="btn btn-accent">
              Open Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
