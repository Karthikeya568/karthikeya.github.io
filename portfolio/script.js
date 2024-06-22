document.addEventListener('DOMContentLoaded', function() {
  const jobTitleElement = document.getElementById('role');
  const jobTitles = ['Freelancer', 'Web Developer', 'Video Editor'];
  let currentJobTitle = 0;
  let isDeleting = false;
  let isTyping = false;

  function typeWriter() {
      const currentText = jobTitleElement.textContent;
      const currentJob = jobTitles[currentJobTitle];
      
      if (isDeleting) {
          jobTitleElement.textContent = currentText.slice(0, currentText.length - 1);
          if (currentText.length === 0) {
              isDeleting = false;
              isTyping = true;
          }
      } else if (isTyping) {
          if (currentText.length < currentJob.length) {
              jobTitleElement.textContent = currentText + currentJob.charAt(currentText.length);
          } else {
              isTyping = false;
              isDeleting = true;
              currentJobTitle = (currentJobTitle + 1) % jobTitles.length;
          }
      }
      
      setTimeout(typeWriter, 50);
  }

  typeWriter();

  // Add this part to check if buttons are clickable
  const buttons = document.querySelectorAll('#home a');
  buttons.forEach(button => {
      button.addEventListener('click', function(e) {
          console.log('Button clicked:', this.href);
      });
  });
});