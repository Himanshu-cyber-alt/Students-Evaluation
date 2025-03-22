
/*******************
 * Conversion Mappings
 *
 * External subjects (out of 70):
 *   A+ → 66.5, A → 60, B+ → 55, B → 46, C+ → 40, C → 33, D → 23, F → 0
 *
 * Internal subjects (out of 80):
 *   A+ → 76, A → 69, B+ → 63, B → 53, C+ → 46, C → 38, D → 27, F → 0
 *******************/
const externalMapping = {
  "A+": 66.5,
  "A": 60,
  "B+": 55,
  "B": 46,
  "C+": 40,
  "C": 33,
  "D": 23,
  "F": 0
};

const internalMapping = {
  "A+": 76,
  "A": 69,
  "B+": 63,
  "B": 53,
  "C+": 46,
  "C": 38,
  "D": 27,
  "F": 0
};


/*******************
 * Semester Data
 *
 * Each semester object contains:
 *  - maxTotal: the maximum possible total marks for the semester.
 *  - external: array of subjects with subject code and title.
 *  - internal: array of subjects with subject code and title.
 *    Some subjects include "elective" details with options.
 *******************/
const semData = {
  "1": {
    maxTotal: 660,
    external: [
      { code: "BT-101", title: "ENGINEERING CHEMISTRY" },
      { code: "BT-102", title: "MATHEMATICS-1" },
      { code: "BT-103", title: "ENGLISH-FOR-COMMUNICATION" },
      { code: "BT-104", title: "BASIC-ELECTRICAL-AND-ELECTRONICS-ENGINEERING" },
      { code: "BT-105", title: "ENGINEERING GRAPHICS" }
    ],
    internal: [
      { code: "BT-106", title: "MANUFACTURING PRACTICES" },
      { code: "BT-101", title: "ENGINEERING CHEMISTRY" },
      { code: "BT-103", title: "ENGLISH-FOR-COMMUNICATION" },
      { code: "BT-104", title: "BASIC-ELECTRICAL-AND-ELECTRONICS-ENGINEERING" },
      { code: "BT-105", title: "ENGINEERING GRAPHICS" }
    ]
  },
  "2": {
    maxTotal: 660,
    external: [
      { code: "BT-201", title: "ENGINEERING PHYSICS" },
      { code: "BT-202", title: "MATHEMATICS-2" },
      { code: "BT-203", title: "BASIC COMPUTER ENGINEERING" },
      { code: "BT-204", title: "BASIC MECHANICAL ENGINEERING" },
      { code: "BT-205", title: "BASIC CIVIL ENGINEERING AND MECHANICS" }
    ],
    internal: [
      { code: "BT-206", title: "LANGUAGE LAB AND SEMINARS" },
      { code: "BT-201", title: "ENGINEERING PHYSICS" },
      { code: "BT-203", title: "BASIC COMPUTER ENGINEERING" },
      { code: "BT-204", title: "BASIC MECHANICAL ENGINEERING" },
      { code: "BT-205", title: "BASIC CIVIL ENGINEERING AND MECHANICS" }
    ]
  },
  "3": {
    maxTotal: 660,
    external: [
      { code: "ES301", title: "Energy & Environmental Engineering" },
      { code: "CS302", title: "Discrete Structure" },
      { code: "CS303", title: "Data Structure" },
      { code: "CS304", title: "Digital Systems" },
      { code: "CS305", title: "Object Oriented Programming & Methodology" }
    ],
    internal: [
      { code: "CS303", title: "Data Structure" },
      { code: "CS304", title: "Digital Systems" },
      { code: "CS305", title: "Object Oriented Programming & Methodology" },
      { code: "CS306", title: "Computer Workshop" }
    ]
  },
  "4": {
    maxTotal: 660,
    external: [
      { code: "BT-401", title: "Mathematics-III" },
      { code: "CS-402", title: "Analysis Design of Algorithm" },
      { code: "CS-403", title: "Software Engineering" },
      { code: "CS-404", title: "Computer Org. & Architecture" },
      { code: "CS-405", title: "Operating System" }
    ],
    internal: [
      { code: "CS-402", title: "Analysis Design of Algorithm" },
      { code: "CS-403", title: "Software Engineering" },
      { code: "CS-404", title: "Computer Org. & Architecture" },
      { code: "CS-405", title: "Operating System" },
      { code: "CS-406", title: "Programming Practices", elective: true, options: [
          "Programming Practices (Java)",
          "Programming Practices (Dot Net Technologies)",
          "Programming Practices",
          "Programming Practices (MATLAB)"
      ]}
    ]
  },
  "5": {
    maxTotal: 740,
    external: [
      { code: "CS-501", title: "Theory of Computation" },
      { code: "CS-502", title: "Database Management Systems" },
      { code: "CS-503", title: "Departmental Elective", elective: true, options: [
          "Data Analysis",
          "Pattern Recognition",
          "Cyber Security"
      ]},
      { code: "CS-504", title: "Open Elective", elective: true, options: [
          "Internet and Web Technology",
          "Object Oriented Programming",
          "Introduction to Database Management System"
      ]}
    ],
    internal: [
      { code: "CS-501", title: "Theory of Computation" },
      { code: "CS-502", title: "Database Management Systems" },
      { code: "CS-505", title: "Linux (LAB)" },
      { code: "CS-506", title: "Python" },
      { code: "CS-508", title: "Minor Project-I" }
    ]
  },
  "6": {
    maxTotal: 740,
    external: [
      { code: "CS-601", title: "Machine Learning" },
      { code: "CS-602", title: "Computer Networks" },
      { code: "CS-603", title: "Departmental Elective", elective: true, options: [
          "Advanced Computer Architecture (ACA)",
          "Computer Graphics & Visualization",
          "Compiler Design"
      ]},
      { code: "CS-604", title: "Open Elective", elective: true, options: [
          "Knowledge Management",
          "Project Management",
          "Rural Technology & Community Development"
      ]}
    ],
    internal: [
      { code: "CS-601", title: "Machine Learning" },
      { code: "CS-602", title: "Computer Networks" },
      { code: "CS-605", title: "Data Analytics (LAB)" },
      { code: "CS-606", title: "Skill Development LAB" },
      { code: "CS-608", title: "Minor Project-II" }
    ]
  },
  "7": {
    maxTotal: 760,
    external: [
      { code: "CS-701", title: "Software Architectures" },
      { code: "CS-702", title: "Departmental Elective", elective: true, options: [
          "Computational Intelligence Networks",
          "Deep & Reinforcement Learning",
          "Wireless & Mobile Computing",
          "Big Data"
      ]},
      { code: "CS-703", title: "Open Elective", elective: true, options: [
          "Cryptography & Information Security",
          "Data Mining And Warehousing",
          "Agile Software Development",
          "Disaster Management"
      ]}
    ],
    internal: [
      { code: "CS-701", title: "Software Architectures" },
      { code: "CS-704", title: "Lab Departmental Elective Lab" },
      { code: "CS-705", title: "Lab Open Elective Lab" },
      { code: "CS-706", title: "Major Project-I" }
    ]
  },
  "8": {
    maxTotal: 680,
    external: [
      { code: "CS-801", title: "Internet of Things" },
      { code: "CS-802", title: "Departmental Elective", elective: true, options: [
          "lock Chain Technologies",
          "Cloud Computing",
          "High Performance Computing",
          "Object Oriented Software Engineering"
      ]},
      { code: "CS-803", title: "Open Elective", elective: true, options: [
          "Image Processing and Computer Vision",
          "Game Theory with Engineering applications",
          "Internet of Things",
          "Managing Innovation and Entrepreneurship"
      ]}
    ],
    internal: [
      { code: "CS-801", title: "Internet of Things" },
      { code: "CS-804", title: "D/O elective lab" },
      { code: "CS-706", title: "Major Project-II" }
    ]
  }
};

/*******************
 * Utility Function: Create Grade Dropdown
 *
 * Adds a grade dropdown with the options: A+, A, B+, B, C+, C, D, F.
 * The "data-type" attribute is set to either "external" or "internal".
 *******************/
function createGradeSelect(type) {
  const select = document.createElement("select");
  select.className = "grade-select border rounded py-1 px-2 ml-2";
  select.setAttribute("data-type", type);
  const grades = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "-- Grade --";
  select.appendChild(defaultOption);
  
  grades.forEach(g => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    select.appendChild(option);
  });
  return select;
}

/*******************
 * Render Subjects in Form
 *
 * For each subject, create a row with a label (showing the subject code and title).
 * If the subject is an elective, add an additional dropdown for the elective options.
 * Finally, add the grade select dropdown.
 *******************/
function renderSubjects(subjects, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear previous content
  
  subjects.forEach(subject => {
    const subjectRow = document.createElement("div");
    subjectRow.className = "p-3 border rounded flex flex-col sm:flex-row sm:items-center";
    
    // Label for subject code and title
    const label = document.createElement("span");
    label.className = "font-medium text-gray-800";
    label.textContent = subject.code + " - " + subject.title;
    subjectRow.appendChild(label);
    
    // If subject is elective, create an elective selection dropdown
    if (subject.elective && subject.options) {
      const electiveSelect = document.createElement("select");
      electiveSelect.className = "elective-select border rounded py-1 px-2 ml-2 mt-2 sm:mt-0";
      const defaultElective = document.createElement("option");
      defaultElective.value = "";
      defaultElective.textContent = "-- Choose Option --";
      electiveSelect.appendChild(defaultElective);
      
      subject.options.forEach(opt => {
        const optElem = document.createElement("option");
        optElem.value = opt;
        optElem.textContent = opt;
        electiveSelect.appendChild(optElem);
      });
      subjectRow.appendChild(electiveSelect);
    }
    
    // Add the grade dropdown
    const gradeSelect = createGradeSelect(type);
    subjectRow.appendChild(gradeSelect);
    
    container.appendChild(subjectRow);
  });
}

/*******************
 * When a Semester is Selected
 * Load the respective external and internal subjects into the form.
 *******************/
document.getElementById("semesterSelect").addEventListener("change", function() {
  const semValue = this.value;
  const form = document.getElementById("marksForm");
  const resultSection = document.getElementById("resultSection");
  resultSection.innerHTML = "";
  
  if (semValue && semData[semValue]) {
    form.classList.remove("hidden");
    renderSubjects(semData[semValue].external, "externalSubjects", "external");
    renderSubjects(semData[semValue].internal, "internalSubjects", "internal");
  } else {
    form.classList.add("hidden");
  }
});

/*******************
 * Calculate Total Marks
 *
 * Loops through all grade selections, converts the grade to the numerical mark
 * (using the external/internal mappings), sums the total and displays the result.
 *******************/
document.getElementById("calculateButton").addEventListener("click", function() {
  const gradeSelects = document.querySelectorAll(".grade-select");
  let totalMarks = 0;
  let missing = false;
  
  gradeSelects.forEach(select => {
    if (!select.value) {
      missing = true;
    } else {
      const type = select.getAttribute("data-type"); // "external" or "internal"
      if (type === "external") {
        totalMarks += externalMapping[select.value] || 0;
      } else if (type === "internal") {
        totalMarks += internalMapping[select.value] || 0;
      }
    }
  });
  
  if (missing) {
    alert("Please select a grade for every subject.");
    return;
  }
  
  // Retrieve declared maximum marks for the selected semester
  const semValue = document.getElementById("semesterSelect").value;
  const maxSemMarks = semData[semValue].maxTotal;
  
  // Calculate percentage based on the raw total marks and maximum
  const percentage = ((totalMarks / maxSemMarks) * 100).toFixed(2);
  
  // Calculate the grade based on percentage
  const grade = calculateGrade(parseFloat(percentage));
  
  // Display the result
  document.getElementById("resultSection").innerHTML = `
    <p class="text-xl">Total Marks: <span class="font-bold">${totalMarks.toFixed(2)}</span> out of ${maxSemMarks}</p>
    <p class="text-xl mt-2">Percentage: <span class="font-bold">${percentage}%</span></p>
    <p class="text-xl mt-2">Grade: <span class="font-bold">${grade}</span></p>
    <div class="mt-4">
      <button id="saveCertificateBtn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Save as Certificate
      </button>
    </div>
  `;
  
  // Add click event for save certificate button
  document.getElementById("saveCertificateBtn").addEventListener("click", function() {
    saveCertificate(semValue, totalMarks.toFixed(2), maxSemMarks, percentage, grade);
  });
});

/*******************
 * Calculate Grade from Percentage
 *
 * Determines the letter grade based on the calculated percentage.
 *******************/
function calculateGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C+";
  if (percentage >= 40) return "C";
  if (percentage >= 33) return "D";
  return "F";
}

/*******************
 * Certificate Management Functions
 *******************/

// Save certificate from calculation results
function saveCertificate(semester, marks, maxMarks, percentage, grade) {
  const certificate = {
    id: Date.now().toString(), // Unique ID based on timestamp
    type: "calculated",
    title: `Semester ${semester} Result`,
    semester: semester,
    date: new Date().toLocaleDateString(),
    marks: marks,
    maxMarks: maxMarks,
    percentage: percentage,
    grade: grade,
    image: null
  };
  
  // Get existing certificates from localStorage
  let certificates = JSON.parse(localStorage.getItem("studentCertificates") || "[]");
  
  // Add new certificate
  certificates.push(certificate);
  
  // Save to localStorage
  localStorage.setItem("studentCertificates", JSON.stringify(certificates));
  
  alert("Certificate saved successfully!");
  
  // Show certificate section
  document.getElementById("certificatesTab").click();
}

// Upload external certificate
document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const title = document.getElementById("certTitle").value;
  const semester = document.getElementById("certSemester").value;
  const grade = document.getElementById("certGrade").value;
  const fileInput = document.getElementById("certFile");
  
  // Create certificate object
  const certificate = {
    id: Date.now().toString(),
    type: "external",
    title: title,
    semester: semester || null,
    date: new Date().toLocaleDateString(),
    marks: null,
    maxMarks: null,
    percentage: null,
    grade: grade,
    image: null
  };
  
  // If file is selected, read it as data URL
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      certificate.image = e.target.result;
      saveExternalCertificate(certificate);
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    saveExternalCertificate(certificate);
  }
});

function saveExternalCertificate(certificate) {
  // Get existing certificates
  let certificates = JSON.parse(localStorage.getItem("studentCertificates") || "[]");
  
  // Add new certificate
  certificates.push(certificate);
  
  // Save to localStorage
  localStorage.setItem("studentCertificates", JSON.stringify(certificates));
  
  // Close modal and refresh gallery
  closeUploadModal();
  loadCertificates();
  
  alert("Certificate uploaded successfully!");
}

// Load and display certificates
function loadCertificates() {
  const gallery = document.getElementById("certificateGallery");
  const noMessage = document.getElementById("noCertificates");
  
  // Get certificates from localStorage
  const certificates = JSON.parse(localStorage.getItem("studentCertificates") || "[]");
  
  // Clear gallery
  gallery.innerHTML = "";
  
  if (certificates.length === 0) {
    gallery.appendChild(noMessage);
    return;
  }
  
  noMessage.remove();
  
  // Add each certificate to gallery
  certificates.forEach(cert => {
    const card = createCertificateCard(cert);
    gallery.appendChild(card);
  });
}

// Create certificate card
function createCertificateCard(certificate) {
  const card = document.createElement("div");
  card.className = "bg-white border rounded-lg shadow-md overflow-hidden";
  
  // Card content varies based on certificate type
  if (certificate.type === "calculated") {
    // For calculated certificates from semester results
    card.innerHTML = `
      <div class="p-1 bg-blue-600"></div>
      <div class="p-4">
        <div class="flex justify-between items-start">
          <h3 class="font-semibold text-lg mb-1">${certificate.title}</h3>
          <span class="text-2xl font-bold ${getGradeColor(certificate.grade)}">${certificate.grade}</span>
        </div>
        <p class="text-sm text-gray-500 mb-3">Date: ${certificate.date}</p>
        <div class="border-t pt-3">
          <p class="text-sm"><span class="font-semibold">Marks:</span> ${certificate.marks}/${certificate.maxMarks}</p>
          <p class="text-sm"><span class="font-semibold">Percentage:</span> ${certificate.percentage}%</p>
        </div>
        <div class="mt-3 flex justify-end">
          <button class="delete-cert text-red-600 hover:text-red-800 text-sm" data-id="${certificate.id}">
            Delete
          </button>
        </div>
      </div>
    `;
  } else {
    // For external certificates uploaded by the user
    let imageHtml = '';
    if (certificate.image) {
      imageHtml = `
        <div class="h-32 bg-gray-100 overflow-hidden">
          <img src="${certificate.image}" alt="${certificate.title}" class="w-full h-full object-cover">
        </div>
      `;
    }
    
    let semesterText = certificate.semester ? `<p class="text-sm text-gray-600">Semester: ${certificate.semester}</p>` : '';
    
    card.innerHTML = `
      <div class="p-1 bg-green-600"></div>
      ${imageHtml}
      <div class="p-4">
        <div class="flex justify-between items-start">
          <h3 class="font-semibold text-lg mb-1">${certificate.title}</h3>
          <span class="font-bold ${getGradeColor(certificate.grade)}">${certificate.grade}</span>
        </div>
        <p class="text-sm text-gray-500 mb-2">Date: ${certificate.date}</p>
        ${semesterText}
        <div class="mt-3 flex justify-end">
          <button class="delete-cert text-red-600 hover:text-red-800 text-sm" data-id="${certificate.id}">
            Delete
          </button>
        </div>
      </div>
    `;
  }
  
  // Add delete event listener after the card is added to the DOM
  setTimeout(() => {
    card.querySelector('.delete-cert').addEventListener('click', function() {
      deleteCertificate(this.getAttribute('data-id'));
    });
  }, 0);
  
  return card;
}

// Delete certificate
function deleteCertificate(id) {
  if (confirm("Are you sure you want to delete this certificate?")) {
    // Get certificates
    let certificates = JSON.parse(localStorage.getItem("studentCertificates") || "[]");
    
    // Remove the certificate with the matching ID
    certificates = certificates.filter(cert => cert.id !== id);
    
    // Save updated list
    localStorage.setItem("studentCertificates", JSON.stringify(certificates));
    
    // Refresh the gallery
    loadCertificates();
  }
}

// Get color class for grade display
function getGradeColor(grade) {
  if (grade === 'A+') return 'text-green-600';
  if (grade === 'A') return 'text-green-500';
  if (grade === 'B+') return 'text-blue-600';
  if (grade === 'B') return 'text-blue-500';
  if (grade === 'C+') return 'text-yellow-600';
  if (grade === 'C') return 'text-yellow-500';
  if (grade === 'D') return 'text-orange-500';
  if (grade === 'F') return 'text-red-600';
  return 'text-gray-700';
}

/*******************
 * Tab Navigation
 *******************/
document.getElementById("calculatorTab").addEventListener("click", function() {
  document.getElementById("calculatorSection").classList.remove("hidden");
  document.getElementById("certificateSection").classList.add("hidden");
  this.classList.add("text-blue-600", "border-b-2", "border-blue-600");
  this.classList.remove("text-gray-600");
  document.getElementById("certificatesTab").classList.add("text-gray-600");
  document.getElementById("certificatesTab").classList.remove("text-blue-600", "border-b-2", "border-blue-600");
});

document.getElementById("certificatesTab").addEventListener("click", function() {
  document.getElementById("calculatorSection").classList.add("hidden");
  document.getElementById("certificateSection").classList.remove("hidden");
  this.classList.add("text-blue-600", "border-b-2", "border-blue-600");
  this.classList.remove("text-gray-600");
  document.getElementById("calculatorTab").classList.add("text-gray-600");
  document.getElementById("calculatorTab").classList.remove("text-blue-600", "border-b-2", "border-blue-600");
  
  // Load certificates when tab is clicked
  loadCertificates();
});

/*******************
 * Upload Modal Controls
 *******************/
document.getElementById("uploadCertBtn").addEventListener("click", function() {
  document.getElementById("uploadModal").classList.remove("hidden");
});

document.getElementById("closeModalBtn").addEventListener("click", closeUploadModal);
document.getElementById("cancelUploadBtn").addEventListener("click", closeUploadModal);

function closeUploadModal() {
  document.getElementById("uploadModal").classList.add("hidden");
  document.getElementById("uploadForm").reset();
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function() {
  // Check if there are certificates and show notification
  const certificates = JSON.parse(localStorage.getItem("studentCertificates") || "[]");
  if (certificates.length > 0) {
    const notification = document.createElement("div");
    notification.className = "fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg";
    notification.innerHTML = `
      <p>You have ${certificates.length} saved certificate(s). <button id="viewCertsBtn" class="underline">View them</button></p>
    `;
    document.body.appendChild(notification);
    
    document.getElementById("viewCertsBtn").addEventListener("click", function() {
      document.getElementById("certificatesTab").click();
      document.body.removeChild(notification);
    });
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 5000);
  }
});
