const data = {
  labels: [
    "Front-End Development",
    "Back-End Development",
    "Version Control",
    "Database Management",
    "UX/UI",
  ],
  // Example labels
  datasets: [
    {
      label: "Technical Skills",
      data: [99, 83, 91, 88, 97], // Skill levels
      fill: true,
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Area behind the chart (e.g., skill levels)
      borderColor: "#fff",
      pointBackgroundColor: "#FFCD32",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#FFCD32",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
  scales: {
    r: {
      min: 0, // Minimum value (start at the center)
      max: 100, // Maximum value (edge of the chart)
      ticks: {
        display: false,

        stepSize: 20, // Ticks between min and max (adjust to make it more readable)
      },
      angleLines: {
        display: true,
        color: "#fff", // Change color of the lines
      },
      grid: {
        color: "#fff", // Change the grid lines color
      },
    },
  },
};

const config = {
  type: "radar",
  data: data,
  options: options,
};

// Create the chart
const ctx = document.getElementById("skillsChart").getContext("2d");
const myChart = new Chart(ctx, config);
