// DOM Elements
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const projectModal = document.getElementById("project-modal")
const modalClose = document.querySelector(".modal-close")
const downloadCvBtn = document.getElementById("download-cv")

// Navigation functionality
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Dark theme functionality
function getCurrentTheme() {
  return localStorage.getItem("theme") || "light"
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
  updateThemeIcon(theme)
}

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === "dark"
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>'
}

function applyNavbarStyle() {
  const theme = getCurrentTheme()
  const scrolled = window.scrollY > 100

  if (scrolled) {
    navbar.style.background = theme === "dark"
      ? "rgba(17, 24, 39, 0.98)"
      : "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = theme === "dark"
      ? "rgba(17, 24, 39, 0.95)"
      : "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
}

// Initialize theme on load
document.addEventListener("DOMContentLoaded", () => {
  const initialTheme = getCurrentTheme()
  setTheme(initialTheme)
  applyNavbarStyle()
})

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  const current = getCurrentTheme()
  const nextTheme = current === "dark" ? "light" : "dark"
  setTheme(nextTheme)
  applyNavbarStyle()
})

// Update navbar on scroll
window.addEventListener("scroll", applyNavbarStyle)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add animation classes and observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Add slide animations to specific elements
  const leftElements = document.querySelectorAll(".about-text, .contact-info")
  leftElements.forEach((el) => {
    el.classList.add("slide-in-left")
    observer.observe(el)
  })

  const rightElements = document.querySelectorAll(".about-image, .contact-form")
  rightElements.forEach((el) => {
    el.classList.add("slide-in-right")
    observer.observe(el)
  })

  // Animate skill items
  const skillItems = document.querySelectorAll(".skill-item")
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
    item.classList.add("fade-in")
    observer.observe(item)
  })

  // Animate project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`
    card.classList.add("fade-in")
    observer.observe(card)
  })

  // Animate timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`
    item.classList.add("fade-in")
    observer.observe(item)
  })
})

// Progress bar animation
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressFills = entry.target.querySelectorAll(".progress-fill")
        progressFills.forEach((fill) => {
          const width = fill.getAttribute("data-width")
          setTimeout(() => {
            fill.style.width = width + "%"
          }, 500)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  progressObserver.observe(skillsSection)
}

// Enhanced Project modal functionality
const projectData = {
  kampoengku: {
    title: "KampoengKu App",
    image: "images/kampoengku.png",
    overview: {
      description:
        "Designed the user interface of a community service app in Surabaya using the Design Thinking method to improve access to public services. the user interface of a community service app in Surabaya using the Design Thinking method to improve access to public KampoengKu is a community-driven mobile application designed to connect local communities with businesses, enhancing local commerce and cultural exchange.",
      technologies: ["Figma", "Maze"],
      role: "UX Researcher & UI Designer",
      duration: "6 months",
    },
    details: {
      challenges: [
        "Limited digital access and user engagement with public service platforms in Surabaya, coupled with unintuitive user interfaces."
      ],  
      solution:
        "Developed a user-centered design approach with extensive user research, wireframing, and iterative prototyping.",
      features: [
        "User personas and empathy maps from surveys and interviews",
        "High-fidelity prototype using Figma",
        "Usability testing via Maze with iterative improvements",
      ],
      outcomes:
      "The design enhanced user flow clarity and engagement, validated by positive user feedback during testing."
    },
    link: "https://www.figma.com/proto/PfYV4is9Y9AKLUP49DpT6Y/KampoengKu?node-id=3173-4745&t=onyJH8ufWZ46mbWb-1",
  },
  "fastkantin-web": {
    title: "Fast Kantin Web App",
    image: "images/fastkantinweb.png",
    overview: {
      description:
        "A comprehensive food ordering system built with Laravel and Tailwind CSS, designed for efficient canteen management with modern web technologies.",
      technologies: ["Laravel", "Tailwind CSS", "PHP", "MySQL", "JavaScript"],
      role: "Full Stack Developer",
      duration: "4 months",
    },
    details: {
      challenges: [
        "Inefficient manual ordering system at the campus canteen, causing delays and poor service during peak times.",
        "Building a scalable web application that handles multiple user roles, real-time orders, and payment processing.",
        "Implementing a user-friendly interface for both customers and admin staff.",
      ],
      solution:
        "Built a web-based application with multi-role user login (seller, buyer), integrated CRUD operations, and secure database connection.",
      features: [
        "User authentication and authorization",
        "Menu management system",
        "Order processing and tracking",
        "Payment integration",
        "Admin dashboard",
        "Responsive design",
        "Real-time notifications",
      ],
      outcomes: "Improved canteen operational efficiency and provided an accessible platform for students, staff, and lecturers to order food online.",
    },
    link: "https://github.com/andinnnputrii/FastKantin2-master",
  },
  "fastkantin-mobile": {
    title: "Fast Kantin Mobile App",
    image: "images/mobilefastkantin.png",
    overview: {
      description:
        "Android application developed with Kotlin using MVVM architecture and Room database for local data management, providing seamless mobile experience.",
      technologies: ["Kotlin", "MVVM Architecture", "Room Database", "Android SDK"],
      role: "Front End and Back End",
      duration: "5 months",
    },
    details: {
      challenges: [
        "Creating a native Android app with offline capabilities and smooth performance across different device specifications.",
      ],
      solution: "Utilized modern Android development practices with MVVM architecture and local database caching.",
      features: [
        "MVVM structure with ViewModel, Repository, Room, DAO",
        "User login and full CRUD for food menus",
        "Search functionality and user-friendly UI"
      ],
      outcomes: "Successfully reduced canteen wait times and improved the user experience for campus food services.",
    },
    link: "https://github.com/andinnnputrii/FastKantin-MobileApp",
  },
  "laundryku-desktop": {
    title: "LaundryKu Desktop App",
    image:"images/laundrybanner.png",
    overview: {
      description: 
      "LaundryKu is a desktop-based laundry management application developed as a final project for the Desktop Programming course. Built using Visual Studio and VB.NET, the application helps streamline daily operations of laundry services by providing essential features such as secure login, customer data management, laundry transaction tracking, and search functionality. With a focus on simplicity and usability, LaundryKu enables users to perform CRUD operations efficiently and monitor service statuses, ultimately reducing manual errors and improving data organization.",
      technologies: ["Visual Studio 2022 (VB.NET)", "SQL Server"],
      role: "UI Designer (Windows Forms)",
      duration: "5 months",
    },
    details: {
      challenges: [
        "Many small laundry businesses manually record customer data and laundry transactions, which leads to data loss, inefficiency, and difficulty in tracking customer orders.",
      ],
      solution: "Built a Windows Forms-based application with login authentication and CRUD functionalities, aimed at helping small laundry service providers digitize their operations.",
      features: [
        "Login System: User authentication for secure access",
        "Customer Data Management: Add, edit, delete, and search customer records",
        "Laundry Data Module: Manage laundry orders including item type, service, and status",
        "Search & Filter: Easily locate customer data based on name or ID",
        "Responsive UI: Simple and intuitive interface using WinForms controls"
      ],
      outcomes: "The application streamlined the data handling process for laundry services, reduced the risk of manual errors, and improved efficiency in tracking customer transactions.",
    },
    link: "https://github.com/andinnnputrii/LaundryKu-Desktop",
  }
}

// Project card click handlers
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project")
    showProjectModal(projectId)
  })
})

// Enhanced modal functionality
function showProjectModal(projectId) {
  const project = projectData[projectId]
  if (!project) return

  const modalTitle = document.getElementById("modal-title")
  const modalProjectImage = document.getElementById("modal-project-image")
  const overviewContent = document.getElementById("modal-overview-content")
  const detailsContent = document.getElementById("modal-details-content")

  // Set title and image
  modalTitle.textContent = project.title
  modalProjectImage.innerHTML = `<img src="${project.image}" alt="${project.title} Image" />`

  // Overview tab content
  overviewContent.innerHTML = `
    <div class="modal-section">
      <p>${project.overview.description}</p>
    </div>
    
    <div class="modal-section">
      <h3>Technologies / Tools Used</h3>
      <div class="modal-tech-tags">
        ${project.overview.technologies
      .map(
        (tech) => `
          <span class="modal-tech-tag">${tech}</span>
        `,
      )
      .join("")}
      </div>
    </div>
    
    <div class="modal-section">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div>
          <h3>Role</h3>
          <p>${project.overview.role}</p>
        </div>
        <div>
          <h3>Duration</h3>
          <p>${project.overview.duration}</p>
        </div>
      </div>
    </div>
    
    ${project.link !== "#"
      ? `
      <a href="${project.link}" target="_blank" class="modal-project-link">
        <i class="fas fa-external-link-alt"></i>
        View Project
      </a>
    `
      : ""
    }
  `

  // Details tab content
  detailsContent.innerHTML = `
    <div class="modal-section">
      <h3>Challenge</h3>
      ${project.details.challenges.length > 1
      ? `<ul>${project.details.challenges.map((challenge) => `<li>${challenge}</li>`).join("")}</ul>`
      : `<p>${project.details.challenges[0]}</p>`
    }
    </div>
    
    <div class="modal-section">
      <h3>Solution</h3>
      <p>${project.details.solution}</p>
    </div>
    
    <div class="modal-section">
      <h3>Key Features</h3>
      <ul>
        ${project.details.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>Outcomes</h3>
      <p>${project.details.outcomes}</p>
    </div>
  `

  // Reset tabs to overview
  document.querySelectorAll(".modal-tab-button").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".modal-tab-pane").forEach((pane) => pane.classList.remove("active"))
  document.querySelector('[data-tab="overview"]').classList.add("active")
  document.getElementById("overview").classList.add("active")

  projectModal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Modal close functionality
modalClose.addEventListener("click", closeModal)
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeModal()
  }
})

function closeModal() {
  projectModal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.style.display === "block") {
    closeModal()
  }
})

// Download CV functionality
downloadCvBtn.addEventListener("click", (e) => {
  e.preventDefault()

  fetch("CV_Putri_Andini_Rachmatika.pdf", { method: "HEAD" })
    .then((res) => {
      if (res.ok) {
        const link = document.createElement("a")
        link.href = "CV_Putri_Andini_Rachmatika.pdf"
        link.download = "CV_Putri_Andini_Rachmatika.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        alert("CV not available yet. Please contact me directly.")
      }
    })
    .catch(() => {
      alert("CV download failed or not available. Please contact me directly.")
    })
})

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.textContent = ""

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const nameElement = document.querySelector(".name")
  if (nameElement) {
    const originalText = nameElement.textContent
    setTimeout(() => {
      typeWriter(nameElement, originalText, 80)
    }, 1000)
  }
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")

  if (hero && heroContent) {
    const rate = scrolled * -0.5
    heroContent.style.transform = `translateY(${rate}px)`
  }
})

// Add hover effects to skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.05)"
  })

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)"
  })
})

// Add floating animation to contact icons
document.querySelectorAll(".contact-icon").forEach((icon, index) => {
  icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`
})

// Add CSS for floating animation
const style = document.createElement("style")
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`
document.head.appendChild(style)

// Initialize all animations and interactions
document.addEventListener("DOMContentLoaded", () => {
  // Add loading animation
  const body = document.body
  body.style.opacity = "0"
  body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    body.style.opacity = "1"
  }, 100)

  // Preload images and assets
  const images = document.querySelectorAll("img")
  let loadedImages = 0

  if (images.length === 0) {
    initializeAnimations()
  } else {
    images.forEach((img) => {
      if (img.complete) {
        loadedImages++
        if (loadedImages === images.length) {
          initializeAnimations()
        }
      } else {
        img.addEventListener("load", () => {
          loadedImages++
          if (loadedImages === images.length) {
            initializeAnimations()
          }
        })
      }
    })
  }
})

function initializeAnimations() {
  // Initialize all scroll-triggered animations
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  animatedElements.forEach((el) => {
    observer.observe(el)
  })

  // Add stagger animation to skill items
  const skillItems = document.querySelectorAll(".skill-item")
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
  })

  // Add entrance animation to navigation
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(-20px)"
    item.style.transition = "all 0.5s ease"

    setTimeout(
      () => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      },
      100 + index * 100,
    )
  })
}

// Add scroll progress indicator
const scrollProgress = document.createElement("div")
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    z-index: 9999;
    transition: width 0.1s ease;
`
document.body.appendChild(scrollProgress)

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  scrollProgress.style.width = scrollPercent + "%"
})

// Add easter egg - Konami code
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Easter egg activated
    document.body.style.animation = "rainbow 2s infinite"
    setTimeout(() => {
      document.body.style.animation = ""
      alert("🎉 Easter egg found! You discovered the secret code!")
    }, 2000)
    konamiCode = []
  }
})

// Add rainbow animation for easter egg
const rainbowStyle = document.createElement("style")
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`
document.head.appendChild(rainbowStyle)

// Performance optimization - lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Add custom cursor effect
const cursor = document.createElement("div")
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
    transition: transform 0.1s ease;
    display: none;
`
document.body.appendChild(cursor)

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px"
  cursor.style.top = e.clientY - 10 + "px"
  cursor.style.display = "block"
})

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none"
})

// Add click ripple effect
document.addEventListener("click", (e) => {
  const ripple = document.createElement("div")
  ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1000;
    `

  const size = 60
  ripple.style.width = ripple.style.height = size + "px"
  ripple.style.left = e.pageX - size / 2 + "px"
  ripple.style.top = e.pageY - size / 2 + "px"

  document.body.appendChild(ripple)

  setTimeout(() => {
    ripple.remove()
  }, 600)
})

// Add ripple animation
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".skills-tabs .tab-button")
  const tabContents = document.querySelectorAll(".skills-content .tab-content")

  // Tab switching function
  function switchTab(targetTab) {
    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => {
      btn.classList.remove("active")
    })
    tabContents.forEach((content) => {
      content.classList.remove("active")
    })

    // Add active class to clicked button and corresponding content
    const activeButton = document.querySelector(`.skills-tabs [data-tab="${targetTab}"]`)
    const activeContent = document.querySelector(`.skills-content #${targetTab}`)

    if (activeButton && activeContent) {
      activeButton.classList.add("active")
      activeContent.classList.add("active")

      // Trigger progress bar animation for soft skills
      if (targetTab === "soft-skills") {
        setTimeout(() => {
          const progressFills = activeContent.querySelectorAll(".progress-fill")
          progressFills.forEach((fill) => {
            const width = fill.getAttribute("data-width")
            fill.style.width = width + "%"
          })
        }, 300)
      }
    }
  }

  // Add click event listeners to tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      const targetTab = button.getAttribute("data-tab")
      switchTab(targetTab)
    })

    // Also add keyboard support
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const targetTab = button.getAttribute("data-tab")
        switchTab(targetTab)
      }
    })
  })

  // Initialize first tab (Hard Skills)
  setTimeout(() => {
    switchTab("hard-skills")
  }, 100)

  // Animate progress bars when soft skills section becomes visible
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeTab = document.querySelector(".skills-content .tab-content.active")
            if (activeTab && activeTab.id === "soft-skills") {
              const progressFills = activeTab.querySelectorAll(".progress-fill")
              progressFills.forEach((fill) => {
                const width = fill.getAttribute("data-width")
                setTimeout(() => {
                  fill.style.width = width + "%"
                }, 500)
              })
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    skillsObserver.observe(skillsSection)
  }
})

// Enhanced hover effects for skill cards
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card, .tech-item")

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Enhanced project cards animations
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card, index) => {
    // Stagger animation on load
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"

    setTimeout(
      () => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      },
      200 + index * 150,
    )

    // Enhanced hover effects
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03) translateY(-5px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1) translateY(0)"
    })

    // Focus handling for accessibility
    card.addEventListener("focus", () => {
      card.style.transform = "scale(1.03) translateY(-5px)"
    })

    card.addEventListener("blur", () => {
      card.style.transform = "scale(1) translateY(0)"
    })
  })
})

// Enhanced contact cards animations
document.addEventListener("DOMContentLoaded", () => {
  const contactCards = document.querySelectorAll(".contact-card")

  contactCards.forEach((card, index) => {
    // Stagger animation on scroll
    card.style.opacity = "0"
    card.style.transform = "translateY(20px) scale(0.9)"
    card.style.transition = "all 0.5s ease"

    // Intersection observer for contact cards
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0) scale(1)"
            }, index * 100)
            contactObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    contactObserver.observe(card)

    // Enhanced hover with ripple effect
    card.addEventListener("mouseenter", (e) => {
      const ripple = document.createElement("div")
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.3);
        transform: scale(0);
        animation: contactRipple 0.6s linear;
        pointer-events: none;
        z-index: 0;
      `

      const rect = card.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = "50%"
      ripple.style.top = "50%"
      ripple.style.transform = "translate(-50%, -50%) scale(0)"

      card.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })

    // Keyboard navigation support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        card.click()
      }
    })
  })
})

// Add contact ripple animation
const contactRippleStyle = document.createElement("style")
contactRippleStyle.textContent = `
  @keyframes contactRipple {
    to {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
`
document.head.appendChild(contactRippleStyle)

// Project cards intersection observer for better performance
document.addEventListener("DOMContentLoaded", () => {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".project-card").forEach((card) => {
    projectObserver.observe(card)
  })
})

// Modal tab functionality
document.addEventListener("DOMContentLoaded", () => {
  const modalTabButtons = document.querySelectorAll(".modal-tab-button")

  modalTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and panes
      modalTabButtons.forEach((btn) => btn.classList.remove("active"))
      document.querySelectorAll(".modal-tab-pane").forEach((pane) => pane.classList.remove("active"))

      // Add active class to clicked button and corresponding pane
      button.classList.add("active")
      document.getElementById(targetTab).classList.add("active")
    })
  })
})

window.addEventListener("load", () => {
  // Fallback untuk memastikan tab buttons bekerja
  const fallbackTabSetup = () => {
    const buttons = document.querySelectorAll(".tab-button")

    buttons.forEach((button) => {
      // Remove existing listeners to avoid duplicates
      button.replaceWith(button.cloneNode(true))
    })

    // Re-select after cloning
    const newButtons = document.querySelectorAll(".tab-button")

    newButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()

        const targetTab = this.getAttribute("data-tab")

        // Remove active from all
        newButtons.forEach((btn) => btn.classList.remove("active"))
        document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

        // Add active to current
        this.classList.add("active")
        const targetContent = document.getElementById(targetTab)
        if (targetContent) {
          targetContent.classList.add("active")

          // Handle soft skills progress bars
          if (targetTab === "soft-skills") {
            setTimeout(() => {
              const progressFills = targetContent.querySelectorAll(".progress-fill")
              progressFills.forEach((fill) => {
                const width = fill.getAttribute("data-width")
                fill.style.width = width + "%"
              })
            }, 300)
          }
        }
      })
    })

    // Set initial active state
    const firstButton = newButtons[0]
    const firstContent = document.getElementById("hard-skills")
    if (firstButton && firstContent) {
      firstButton.classList.add("active")
      firstContent.classList.add("active")
    }
  }

  setTimeout(fallbackTabSetup, 500)
})
