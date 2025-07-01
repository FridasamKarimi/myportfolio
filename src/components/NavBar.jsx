function NavBar() {
    return (
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#resume" className="hover:text-gray-300">Resume</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#challenges" className="hover:text-gray-300">Lab Challenges</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;