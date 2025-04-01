document.getElementById("generate-plot").addEventListener("click", function() {
    fetch("/generate_plot")
        .then(response => response.json())
        .then(data => {
            const plotContainer = document.getElementById("plot-container");
            plotContainer.innerHTML = `<img src="${data.plot_url}" alt="Generated Plot">`;
        });
});
