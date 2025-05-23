

document.addEventListener('DOMContentLoaded', () => {
  // Alert on category button click
  const buttons = document.querySelectorAll('aside button');
  const reportSection = document.querySelector('.report');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent;
      reportSection.innerHTML = `
        <div class="date-badge">May-2025</div>
        <div class="published-badge">Updated</div>
        <h2>${category} Market Report</h2>
        <p><strong>This is a dynamically loaded report section for ${category}.</strong></p>
        <p>Further details on ${category} industry trends will be shown here.</p>
      `;
    });
  });

  // Dark Mode toggle
  const toggleButton = document.createElement('button');
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '20px';
  toggleButton.style.right = '20px';
  toggleButton.style.padding = '10px';
  toggleButton.style.backgroundColor = '#222';
  toggleButton.style.color = 'white';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
