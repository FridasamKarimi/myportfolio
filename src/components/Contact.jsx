function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container px-4 text-center">
        <h2 className="mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out for collaboration or opportunities!</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://linkedin.com/in/FridasamKarimi" className="text-primary text-decoration-none hover-text-decoration-underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/FridasamKarimi" className="text-primary text-decoration-none hover-text-decoration-underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:kfridasam@gmail.com" className="text-primary text-decoration-none hover-text-decoration-underline">Email</a>
          <p>+1-555-123-4567</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;