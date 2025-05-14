// // Select DOM elements
// const menuIcon = document.querySelector("#menu-icon");
// const navbar = document.querySelector(".navbar");
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");
// const header = document.querySelector(".header");
// const form = document.querySelector("#contact-form");
// const yearEl = document.querySelector("#year");

// // Set current year in footer
// yearEl.textContent = new Date().getFullYear();

// // Toggle navbar for mobile
// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// });

// // Create and append reminder message element to the DOM
// function createReminderMessage() {
//   // Create reminder container
//   const reminderContainer = document.createElement('div');
//   reminderContainer.className = 'reminder-container';
//   reminderContainer.style.cssText = `
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     background-color: var(--main-color);
//     color: var(--bg-color);
//     max-width: 350px;
//     padding: 15px 20px;
//     border-radius: 8px;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//     z-index: 1000;
//     display: flex;
//     flex-direction: column;
//     transform: translateY(150%);
//     transition: transform 0.5s ease;
//     font-family: 'Poppins', sans-serif;
//   `;

//   // Create reminder content
//   const reminderContent = document.createElement('div');
//   reminderContent.className = 'reminder-content';
  
//   // Add heading
//   const reminderHeading = document.createElement('h3');
//   reminderHeading.style.cssText = `
//     margin: 0 0 10px 0;
//     font-size: 1.8rem;
//     font-weight: 600;
//   `;
//   reminderHeading.textContent = 'Don\'t forget!';
  
//   // Add message
//   const reminderMessage = document.createElement('p');
//   reminderMessage.style.cssText = `
//     margin: 0 0 15px 0;
//     font-size: 1.4rem;
//     line-height: 1.5;
//   `;
//   reminderMessage.textContent = 'Thank you for visiting my portfolio. Feel free to contact me for any project collaboration or job opportunities!';
  
//   // Create buttons container
//   const buttonContainer = document.createElement('div');
//   buttonContainer.style.cssText = `
//     display: flex;
//     justify-content: flex-end;
//     gap: 10px;
//   `;
  
//   // Create dismiss button
//   const dismissButton = document.createElement('button');
//   dismissButton.className = 'reminder-dismiss';
//   dismissButton.style.cssText = `
//     background-color: transparent;
//     border: 1px solid var(--bg-color);
//     color: var(--bg-color);
//     padding: 8px 12px;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 1.3rem;
//     font-weight: 500;
//     transition: all 0.3s ease;
//   `;
//   dismissButton.textContent = 'Dismiss';
  
//   // Create contact button
//   const contactButton = document.createElement('button');
//   contactButton.className = 'reminder-contact';
//   contactButton.style.cssText = `
//     background-color: var(--bg-color);
//     border: 1px solid var(--bg-color);
//     color: var(--main-color);
//     padding: 8px 12px;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 1.3rem;
//     font-weight: 500;
//     transition: all 0.3s ease;
//   `;
//   contactButton.textContent = 'Contact Now';
  
//   // Append all elements
//   buttonContainer.appendChild(dismissButton);
//   buttonContainer.appendChild(contactButton);
  
//   reminderContent.appendChild(reminderHeading);
//   reminderContent.appendChild(reminderMessage);
//   reminderContent.appendChild(buttonContainer);
  
//   reminderContainer.appendChild(reminderContent);
//   document.body.appendChild(reminderContainer);
  
//   // Add button event listeners
//   dismissButton.addEventListener('click', () => {
//     hideReminderMessage(reminderContainer);
//     // Save to localStorage to remember user dismissed the reminder
//     localStorage.setItem('reminderDismissed', Date.now());
//   });
  
//   contactButton.addEventListener('click', () => {
//     hideReminderMessage(reminderContainer);
//     // Scroll to contact section
//     const contactSection = document.querySelector('#contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
  
//   return reminderContainer;
// }

// // Function to show reminder message
// function showReminderMessage(reminderContainer) {
//   setTimeout(() => {
//     reminderContainer.style.transform = 'translateY(0)';
//   }, 100);
// }

// // Function to hide reminder message
// function hideReminderMessage(reminderContainer) {
//   reminderContainer.style.transform = 'translateY(150%)';
//   setTimeout(() => {
//     reminderContainer.remove();
//   }, 500);
// }

// // Schedule reminder message
// function scheduleReminder() {
//   // Check if reminder was dismissed earlier
//   const lastDismissed = localStorage.getItem('reminderDismissed');
//   const now = Date.now();
  
//   // If it was dismissed less than 24 hours ago, don't show it
//   if (lastDismissed && now - parseInt(lastDismissed) < 24 * 60 * 60 * 1000) {
//     return;
//   }
  
//   // Create and show reminder after 15 seconds of page visit
//   const reminderContainer = createReminderMessage();
//   setTimeout(() => {
//     showReminderMessage(reminderContainer);
    
//     // Auto-hide after 15 seconds if not interacted with
//     setTimeout(() => {
//       if (document.body.contains(reminderContainer)) {
//         hideReminderMessage(reminderContainer);
//       }
//     }, 15000);
//   }, 15000);
// }

// // Active links and sticky header on scroll
// window.addEventListener("scroll", () => {
//   // Sticky header
//   header.classList.toggle("sticky", window.scrollY > 100);
  
//   // Active nav links based on scroll position
//   let current = "";
  
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 100;
//     const sectionHeight = section.offsetHeight;
    
//     if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//       current = section.getAttribute("id");
      
//       // Add show-animate class for animations
//       section.classList.add("show-animate");
//     } else {
//       // Optional: Remove animation class when section is out of view
//       section.classList.remove("show-animate");
//     }
//   });
  
//   // Update active nav link
//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").substring(1) === current) {
//       link.classList.add("active");
//     }
//   });
  
//   // Close mobile menu when scrolling
//   if (navbar.classList.contains("active")) {
//     menuIcon.classList.remove("bx-x");
//     navbar.classList.remove("active");
//   }
// });

// // Close menu when clicking on nav links
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     if (navbar.classList.contains("active")) {
//       menuIcon.classList.remove("bx-x");
//       navbar.classList.remove("active");
//     }
//   });
// });

// // Form validation and submission
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
  
//   // Get form input values
//   const name = document.querySelector('input[name="name"]').value;
//   const email = document.querySelector('input[name="email"]').value;
//   const mobile = document.querySelector('input[name="mobile"]').value;
//   const subject = document.querySelector('input[name="subject"]').value;
//   const message = document.querySelector('textarea[name="message"]').value;
  
//   // Basic validation
//   if (name.trim() === "" || email.trim() === "" || mobile.trim() === "" || 
//       subject.trim() === "" || message.trim() === "") {
//     showFormMessage("Please fill in all fields", "error");
//     return;
//   }
  
//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     showFormMessage("Please enter a valid email address", "error");
//     return;
//   }
  
//   // Phone validation (basic)
//   const phoneRegex = /^\d{10,15}$/;
//   if (!phoneRegex.test(mobile.replace(/[^0-9]/g, ''))) {
//     showFormMessage("Please enter a valid phone number", "error");
//     return;
//   }
  
//   // If all validations pass, show success message
//   showFormMessage("Thank you for your message! I'll get back to you soon.", "success");
//   form.reset();
// });

// // Enhanced form message (replaces alert)
// function showFormMessage(message, type) {
//   // Remove any existing message
//   const existingMessage = document.querySelector('.form-message');
//   if (existingMessage) {
//     existingMessage.remove();
//   }
  
//   // Create message element
//   const messageElement = document.createElement('div');
//   messageElement.className = `form-message ${type}`;
//   messageElement.style.cssText = `
//     padding: 15px;
//     margin: 20px 0;
//     border-radius: 6px;
//     font-size: 1.5rem;
//     text-align: center;
//     animation: fadeIn 0.5s ease;
//   `;
  
//   if (type === 'error') {
//     messageElement.style.backgroundColor = '#ffebee';
//     messageElement.style.color = '#d32f2f';
//     messageElement.style.border = '1px solid #ffcdd2';
//   } else {
//     messageElement.style.backgroundColor = '#e8f5e9';
//     messageElement.style.color = '#388e3c';
//     messageElement.style.border = '1px solid #c8e6c9';
//   }
  
//   messageElement.textContent = message;
  
//   // Add close button
//   const closeButton = document.createElement('span');
//   closeButton.innerHTML = '&times;';
//   closeButton.style.cssText = `
//     float: right;
//     cursor: pointer;
//     font-size: 2rem;
//     font-weight: bold;
//     margin-left: 10px;
//   `;
//   closeButton.addEventListener('click', () => {
//     messageElement.remove();
//   });
  
//   messageElement.prepend(closeButton);
  
//   // Add to DOM before the submit button
//   const submitButton = document.querySelector('.btn-submit');
//   submitButton.parentNode.insertBefore(messageElement, submitButton);
  
//   // Auto-remove after 5 seconds for success messages
//   if (type === 'success') {
//     setTimeout(() => {
//       if (document.body.contains(messageElement)) {
//         messageElement.style.opacity = '0';
//         setTimeout(() => messageElement.remove(), 500);
//       }
//     }, 5000);
//   }
// }

// // Add smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const targetId = this.getAttribute('href');
//     if (targetId === '#') return; // Skip for "#" links
    
//     const targetElement = document.querySelector(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 70, // Offset for header
//         behavior: 'smooth'
//       });
//     }
//   });
// });

// // Initialize animations when DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//   // Set initial active link based on current position
//   let scrollPos = window.scrollY;
  
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 100;
//     const sectionHeight = section.offsetHeight;
    
//     if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//       const currentId = section.getAttribute("id");
//       navLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href").substring(1) === currentId) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
  
//   // Add show-animate class to visible sections
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - window.innerHeight;
//     if (scrollPos > sectionTop) {
//       section.classList.add("show-animate");
//     }
//   });
  
//   // Schedule reminder message
//   scheduleReminder();
  
//   // Add keyframe animation for fade in/out effects
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = `
//     @keyframes fadeIn {
//       from { opacity: 0; transform: translateY(-10px); }
//       to { opacity: 1; transform: translateY(0); }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// });

// Select DOM elements
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const form = document.querySelector("#contact-form");
const yearEl = document.querySelector("#year");

// Set current year in footer
yearEl.textContent = new Date().getFullYear();

// Toggle navbar for mobile
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Create and append reminder message element to the DOM
function createReminderMessage() {
  // Create reminder container
  const reminderContainer = document.createElement('div');
  reminderContainer.className = 'reminder-container';
  reminderContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--main-color);
    color: var(--bg-color);
    max-width: 350px;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transform: translateY(150%);
    transition: transform 0.5s ease;
    font-family: 'Poppins', sans-serif;
  `;

  // Create reminder content
  const reminderContent = document.createElement('div');
  reminderContent.className = 'reminder-content';
  
  // Add heading
  const reminderHeading = document.createElement('h3');
  reminderHeading.style.cssText = `
    margin: 0 0 10px 0;
    font-size: 1.8rem;
    font-weight: 600;
  `;
  reminderHeading.textContent = 'Don\'t forget!';
  
  // Add message
  const reminderMessage = document.createElement('p');
  reminderMessage.style.cssText = `
    margin: 0 0 15px 0;
    font-size: 1.4rem;
    line-height: 1.5;
  `;
  reminderMessage.textContent = 'Thank you for visiting my portfolio. Feel free to contact me for any project collaboration or job opportunities!';
  
  // Create buttons container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  `;
  
  // Create dismiss button
  const dismissButton = document.createElement('button');
  dismissButton.className = 'reminder-dismiss';
  dismissButton.style.cssText = `
    background-color: transparent;
    border: 1px solid var(--bg-color);
    color: var(--bg-color);
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease;
  `;
  dismissButton.textContent = 'Dismiss';
  
  // Create contact button
  const contactButton = document.createElement('button');
  contactButton.className = 'reminder-contact';
  contactButton.style.cssText = `
    background-color: var(--bg-color);
    border: 1px solid var(--bg-color);
    color: var(--main-color);
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease;
  `;
  contactButton.textContent = 'Contact Now';
  
  // Append all elements
  buttonContainer.appendChild(dismissButton);
  buttonContainer.appendChild(contactButton);
  
  reminderContent.appendChild(reminderHeading);
  reminderContent.appendChild(reminderMessage);
  reminderContent.appendChild(buttonContainer);
  
  reminderContainer.appendChild(reminderContent);
  document.body.appendChild(reminderContainer);
  
  // Add button event listeners
  dismissButton.addEventListener('click', () => {
    hideReminderMessage(reminderContainer);
    // Save to localStorage to remember user dismissed the reminder
    localStorage.setItem('reminderDismissed', Date.now());
  });
  
  contactButton.addEventListener('click', () => {
    hideReminderMessage(reminderContainer);
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  return reminderContainer;
}

// Function to show reminder message
function showReminderMessage(reminderContainer) {
  setTimeout(() => {
    reminderContainer.style.transform = 'translateY(0)';
  }, 100);
}

// Function to hide reminder message
function hideReminderMessage(reminderContainer) {
  reminderContainer.style.transform = 'translateY(150%)';
  setTimeout(() => {
    reminderContainer.remove();
  }, 500);
}

// Schedule reminder message
function scheduleReminder() {
  // Check if reminder was dismissed earlier
  const lastDismissed = localStorage.getItem('reminderDismissed');
  const now = Date.now();
  
  // If it was dismissed less than 24 hours ago, don't show it
  if (lastDismissed && now - parseInt(lastDismissed) < 24 * 60 * 60 * 1000) {
    return;
  }
  
  // Create and show reminder after 15 seconds of page visit
  const reminderContainer = createReminderMessage();
  setTimeout(() => {
    showReminderMessage(reminderContainer);
    
    // Auto-hide after 15 seconds if not interacted with
    setTimeout(() => {
      if (document.body.contains(reminderContainer)) {
        hideReminderMessage(reminderContainer);
      }
    }, 15000);
  }, 15000);
}

// Active links and sticky header on scroll
window.addEventListener("scroll", () => {
  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);
  
  // Active nav links based on scroll position
  let current = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
      
      // Add show-animate class for animations
      section.classList.add("show-animate");
    } else {
      // Optional: Remove animation class when section is out of view
      section.classList.remove("show-animate");
    }
  });
  
  // Update active nav link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
  
  // Close mobile menu when scrolling
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbar.classList.contains("active")) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
});

// Form validation and submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get form input values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const mobile = document.querySelector('input[name="mobile"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  // Basic validation
  if (name.trim() === "" || email.trim() === "" || mobile.trim() === "" || 
      subject.trim() === "" || message.trim() === "") {
    showFormMessage("Please fill in all fields", "error");
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address", "error");
    return;
  }
  
  // Phone validation (basic)
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(mobile.replace(/[^0-9]/g, ''))) {
    showFormMessage("Please enter a valid phone number", "error");
    return;
  }
  
  // If all validations pass, show success message
  showFormMessage("Thank you for your message! I'll get back to you soon.", "success");
  form.reset();
});

// Enhanced form message (replaces alert)
function showFormMessage(message, type) {
  // Remove any existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message ${type}`;
  messageElement.style.cssText = `
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    font-size: 1.6rem;
    text-align: center;
    animation: fadeIn 0.5s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  `;
  
  if (type === 'error') {
    messageElement.style.backgroundColor = '#ffebee';
    messageElement.style.color = '#d32f2f';
    messageElement.style.border = '1px solid #ffcdd2';
  } else {
    messageElement.style.backgroundColor = '#e8f5e9';
    messageElement.style.color = '#388e3c';
    messageElement.style.border = '1px solid #c8e6c9';
  }
  
  messageElement.textContent = message;
  
  // Add close button
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1;
  `;
  closeButton.addEventListener('click', () => {
    messageElement.remove();
  });
  
  messageElement.prepend(closeButton);
  
  // Add to DOM as a popup overlay
  document.body.appendChild(messageElement);
  
  // Auto-remove after 5 seconds for success messages
  if (type === 'success') {
    setTimeout(() => {
      if (document.body.contains(messageElement)) {
        messageElement.style.opacity = '0';
        setTimeout(() => messageElement.remove(), 500);
      }
    }, 5000);
  }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return; // Skip for "#" links
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Set initial active link based on current position
  let scrollPos = window.scrollY;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const currentId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentId) {
          link.classList.add("active");
        }
      });
    }
  });
  
  // Add show-animate class to visible sections
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - window.innerHeight;
    if (scrollPos > sectionTop) {
      section.classList.add("show-animate");
    }
  });
  
  // Schedule reminder message
  scheduleReminder();
  
  // Add keyframe animation for fade in/out effects
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);
});