function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-lg mb-4">Feel free to reach out for collaboration or opportunities!</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/FridasamKarimi" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/FridasamKarimi" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:kfridasam@gmail.com" className="text-blue-500 hover:underline">Email</a>
            <p>+1-555-123-4567</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;