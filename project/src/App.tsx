import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hemanthkumarreddyk1@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.open(mailtoLink, '_blank');
    
    // Clear form and show success message
    setFormData({ name: '', email: '', message: '' });
    alert('Your email client has been opened with a pre-filled message. Please send the email to complete your contact request.');
  };

  const experiences = [
    {
      id: 1,
      title: "Java Full Stack Developer",
      company: "Kodnest",
      location: "Bangalore, India",
      duration: "Feb 2025 — June 2025",
      description: [
        "Developed a job listing platform using Java and Spring Boot for backend services and Angular for the frontend interface.",
        "Designed and implemented RESTful APIs for seamless communication between frontend and backend systems.",
        "Utilized MySQL for database management and integrated it with backend logic for efficient data retrieval and manipulation.",
        "Deployed the application using IBM WebSphere Application Server and followed Agile development practices including daily stand-ups, sprint planning, and code reviews."
      ]
    },
    {
      id: 2,
      title: "Cyber Security Intern",
      company: "Supraja Technologies",
      location: "Tirupati, India", 
      duration: "Mar 2024 — Aug 2024",
      description: [
        "Built a desktop-based webcam security tool using Python and Tkinter to prevent unauthorized access via Windows Registry modifications.",
        "Conducted vulnerability assessments and penetration testing on web applications using tools such as Burp Suite, OWASP ZAP, Metasploit, Nmap, and Acunetix.",
        "Performed network traffic analysis using Wireshark and executed SQL injection testing to identify and mitigate potential threats.",
        "Collaborated with team members to simulate real-world attack scenarios and improve system defenses."
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Learn-Sphere Learning Management System (LMS)",
      description: "A comprehensive full-stack LMS platform built with modern web technologies featuring user authentication, role-based access control, and responsive design.",
      features: [
        "Built a full-stack LMS platform using Java and Spring Boot for the backend, and Angular for the frontend",
        "Designed RESTful APIs for data exchange between frontend and backend modules",
        "Integrated user authentication and role-based access control using secure session handling",
        "Used MySQL for relational data storage and executed MVC architecture for modular, maintainable code",
        "Ensured responsive UI design using Angular components and Bootstrap styling"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "REST APIs", "Bootstrap"],
      githubUrl: "https://github.com/hemanth-devzone/LearnSphere_FullStack_LMS",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
    },
    {
      id: 2,
      name: "Webcam Spyware Security Tool",
      description: "A Python-based desktop security application designed to protect against unauthorized webcam access using Windows Registry modifications and real-time monitoring.",
      features: [
        "Developed a Python-based GUI application to block unauthorized webcam access using Windows Registry settings",
        "Performed an email-based OTP authentication via SMTP and enabled real-time webcam monitoring and control",
        "Applied OWASP Top 10 principles to enhance application security and prevent privacy breaches"
      ],
      technologies: ["Python", "Tkinter", "Windows Registry", "SMTP", "OWASP Security"],
      githubUrl: "https://github.com/hemanth-devzone/Webcam-Security-Tool",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      institution: "Sri Venkateswara College of Engineering",
      location: "Tirupati, India",
      duration: "2021 - 2025",
      grade: "CGPA: 7.56",
      status: "Completed June 2025"
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "Sri Chaitanya Jr. College",
      location: "Tirupati, India", 
      duration: "2019 - 2021",
      grade: "84.5%",
      status: "Completed July 2021"
    }
  ];

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
      color: "bg-blue-500"
    },
    backend: {
      title: "Backend & Frameworks",
      skills: ["Spring Boot", "Hibernate", "REST APIs", "Node.js", "Express.js"],
      color: "bg-green-500"
    },
    frontend: {
      title: "Frontend Technologies", 
      skills: ["Angular", "React", "Bootstrap", "Tailwind CSS", "Responsive Design"],
      color: "bg-purple-500"
    },
    database: {
      title: "Databases",
      skills: ["MySQL", "OracleDB", "NoSQL", "MongoDB", "SQLite"],
      color: "bg-orange-500"
    },
    tools: {
      title: "Tools & Platforms",
      skills: ["Git", "IBM WebSphere", "Eclipse IDE", "VS Code", "ChatGPT", "AI Prompts"],
      color: "bg-indigo-500"
    },
    security: {
      title: "Security Tools",
      skills: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Metasploit", "Kali Linux"],
      color: "bg-red-500"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hemanth Kumar Reddy K
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium capitalize relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hemanth Kumar</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Reddy K
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 font-light">
              <div className="typewriter">
                <span className="typewriter-text">Java Full-Stack Developer</span>
              </div>
            </div>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Detail-oriented and motivated Full Stack Java Developer with hands-on experience in designing 
              and developing scalable web applications using Java, Spring Boot, Angular, and MySQL.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View My Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-white transition-all duration-1000 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Java Developer with a strong foundation in both frontend and backend technologies. 
                Currently pursuing my B.Tech in Computer Engineering, I've gained practical experience through internships 
                and personal projects that showcase my ability to build robust, scalable applications.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My expertise spans across Java ecosystem with Spring Boot, modern frontend frameworks like Angular and React, 
                and cybersecurity practices. I'm proficient in building RESTful APIs, integrating secure authentication 
                mechanisms, and working with various database systems.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I thrive in Agile environments and have experience with vulnerability assessment, penetration testing, 
                and implementing security best practices. My goal is to create innovative solutions that make a meaningful impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/hemanth-devzone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                  </svg>
                  GitHub Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/hemanth-kumar-reddy-k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg" 
                alt="Developer workspace" 
                className="relative rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.education ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic foundation in Computer Engineering and technical excellence
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{edu.field}</p>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 mb-2">{edu.location}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {edu.duration}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                        {edu.grade}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 bg-white transition-all duration-1000 ${isVisible.experience ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on experience in full-stack development and cybersecurity
            </p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-gray-300 ml-4"></div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 ml-8 transform transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${isVisible.skills ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, secure, and scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div key={key} className="bg-gray-800 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-750">
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${category.color} animate-skill-bar`}
                            style={{
                              width: `${85 + Math.random() * 15}%`,
                              animationDelay: `${index * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Team Leadership", "Communication", "Problem Solving", "Time Management"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-white transition-all duration-1000 ${isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing my expertise in full-stack development and cybersecurity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="group-hover:mr-1 transition-all">View on GitHub</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a conversation about technology and development. Let's build something amazing together!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:hemanthkumarreddyk1@gmail.com" className="text-white hover:text-blue-400 transition-colors text-lg">
                      hemanthkumarreddyk1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/hemanth-devzone" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-lg">
                      hemanth-devzone
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/hemanth-kumar-reddy-k/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-lg">
                      hemanth-kumar-reddy-k
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:8217458164" className="text-white hover:text-blue-400 transition-colors text-lg">
                      +91 8217458164
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
                
                <p className="text-sm text-gray-400 text-center">
                  📧 This will open your email client with a pre-filled message to send to me.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-medium">&copy; 2025 Hemanth Kumar Reddy K. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Built with React, Tailwind CSS, and lots of ☕</p>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://github.com/hemanth-devzone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hemanth-kumar-reddy-k/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;