const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const fetchJobsBtn = document.getElementById('fetchJobsBtn');

// Add spacing here (e.g., an empty line or a comment)
// This is just for visual separation in the code

const jobListings = document.getElementById('jobListings');

// Dummy job listings for testing (10 jobs, including some in Colorado)
const dummyJobs = [
  {
    title: "Family Medicine Physician",
    practice: "Denver Health Medical Center",
    city: "Denver",
    state: "CO",
    url: "#"
  },
  {
    title: "Internal Medicine Physician",
    practice: "UCHealth",
    city: "Colorado Springs",
    state: "CO",
    url: "#"
  },
  {
    title: "Pediatrician",
    practice: "Children's Hospital Colorado",
    city: "Aurora",
    state: "CO",
    url: "#"
  },
  {
    title: "Hospitalist",
    practice: "Boulder Community Health",
    city: "Boulder",
    state: "CO",
    url: "#"
  },
  {
    title: "Urgent Care Physician",
    practice: "UCHealth Urgent Care",
    city: "Fort Collins",
    state: "CO",
    url: "#"
  },
  {
    title: "Family Medicine Physician",
    practice: "OhioHealth",
    city: "Columbus",
    state: "OH",
    url: "#"
  },
  {
    title: "Internal Medicine Physician",
    practice: "Cleveland Clinic",
    city: "Cleveland",
    state: "OH",
    url: "#"
  },
  {
    title: "Pediatrician",
    practice: "Nationwide Children's Hospital",
    city: "Columbus",
    state: "OH",
    url: "#"
  },
  {
    title: "Hospitalist",
    practice: "Mercy Health",
    city: "Cincinnati",
    state: "OH",
    url: "#"
  },
  {
    title: "Urgent Care Physician",
    practice: "The Little Clinic",
    city: "Columbus",
    state: "OH",
    url: "#"
  }
];

fetchJobsBtn.addEventListener('click', () => {
  // Show loading state
  fetchJobsBtn.disabled = true;
  fetchJobsBtn.innerText = "Loading...";

  // Simulate API call with a delay (for testing purposes)
  setTimeout(() => {
    // Reset button state
    fetchJobsBtn.disabled = false;
    fetchJobsBtn.innerText = "Show Job Offers";

    // Clear previous job listings
    jobListings.innerHTML = '';

    // Display the dummy job listings
    dummyJobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job-listing');
      jobElement.style.marginBottom = "20px"; // Add margin-bottom
      jobElement.innerHTML = `
        <h4>${job.title}</h4>
        <p>${job.practice} - ${job.city}, ${job.state}</p>
        <a href="${job.url}" target="_blank">View Job</a>
      `;
      jobListings.appendChild(jobElement);
    });
  }, 1000); // Simulate a 1-second delay
});