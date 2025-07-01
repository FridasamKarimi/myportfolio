function Resume() {
    return (
      <section id="resume" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="font-bold">BSc Computer Science, University of Example</p>
              <p className="text-gray-600">2018 - 2022</p>
              <p>Graduated with First-Class Honors, specialized in Software Engineering.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <p className="font-bold">Junior Developer, Tech Corp</p>
              <p className="text-gray-600">2022 - Present</p>
              <p>Developed web applications using React and Node.js, improved system efficiency by 20%.</p>
              <p className="font-bold mt-4">Intern, CyberSec Ltd</p>
              <p className="text-gray-600">2021 - 2022</p>
              <p>Assisted in penetration testing and vulnerability assessments.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc pl-5">
                <li>Certified Ethical Hacker (CEH) - 2023</li>
                <li>AWS Certified Solutions Architect - 2022</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="list-disc pl-5">
                <li>Programming: Python, JavaScript, Java</li>
                <li>Frameworks: React, Django, Node.js</li>
                <li>Tools: Git, Docker, Burp Suite</li>
                <li>Soft Skills: Problem-Solving, Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;