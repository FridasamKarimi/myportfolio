function Challenge({ title, problem, approach, tools, lessons }) {
  return (
    <div className="card p-4 shadow-sm mb-4 hover-shadow">
      <h3 className="card-title mb-2">{title}</h3>
      <p><strong>Problem Statement:</strong> {problem}</p>
      <p><strong>Approach:</strong> {approach}</p>
      <p><strong>Tools Used:</strong> {tools}</p>
      <p><strong>Key Lessons:</strong> {lessons}</p>
      <p className="mt-3">
        <button className="btn btn-link text-decoration-none">View Screenshot (Placeholder)</button>
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
    <section id="challenges" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Lab Challenges</h2>
        <div className="row">
          {challenges.map((challenge, index) => (
            <div key={index} className="col-12 col-md-6 mb-3">
              <Challenge {...challenge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabChallenges;