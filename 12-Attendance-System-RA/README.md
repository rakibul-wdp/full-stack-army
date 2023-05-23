# Attendance System Requirement Analysis

### Agenda:
- Functional Requirement Analysis
- Create a Basic SRS
- Choose Technologies
- Setup Project

### Client's Requirements:
- We need an attendance system.
- Students can create their own profile.
- Admin can see list of students and their attendances.
- Admin can enable and disable attend button also this button can be disabled based on a timer.
- Each time admin enable attend button, students can participate for only once.
- Each day, student will have a time-sheet of attendance.
- Student can see their own time logs and attend button when enabled.

## Functional Requirements:
### Admin
- We will generate a super admin during application installation
- Admin can create student
- Admin can delete, update or check students information
- Admin can change status of a student
- Admin can check time sheet of a student
- Admin can enable or disable attendance button
- Admin can check stats of a given day
### Student
- Student can register themselves
- There will be following account status for a students - 
  - Pending
  - Active
  - Reject
- User can login with their credentials
- Pending & Rejected users won't have anything in their profile
- Active users can update their profile information
  - First Name
  - Last Name
  - Email
  - Phone Number
  - Profile Picture
- Active users can change / update password
- Active users can see their logs
  - Calendar view
  - List View
  - Table View
- Active users can participate in attendance system
- User can logout