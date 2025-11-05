const projectList = document.querySelectorAll("#projects ul li");
projectList.forEach(item => {
    const details = document.createElement("p");
    details.textContent = "Enter Project Description Here";
    details.classList.add("hidden");
    item.appendChild(details);

    const button = document.createElement("button");
    button.textContent = "Show Details";
    button.classList.add("toggleBtn");

    button.addEventListener("click", () => {
        details.classList.toggle("hidden");
        button.textContent = details.classList.contains("hidden")
            ? "Show Details"
            : "Hide Details";
    });
});