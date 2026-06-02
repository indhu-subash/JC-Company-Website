export default function ContactPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <form className="mt-8 max-w-xl space-y-4">
        <input className="input input-bordered w-full" placeholder="Name" />
        <input className="input input-bordered w-full" placeholder="Email" />
        <input className="input input-bordered w-full" placeholder="Phone" />
        <input className="input input-bordered w-full" placeholder="Service Required" />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
        />
        <button className="btn btn-primary">Send Request</button>
      </form>
    </main>
  );
}
