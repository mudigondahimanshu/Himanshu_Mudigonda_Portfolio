export const projectsData = [
  {
    id: 1,
    title: "Network Operations Automation",
    description: "Automated device output generation and pre/post-check comparisons using Python. Developed a firewall policy matcher and a Django web application to streamline network operations at Providence India.\n Unfortunately, I cannot share the code due to company policy, but I can provide a demo of the web application using images.",
    image: "/projects/network-automation.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/network-automation-demo1.png",
      "/projects/network-automation-demo2.png",
      "/projects/network-automation-demo3.png",
      "/projects/network-automation-demo4.png",
      "/projects/network-automation-demo5.png",
      "/projects/network-automation-demo6.png",
      "/projects/network-automation-demo7.png",
      "/projects/network-automation-demo8.png",
    ],
    technologies: ["Python", "Django", "Automation"],
    codeUrl: "",
    featured: true,
    tags: ["python", "django", "automation"],
    year: "2024"
  },
  {
    id: 2,
    title: "Crop Disease Detection Mobile App",
    description: "Flask-based web app using a 4-layer CNN model to detect crop diseases from images. Displays disease name, solution, and integrates with a local shop’s website to guide users toward purchasing the right medicine.",
    image: "/projects/crop-disease.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/crop-demo1.png",
      "/projects/crop-demo2.png",
      "/projects/crop-demo3.png",
      "/projects/crop-demo4.png",
      "/projects/crop-demo5.png",
    ],
    technologies: ["Flask", "CNN", "Machine Learning"],
    codeUrl: "https://github.com/devashishmudigonda/Plant-Disease-Mobile-App",
    featured: true,
    tags: ["python", "flask", "ml"],
    year: "2025"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "A Django-based web application aimed at managing library book records and user access. Currently under development with student access features yet to be integrated.",
    image: "/projects/library-management.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/lms-demo1.png",
      "/projects/lms-demo2.png",
      "/projects/lms-demo3.png",
      "/projects/lms-demo4.png",
      "/projects/lms-demo5.png",
      "/projects/lms-demo6.png",
      "/projects/lms-demo7.png",
      "/projects/lms-demo8.png",
    ],
    technologies: ["Django", "Web App"],
    codeUrl: "https://github.com/devashishmudigonda/Library-Management-System",
    featured: false,
    tags: ["python", "django", "webapp"],
    year: "2023"
  }
  {
    id: 4,
    title: "React To-Do App",
    description: "A responsive React-based To-Do application with dark mode, task management, and smooth UI interactions",
    image: "/projects/todo.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/todo-demo1.png",
      "/projects/todo-demo2.png",
      "/projects/todo-demo3.png",
      "/projects/todo-demo4.png",
    ],
    technologies: ["JavaScript", "React"],
    codeUrl: "",
    featured: true,
    tags: ["javascript", "react"],
    year: "2023"
  },
];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};
