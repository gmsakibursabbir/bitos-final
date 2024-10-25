// Select all the buttons that control the FAQ items
const faqButtons = document.querySelectorAll('button[aria-controls^="faq-"]');

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the associated answer (dd element)
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    // Get the parent div for border manipulation and icon background span
    const faqItem = button.closest("#faq-item");
    const iconBg = button.querySelector("#icon-bg");

    // Get the SVG icons (plus and minus) for color change
    const icons = button.querySelectorAll('[data-slot="icon"]');

    // Toggle aria-expanded state
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    // Toggle the answer visibility
    answer.style.display = isExpanded ? "none" : "block";

    // Toggle the icons (plus and minus)
    icons[0].classList.toggle("hidden");
    icons[1].classList.toggle("hidden");

    // Toggle border and icon background on expansion
    if (!isExpanded) {
      faqItem.classList.add("border-lavenderGray");
      iconBg.classList.remove("bg-pearlGray");
      iconBg.classList.add("bg-skyBlue");

      // Change icon color to white
      icons.forEach((icon) => icon.classList.add("text-white"));
    } else {
      faqItem.classList.remove("border-skyBlue");
      iconBg.classList.remove("bg-skyBlue");
      iconBg.classList.add("bg-pearlGray");

      // Revert icon color to default (remove white)
      icons.forEach((icon) => icon.classList.remove("text-white"));
    }
  });
});

/// END OF FAQ SCRIPT
/// START OF TABS SCRIPT

// Tab System 1
const tabButtons1 = document.querySelectorAll("#tab-navigation-1 button");
const tabContents1 = document.querySelectorAll(".tab-content");

tabButtons1.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Remove active classes from all tabs and contents
    tabButtons1.forEach((btn) => {
      btn.classList.remove("text-white", "bg-skyBlue", "active-tab");
      btn.classList.add("text-mutedPurple", "bg-pearlGray");
    });

    tabContents1.forEach((content) => {
      content.classList.add("hidden");
    });

    // Add active classes to clicked tab
    button.classList.remove("text-mutedPurple", "bg-pearlGray");
    button.classList.add("text-white", "bg-skyBlue", "active-tab");
    document.getElementById(targetTab).classList.remove("hidden");
  });
});

// Tab System 2
const tabButtons2 = document.querySelectorAll("#tab-navigation-2 button");
const tabContents2 = document.querySelectorAll(".tab-contentx");

tabButtons2.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTabx = button.getAttribute("data-tab");

    // Reset styles for all buttons
    tabButtons2.forEach((btn) => {
      btn.classList.remove(
        "shadow-[0_0_0_4px]",
        "shadow-skyBlue",
        "border-transparent",
        "shadow-sm",
        "active-tab"
      );
      btn.classList.add("shadow-none", "border-pearlGray");

      const img = btn.querySelector("img");
      img.src = "./img/cw-02.svg"; // Set non-active image
    });

    // Add active styles to clicked tab
    button.classList.remove("shadow-none", "border-pearlGray");
    button.classList.add(
      "shadow-[0_0_0_4px]",
      "shadow-skyBlue",
      "border-transparent",
      "shadow-sm",
      "active-tab"
    );

    const activeImg = button.querySelector("img");
    activeImg.src = "./img/cw-01.svg"; // Set active image

    // Hide all tab contents and display the selected one
    tabContents2.forEach((content) => {
      content.classList.add("hidden");
    });
    document.getElementById(targetTabx).classList.remove("hidden");
  });
});

/// END OF TABS SCRIPT
/// START OF SLIDER SCRIPT

/// END OF SLIDER SCRIPT
/// START OF TABS 2 SCRIPT

/// END OF TABS 2 SCRIPT
// Toggle dropdown menu visibility and rotate icon
document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdownMenu = document.getElementById("dropdown-menu");
    const chevronIcon = document.querySelector("#menu-button img.chevron-icon");

    // Toggle dropdown visibility
    dropdownMenu.classList.toggle("hidden");

    // Toggle rotation for icon
    chevronIcon.classList.toggle("rotate-180");
  });

// Close the dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const menuButton = document.getElementById("menu-button");

  if (
    !dropdownMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");

    // Reset icon rotation if dropdown is closed
    const chevronIcon = document.querySelector("#menu-button img.chevron-icon");
    if (!dropdownMenu.classList.contains("hidden")) {
      chevronIcon.classList.remove("rotate-180");
    }
  }
});

// location
// Get dropdown elements location
const locationDropdownButton = document.getElementById(
  "locationDropdownButton"
);
const locationDropdownMenu = document.getElementById("locationDropdownMenu");
const chevronIcon = locationDropdownButton.querySelector(".chevron-icon"); // Get the chevron icon

// Toggle dropdown on button click
locationDropdownButton.addEventListener("click", () => {
  const isExpanded =
    locationDropdownButton.getAttribute("aria-expanded") === "true" || false;
  locationDropdownButton.setAttribute("aria-expanded", !isExpanded);
  locationDropdownMenu.classList.toggle("hidden");

  // Rotate the chevron icon
  chevronIcon.classList.toggle("rotate-180");
});

// Close dropdown if clicked outside
document.addEventListener("click", (event) => {
  if (
    !locationDropdownButton.contains(event.target) &&
    !locationDropdownMenu.contains(event.target)
  ) {
    locationDropdownButton.setAttribute("aria-expanded", "false");
    locationDropdownMenu.classList.add("hidden");

    // Reset icon rotation if dropdown is closed
    chevronIcon.classList.remove("rotate-180");
  }
});
