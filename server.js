const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Ensure the output directory for plots exists
const outputDir = path.join(__dirname, 'static', 'plots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Serve static files (CSS, JS, images) from the 'static' folder
app.use(express.static(path.join(__dirname, 'static')));

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Endpoint to generate plot (You can use a library like Plotly or a pre-saved image)
app.get('/generate_plot', (req, res) => {
  // Generate a plot (for demonstration, we'll just use a static image)
  const plotFilePath = path.join(outputDir, 'generated_plot.png');

  // If the plot doesn't exist, generate it (this is just a placeholder)
  if (!fs.existsSync(plotFilePath)) {
    // You can generate plots dynamically using a library like Canvas or a chart library (Plotly, etc.)
    // For now, we're just copying a dummy image for illustration
    fs.copyFileSync(path.join(__dirname, 'static', 'dummy_plot.png'), plotFilePath);
  }

  // Send the URL of the plot image to the frontend
  res.json({ plot_url: '/static/plots/generated_plot.png' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
