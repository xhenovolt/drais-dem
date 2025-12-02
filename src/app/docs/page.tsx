'use client';

import { useState } from 'react';
import { Book, Users, DollarSign, Calendar, FileText, Settings, Shield, Database, Bell, Zap } from 'lucide-react';

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    description: 'Learn the basics of using Excel Islamic School Management System',
    content: `
# Getting Started with Excel Islamic School Management System

Welcome to Excel Islamic School Management System - a comprehensive solution for managing all aspects of your educational institution.

## System Overview

The Excel Islamic School Management System is designed to handle:
- Student registration and management
- Staff administration 
- Academic records and results
- Financial management
- Tahfiz (Quran memorization) program tracking
- Attendance monitoring
- Communication and notifications

## First-Time Setup

### 1. Login Credentials
- Contact your system administrator for login credentials
- Use the provided username and password to access the system
- Change your password after first login for security

### 2. Dashboard Overview
Upon login, you'll see the main dashboard with:
- Quick statistics overview
- Recent activities
- Upcoming deadlines
- Important notifications

### 3. Navigation
The system uses a sidebar navigation with main sections:
- **Dashboard**: Overview and quick stats
- **Students**: Student management and records  
- **Staff**: Employee management
- **Academics**: Classes, subjects, and results
- **Finance**: Fee management and payments
- **Tahfiz**: Quran memorization tracking
- **Attendance**: Daily attendance monitoring
- **Reports**: Generate various reports
`
  },
  {
    id: 'student-management',
    title: 'Student Management',
    icon: Users,
    description: 'Complete guide to managing student records, admission, and profiles',
    content: `
# Student Management Guide

## Student Registration

### Adding New Students
1. Navigate to **Students** → **Admit**
2. Fill in the student admission wizard:
   - **Personal Information**: Name, date of birth, gender, etc.
   - **Contact Details**: Parent/guardian information
   - **Academic Information**: Class, stream, admission date
   - **Documents**: Upload required documents
   - **Photo**: Add student photograph

### Student Information Management
- **Personal Details**: Update student personal information
- **Contact Information**: Manage parent/guardian contacts
- **Documents**: Upload and manage student documents
- **Academic History**: Track class progression
- **Fee Information**: View payment history and outstanding fees

## Student List and Search
- View all students in a comprehensive table
- Search by name, ID, class, or other criteria
- Filter by class, stream, status
- Bulk operations for multiple students

## Student Profiles
Each student profile includes:
- Personal information and photo
- Contact details
- Academic records
- Fee payment history
- Attendance records
- Disciplinary records
- Medical information

## Document Management
- Upload student documents (birth certificates, photos, etc.)
- Organize by document type
- Track document expiry dates
- Generate document reports
`
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    icon: DollarSign,
    description: 'Manage school fees, payments, and financial records',
    content: `
# Financial Management System

## Fee Structure Management

### Setting Up Fee Categories
1. Go to **Finance** → **Fees**
2. Create fee categories (tuition, transport, meals, etc.)
3. Set amounts for different classes/streams
4. Define payment terms and due dates

### Fee Assignment
- Assign fee structures to students
- Handle individual fee adjustments
- Manage scholarships and discounts
- Set up payment plans

## Payment Processing

### Recording Payments
1. Navigate to **Finance** → **Payments**
2. Select student and fee items
3. Enter payment amount and method
4. Generate receipt automatically

### Payment Methods
- Cash payments
- Bank transfers
- Mobile money
- Cheque payments

## Financial Reports
- Fee collection reports
- Outstanding fees summary
- Payment history by student
- Financial statements
- Revenue analysis

## Wallet System
- Student account balances
- Prepaid fee management
- Credit and debit tracking
- Balance notifications

## Receipt Generation
- Automatic receipt generation
- Custom receipt templates
- Email receipt delivery
- Reprint capabilities
`
  },
  {
    id: 'academic-records',
    title: 'Academic Records',
    icon: FileText,
    description: 'Manage classes, subjects, exams, and student results',
    content: `
# Academic Records Management

## Class and Subject Management

### Setting Up Classes
1. Go to **Academics** → **Classes**
2. Create class levels (Primary 1-7, Secondary 1-4)
3. Define streams within classes
4. Assign class teachers

### Subject Configuration
- Add subjects for each class level
- Set subject codes and descriptions
- Define grading scales
- Assign subject teachers

## Examination Management

### Creating Exams
1. Navigate to **Academics** → **Exams**
2. Set exam name and period
3. Define subjects to be examined
4. Set examination dates

### Results Entry
- Enter student scores by subject
- Calculate grades automatically
- Generate class averages
- Identify top performers

## Report Cards
- Generate student report cards
- Include grades, comments, and rankings
- Add teacher and headmaster comments
- Print or email reports to parents

## Academic Analytics
- Class performance analysis
- Subject performance tracking
- Student progress monitoring
- Comparison reports

## Timetable Management
- Create class timetables
- Assign teachers to periods
- Manage room allocations
- Handle timetable conflicts
`
  },
  {
    id: 'attendance-system',
    title: 'Attendance System',
    icon: Calendar,
    description: 'Track student and staff attendance efficiently',
    content: `
# Attendance Management System

## Daily Attendance

### Marking Student Attendance
1. Go to **Attendance**
2. Select date and class
3. Mark students as Present, Absent, or Late
4. Add remarks if necessary
5. Submit attendance record

### Attendance Methods
- Manual attendance marking
- Biometric fingerprint scanning
- QR code scanning
- Mobile app check-in

## Attendance Reports

### Student Attendance Reports
- Individual student attendance history
- Class attendance summaries
- Monthly attendance reports
- Attendance percentage calculations

### Staff Attendance
- Teacher attendance tracking
- Staff sign-in/sign-out records
- Leave management
- Overtime tracking

## Attendance Analytics
- Attendance trends analysis
- Identify chronic absenteeism
- Class attendance comparisons
- Monthly/term statistics

## Notifications
- SMS alerts for absent students
- Email reports to parents
- Low attendance warnings
- Perfect attendance recognition

## Attendance Policies
- Configure attendance rules
- Set minimum attendance requirements
- Define late arrival policies
- Manage excuse protocols
`
  },
  {
    id: 'tahfiz-program',
    title: 'Tahfiz Program',
    icon: Book,
    description: 'Manage Quran memorization program and student progress',
    content: `
# Tahfiz Program Management

The Tahfiz program helps track Quran memorization progress for students enrolled in Islamic studies.

## Program Setup

### Creating Tahfiz Groups
1. Navigate to **Tahfiz** → **Groups**
2. Create memorization groups by level
3. Assign qualified teachers
4. Set group schedules

### Student Enrollment
- Enroll students in Tahfiz program
- Assign to appropriate groups
- Set individual goals and targets
- Track student capabilities

## Progress Tracking

### Portion Assignment
- Assign Quran portions (Surahs/verses) to students
- Set memorization deadlines
- Track completion status
- Record recitation quality

### Assessment Methods
- Regular recitation tests
- Memory retention checks
- Tajweed (pronunciation) evaluation
- Comprehension assessments

## Tahfiz Records

### Student Progress Records
- Memorized portions tracking
- Quality ratings and comments
- Progress timeline
- Achievement certificates

### Reporting
- Individual student progress reports
- Group performance summaries
- Teacher evaluation reports
- Parent progress updates

## Tahfiz Analytics
- Memorization speed analysis
- Retention rate tracking
- Group performance comparisons
- Teacher effectiveness metrics

## Certificates and Recognition
- Completion certificates
- Achievement badges
- Progress milestones
- Public recognition events
`
  },
  {
    id: 'communication-system',
    title: 'Communication System',
    icon: Bell,
    description: 'Manage notifications, SMS, and communication with parents',
    content: `
# Communication and Notification System

## Notification Management

### System Notifications
- Real-time in-app notifications
- Email notifications
- SMS alerts
- Push notifications (mobile app)

### Notification Types
- Fee payment reminders
- Attendance alerts
- Academic performance updates
- General announcements
- Emergency communications

## SMS System

### Sending SMS
1. Go to **Communications** → **SMS**
2. Select recipient groups (parents, students, staff)
3. Compose message
4. Schedule or send immediately

### SMS Templates
- Pre-defined message templates
- Personalized messaging
- Bulk SMS capabilities
- Delivery confirmation

## Parent Communication

### Parent Portals
- Online parent accounts
- Student progress access
- Fee payment online
- Communication history

### Regular Updates
- Weekly progress reports
- Monthly newsletters
- Event notifications
- Academic calendar updates

## Communication Analytics
- Message delivery rates
- Response tracking
- Engagement metrics
- Communication effectiveness

## Emergency Communications
- Emergency contact protocols
- Automated alert systems
- Parent notification chains
- Staff communication trees
`
  },
  {
    id: 'reports-analytics',
    title: 'Reports & Analytics',
    icon: FileText,
    description: 'Generate comprehensive reports and analyze school data',
    content: `
# Reports and Analytics

## Academic Reports

### Student Performance Reports
- Individual student reports
- Class performance summaries
- Subject analysis reports
- Term comparison reports

### Report Cards
- Comprehensive student report cards
- Progress tracking reports
- Parent-teacher conference reports
- Academic transcripts

## Financial Reports

### Fee Reports
- Fee collection summaries
- Outstanding fees reports
- Payment history reports
- Revenue analysis

### Financial Statements
- Income statements
- Balance sheets
- Cash flow reports
- Budget vs actual analysis

## Administrative Reports

### Attendance Reports
- Daily attendance registers
- Monthly attendance summaries
- Absenteeism analysis
- Perfect attendance lists

### Staff Reports
- Staff performance reports
- Payroll reports
- Leave management reports
- Training records

## Custom Reports

### Report Builder
- Create custom reports
- Select data fields
- Apply filters and sorting
- Export in multiple formats

### Scheduled Reports
- Automated report generation
- Email delivery scheduling
- Regular report subscriptions
- Report archives

## Data Analytics

### Dashboard Analytics
- Real-time data visualization
- Key performance indicators
- Trend analysis
- Comparative metrics

### Predictive Analytics
- Student performance predictions
- Enrollment forecasting
- Financial projections
- Resource planning
`
  },
  {
    id: 'system-administration',
    title: 'System Administration',
    icon: Settings,
    description: 'Configure system settings, user management, and security',
    content: `
# System Administration Guide

## User Management

### Creating User Accounts
1. Navigate to **Settings** → **Users**
2. Create new user account
3. Assign appropriate roles and permissions
4. Set password and security settings

### Role-Based Access Control
- Administrator: Full system access
- Teacher: Academic and attendance access
- Accountant: Financial management access
- Parent: Limited student information access
- Student: Personal records access only

## System Configuration

### School Information
- Update school details and branding
- Configure contact information
- Set academic calendar
- Manage school policies

### Academic Year Setup
- Create new academic years
- Define term periods
- Set examination schedules
- Configure grading systems

## Data Management

### Database Maintenance
- Regular data backups
- System performance monitoring
- Data integrity checks
- Storage management

### Import/Export Tools
- Bulk student data import
- Results data export
- Backup and restore
- Data migration tools

## Security Settings

### Password Policies
- Password complexity requirements
- Password expiration settings
- Account lockout policies
- Two-factor authentication

### System Security
- User activity logging
- Access control monitoring
- Security audit trails
- Regular security updates

## System Monitoring

### Performance Monitoring
- System resource usage
- Response time tracking
- Error monitoring
- User activity analysis

### Maintenance Schedules
- Regular system updates
- Database optimization
- Security patches
- Backup verification
`
  }
];

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeContent = documentationSections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white dark:bg-gray-800 shadow-lg h-screen sticky top-0 overflow-y-auto">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Documentation
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Excel Islamic School Management System
            </p>
            
            {/* Search */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <nav className="p-4">
            {filteredSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm opacity-75 mt-1">{section.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {activeContent && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <activeContent.icon className="w-8 h-8 text-blue-600" />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {activeContent.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {activeContent.description}
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div 
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ 
                      __html: activeContent.content
                        .split('\n')
                        .map(line => {
                          if (line.startsWith('# ')) {
                            return `<h1 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">${line.substring(2)}</h1>`;
                          } else if (line.startsWith('## ')) {
                            return `<h2 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">${line.substring(3)}</h2>`;
                          } else if (line.startsWith('### ')) {
                            return `<h3 class="text-lg font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300">${line.substring(4)}</h3>`;
                          } else if (line.startsWith('- ')) {
                            return `<li class="mb-1 text-gray-600 dark:text-gray-400">${line.substring(2)}</li>`;
                          } else if (line.match(/^\d+\. /)) {
                            return `<li class="mb-1 text-gray-600 dark:text-gray-400">${line.replace(/^\d+\. /, '')}</li>`;
                          } else if (line.trim() === '') {
                            return '<br>';
                          } else {
                            return `<p class="mb-3 text-gray-600 dark:text-gray-400 leading-relaxed">${line}</p>`;
                          }
                        })
                        .join('')
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}