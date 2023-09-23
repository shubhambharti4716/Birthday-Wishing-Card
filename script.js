
  // Get the current date
  const currentDate = new Date();

  // Format the date as "Month Day, Year"
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Update the content of the card-date element with the current date
  document.getElementById('card-date').textContent = formattedDate;

