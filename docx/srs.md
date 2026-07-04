Perfect. Is baar hum Elevora AI jaisa professional documentation banayenge. SRS ko completely rewrite karenge using a Next.js Full Stack architecture (no Python, no FastAPI).
________________________________________
Software Requirements Specification (SRS)
Student Helpdesk AI
Version 2.0
________________________________________
1. Introduction
1.1 Project Title
Student Helpdesk AI – Intelligent University Assistant
________________________________________
1.2 Project Overview
Student Helpdesk AI is an AI-powered conversational web application designed to assist students with university-related queries. The chatbot provides quick, accurate, and user-friendly responses about admissions, fee structures, attendance, scholarships, examinations, departments, campus facilities, library services, hostel information, transport, and student affairs.
The chatbot is strictly domain-specific. It only responds to university-related questions and politely declines queries outside its supported scope.
The application follows a modern full-stack architecture using Next.js, where both the frontend and backend API routes are hosted in a single project and deployed on Vercel.
________________________________________
1.3 Purpose
The purpose of this project is to:
•	Demonstrate practical AI chatbot development.
•	Implement prompt engineering techniques.
•	Integrate Large Language Models (LLMs) using the Groq API.
•	Develop a responsive full-stack web application.
•	Showcase modern web development practices suitable for internship evaluation.
________________________________________
1.4 Objectives
The system aims to:
•	Provide instant responses to student queries.
•	Reduce dependency on manual helpdesk support.
•	Deliver a responsive and intuitive user experience.
•	Restrict conversations to university-related topics.
•	Handle invalid and out-of-scope queries gracefully.
•	Ensure secure API key management.
•	Support production deployment using only Vercel.
________________________________________
2. Technology Stack
Frontend
•	Next.js 15 (App Router)
•	React 19
•	TypeScript
•	Tailwind CSS
•	Framer Motion
•	Lucide React
________________________________________
Backend
The backend will use Next.js API Routes instead of a separate server.
Server-side logic will be implemented inside:
app/api/chat/route.ts
Responsibilities include:
•	Input validation
•	Prompt construction
•	Groq API communication
•	Scope enforcement
•	Error handling
•	JSON response generation
________________________________________
Artificial Intelligence
Provider:
Groq API
Model:
llama-3.3-70b-versatile
________________________________________
Deployment
Frontend + Backend:
Vercel
No separate backend deployment platform is required.
________________________________________
Development Tools
•	VS Code
•	Git
•	GitHub
•	npm
•	ESLint
•	Prettier
________________________________________
3. System Architecture
The application follows a unified full-stack architecture.
                    User
                      │
                      ▼
            Next.js Frontend
                      │
                      ▼
        Next.js API Route (/api/chat)
                      │
                      ▼
        Prompt Builder + Validation
                      │
                      ▼
               Groq API
                      │
                      ▼
             AI Response
                      │
                      ▼
                 Frontend
________________________________________
4. Project Structure
student-helpdesk-ai/

│

├── app/

│   ├── api/
│   │      chat/
│   │         route.ts
│   │
│   ├── chat/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│
├── hooks/
│
├── lib/
│
├── constants/
│
├── types/
│
├── prompts/
│      system_prompt.txt
│
├── knowledge/
│      admission.json
│      fees.json
│      scholarship.json
│      attendance.json
│      faq.json
│
├── public/
│
├── README.md
│
├── package.json
│
└── .env.example
________________________________________
5. Functional Requirements
The application shall provide:
•	AI-powered chatbot
•	University knowledge base
•	Suggested questions
•	Responsive UI
•	Typing indicator
•	Conversation history
•	Scope enforcement
•	Error handling
•	Loading states
•	Mobile support
•	Secure API integration
________________________________________
6. User Roles
Visitor
A visitor can:
•	Open the application.
•	Ask university-related questions.
•	View AI responses.
•	Use suggested questions.
•	Continue the conversation.
No login is required.
________________________________________
7. Core Features
Landing Page
The landing page shall include:
•	Modern Hero Section
•	Call-to-Action Button
•	Features Section
•	How It Works
•	FAQ Section
•	Footer
________________________________________
Chat Interface
The chatbot page shall include:
•	Chat Window
•	User Messages
•	AI Messages
•	Typing Indicator
•	Suggested Questions
•	Input Field
•	Send Button
•	Auto Scroll
________________________________________
Suggested Questions
Examples:
•	How can I apply for admission?
•	What is the semester fee?
•	What documents are required?
•	What is the attendance policy?
•	How can I apply for a scholarship?
•	What are the library timings?
•	Where is the registrar office?
•	What departments are available?
________________________________________
Conversation Memory
The chatbot shall maintain conversation context during the current session.
Previous messages shall be included when constructing prompts for Groq.
Conversation history should be limited to the latest 10 messages for efficiency.
________________________________________
Scope Enforcement
Supported topics:
•	Admissions
•	Eligibility
•	Required Documents
•	Fees
•	Scholarships
•	Attendance
•	Examinations
•	Departments
•	Library
•	Hostel
•	Transport
•	Campus Facilities
•	Academic Calendar
•	Student Affairs
•	Office Timings
Out-of-scope questions shall receive a polite refusal message.
________________________________________
8. User Interface Specification
The user interface shall follow a modern, minimal, responsive, and AI-focused design. The design should provide an intuitive experience for students while maintaining a clean and professional appearance.
Design Principles
•	Modern UI inspired by ChatGPT and Gemini
•	Minimalistic interface with no visual clutter
•	Fully responsive across desktop, tablet, and mobile devices
•	Fast page transitions and smooth animations
•	Consistent spacing and typography
•	Accessibility-friendly color contrast
________________________________________
Color Palette
Primary
#2563EB
Blue represents trust, education, and professionalism.
Secondary
#0F172A
Dark background for better readability.
Accent
#38BDF8
Used for highlights and interactive elements.
Success
#22C55E
Warning
#F59E0B
Error
#EF4444
________________________________________
Typography
Font Family
Inter
Fallback
sans-serif
________________________________________
9. Application Pages
9.1 Landing Page
The landing page acts as the application's introduction.
Sections
•	Navigation Bar
•	Hero Section
•	AI Feature Cards
•	How It Works
•	Frequently Asked Questions
•	Footer
________________________________________
Navigation Bar
Contains:
•	Logo
•	Project Name
•	"Start Chat" Button
________________________________________
Hero Section
Displays
Large Heading
Student Helpdesk AI
Subheading
Your intelligent university assistant for admissions, fees,
scholarships, attendance, examinations, and campus services.
Primary CTA
Start Chatting
Secondary CTA
Learn More
________________________________________
Features Section
Cards
•	Admission Assistance
•	Scholarship Guidance
•	Fee Information
•	Attendance Policy
•	Exam Information
•	Campus Facilities
Each card should contain
•	Icon
•	Title
•	Description
________________________________________
How It Works
Three-step process
Step 1
Ask your question.
↓
Step 2
AI processes your request.
↓
Step 3
Receive an accurate university-related response.
________________________________________
FAQ Section
Sample FAQs
•	How accurate are the answers?
•	Can I ask scholarship questions?
•	Does the chatbot remember previous messages?
•	Can I ask non-university questions?
________________________________________
10. Chat Interface
The chat page should resemble a modern AI assistant.
________________________________________
Layout
+--------------------------------------+

 Header

----------------------------------------

 Chat Messages

 User Bubble

 AI Bubble

 User Bubble

 AI Bubble

----------------------------------------

 Message Input

 Send Button

+--------------------------------------+
________________________________________
Header
Contains
•	Logo
•	Student Helpdesk AI
•	Online Status
________________________________________
AI Welcome Message
When the chat opens
Hello 👋

I'm Student Helpdesk AI.

I can assist you with:

• Admissions
• Scholarships
• Fee Structure
• Attendance
• Examinations
• Library
• Hostel
• Campus Facilities

How can I help you today?
________________________________________
Suggested Questions
Displayed as chips
Examples
Admission Process

Scholarships

Semester Fee

Attendance Policy

Library Timings

Exam Schedule
Clicking a chip automatically sends the question.
________________________________________
Chat Bubbles
User Bubble
•	Right aligned
•	Primary Blue
•	White text
AI Bubble
•	Left aligned
•	White background (Light Mode)
•	Dark Gray background (Dark Mode)
________________________________________
Typing Indicator
Animated
● ● ●
Displayed while waiting for Groq response.
________________________________________
Input Area
Components
•	Text Input
•	Send Button
•	Character Counter (Optional)
________________________________________
Auto Scroll
Whenever a new message is added
↓
Automatically scroll to the latest message.
________________________________________
11. Responsive Design
Desktop
•	Two-column layout where appropriate
•	Large spacing
•	Maximum content width
Tablet
•	Reduced spacing
•	Stacked sections
Mobile
•	Single-column layout
•	Full-width input
•	Larger tap targets
•	Optimized scrolling
________________________________________
12. Conversation Flow
User

↓

Types Message

↓

Client Validation

↓

POST /api/chat

↓

Input Validation

↓

Prompt Builder

↓

Knowledge Base

↓

Groq API

↓

AI Response

↓

Return JSON

↓

Display Response
________________________________________
13. Loading States
While waiting for AI
•	Typing indicator
•	Disabled Send button
•	Prevent duplicate requests
________________________________________
14. Empty State
If conversation has not started
Display
Welcome to Student Helpdesk AI

Ask anything related to:

• Admissions
• Fees
• Scholarships
• Attendance
• Exams

Start by selecting a suggested question below.
________________________________________
15. Theme Support
The application shall support:
•	Light Theme
•	Dark Theme
Theme preference should persist using local storage.
________________________________________
Next (Part 3) will cover the AI architecture, including:
•	System Prompt Design
•	Knowledge Base Structure
•	Prompt Engineering Strategy
•	Context Management
•	Scope Enforcement Logic
•	Groq API Integration
This section is the core of the chatbot and will be written at the same professional level as your Elevora AI documentation.
________________________________________
16. Artificial Intelligence Architecture
Student Helpdesk AI uses a Large Language Model (LLM) through the Groq API. The chatbot combines a carefully designed system prompt with a structured university knowledge base to generate accurate, context-aware, and domain-specific responses.
Unlike a general-purpose chatbot, Student Helpdesk AI is designed to answer only university-related questions. Any request outside its defined scope will be politely declined.
________________________________________
17. AI Provider
The application shall use:
AI Provider
Groq API
________________________________________
Language Model
llama-3.3-70b-versatile
________________________________________
API Type
REST API
________________________________________
Response Format
Plain text
________________________________________
Temperature
0.4
A lower temperature ensures responses remain consistent, factual, and predictable.
________________________________________
Maximum Tokens
1024
________________________________________
18. Prompt Engineering
The chatbot shall use structured prompt engineering.
Each API request consists of:
System Prompt

↓

Knowledge Base Context

↓

Conversation History

↓

Current User Question
This structure ensures:
•	Accurate responses
•	Consistent personality
•	Better context retention
•	Controlled output
________________________________________
19. System Prompt Design
The system prompt defines the chatbot's identity, behavior, tone, and limitations.
The chatbot shall behave as:
Student Helpdesk AI
Role:
Intelligent University Assistant
Tone:
•	Friendly
•	Professional
•	Helpful
•	Beginner-friendly
•	Concise
________________________________________
Responsibilities
The chatbot may answer questions regarding:
•	Admissions
•	Eligibility
•	Required Documents
•	Fee Structure
•	Scholarships
•	Attendance
•	Examinations
•	Academic Calendar
•	Departments
•	Library
•	Hostel
•	Transport
•	Campus Facilities
•	Student Affairs
•	Office Timings
________________________________________
Restrictions
The chatbot must refuse questions related to:
•	Politics
•	Religion
•	Sports
•	Movies
•	Programming
•	General Knowledge
•	Medical Advice
•	Financial Advice
•	Legal Advice
•	Personal Opinions
________________________________________
Fallback Message
If the question is outside the supported scope:
I'm Student Helpdesk AI, and I'm designed to assist with university-related queries only.

Please ask about admissions, fees, scholarships, attendance, examinations, campus services, or other university-related topics.
________________________________________
20. Prompt Construction
Every request shall follow this order:
SYSTEM PROMPT

↓

UNIVERSITY KNOWLEDGE BASE

↓

LAST 10 CHAT MESSAGES

↓

CURRENT USER QUESTION
This ensures the model always has:
•	Rules
•	University information
•	Conversation context
•	Current intent
________________________________________
21. Knowledge Base Integration
The chatbot shall load information from local JSON files stored in:
knowledge/
Example structure:
knowledge/

admission.json

fees.json

attendance.json

scholarships.json

departments.json

library.json

hostel.json

transport.json

campus.json

faq.json
The knowledge base is read on the server before constructing the prompt.
________________________________________
22. Conversation Context
To maintain natural conversations, the chatbot stores recent messages.
Context window:
Last 10 messages
Older messages shall be discarded automatically to reduce token usage and improve performance.
________________________________________
23. Scope Enforcement
Before generating a response, the application shall determine whether the user's question belongs to the supported domain.
Supported topics include:
•	Admissions
•	Fee Structure
•	Scholarships
•	Attendance
•	Examinations
•	Departments
•	Library
•	Hostel
•	Transport
•	Campus Facilities
•	Student Affairs
•	Office Timings
If the question is unrelated, the chatbot shall return the predefined fallback response instead of querying the language model.
________________________________________
24. Response Format
AI responses should follow a consistent structure.
Example:
Admission Process

1. Complete the online application form.
2. Upload the required documents.
3. Pay the application fee.
4. Appear for the admission test (if required).
5. Wait for the merit list.

Need more details about eligibility or required documents?
This makes responses easy to read.
________________________________________
25. Error Handling
The chatbot shall gracefully handle common errors.
Empty Message
Display:
Please enter a question before sending.
________________________________________
Very Long Message
Display:
Your message is too long. Please keep it under 500 characters.
________________________________________
Missing API Key
Display:
The AI service is temporarily unavailable.
Please try again later.
________________________________________
API Timeout
Display:
The request is taking longer than expected.
Please try again in a moment.
________________________________________
Rate Limit
Display:
Too many requests have been received.
Please wait a few seconds and try again.
________________________________________
Network Failure
Display:
Unable to connect to the AI service.
Please check your internet connection and try again.
________________________________________
26. Security Requirements
The application shall protect sensitive information.
Rules:
•	Store the Groq API key only in server-side environment variables.
•	Never expose API keys to the client.
•	Validate all incoming requests.
•	Sanitize user input.
•	Never return internal errors to the user.
•	Do not log sensitive information in production.
________________________________________
27. Environment Variables
The application shall use the following environment variables:
GROQ_API_KEY=your_groq_api_key
No public environment variable shall contain the API key.
________________________________________
28. API Route Specification
The backend shall expose one primary endpoint:
POST /api/chat
Request
{
  "message": "What is the admission process?"
}
Success Response
{
  "success": true,
  "reply": "The admission process consists of..."
}
Error Response
{
  "success": false,
  "error": "Unable to process your request."
}
________________________________________
29. AI Performance Goals
The chatbot should achieve:
•	Initial page load: < 2 seconds
•	Average AI response time: 2–5 seconds
•	API response format: Consistent JSON
•	Mobile responsiveness: 100%
•	No client-side exposure of API credentials.
________________________________________
30. Non-Functional Requirements
30.1 Performance
The application shall provide fast and responsive interactions.
Requirements:
•	Landing page load time should be less than 2 seconds.
•	Average AI response time should be 2–5 seconds.
•	API requests should be asynchronous.
•	Loading indicators shall be displayed while waiting for AI responses.
________________________________________
30.2 Reliability
The system shall:
•	Handle API failures gracefully.
•	Prevent application crashes due to invalid user input.
•	Maintain conversation flow throughout the active session.
•	Display meaningful error messages instead of technical exceptions.
________________________________________
30.3 Scalability
The architecture shall support future enhancements including:
•	Multi-university knowledge bases.
•	Student authentication.
•	Chat history storage.
•	Voice-based interaction.
•	Multi-language support.
•	Integration with university databases.
________________________________________
30.4 Security
The application shall ensure:
•	Server-side API key protection.
•	Input validation and sanitization.
•	No exposure of internal implementation details.
•	HTTPS deployment through Vercel.
•	Secure communication with the Groq API.
________________________________________
30.5 Maintainability
The project shall use a modular folder structure.
Each feature shall be isolated into reusable components to simplify maintenance and future development.
________________________________________
31. Project Folder Structure
student-helpdesk-ai/

├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ChatWindow.tsx
│   ├── ChatInput.tsx
│   ├── MessageBubble.tsx
│   ├── SuggestedQuestions.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── Footer.tsx
│
├── constants/
│
├── hooks/
│
├── lib/
│
├── prompts/
│   └── systemPrompt.ts
│
├── knowledge/
│   ├── admission.json
│   ├── fees.json
│   ├── attendance.json
│   ├── scholarships.json
│   ├── library.json
│   ├── hostel.json
│   ├── transport.json
│   ├── campus.json
│   └── faq.json
│
├── public/
│
├── types/
│
├── README.md
├── package.json
└── .env.example
________________________________________
32. Testing Strategy
The application shall be tested using functional and usability testing.
________________________________________
Functional Testing
Test Case	Expected Result
Open Landing Page	Page loads successfully
Start Chat	Chat interface opens
Send Admission Question	AI provides relevant answer
Send Scholarship Question	Correct response returned
Send Fee Question	Correct fee information
Send Empty Message	Validation message displayed
Send Long Message	User-friendly warning displayed
API Failure	Friendly error message shown
Invalid Topic	Fallback response displayed
________________________________________
UI Testing
Verify:
•	Responsive layout
•	Mobile compatibility
•	Desktop compatibility
•	Dark mode
•	Light mode
•	Button animations
•	Typing indicator
•	Suggested question chips
________________________________________
AI Testing
Verify:
•	Context awareness
•	Prompt consistency
•	Scope enforcement
•	Response quality
•	Hallucination prevention
•	Fallback behavior
________________________________________
33. Deployment Requirements
The project shall be deployed using Vercel.
Deployment steps:
1.	Push project to GitHub.
2.	Import repository into Vercel.
3.	Configure environment variables.
4.	Deploy application.
5.	Verify production functionality.
Required environment variable:
GROQ_API_KEY=your_api_key
________________________________________
34. GitHub Repository Requirements
The repository shall include:
README.md

LICENSE (optional)

.env.example

package.json

package-lock.json

AI_USAGE.md

knowledge/

components/

app/

hooks/

constants/

types/

public/
The repository shall not include:
•	.env.local
•	node_modules
•	.next
•	Build artifacts
•	API keys
•	Log files
________________________________________
35. README Documentation
The README shall contain:
•	Project Overview
•	Features
•	Technology Stack
•	Installation Guide
•	Environment Variables
•	Local Development
•	Deployment Instructions
•	Folder Structure
•	AI Usage
•	Screenshots
•	License
________________________________________
36. Future Enhancements
Future versions may include:
•	Student Login System
•	Authentication
•	Voice Chat
•	Speech-to-Text
•	Text-to-Speech
•	Multi-language Support
•	PDF Document Search
•	Live University Database Integration
•	Admin Dashboard
•	Analytics Dashboard
•	Chat History
•	Dark/Light Theme Toggle Improvements
________________________________________
37. Project Assumptions
The system assumes:
•	Users have internet connectivity.
•	Groq API is available.
•	Environment variables are configured correctly.
•	Knowledge base files are maintained and updated.
•	Users ask university-related questions.
________________________________________
38. Project Constraints
Current limitations include:
•	No authentication system.
•	No persistent chat history.
•	Responses depend on Groq API availability.
•	Limited to predefined university knowledge.
•	Internet connection is required.
________________________________________
39. Acceptance Criteria
The project shall be considered complete when:
•	Landing page is fully responsive.
•	Chat interface functions correctly.
•	Groq API integration works.
•	University-related questions receive relevant responses.
•	Out-of-scope questions receive the predefined fallback response.
•	Error handling works for all major failure scenarios.
•	npm run build completes successfully.
•	Project deploys successfully on Vercel.
•	API keys remain secure.
•	UI matches the approved design.
________________________________________
40. Conclusion
Student Helpdesk AI is a modern AI-powered university assistant built using a full-stack Next.js architecture. The application demonstrates practical use of conversational AI, prompt engineering, server-side API integration, and responsive web development.
By leveraging the Groq API and Next.js API Routes, the project eliminates the need for a separate backend service while maintaining security, scalability, and ease of deployment.
The solution provides a focused, reliable, and user-friendly experience for answering university-related queries and serves as a strong demonstration of AI application development for academic and internship purposes.
________________________________________

