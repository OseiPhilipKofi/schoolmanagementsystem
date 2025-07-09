
CREATE DATABASE IF NOT EXISTS `schoolManagementSystem`;
USE schoolManagementSystem;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            fullName VARCHAR(255),
            email VARCHAR(255),
            contact VARCHAR(20) NOT NULL,
            userPassword VARCHAR(255) NOT NULL,
            country VARCHAR(255),
            city VARCHAR(255),
            address VARCHAR(255),
            profile VARCHAR(255),
            status VARCHAR(255),
            registerTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS founders;
CREATE TABLE IF NOT EXISTS administrators (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            specialization VARCHAR(255),
            certificate VARCHAR(255),
            ward VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS administrators;
CREATE TABLE IF NOT EXISTS doctors (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            specialization VARCHAR(255),
            certificate VARCHAR(255),
            ward VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS teachers;
CREATE TABLE IF NOT EXISTS nurses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            specialization VARCHAR(255),
            certificate VARCHAR(255),
            ward VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS securityStaff;
CREATE TABLE IF NOT EXISTS securityStaff (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            certificate VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);


DROP TABLE IF EXISTS kitchenStaff;
CREATE TABLE IF NOT EXISTS kitchenStaff (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            certificate VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS otherStaff;
CREATE TABLE IF NOT EXISTS otherStaff (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Fname VARCHAR(255) NOT NULL,
            userName VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            certificate VARCHAR(255),
            ward VARCHAR(255),
            yearOfEmp DATE,
            Dimage VARCHAR(255),
            description VARCHAR(255),
            password VARCHAR(255),
            image VARCHAR(255),
            status VARCHAR(255),
            registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS appointments;
CREATE TABLE IF NOT EXISTS appointments(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL,
            userDate VARCHAR(255),
            userTime VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(255),
            attachment VARCHAR(255),
            adminResponse VARCHAR(255) DEFAULT 'pending',
            proposedDate VARCHAR(255),
            dayofbooking VARCHAR(255),
            FOREIGN KEY (userid) REFERENCES users(id)
);

DROP TABLE IF EXISTS Newsletter;
CREATE TABLE IF NOT EXISTS Newsletter(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            userid INT NOT NULL,
            accountHolder VARCHAR(255),
            suscribedEmail VARCHAR(255),
            suscribedTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS blog;
CREATE TABLE IF NOT EXISTS blog(
            id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            userid INT NOT NULL,
            blogTitle VARCHAR(255),
            blogDescription VARCHAR(255),
            blogProfile VARCHAR(255),
            blogType VARCHAR(255),
            dateUploaded Date DEFAULT CURRENT_TIMESTAMP()
);


DROP TABLE IF EXISTS contactUs;
CREATE TABLE IF NOT EXISTS contactUs(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL,
            fullName VARCHAR(255),
            phoneNumber VARCHAR(255) NOT NULL,
            email VARCHAR(255),
            EmessageBody VARCHAR(255),
            TmessageBody VARCHAR(255),
            sentDay VARCHAR(255),
            sentTime VARCHAR(255) NOT NULL,
            Erespond VARCHAR(255),
            Trespond VARCHAR(255),
            ResponseTime VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXIST pagefunctionalities
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    header VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    icon VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXIST codeofconduct
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    header VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL

)

DROP TABLE IF EXISTS history;
CREATE TABLE IF NOT EXISTS history(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS founders;
CREATE TABLE IF NOT EXISTS founders(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS mission;
CREATE TABLE IF NOT EXISTS mission(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS vision;
CREATE TABLE IF NOT EXISTS vision(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS ourValues;
CREATE TABLE IF NOT EXISTS ourValues(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS outreach;
CREATE TABLE IF NOT EXISTS outreach(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS achievements;
CREATE TABLE IF NOT EXISTS achievements(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            header VARCHAR(255),
            notes VARCHAR(10000)
);

DROP TABLE IF EXISTS team;
CREATE TABLE IF NOT EXISTS team(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            img VARCHAR(255),
            username VARCHAR(255),
            faculty VARCHAR(255),
            position VARCHAR(10000)
);

INSERT INTO history (header, notes)
VALUES      (
                'Establishment',
                'Asamang Hospital was founded over five decades ago with a vision to provide quality healthcare services to the community. Starting as a small clinic, it has grown into a full-fledged hospital offering a wide range of medical specialties. Throughout the years, we have remained committed to our founding principles of compassion, excellence, and innovation in healthcare.'
            ),
            (
                'vision',
                "Our founders envisioned a hospital that would be a beacon of hope and healing. Today, we continue to uphold that vision through our compassionate care and advanced medical practices."
            ),
            (
                'Hope',
                "Asamang Hospital remains dedicated to fostering a culture of continuous improvement, collaboration, and patient-centered care. Our history is a testament to our unwavering commitment to these ideals."
            ),
            (
                'Journey',
                "Our hospital's journey began with a small team of dedicated healthcare professionals who shared a common goal: to improve the health and well-being of the community. Over the years, we have expanded our services, facilities, and expertise to meet the growing needs of our patients."
            ),
            (
                'Commitment',
                ' We have continuously invested in state-of-the-art medical technology and infrastructure to provide the best possible care. Our commitment to quality and patient satisfaction has earned us a reputation as a trusted healthcare provider.'
            ),
            (
                'Legacy',
                'Our history is marked by milestones in medical advancements, community outreach, and patient-centered care. We take pride in our legacy and look forward to continuing our mission for many years to come.'
            ),
            (
                'Values',
                "Asamang Hospital's foundation is built on the principles of compassion, integrity, and excellence. These values guide us in every aspect of our work, from patient care to research and education."
            ),
            (
                'Oneness',
                "We are grateful to our dedicated staff, loyal patients, and supportive community for being part of our journey. Together, we strive to create a healthier future for all."
            ),
            (
                'Invite',
                "Our history section reflects our dedication to growth, innovation, and service. We invite you to learn more about our story and join us in our commitment to healthcare excellence."
            ),
            (
                'Growth',
                "The hospital's evolution has been shaped by the changing healthcare landscape and the needs of the community. We have adapted and grown to provide comprehensive services that address a wide range of medical conditions."
            );


INSERT INTO mission (header, notes)
VALUES      (
                "Aim",
                "Our mission is to deliver accessible, affordable, and high-quality healthcare services that improve the health and well-being of our patients. We strive to foster a healing environment where patients feel valued and cared for by our dedicated team of professionals."
            ),
            (
                "Commitment",
                "We are committed to promoting health education, preventive care, and community engagement to empower individuals to take charge of their health. Our mission guides every decision we make and every service we provide."
            ),
            (
                "Oneness",
                "Through collaboration, innovation, and compassion, we aim to be a leader in healthcare delivery, setting standards for excellence and patient satisfaction."
            ),
            (
                "Dedication",
                "Our mission reflects our dedication to holistic care, addressing physical, emotional, and social aspects of health to improve overall quality of life."
            ),
            (
                "Evolution",
                "We continuously evaluate and enhance our services to meet the evolving needs of our community, ensuring that our mission remains relevant and impactful."
            ),
            (
                "Determination",
                "Our mission is to provide compassionate, patient-centered care that promotes healing, wellness, and health equity for all members of our community."
            );


INSERT INTO vision (header, notes)
VALUES      (
                "Reliability",
                "To be a leading healthcare institution recognized for excellence in patient care, medical education, and research. We envision a future where every individual has access to the best possible healthcare services."
            ),
            (
                "Support",
                "Our vision inspires us to innovate, collaborate, and excel in all areas of healthcare delivery. We strive to create a supportive environment for patients, staff, and the community."
            ),
            (
                "Growth",
                "We aim to expand our services and facilities to meet the growing demands of healthcare and to contribute to medical knowledge through research and education."
            ),
            (
                "Productivity",
                "Our vision emphasizes the importance of accessibility, quality, and compassion in healthcare, guiding our strategic planning and daily operations."
            ),
            (
                "Unity",
                " We are dedicated to fostering partnerships and community engagement to improve health outcomes and reduce disparities."
            ),
            (
                "Elevation",
                "Our vision is to be a beacon of hope and healing, delivering exceptional healthcare services with compassion and innovation."
            );

INSERT INTO ourValues (header, notes)
VALUES      (
                "Compassion",
                "We treat every patient with kindness and empathy."
            ),
            (
                "Integrity",
                "We uphold the highest ethical standards in all our actions."
            ),
            (
                "Excellence",
                " We pursue continuous improvement and innovation."
            ),
            (
                "Collaboration",
                "We work together to provide comprehensive care."
            ),
            (
                "Respect",
                "We honor the dignity and rights of every individual."
            );



INSERT INTO clubs (username, faculty, position)
VALUES      (
                "",
                ""
            ),
            (
                "",
                ""
            ),
            (
                "",
                ""
            ),

