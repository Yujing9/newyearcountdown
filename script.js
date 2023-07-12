document.addEventListener('DOMContentLoaded', function() {
    const dateEl = document.getElementById('date-picker');
    const inputContainer = document.getElementById('input-container');
    const countdownForm = document.getElementById('countdownForm')

    // Set Date Input Min & Value with Today's Date
    const today = new Date().toISOString().split('T')[0];
    dateEl.setAttribute('min', today);
    dateEl.setAttribute('value', today);
    
    
  });