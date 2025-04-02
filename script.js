// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Simplify toggle functionality
    const toggleBtn = document.getElementById('stepsToggleBtn');
    const stepsContainer = document.getElementById('stepsContainer');
    
    if (toggleBtn && stepsContainer) {
      toggleBtn.addEventListener('click', function() {
        // Toggle visibility
        if (stepsContainer.style.display === 'none' || stepsContainer.style.display === '') {
          stepsContainer.style.display = 'flex';
          toggleBtn.innerHTML = 'Hide Steps <span class="steps-toggle-icon">▲</span>';
          toggleBtn.setAttribute('aria-expanded', 'true');
          stepsContainer.setAttribute('aria-hidden', 'false');
        } else {
          stepsContainer.style.display = 'none';
          toggleBtn.innerHTML = 'Start Process <span class="steps-toggle-icon">▼</span>';
          toggleBtn.setAttribute('aria-expanded', 'false');
          stepsContainer.setAttribute('aria-hidden', 'true');
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

    // Add minimal animation to figma steps
    const figmaSteps = document.querySelectorAll('.figma-step');
    
    figmaSteps.forEach((step, index) => {
      // Add simple fade in
      step.style.opacity = '0';
      setTimeout(() => {
        step.style.opacity = '1';
      }, 100 + index * 50);
      
      // Simple hover effect
      step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      step.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });

    // Ensure all cards are same height
    function equalizeCardHeights() {
      if (window.innerWidth < 768) {
        // On mobile, let cards have natural height
        document.querySelectorAll('.card').forEach(card => {
          card.style.height = 'auto';
        });
      } else {
        // On desktop, use fixed height
        document.querySelectorAll('.card').forEach(card => {
          card.style.height = '480px';
        });
      }
    }
    
    // Run on page load and resize
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);
});