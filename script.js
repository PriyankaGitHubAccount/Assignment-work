// Alert button
document.getElementById('alertButton').addEventListener('click', () => {
  alert('Button clicked!');
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission
  alert('Form submitted successfully!');
});

gtag('event', 'form_submit', {
   form_submission_count: 1
  });

  gtag('event', 'button_click', {
     button_click_count: 1
    });
    
gtag('event', 'form_submit', {
  form_id: 'contact_form'
});
      
gtag('event', 'form_submit', {
 form_type: 'contact'
});

gtag('event', 'button_click', {
  button_label: 'Click Me'
});


 
    
