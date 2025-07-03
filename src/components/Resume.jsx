function Resume() {
  return (
    <section id="resume" className="py-5 bg-light">
      <div className="container px-4">
        <h2 className="text-center mb-4">Resume</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <h3 className="mb-3">Education</h3>
            <p className="fw-bold">BSc Computer Science, University of Example</p>
            <p className="text-muted">2018 - 2022</p>
            <p>Graduated with First-Class Honors, specialized in Software Engineering.</p>
          </div>
          <div className="col">
            <h3 className="mb-3">Work Experience</h3>
            <p className="fw-bold">Junior Developer, Tech Corp</p>
            <p className="text-muted">2022 - Present</p>
            <p>Developed web applications using React and Node.js, improved system efficiency by 20%.</p>
            <p className="fw-bold mt-3">Intern, CyberSec Ltd</p>
            <p className="text-muted">2021 - 2022</p>
            <p>Assisted in penetration testing and vulnerability assessments.</p>
          </div>
          <div className="col">
            <h3 className="mb-3">Certifications</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light">Certified Ethical Hacker (CEH) - 2023</li>
              <li className="list-group-item bg-light">AWS Certified Solutions Architect - 2022</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="mb-3">Skills</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light">Programming: Python, JavaScript, Java</li>
              <li className="list-group-item bg-light">Frameworks: React, Django, Node.js</li>
              <li className="list-group-item bg-light">Tools: Git, Docker, Burp Suite</li>
              <li className="list-group-item bg-light">Soft Skills: Problem-Solving, Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;