///////////////////////////// VARIABLES ///////////////////////////////////////

// General Info
var bio = {

    name: "Just {Dev}",
    role: "Code Sling'a",
    contacts: {
        mobile: "(555) 123-4567",
        email: "placeholder@place.com",
        github: "SegFault0x0",
        stackoverflow: "justDev7a3",
        twitter: "PaulNikon",
        location: "Dallas, TX"
    },
    welcomeMessage: "\"Sweet something... of... someplace.\"",
    skills: ["C", "C++", "Java", "PL/SQL", "HTML5", "CSS", "Javascript", "jQuery", "Node.js", "AngularJS", "Python"],
    biopic: "images/Hermes.png",
    display: function () { displayBio(); }
};

// Education Info
var education = {

    "schools": [
        {
            "name": "University",
            "location": "New York, NY",
            "degree": "B.S.",
            "majors": ["Comp. Sci"],
            "dates": "3000 - 3004",
            "url": "http://www.institution.edu"
        },
        {
            "name": "Another University",
            "location": "New New York, NY",
            "degree": "B.A.",
            "majors": ["Poli. Sci"],
            "dates": "3002 - 3005",
            "url": "http://www.itt.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "FrontEnd Developer Nanodegree",
            "school": "Udacity",
            "date": "2016",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Programming Mobile Applications for Android Handheld " +
                     "Systems",
            "school": "Coursera",
            "date": "2012",
            "url": "http://www.coursera.com"
        }
    ],
    display: function() { displayEducation(); }
};

// Employment Info
var work = {

    "jobs": [
        {
            "employer": "this.Company",
            "title": "Sr. Software Engineer",
            "location": "Los Angeles, CA",
            "dates": "Jan 3004 - Current",
            "description": "Maintaining legacy code."
        },
        {
            "employer": "past.Company",
            "title": "Software Engineer",
            "location": "Gainesville, FL",
            "dates": "June 3000 - Jan 3004",
            "description": "Making legacy code."
        }
    ],
    display: function() { displayWork(); }
};

// Project Info
var projects = {

    projs: [
    {
        title: "Portfolio",
        dates: "Jan 2016 - Feb 2016",
        description: "Small portfolio demonstrating key HTML and CSS concepts.",
        images: ["images/Portfolio.png"]
    }
    ],
    display: function() { displayProjects(); }
};


///////////////////////////// DATA SECTION /////////////////////////////////////
bio.display();
work.display();
projects.display();
education.display();

// Display map
$('#mapDiv').append(googleMap);

$('#main').append(internationalizeButton);

// Display Footer
displayContactInfo('#footerContacts');


///////////////////////////// FUNCTIONS ////////////////////////////////////////
function inName(name) {

    // Keep track of original name
    if (typeof inName.origName == 'undefined') {

        inName.origName = name;
    }

    if (name !== inName.origName) {

        // Return bio name and button text to normal
        $('#btnName').html('Internationalize');
        return (inName.origName);
    } else {

        var names = name.trim().split(' ');

        names[0] = names[0].slice(0,1).toUpperCase() +
                   names[0].slice(1).toLowerCase();
        names[1] = names[1].toUpperCase();

        // Update button text
       $('#btnName').html('Reset');
        return (names[0] + ' ' + names[1]);
    }
} //end inName(name)

function displayContactInfo(selector) {

    if (bio.contacts.length !== 0) {

        for (var info in bio.contacts) {

            if (bio.contacts.hasOwnProperty(info)) {

                var formattedInfo;

                switch (info) {

                    case 'mobile':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.mobile);
                        break;

                    case 'email':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.email);
                        break;

                    case 'github':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.github);
                        break;

                    case 'stackoverflow':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.stackoverflow);
                        break;

                    case 'twitter':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.twitter);
                        break;

                    case 'location':
                        formattedInfo = HTMLcontactGeneric.replace('%contact%',
                            info).replace('%data%', bio.contacts.location);
                        break;

                     default:
                        break;
                }

                $(selector).append(formattedInfo);
            }
        }
    }
}

function displayBio() {

    // Populate Bio Section
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    $('#header:first').prepend(formattedRole);
    $('#header').prepend(formattedName);

    displayContactInfo('#topContacts');

    // Add Picture
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcome);

    // Populate Skills Section
    if (bio.skills.length > 0) {

        // Enable the 'Skills at a Glance' section
        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    }
} //end displayBio()

function displayWork() {

    // Employment history
    if (work.jobs.length > 0) {

        work.jobs.forEach(function(job) {

            // Enable the 'Work Experience' section
            $('#workExperience').append(HTMLworkStart);

            // Format the Work fields
            var formattedEmployer =
                    HTMLworkEmployer.replace('%data%', job.employer);

            var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);

            var formattedLocation =
                    HTMLworkLocation.replace('%data%', job.location);

            var formattedDescription =
                    HTMLworkDescription.replace('%data%', job.description);

            // Display employment fields
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        });
    }
} //end displayWork()

function displayProjects() {

    if (projects.projs.length > 0) {

        projects.projs.forEach(function(project) {

            // Enable the 'Projects' section
            $('#projects').append(HTMLprojectStart);

            var formattedProjTitle =
                HTMLprojectTitle.replace('%data%', project.title);

            var formattedProjDates =
                HTMLprojectDates.replace('%data%', project.dates);

            var formattedProjDesc =
                HTMLprojectDescription.replace('%data%', project.description);

            $('.project-entry').append(formattedProjTitle);
            $('.project-entry').append(formattedProjDates);
            $('.project-entry').append(formattedProjDesc);

            project.images.forEach(function(img) {

                var formattedProjImages =
                    HTMLprojectImage.replace('%data%', img);
                $('.project-entry').append(formattedProjImages);
            });
        });
    }
} //end displayProjects()

function displayEducation() {

    if (education.schools.length > 0) {

        education.schools.forEach(function(school) {

            // Enable the 'Education' section
            $('#education').append(HTMLschoolStart);

            // Display 'School Name - Degree'
            var formattedSchool = HTMLschoolName.replace('%data%', school.name);

            var formattedDegree =
                HTMLschoolDegree.replace('%data%', school.degree);

            var formattedDates =
                HTMLschoolDates.replace('%data%', school.dates);

            // Display all majors as comma-delimited list
            var majorList;
            for (var i = 0; i < school.majors.length; ++i) {

                var major =  school.majors[i];
                majorList =  (majorList) ? (majorList + major) : major;
                majorList += (school.majors[i + 1]) ? ', ' : '';
            }

            var formattedMajor = HTMLschoolMajor.replace('%data%', majorList);

            $('.education-entry:last').append(formattedSchool +
                                              formattedDegree);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedMajor);
        });
    }

    if (education.onlineCourses.length > 0) {

        // Display heading for Online Classes
        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(myClass) {

            $('#education').append(HTMLschoolStart);

            var formattedTitle =
                HTMLonlineTitle.replace('%data%', myClass.title);

            var formattedSchool =
                HTMLonlineSchool.replace('%data%', myClass.school);

            var formattedDates =
                HTMLonlineDates.replace('%data%', myClass.date);

            var formattedURL =
                HTMLonlineURL.replace('%data%', myClass.url);

            $('.education-entry:last').append(formattedTitle + formattedSchool);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedURL);
        });
    }
} //end displayEducation()


