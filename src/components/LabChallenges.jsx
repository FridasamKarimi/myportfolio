function Challenge({ title, problem, approach, tools, lessons }) {
    return (
      <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p><strong>Problem Statement:</strong> {problem}</p>
        <p><strong>Approach:</strong> {approach}</p>
        <p><strong>Tools Used:</strong> {tools}</p>
        <p><strong>Key Lessons:</strong> {lessons}</p>
        <p className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">View Screenshot (Placeholder)</a>
        </p>
      </div>
    );
  }
  
  function LabChallenges() {
    const challenges = [
      {
        title: "Web App Penetration Test",
        problem: "Identify and exploit vulnerabilities in a web application to gain unauthorized access.",
        approach: "Used OWASP ZAP to scan for vulnerabilities, identified SQL injection, and exploited it using SQLMap.",
        tools: "OWASP ZAP, SQLMap, Burp Suite",
        lessons: "Learned the importance of input validation and secure coding practices.",
      },
      {
        title: "CTF Challenge: Crypto Puzzle",
        problem: "Decrypt a message encoded with a custom substitution cipher.",
        approach: "Analyzed the cipher text, identified patterns, and wrote a Python script to automate decryption.",
        tools: "Python, CyberChef",
        lessons: "Gained insights into frequency analysis and scripting for crypto challenges.",
      },
    ];
  
    return (
      <section id="challenges" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Lab Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Challenge key={index} {...challenge} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default LabChallenges;
