-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2025 at 04:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolmanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`id`, `img`, `header`, `notes`) VALUES
(1, 'award1.jpg', 'Academic Excellence', 'Our students consistently achieve top grades and awards.'),
(2, 'sports_trophy.jpg', 'Sports Achievements', 'Our teams have won numerous regional championships.'),
(3, 'ArtAward.jpg', 'Artistic Achievements', 'Recognition in arts and music competitions.'),
(4, 'ScienceFair.jpg', 'Science Fair', 'Awards from regional and national science fairs.'),
(5, 'CommunityService.jpg', 'Community Service', 'Acknowledgment for community service projects.'),
(6, 'Innovation.jpg', 'Innovation Awards', 'Awards for innovative projects and ideas.'),
(7, 'Leadership.jpg', 'Leadership Awards', 'Recognition for student leadership roles.'),
(8, 'Debate.jpg', 'Debate Competitions', 'Success in debate and public speaking events.'),
(9, 'Technology.jpg', 'Technology Awards', 'Awards for achievements in technology and coding.'),
(10, 'Sportsmanship.jpg', 'Sportsmanship', 'Recognition for fair play and sportsmanship.');

-- --------------------------------------------------------

--
-- Table structure for table `administrators`
--

CREATE TABLE `administrators` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `department` varchar(255) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `office` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `blogTitle` varchar(255) DEFAULT NULL,
  `blogDescription` varchar(255) DEFAULT NULL,
  `blogProfile` varchar(255) DEFAULT NULL,
  `blogType` varchar(255) DEFAULT NULL,
  `dateUploaded` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classschedules`
--

CREATE TABLE `classschedules` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `classDate` varchar(255) DEFAULT NULL,
  `classTime` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `adminResponse` varchar(255) DEFAULT 'pending',
  `proposedDate` varchar(255) DEFAULT NULL,
  `dayOfBooking` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `id` int(11) NOT NULL,
  `clubName` varchar(255) DEFAULT NULL,
  `faculty` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`id`, `clubName`, `faculty`, `position`) VALUES
(1, 'Science Club', 'Science', 'President'),
(2, 'Drama Club', 'Arts', 'Vice President'),
(3, 'Chess Club', 'General', 'Member'),
(4, 'Math Club', 'Mathematics', 'Treasurer'),
(5, 'Debate Club', 'Language Arts', 'Secretary'),
(6, 'Robotics Club', 'Technology', 'Member'),
(7, 'Music Club', 'Arts', 'President'),
(8, 'Environmental Club', 'Science', 'Member'),
(9, 'Photography Club', 'Arts', 'Member'),
(10, 'Literature Club', 'Language Arts', 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `codeofconduct`
--

CREATE TABLE `codeofconduct` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `codeofconduct`
--

INSERT INTO `codeofconduct` (`id`, `header`, `content`) VALUES
(1, 'Respect', 'All students and staff must treat each other with respect and dignity.'),
(2, 'Integrity', 'Academic honesty and integrity are expected at all times.'),
(3, 'Safety', 'Maintain a safe and secure environment for everyone.'),
(4, 'Punctuality', 'Be on time for classes and school activities.'),
(5, 'Dress Code', 'Follow the school dress code at all times.'),
(6, 'Use of Technology', 'Use school technology responsibly and ethically.'),
(7, 'Bullying', 'Bullying of any kind is strictly prohibited.'),
(8, 'Attendance', 'Regular attendance is mandatory for all students.'),
(9, 'Property', 'Respect school property and the property of others.'),
(10, 'Environment', 'Keep the school environment clean and safe.');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emailMessageBody` varchar(255) DEFAULT NULL,
  `textMessageBody` varchar(255) DEFAULT NULL,
  `sentDay` varchar(255) DEFAULT NULL,
  `sentTime` varchar(255) NOT NULL,
  `emailRespond` varchar(255) DEFAULT NULL,
  `textRespond` varchar(255) DEFAULT NULL,
  `responseTime` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `founders`
--

CREATE TABLE `founders` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `img`, `header`, `notes`) VALUES
(1, 'school_building.jpg', 'Establishment', 'Our school was founded in 1980 with a mission to provide quality education.'),
(2, 'growth.jpg', 'Growth', 'Over the years, the school has expanded its facilities and programs.'),
(3, 'community.jpg', 'Community', 'We are proud of our strong community involvement and support.'),
(4, 'Milestones.jpg', 'Milestones', 'Key milestones in the school’s development and achievements.'),
(5, 'Alumni.jpg', 'Alumni', 'Notable alumni who have contributed to society.'),
(6, 'Facilities.jpg', 'Facilities', 'Overview of school facilities and infrastructure.'),
(7, 'Awards.jpg', 'Awards', 'Recognition and awards received by the school.'),
(8, 'Programs.jpg', 'Programs', 'Educational programs and extracurricular activities offered.'),
(9, 'Partnerships.jpg', 'Partnerships', 'Collaborations with other institutions and organizations.'),
(10, 'Future.jpg', 'Future Plans', 'Vision for the school’s future growth and development.');

-- --------------------------------------------------------

--
-- Table structure for table `kitchenstaff`
--

CREATE TABLE `kitchenstaff` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`id`, `img`, `header`, `notes`) VALUES
(1, 'mission_icon.png', 'Mission Statement', 'To provide a nurturing environment that fosters academic excellence and personal growth.'),
(2, 'commitment_icon.png', 'Commitment', 'We are committed to developing responsible and knowledgeable citizens.'),
(3, 'Education.png', 'Education', 'Deliver high-quality education to all students.'),
(4, 'Community.png', 'Community', 'Engage with the community to support student success.'),
(5, 'Innovation.png', 'Innovation', 'Incorporate innovative teaching methods and technology.'),
(6, 'Support.png', 'Support', 'Provide support services for students and staff.'),
(7, 'Diversity.png', 'Diversity', 'Promote diversity and inclusion within the school.'),
(8, 'Sustainability.png', 'Sustainability', 'Encourage sustainable practices and environmental awareness.'),
(9, 'Excellence.png', 'Excellence', 'Strive for excellence in all aspects of school life.'),
(10, 'Collaboration.png', 'Collaboration', 'Foster collaboration among students, staff, and parents.');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `accountHolder` varchar(255) DEFAULT NULL,
  `subscribedEmail` varchar(255) DEFAULT NULL,
  `subscribedTime` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `otherstaff`
--

CREATE TABLE `otherstaff` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ourvalues`
--

CREATE TABLE `ourvalues` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ourvalues`
--

INSERT INTO `ourvalues` (`id`, `img`, `header`, `notes`) VALUES
(1, 'values_icon.png', 'Core Values', 'Integrity, Respect, Excellence, Collaboration, and Innovation.'),
(2, 'Respect.png', 'Respect', 'Treat everyone with respect and kindness.'),
(3, 'Honesty.png', 'Honesty', 'Be honest in all actions and communications.'),
(4, 'Responsibility.png', 'Responsibility', 'Take responsibility for your actions.'),
(5, 'Empathy.png', 'Empathy', 'Show empathy towards others.'),
(6, 'Perseverance.png', 'Perseverance', 'Demonstrate perseverance in challenges.'),
(7, 'Teamwork.png', 'Teamwork', 'Work collaboratively with others.'),
(8, 'Leadership.png', 'Leadership', 'Exhibit leadership qualities.'),
(9, 'Creativity.png', 'Creativity', 'Encourage creative problem-solving.'),
(10, 'Excellence.png', 'Excellence', 'Strive for excellence in all endeavors.');

-- --------------------------------------------------------

--
-- Table structure for table `outreach`
--

CREATE TABLE `outreach` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outreach`
--

INSERT INTO `outreach` (`id`, `img`, `header`, `notes`) VALUES
(1, 'outreach_event.jpg', 'Community Outreach', 'Engaging with the local community through various programs and events.'),
(2, 'volunteering.jpg', 'Volunteering', 'Encouraging students and staff to participate in volunteer activities.'),
(3, 'Fundraising.jpg', 'Fundraising', 'Organizing fundraising events to support school programs.'),
(4, 'Partnerships.jpg', 'Partnerships', 'Building partnerships with local businesses and organizations.'),
(5, 'Workshops.jpg', 'Workshops', 'Hosting educational workshops and seminars.'),
(6, 'Mentorship.jpg', 'Mentorship', 'Providing mentorship opportunities for students.'),
(7, 'Scholarships.jpg', 'Scholarships', 'Offering scholarships to deserving students.'),
(8, 'Environmental.jpg', 'Environmental Initiatives', 'Promoting environmental awareness and sustainability.'),
(9, 'Health.jpg', 'Health Programs', 'Implementing health and wellness programs.'),
(10, 'Cultural.jpg', 'Cultural Events', 'Celebrating cultural diversity through events.');

-- --------------------------------------------------------

--
-- Table structure for table `pagefunctionalities`
--

CREATE TABLE `pagefunctionalities` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pagefunctionalities`
--

INSERT INTO `pagefunctionalities` (`id`, `header`, `content`, `icon`) VALUES
(1, 'Attendance', 'Manage student attendance records', 'attendance_icon.png'),
(2, 'Grades', 'View and manage student grades', 'grades_icon.png'),
(3, 'Library', 'Access library resources and catalog', 'library_icon.png'),
(4, 'Exams', 'Schedule and manage exams', 'exams_icon.png'),
(5, 'Timetable', 'View and edit class timetables', 'timetable_icon.png'),
(6, 'Events', 'School events and calendar', 'events_icon.png'),
(7, 'Notifications', 'Send notifications to students and staff', 'notifications_icon.png'),
(8, 'Reports', 'Generate academic and attendance reports', 'reports_icon.png'),
(9, 'Resources', 'Access educational resources', 'resources_icon.png'),
(10, 'Support', 'Help and support center', 'support_icon.png');

-- --------------------------------------------------------

--
-- Table structure for table `securitystaff`
--

CREATE TABLE `securitystaff` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `enrollmentDate` date DEFAULT NULL,
  `gradeLevel` varchar(50) DEFAULT NULL,
  `guardianName` varchar(255) DEFAULT NULL,
  `guardianContact` varchar(20) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `registerTime` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fullName`, `gender`, `dateOfBirth`, `email`, `contact`, `address`, `city`, `country`, `enrollmentDate`, `gradeLevel`, `guardianName`, `guardianContact`, `status`, `profile`, `registerTime`) VALUES
(1, 'John Doe', 'Male', '2005-04-15', 'johndoe@example.com', '1234567890', '123 Main St', 'Anytown', 'Country', '2020-09-01', '10th Grade', 'Jane Doe', '0987654321', 'Active', 'profile1.jpg', '2025-07-11 08:49:08'),
(2, 'Jane Smith', 'Female', '2006-07-22', 'janesmith@example.com', '2345678901', '456 Elm St', 'Othertown', 'Country', '2021-09-01', '9th Grade', 'John Smith', '1234567890', 'Active', 'profile2.jpg', '2025-07-11 08:49:08'),
(3, 'Michael Johnson', 'Male', '2004-11-30', 'michaelj@example.com', '3456789012', '789 Oak St', 'Sometown', 'Country', '2019-09-01', '11th Grade', 'Mary Johnson', '2345678901', 'Active', 'profile3.jpg', '2025-07-11 08:49:08'),
(4, 'Emily Davis', 'Female', '2005-02-10', 'emilyd@example.com', '4567890123', '321 Pine St', 'Anytown', 'Country', '2020-09-01', '10th Grade', 'James Davis', '3456789012', 'Active', 'profile4.jpg', '2025-07-11 08:49:08'),
(5, 'William Brown', 'Male', '2006-05-18', 'williamb@example.com', '5678901234', '654 Maple St', 'Othertown', 'Country', '2021-09-01', '9th Grade', 'Patricia Brown', '4567890123', 'Active', 'profile5.jpg', '2025-07-11 08:49:08'),
(6, 'Olivia Wilson', 'Female', '2004-08-25', 'oliviaw@example.com', '6789012345', '987 Cedar St', 'Sometown', 'Country', '2019-09-01', '11th Grade', 'Robert Wilson', '5678901234', 'Active', 'profile6.jpg', '2025-07-11 08:49:08'),
(7, 'James Taylor', 'Male', '2005-12-05', 'jamest@example.com', '7890123456', '159 Spruce St', 'Anytown', 'Country', '2020-09-01', '10th Grade', 'Linda Taylor', '6789012345', 'Active', 'profile7.jpg', '2025-07-11 08:49:08'),
(8, 'Sophia Anderson', 'Female', '2006-03-15', 'sophiaa@example.com', '8901234567', '753 Birch St', 'Othertown', 'Country', '2021-09-01', '9th Grade', 'Barbara Anderson', '7890123456', 'Active', 'profile8.jpg', '2025-07-11 08:49:08'),
(9, 'Benjamin Thomas', 'Male', '2004-06-20', 'benjamint@example.com', '9012345678', '852 Walnut St', 'Sometown', 'Country', '2019-09-01', '11th Grade', 'Elizabeth Thomas', '8901234567', 'Active', 'profile9.jpg', '2025-07-11 08:49:08'),
(10, 'Isabella Martinez', 'Female', '2005-09-10', 'isabellam@example.com', '0123456789', '951 Chestnut St', 'Anytown', 'Country', '2020-09-01', '10th Grade', 'Christopher Martinez', '9012345678', 'Active', 'profile10.jpg', '2025-07-11 08:49:08');

-- --------------------------------------------------------

--
-- Table structure for table `supportstaff`
--

CREATE TABLE `supportstaff` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `classroom` varchar(255) DEFAULT NULL,
  `yearOfEmp` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `faculty` varchar(255) DEFAULT NULL,
  `position` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `img`, `username`, `faculty`, `position`) VALUES
(1, 'principal.jpg', 'jdoe', 'Administration', 'Principal'),
(2, 'teacher1.jpg', 'asmith', 'Science', 'Science Teacher'),
(3, 'coach.jpg', 'bwilson', 'Physical Education', 'Coach'),
(4, 'counselor.jpg', 'mjohnson', 'Student Services', 'Counselor'),
(5, 'librarian.jpg', 'rlee', 'Library', 'Librarian'),
(6, 'admin_assistant.jpg', 'kwhite', 'Administration', 'Administrative Assistant'),
(7, 'it_specialist.jpg', 'dgreen', 'IT', 'IT Specialist'),
(8, 'nurse.jpg', 'bmartin', 'Health Services', 'School Nurse'),
(9, 'cafeteria_manager.jpg', 'swilson', 'Food Services', 'Cafeteria Manager'),
(10, 'security_chief.jpg', 'tclark', 'Security', 'Security Chief');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(20) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `registerTime` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vision`
--

CREATE TABLE `vision` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `notes` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vision`
--

INSERT INTO `vision` (`id`, `img`, `header`, `notes`) VALUES
(1, 'vision_icon.png', 'Vision Statement', 'To be a leading educational institution recognized for excellence and innovation.'),
(2, 'future_icon.png', 'Future als', 'Continuously improve and adapt to meet the needs of our students and community.'),
(3, 'Leadership.png', 'Leadership', 'Develop leadership skills in students and staff.'),
(4, 'Technology.png', 'Technology', 'Integrate technology to enhance learning experiences.'),
(5, 'Global.png', 'Global Perspective', 'Prepare students for a globalized world.'),
(6, 'Wellness.png', 'Wellness', 'Promote physical and mental wellness.'),
(7, 'Community.png', 'Community Engagement', 'Strengthen community ties and partnerships.'),
(8, 'Creativity.png', 'Creativity', 'Encourage creativity and critical thinking.'),
(9, 'Achievement.png', 'Achievement', 'Celebrate student and staff achievements.'),
(10, 'Growth.png', 'Growth', 'Support continuous personal and academic growth.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `administrators`
--
ALTER TABLE `administrators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classschedules`
--
ALTER TABLE `classschedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `codeofconduct`
--
ALTER TABLE `codeofconduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `founders`
--
ALTER TABLE `founders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchenstaff`
--
ALTER TABLE `kitchenstaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otherstaff`
--
ALTER TABLE `otherstaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ourvalues`
--
ALTER TABLE `ourvalues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outreach`
--
ALTER TABLE `outreach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagefunctionalities`
--
ALTER TABLE `pagefunctionalities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `securitystaff`
--
ALTER TABLE `securitystaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supportstaff`
--
ALTER TABLE `supportstaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vision`
--
ALTER TABLE `vision`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `administrators`
--
ALTER TABLE `administrators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classschedules`
--
ALTER TABLE `classschedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clubs`
--
ALTER TABLE `clubs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `codeofconduct`
--
ALTER TABLE `codeofconduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `founders`
--
ALTER TABLE `founders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `kitchenstaff`
--
ALTER TABLE `kitchenstaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `otherstaff`
--
ALTER TABLE `otherstaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ourvalues`
--
ALTER TABLE `ourvalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `outreach`
--
ALTER TABLE `outreach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pagefunctionalities`
--
ALTER TABLE `pagefunctionalities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `securitystaff`
--
ALTER TABLE `securitystaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `supportstaff`
--
ALTER TABLE `supportstaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vision`
--
ALTER TABLE `vision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classschedules`
--
ALTER TABLE `classschedules`
  ADD CONSTRAINT `classschedules_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
