document.addEventListener('DOMContentLoaded', function() {
  // Get the card element
  const card = document.querySelector('.card');
  
  // Add hover animation
  if (card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  }

  // Handle responsive behavior
  function handleResponsive() {
    if (window.innerWidth < 768) {
      // On mobile, let card have natural height
      if (card) card.style.height = 'auto';
    } else {
      // On desktop, use fixed height
      if (card) card.style.height = '480px';
    }
  }
  
  // Run on page load and resize
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
  
  // Add smooth entrance animation
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = '';
    }, 100);
  }
});