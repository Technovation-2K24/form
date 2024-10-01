
    // Show/Hide industry other input field
    document.getElementById('industrySector').addEventListener('change', function () {
      document.getElementById('industryOther').style.display = this.value === 'others' ? 'block' : 'none';
  });

  // Show/Hide company type other input field
  document.getElementById('companyType').addEventListener('change', function () {
      document.getElementById('companyOther').style.display = this.value === 'others' ? 'block' : 'none';
  });

  // JavaScript for dynamic field display
  document.addEventListener('DOMContentLoaded', function () {
      const internshipTitle = document.getElementById('internshipTitle');
      const internshipDescription = document.getElementById('internshipDescription');
      const jobTitle = document.getElementById('jobTitle');
      const jobDescription = document.getElementById('jobDescription');

      // Example functionality to toggle visibility of fields (can be customized)
      internshipTitle.addEventListener('input', function () {
          if (internshipTitle.value) {
              internshipDescription.classList.remove('hidden');
          } else {
              internshipDescription.classList.add('hidden');
          }
      });

      jobTitle.addEventListener('input', function () {
          if (jobTitle.value) {
              jobDescription.classList.remove('hidden');
          } else {
              jobDescription.classList.add('hidden');
          }
      });

      document.getElementById('designationChoice').addEventListener('change', function () {
        const designationFields = document.getElementById('designationFields');
        const designationInputGroup = document.getElementById('designationInputGroup');
        const jobDescriptionGroup = document.getElementById('jobDescriptionGroup');
        const placePostingGroup = document.getElementById('placePostingGroup');
        const pdfUploadGroup = document.getElementById('pdfUploadGroup');
    
        // If "manual" is selected, show manual input fields
        if (this.value === 'manual') {
            designationFields.style.display = 'block';
            designationInputGroup.style.display = 'block';
            jobDescriptionGroup.style.display = 'block';
            placePostingGroup.style.display = 'block';
            pdfUploadGroup.style.display = 'none';
        } 
        // If "pdfUpload" is selected, show PDF upload field
        else if (this.value === 'pdfUpload') {
            designationFields.style.display = 'none';
            pdfUploadGroup.style.display = 'block';
        } 
        // Hide all fields if no selection is made
        else {
            designationFields.style.display = 'none';
            pdfUploadGroup.style.display = 'none';
        }
    });
    
    

      // Form submission handling
      document.querySelector('form').addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent actual form submission for demo
          alert('Form submitted successfully!');
      });
  });