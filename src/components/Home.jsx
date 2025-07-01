import profileImage from "../assets/profile.jpg"

function Home() {
    return (
        <section id="home" className="bg-gray-100 text-center">
            <div className="container mx-auto">
                <img src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 object cover"
                />
                <h2 className="text-3xl font-bold mb-2">Fridasam Muriithi</h2>
                <p className="text=lg text-gray-600">
                    Passionate Software Developer | Cybersecurity Enthusiast | Lifelong Learner
                </p>
            
            </div>
        </section>
    );
}


  
  
  export default Home;