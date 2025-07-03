function Home() {
  return (
    <section id="home" className="bg-light text-center py-5">
      <div className="container">
        <img
          src="/images/profile-1.png" // Direct reference to public/images
          alt="Profile"
          className="img-fluid rounded-circle mx-auto d-block mb-4"
          style={{ width: "128px", height: "128px", objectFit: "cover" }}
        />
        <h2 className="mb-2">Fridasam Muriithi</h2>
        <p className="text-muted">
          Passionate Software Developer | Cybersecurity Enthusiast | Lifelong Learner
        </p>
      </div>
    </section>
  );
}

export default Home;