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
- Active users can see their time-sheet
  - Calendar view
  - List View
  - Table View
- Active users can participate in attendance system
- User can logout

### Requirement Analysis
#### Models:

#### User
- Name
- Email
- Password
- Roles
- AccountStatus

#### Profile
- First Name
- Last Name
- Phone Number
- Profile Picture
- UserId

#### Student Attendance
- UserId
- CreatedAt: Date Time

#### Admin Attendance
- CreatedAt: DateTime
- Status
- TimeLimit

### Endpoints

#### Student Endpoints
- POST /auth/login (public)
- POST /auth/register (public)
- PATCH /profile (private)
- PATCH /profiles/avatar (private)
- PUT /auth/change-password (private)
- GET /timesheet (private)
- GET /attendance (private)
- GET /attendanceStats (private)

#### Admin Endpoints
- GET /users (private)
- POST /users (private)
- PATCH /users/userId (private)
- DELETE /users/userId (private)
- GET /users/userId (private)
- GET /profiles (private)
- POST /profiles (private)
- PATCH /profiles/profileId (private)
- DELETE /profiles/profileId (private)
- GET /profiles/profileId (private)
- GET /timesheet/userId (private)
- GET /timesheet/stats
- POST /attendance/enable (private)
- GET /attendance/disabled/:attendanceId (private)

### API Tasks
#### TODO
- Create Models
- Authentication
- Middleware
- TimeSheet and Attendance
- USER CRUD
- Profile CRUD
- Admin Control Over Attendance
- Generate Stats

#### Registration Process:
- Start
- name = Input()
- email = Input()
- password = Input()
- if name && email && password is Invalid:
  - return 400 error
- user = find user with email
- if user found:
  - return 400 error
- hash = hash password
- user = save name, email, hash to user model
- return 201

#### Login Process:
- Start
- email = Input()
- password = Input()

- user = find user with email
- if user not found:
  - return 400 error

- if password not equal to user.hash:
  - return 400 error

- token = generate token using user
- return token
- end