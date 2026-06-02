export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">JC Fabrication</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <section className="hero min-h-[80vh] bg-slate-900 text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              Precision Fabrication & Engineering Solutions
            </h1>
            <p className="py-6">
              We provide welding, structural fabrication, sheet metal work,
              machining and custom engineering solutions.
            </p>
            <a href="/contact" className="btn btn-primary">
              Request a Service
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 max-w-3xl">
          JC Fabrication Company delivers reliable metal fabrication services
          with focus on quality, safety and timely delivery.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-base-200 p-10">
        <h2 className="text-3xl font-bold">Our Services</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {["Welding", "Structural Fabrication", "Sheet Metal", "CNC Machining"].map(
            (service) => (
              <div key={service} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">{service}</h3>
                  <p>Professional fabrication service for industrial needs.</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Products */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Products</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Steel Tanks", "Machine Frames", "Custom Components"].map(
            (product) => (
              <div key={product} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">{product}</h3>
                  <p>Fabricated as per customer requirement.</p>
                  <div className="card-actions justify-end">
                    <a href="/products" className="btn btn-sm btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-base-200 p-10">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <p className="mt-4">
          Our team includes engineers, supervisors, welders and fabricators.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer footer-center bg-slate-900 text-white p-8">
        <aside>
          <p>© 2026 JC Fabrication Company. All rights reserved.</p>
        </aside>
      </footer>
    </main>
  );
}