document.getElementById('industrySector').addEventListener('change', function() {
  if (this.value === 'others') {
      document.getElementById('industryOther').style.display = 'block';
  } else {
      document.getElementById('industryOther').style.display = 'none';
  }
});

// Company Type other input field toggle
document.getElementById('companyType').addEventListener('change', function() {
  if (this.value === 'others') {
      document.getElementById('companyOther').style.display = 'block';
  } else {
      document.getElementById('companyOther').style.display = 'none';
  }
});

// Job Designation fields toggle between input fields and file upload
document.getElementById('designationChoice').addEventListener('change', function() {
  if (this.value === 'pdfUpload') {
      document.getElementById('designationFields').classList.add('show');
      document.getElementById('designationInput').style.display = 'none';
  } else {
      document.getElementById('designationInput').classList.remove('show');
      document.getElementById('designationFields').style.display = 'none';
  }
});

document.getElementById('designationChoice').addEventListener('change', function() {
  var designationFields = document.getElementById('designationFields');
  if (this.value === 'yes_internship') {
      designationFields.classList.remove('hidden');
  } else {
      designationFields.classList.add('hidden');
  }
});

// Dynamic color picker
document.getElementById('primaryColor').addEventListener('input', function() {
  document.documentElement.style.setProperty('--primary-color', this.value);
});

document.getElementById('secondaryColor').addEventListener('input', function() {
  document.documentElement.style.setProperty('--secondary-color', this.value);
});

// Form submission alert
document.getElementById('placementForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form Submitted Successfully!');
});