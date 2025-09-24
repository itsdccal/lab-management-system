// src/config/materialsStructure.js
import { USER_ROLES } from '../utils/constants';

// UNTUK ASSISTANT - Halaman /materials
export const ASSISTANT_MATERIALS_STRUCTURE = {
  title: "Materi",
  description: "Module upload & content organization for RAG integration",
  sections: [
    {
      id: "modules",
      title: "Module Management",
      icon: "Upload",
      color: "text-blue-500",
      description: "Upload session modules for RAG processing",
      features: [
        "Upload PDF modules for sessions",
        "Module indexing for RAG system",
        "Content organization by subject",
        "Version control & updates"
      ]
    },
    {
      id: "indicators",
      title: "Indicators",
      icon: "Target",
      color: "text-green-500",
      description: "Learning objective indicators for sessions",
      features: [
        "Define learning objectives",
        "Create assessment rubrics",
        "Link indicators to sessions",
        "Track achievement metrics"
      ]
    },
    {
      id: "content-organization",
      title: "Content Organization",
      icon: "FolderOpen",
      color: "text-purple-500",
      description: "Organize materials by subject and session",
      features: [
        "Subject-based categorization",
        "Session material mapping",
        "Resource tagging system",
        "Search & filter materials"
      ]
    },
    {
      id: "rag-integration",
      title: "RAG Integration",
      icon: "Brain",
      color: "text-cyan-500",
      description: "AI processing of uploaded modules",
      badge: "AI",
      features: [
        "Automatic content indexing",
        "Knowledge base generation",
        "Context extraction for Q&A",
        "Module readiness status"
      ]
    }
  ]
};

// UNTUK STUDENT - Halaman /materials  
export const STUDENT_MATERIALS_STRUCTURE = {
  title: "Materi",
  description: "Session materials & learning resources access",
  sections: [
    {
      id: "session-materials",
      title: "Session Materials",
      icon: "BookOpen",
      color: "text-blue-500",
      description: "Access materials for today's session",
      features: [
        "Today's session modules",
        "Learning indicators",
        "Session objectives",
        "Supplementary resources"
      ]
    },
    {
      id: "learning-resources",
      title: "Learning Resources",
      icon: "Library",
      color: "text-green-500",
      description: "All available materials for enrolled subjects",
      features: [
        "Subject-based material library",
        "Historical session materials",
        "Reference documents",
        "Study guides"
      ]
    },
    {
      id: "download-center",
      title: "Download Center",
      icon: "Download",
      color: "text-purple-500",
      description: "Download PDF modules & indicators",
      features: [
        "PDF module downloads",
        "Indicator documents",
        "Supplementary materials",
        "Offline access preparation"
      ]
    }
  ]
};

// UNTUK STUDENT - Halaman /my-class 
export const STUDENT_CLASS_STRUCTURE = {
  title: "Kelas Saya",
  description: "Class information, groups & attendance tracking",
  sections: [
    {
      id: "class-info",
      title: "Class Information",
      icon: "GraduationCap",
      color: "text-blue-500",
      description: "Subject details & assistant contacts",
      data: [
        "Subject details & schedule",
        "Assistant contact information",
        "Class announcements",
        "Academic calendar"
      ]
    },
    {
      id: "my-groups",
      title: "My Groups",
      icon: "Users",
      color: "text-green-500",
      description: "Group membership and members",
      data: [
        "Group membership details",
        "Group member contacts",
        "Group assignments",
        "Collaboration tools"
      ]
    },
    {
      id: "session-schedule",
      title: "Session Schedule",
      icon: "Calendar",
      color: "text-purple-500",
      description: "Upcoming lab sessions with room info",
      data: [
        "Lab session schedule",
        "Room assignments",
        "Session topics",
        "Required materials"
      ]
    },
    {
      id: "attendance-history",
      title: "Attendance History",
      icon: "Clock",
      color: "text-orange-500",
      description: "Personal attendance record tracking",
      features: [
        "Check-in with session codes",
        "Attendance history view",
        "Late arrival tracking",
        "Attendance statistics"
      ]
    }
  ]
};

// UNTUK ASSISTANT - Halaman /grading (Penilaian)
export const ASSISTANT_GRADING_STRUCTURE = {
  title: "Penilaian",
  description: "Assessment management & AI question generation",
  sections: [
    {
      id: "task-sessions",
      title: "Task Sessions",
      icon: "ClipboardList",
      color: "text-blue-500",
      description: "Create pre-test & post-test with AI",
      features: [
        "Pre-test creation",
        "Post-test development",
        "AI-generated questions from modules",
        "Question difficulty adjustment"
      ]
    },
    {
      id: "assessment-tasks",
      title: "Assessment Tasks", 
      icon: "FileText",
      color: "text-green-500",
      description: "Create practical assignments with rubrics",
      features: [
        "Practical assignment creation",
        "Rubric development",
        "Assignment templates",
        "Submission guidelines"
      ]
    },
    {
      id: "final-projects",
      title: "Final Projects",
      icon: "Award",
      color: "text-purple-500", 
      description: "Manage and grade final projects",
      features: [
        "Final project requirements",
        "Project milestone tracking",
        "Grading rubrics",
        "Project presentations"
      ]
    },
    {
      id: "manual-grading",
      title: "Manual Grading",
      icon: "Edit",
      color: "text-orange-500",
      description: "Grade essays and practical work",
      features: [
        "Essay question grading",
        "Practical work assessment",
        "Feedback provision",
        "Grade justification"
      ]
    },
    {
      id: "score-calculation",
      title: "Score Calculation",
      icon: "Calculator",
      color: "text-pink-500",
      description: "Calculate and finalize student scores",
      features: [
        "Weighted score calculation",
        "Component score aggregation", 
        "Final grade determination",
        "Grade distribution analysis"
      ]
    },
    {
      id: "rag-generator",
      title: "RAG Question Generator",
      icon: "Brain", 
      color: "text-cyan-500",
      description: "Auto-generate questions from modules",
      badge: "AI",
      features: [
        "AI question generation from PDFs",
        "Context-aware question creation",
        "Multiple question types",
        "Difficulty level control"
      ]
    }
  ]
};

// UNTUK STUDENT - Halaman /assignments (Tugas & Quiz)
export const STUDENT_ASSIGNMENTS_STRUCTURE = {
  title: "Tugas & Quiz", 
  description: "Pre-test, post-test & assessment submissions",
  sections: [
    {
      id: "active-tasks",
      title: "Active Tasks",
      icon: "PlayCircle",
      color: "text-blue-500",
      description: "Pre-tests, post-tests, and assessments",
      features: [
        "Active pre-tests",
        "Available post-tests", 
        "Pending assessments",
        "Task deadlines"
      ]
    },
    {
      id: "assessment-submissions",
      title: "Assessment Submissions",
      icon: "Upload",
      color: "text-green-500", 
      description: "Submit practical assignment links",
      features: [
        "Assignment submission portal",
        "Link-based submissions",
        "File upload capabilities",
        "Submission history"
      ]
    },
    {
      id: "final-projects",
      title: "Final Projects",
      icon: "Award",
      color: "text-purple-500",
      description: "View requirements and submit projects", 
      features: [
        "Project requirements view",
        "Milestone submissions",
        "Project documentation",
        "Presentation scheduling"
      ]
    }
  ]
};

// UNTUK STUDENT - Halaman /grades (Rekap Nilai)
export const STUDENT_GRADES_STRUCTURE = {
  title: "Rekap Nilai",
  description: "Score breakdown & grade progress tracking",
  sections: [
    {
      id: "score-breakdown",
      title: "Score Breakdown", 
      icon: "PieChart",
      color: "text-blue-500",
      description: "Component scores breakdown",
      features: [
        "Pre-test scores",
        "Post-test results",
        "Assessment grades", 
        "Final project scores"
      ]
    },
    {
      id: "grade-progress",
      title: "Grade Progress",
      icon: "TrendingUp", 
      color: "text-green-500",
      description: "Real-time weighted score calculation",
      features: [
        "Real-time grade calculation",
        "Weighted component scores",
        "Progress visualization",
        "Target grade tracking"
      ]
    },
    {
      id: "final-grades", 
      title: "Final Grades",
      icon: "Award",
      color: "text-purple-500",
      description: "Letter grades and GPA values",
      features: [
        "Letter grade conversion",
        "GPA calculation",
        "Grade point summary",
        "Academic standing"
      ]
    },
    {
      id: "performance-trends",
      title: "Performance Trends",
      icon: "BarChart",
      color: "text-orange-500", 
      description: "Score progression over time",
      features: [
        "Score trend analysis",
        "Performance comparisons",
        "Improvement tracking",
        "Achievement milestones"
      ]
    }
  ]
};