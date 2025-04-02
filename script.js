// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const toggleBtn = document.getElementById('stepsToggleBtn');
    const stepsContainer = document.getElementById('stepsContainer');
    
    // Add click event for the steps toggle button
    if (toggleBtn && stepsContainer) {
      toggleBtn.addEventListener('click', function() {
        // Toggle active class on container
        stepsContainer.classList.toggle('active');
        
        // Toggle active class on button
        toggleBtn.classList.toggle('active');
        
        // Change button text based on state
        if (stepsContainer.classList.contains('active')) {
          toggleBtn.innerHTML = 'Hide Steps <span class="steps-toggle-icon">▲</span>';
        } else {
          toggleBtn.innerHTML = 'Start Process <span class="steps-toggle-icon">▼</span>';
        }
      });
    }
    
    // Add smooth animation for step transitions
    const stepItems = document.querySelectorAll('.step-item');
    
    stepItems.forEach((step, index) => {
      // Add a slight delay to each step for a cascade effect when they appear
      step.style.transition = `all 0.3s ease ${index * 0.1}s`;
      
      // Add hover effect
      step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 15px rgba(245, 158, 11, 0.2)';
      });
      
      step.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
    
    // Accessibility enhancement - keyboard navigation
    toggleBtn.addEventListener('keydown', function(e) {
      // Trigger click on Enter or Space
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBtn.click();
      }
    });
  });