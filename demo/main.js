// Global data object to store student information
const studentData = {
    personal: {},
    academic: {
        subjects: [],
        attendance: 0
    },
    courses: []
};

// Branch-specific subjects
const branchSubjects = {
    'CS': [
        { code: 'CS101', name: 'Introduction to Computer Science', credits: 4 },
        { code: 'CS102', name: 'Data Structures', credits: 4 },
        { code: 'CS201', name: 'Algorithm Design', credits: 3 },
        { code: 'CS202', name: 'Database Systems', credits: 4 },
        { code: 'CS301', name: 'Operating Systems', credits: 4 },
        { code: 'CS302', name: 'Computer Networks', credits: 3 }
    ],
    'IT': [
        { code: 'IT101', name: 'Information Technology Fundamentals', credits: 4 },
        { code: 'IT102', name: 'Web Development', credits: 4 },
        { code: 'IT201', name: 'Software Engineering', credits: 3 },
        { code: 'IT202', name: 'Data Management', credits: 4 },
        { code: 'IT301', name: 'Cybersecurity', credits: 4 },
        { code: 'IT302', name: 'Cloud Computing', credits: 3 }
    ],
    'ECE': [
        { code: 'EC101', name: 'Electronic Circuits', credits: 4 },
        { code: 'EC102', name: 'Digital Electronics', credits: 4 },
        { code: 'EC201', name: 'Signals and Systems', credits: 3 },
        { code: 'EC202', name: 'Communication Systems', credits: 4 },
        { code: 'EC301', name: 'Microprocessors', credits: 4 },
        { code: 'EC302', name: 'VLSI Design', credits: 3 }
    ],
    'EE': [
        { code: 'EE101', name: 'Electrical Circuits', credits: 4 },
        { code: 'EE102', name: 'Electromagnetic Theory', credits: 4 },
        { code: 'EE201', name: 'Electrical Machines', credits: 3 },
        { code: 'EE202', name: 'Power Systems', credits: 4 },
        { code: 'EE301', name: 'Control Systems', credits: 4 },
        { code: 'EE302', name: 'Power Electronics', credits: 3 }
    ],
    'ME': [
        { code: 'ME101', name: 'Engineering Mechanics', credits: 4 },
        { code: 'ME102', name: 'Thermodynamics', credits: 4 },
        { code: 'ME201', name: 'Fluid Mechanics', credits: 3 },
        { code: 'ME202', name: 'Heat Transfer', credits: 4 },
        { code: 'ME301', name: 'Machine Design', credits: 4 },
        { code: 'ME302', name: 'Manufacturing Processes', credits: 3 }
    ],
    'CE': [
        { code: 'CE101', name: 'Structural Analysis', credits: 4 },
        { code: 'CE102', name: 'Surveying', credits: 4 },
        { code: 'CE201', name: 'Soil Mechanics', credits: 3 },
        { code: 'CE202', name: 'Construction Materials', credits: 4 },
        { code: 'CE301', name: 'Transportation Engineering', credits: 4 },
        { code: 'CE302', name: 'Environmental Engineering', credits: 3 }
    ]
};

// Available courses
const availableCourses = [
    { id: 'C001', name: 'Python Programming', category: 'Programming' },
    { id: 'C002', name: 'Java Programming', category: 'Programming' },
    { id: 'C003', name: 'Web Development', category: 'Development' },
    { id: 'C004', name: 'Mobile App Development', category: 'Development' },
    { id: 'C005', name: 'Data Science', category: 'Data' },
    { id: 'C006', name: 'Machine Learning', category: 'Data' },
    { id: 'C007', name: 'Artificial Intelligence', category: 'Advanced' },
    { id: 'C008', name: 'Cloud Computing', category: 'Infrastructure' },
    { id: 'C009', name: 'Cybersecurity', category: 'Security' },
    { id: 'C010', name: 'Blockchain', category: 'Advanced' },
    { id: 'C011', name: 'IoT Development', category: 'Advanced' },
    { id: 'C012', name: 'Network Administration', category: 'Infrastructure' },
    { id: 'C013', name: 'UI/UX Design', category: 'Design' },
    { id: 'C014', name: 'DevOps', category: 'Infrastructure' },
    { id: 'C015', name: 'Project Management', category: 'Management' },
    { id: 'C016', name: 'Technical Writing', category: 'Communication' },
    { id: 'C017', name: 'Data Visualization', category: 'Data' },
    { id: 'C018', name: 'Database Management', category: 'Data' },
    { id: 'C019', name: 'Computer Graphics', category: 'Design' },
    { id: 'C020', name: 'Robotics', category: 'Advanced' }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    // Form navigation buttons
    const personalNextBtn = document.getElementById('personal-next');
    const academicPrevBtn = document.getElementById('academic-prev');
    const academicNextBtn = document.getElementById('academic-next');
    const coursePrevBtn = document.getElementById('course-prev');
    const courseNextBtn = document.getElementById('course-next');
    const resultsPrevBtn = document.getElementById('results-prev');
    const startOverBtn = document.getElementById('start-over');
    const calculateTargetBtn = document.getElementById('calculate-target');
    
    // Setup navigation
    setupNavigation();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Navigation functions
    function setupNavigation() {
        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                
                // Don't allow skipping sections unless data is already filled
                if (targetSection === 'personal-info' || 
                    (targetSection === 'academic-info' && studentData.personal.name) ||
                    (targetSection === 'course-selection' && studentData.academic.subjects.length > 0) ||
                    (targetSection === 'results' && studentData.courses.length > 0)) {
                    
                    navigateToSection(targetSection);
                }
            });
        });
    }
    
    // Section navigation
    function navigateToSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        document.getElementById(sectionId).classList.add('active-section');
        document.querySelector(`nav a[data-section="${sectionId}"]`).classList.add('active');
    }
    
    // Setup form handlers
    function setupFormHandlers() {
        // Personal form
        if (personalNextBtn) {
            personalNextBtn.addEventListener('click', handlePersonalNext);
        }
        
        // Academic form
        if (academicPrevBtn) {
            academicPrevBtn.addEventListener('click', () => navigateToSection('personal-info'));
        }
        
        if (academicNextBtn) {
            academicNextBtn.addEventListener('click', handleAcademicNext);
        }
        
        // Course form
        if (coursePrevBtn) {
            coursePrevBtn.addEventListener('click', () => navigateToSection('academic-info'));
        }
        
        if (courseNextBtn) {
            courseNextBtn.addEventListener('click', handleCoursesNext);
        }
        
        // Results section
        if (resultsPrevBtn) {
            resultsPrevBtn.addEventListener('click', () => navigateToSection('course-selection'));
        }
        
        if (startOverBtn) {
            startOverBtn.addEventListener('click', resetApplication);
        }
        
        if (calculateTargetBtn) {
            calculateTargetBtn.addEventListener('click', calculateTargetSGPA);
        }
        
        // Branch select change
        const branchSelect = document.getElementById('branch');
        if (branchSelect) {
            branchSelect.addEventListener('change', function() {
                // This will be used to dynamically update other fields if needed
                console.log('Branch changed to:', this.value);
            });
        }
    }
    
    // Handle personal form next
    function handlePersonalNext() {
        const personalForm = document.getElementById('personal-form');
        const name = personalForm.elements['name'].value.trim();
        const roll = personalForm.elements['roll'].value.trim();
        const semester = personalForm.elements['semester'].value;
        const branch = personalForm.elements['branch'].value;
        
        if (name && roll && semester && branch) {
            studentData.personal = { name, roll, semester, branch };
            
            // Move to next section
            navigateToSection('academic-info');
            
            // Load subjects based on branch
            loadSubjects(branch);
        } else {
            alert('Please fill all the fields');
        }
    }
    
    // Handle academic form next
    function handleAcademicNext() {
        const subjects = [];
        let isFormValid = true;
        
        // Get all subject marks
        const branch = studentData.personal.branch;
        if (branchSubjects[branch]) {
            branchSubjects[branch].forEach(subject => {
                const internalElement = document.getElementById(`${subject.code}-internal`);
                const externalElement = document.getElementById(`${subject.code}-external`);
                
                if (internalElement && externalElement) {
                    const internal = parseInt(internalElement.value) || 0;
                    const external = parseInt(externalElement.value) || 0;
                    
                    if (internal > 40 || external > 60 || internal < 0 || external < 0) {
                        isFormValid = false;
                        return;
                    }
                    
                    subjects.push({
                        code: subject.code,
                        name: subject.name,
                        credits: subject.credits,
                        internal,
                        external,
                        total: internal + external
                    });
                }
            });
        }
        
        const attendance = parseInt(document.getElementById('attendance').value) || 0;
        
        if (isFormValid && subjects.length > 0 && attendance >= 0 && attendance <= 100) {
            studentData.academic.subjects = subjects;
            studentData.academic.attendance = attendance;
            
            // Move to next section
            navigateToSection('course-selection');
            
            // Load courses
            loadCourses();
        } else {
            alert('Please fill all the fields with valid values');
        }
    }
    
    // Handle courses form next
    function handleCoursesNext() {
        const selectedCourses = [];
        
        // Get selected courses
        availableCourses.forEach(course => {
            const checkbox = document.getElementById(course.id);
            if (checkbox && checkbox.checked) {
                selectedCourses.push({
                    id: course.id,
                    name: course.name,
                    category: course.category
                });
            }
        });
        
        studentData.courses = selectedCourses;
        
        // Move to results section
        navigateToSection('results');
        
        // Generate results
        generateResults();
    }
    
    // Load subjects based on branch
    function loadSubjects(branch) {
        const subjectsContainer = document.getElementById('subjects-container');
        if (!subjectsContainer) return;
        
        subjectsContainer.innerHTML = '';
        
        if (branchSubjects[branch]) {
            branchSubjects[branch].forEach(subject => {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card';
                subjectCard.innerHTML = `
                    <h3>${subject.code} - ${subject.name} (${subject.credits} credits)</h3>
                    <div class="marks-inputs">
                        <div class="marks-group">
                            <label for="${subject.code}-internal">Internal Marks (Out of 40):</label>
                            <input type="number" id="${subject.code}-internal" min="0" max="40" required>
                        </div>
                        <div class="marks-group">
                            <label for="${subject.code}-external">External Marks (Out of 60):</label>
                            <input type="number" id="${subject.code}-external" min="0" max="60" required>
                        </div>
                    </div>
                `;
                subjectsContainer.appendChild(subjectCard);
            });
        }
    }
    
    // Load courses
    function loadCourses() {
        const coursesContainer = document.getElementById('courses-container');
        if (!coursesContainer) return;
        
        coursesContainer.innerHTML = '';
        
        availableCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
                <label>
                    <input type="checkbox" id="${course.id}" value="${course.id}">
                    ${course.name} <span class="course-category">(${course.category})</span>
                </label>
            `;
            coursesContainer.appendChild(courseItem);
        });
    }
    
    // Reset application
    function resetApplication() {
        // Reset student data
        studentData.personal = {};
        studentData.academic.subjects = [];
        studentData.academic.attendance = 0;
        studentData.courses = [];
        
        // Navigate back to first section
        navigateToSection('personal-info');
        
        // Reset forms
        document.getElementById('personal-form').reset();
        document.getElementById('academic-form').reset();
        
        // Clear dynamically created content
        document.getElementById('subjects-container').innerHTML = '';
        document.getElementById('recommendations-list').innerHTML = '';
        
        // Hide target result
        document.getElementById('target-result').style.display = 'none';
    }
    
    // Generate Results
    function generateResults() {
        // Display student info
        document.getElementById('result-name').textContent = studentData.personal.name;
        document.getElementById('result-roll').textContent = `Roll No: ${studentData.personal.roll}`;
        document.getElementById('result-branch-sem').textContent = 
            `${getBranchName(studentData.personal.branch)} - Semester ${studentData.personal.semester}`;
        
        // Calculate CGPA
        const cgpa = calculateCGPA(studentData.academic.subjects);
        document.getElementById('current-cgpa').textContent = cgpa.toFixed(2);
        
        // Display attendance
        document.getElementById('attendance-result').textContent = `${studentData.academic.attendance}%`;
        
        // Display completed courses
        document.getElementById('completed-courses').textContent = studentData.courses.length;
        
        // Generate recommendations
        generateRecommendations(cgpa, studentData.academic.attendance, studentData.courses);
    }
    
    // Calculate target SGPA needed
    function calculateTargetSGPA() {
        const targetCGPA = parseFloat(document.getElementById('target-cgpa-input').value) || 8.0;
        const currentCGPA = calculateCGPA(studentData.academic.subjects);
        const currentSemester = parseInt(studentData.personal.semester) || 1;
        
        if (currentSemester >= 8) {
            showTargetResult(`You're in your final semester. Focus on achieving the best grades possible!`);
            return;
        }
        
        // Simple formula: Target CGPA = (Current CGPA * Current Semester + Required SGPA * Remaining Semesters) / Total Semesters
        // So Required SGPA = (Target CGPA * Total Semesters - Current CGPA * Current Semester) / Remaining Semesters
        
        const totalSemesters = 8; // Assuming 4 years engineering degree
        const remainingSemesters = totalSemesters - currentSemester;
        
        const requiredSGPA = (targetCGPA * totalSemesters - currentCGPA * currentSemester) / remainingSemesters;
        
        if (requiredSGPA > 10) {
            showTargetResult(`Based on your current performance, achieving a ${targetCGPA.toFixed(1)} CGPA may be challenging. You would need to score more than a perfect 10 SGPA in your remaining semesters.`);
        } else if (requiredSGPA < 0) {
            showTargetResult(`Great news! Your current CGPA of ${currentCGPA.toFixed(2)} already exceeds your target of ${targetCGPA.toFixed(1)}. Keep maintaining your performance!`);
        } else {
            showTargetResult(`To achieve a CGPA of ${targetCGPA.toFixed(1)}, you need to maintain an SGPA of at least <strong>${requiredSGPA.toFixed(2)}</strong> in each of your remaining ${remainingSemesters} semesters.`);
        }
    }
    
    // Show target SGPA result
    function showTargetResult(message) {
        const targetResult = document.getElementById('target-result');
        targetResult.innerHTML = message;
        targetResult.style.display = 'block';
    }
});

// Helper Functions

// Get branch full name
function getBranchName(branchCode) {
    const branchNames = {
        'CS': 'Computer Science Engineering',
        'IT': 'Information Technology',
        'ECE': 'Electronics & Communication Engineering',
        'EE': 'Electrical Engineering',
        'ME': 'Mechanical Engineering',
        'CE': 'Civil Engineering'
    };
    
    return branchNames[branchCode] || branchCode;
}

// Calculate CGPA
function calculateCGPA(subjects) {
    if (subjects.length === 0) return 0;
    
    let totalCredits = 0;
    let totalPoints = 0;
    
    subjects.forEach(subject => {
        const gradePoints = calculateGradePoints(subject.total);
        totalPoints += gradePoints * subject.credits;
        totalCredits += subject.credits;
    });
    
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
}

// Calculate grade points from total marks
function calculateGradePoints(totalMarks) {
    if (totalMarks >= 90) return 10;
    if (totalMarks >= 80) return 9;
    if (totalMarks >= 70) return 8;
    if (totalMarks >= 60) return 7;
    if (totalMarks >= 50) return 6;
    if (totalMarks >= 40) return 5;
    return 0;
}

// Add recommendation to list
function addRecommendation(text) {
    const recommendationsList = document.getElementById('recommendations-list');
    if (recommendationsList) {
        const item = document.createElement('li');
        item.textContent = text;
        recommendationsList.appendChild(item);
    }
}

// Generate recommendations
function generateRecommendations(cgpa, attendance, courses) {
    const recommendationsList = document.getElementById('recommendations-list');
    if (!recommendationsList) return;
    
    recommendationsList.innerHTML = '';
    
    // CGPA-based recommendations
    if (cgpa >= 9) {
        addRecommendation("Excellent academic performance! Consider applying for research opportunities or internships.");
    } else if (cgpa >= 8) {
        addRecommendation("Good academic standing. Focus on practical projects to enhance your skills.");
    } else if (cgpa >= 7) {
        addRecommendation("Steady academic performance. Consider joining study groups to improve your CGPA.");
    } else if (cgpa >= 6) {
        addRecommendation("You're doing okay, but there's room for improvement. Focus on difficult subjects.");
    } else {
        addRecommendation("Your CGPA needs improvement. Consider seeking academic counseling.");
    }
    
    // Attendance-based recommendations
    if (attendance < 75) {
        addRecommendation("Your attendance is below the required minimum. Improve your attendance to avoid academic penalties.");
    } else if (attendance < 85) {
        addRecommendation("Your attendance is adequate but could be better. Regular attendance will help improve your understanding.");
    } else {
        addRecommendation("Great attendance record! Keep it up.");
    }
    
    // Course-based recommendations
    if (courses.length < 3) {
        addRecommendation("Consider taking more additional courses to enhance your skill set.");
    } else if (courses.length < 5) {
        addRecommendation("Good selection of additional courses. Consider adding more diverse courses to your portfolio.");
    } else {
        addRecommendation("Excellent course selection! You're building a strong skill set.");
    }
    
    // Branch-specific recommendations
    const branch = studentData.personal.branch;
    if (branch) {
        switch(branch) {
            case 'CS':
                addRecommendation("For Computer Science students, building a strong GitHub portfolio with coding projects is highly recommended.");
                break;
            case 'IT':
                addRecommendation("IT professionals benefit from web development and cybersecurity certifications.");
                break;
            case 'ECE':
                addRecommendation("Consider joining electronics clubs or participating in circuit design competitions.");
                break;
            case 'EE':
                addRecommendation("Electrical Engineering students should explore internships with power companies or automation firms.");
                break;
            case 'ME':
                addRecommendation("Mechanical Engineering students should focus on CAD certifications and hands-on workshop experience.");
                break;
            case 'CE':
                addRecommendation("Civil Engineering students should pursue internships with construction or infrastructure companies.");
                break;
        }
    }
    
    // General recommendations
    addRecommendation("Stay updated with industry trends and technologies relevant to your field.");
    addRecommendation("Consider participating in hackathons, competitions, or workshops to gain practical experience.");
}