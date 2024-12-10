// Select all nav-link elements
const navLinks = document.querySelectorAll(".nav-link");

// Add event listeners to each nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all nav-links
    navLinks.forEach((nav) => nav.classList.remove("active"));
    // Add 'active' class to the clicked nav-link
    this.classList.add("active");
  });
});


// Scroll to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "flex"; // Tampilkan tombol
  } else {
    scrollToTopBtn.style.display = "none"; // Sembunyikan tombol
  }
});

// Smooth scroll ke atas
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Select all necessary elements
const paginationItems = document.querySelectorAll(".pagination .page-link");
const contentSections = document.querySelectorAll(".content-section");
const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");

// Set active content and pagination
function setActivePage(pageNumber) {
  // Update content sections
  contentSections.forEach((section) => {
    section.classList.remove("active");
    if (section.id === `content-${pageNumber}`) {
      section.classList.add("active");
    }
  });

  // Update pagination active state
  paginationItems.forEach((item) => {
    item.parentElement.classList.remove("active");
    if (item.dataset.page == pageNumber) {
      item.parentElement.classList.add("active");
    }
  });

  // Enable/Disable Previous and Next buttons
  prevPage.classList.toggle("disabled", pageNumber == 1);
  nextPage.classList.toggle("disabled", pageNumber == contentSections.length);
}

// Add click event to pagination items
paginationItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const pageNumber = parseInt(item.dataset.page);
    if (pageNumber) {
      setActivePage(pageNumber);
    }
  });
});

// Handle Previous and Next buttons
prevPage.addEventListener("click", (e) => {
  e.preventDefault();
  const activePage = document.querySelector(".pagination .active .page-link").dataset.page;
  if (activePage > 1) {
    setActivePage(parseInt(activePage) - 1);
  }
});

nextPage.addEventListener("click", (e) => {
  e.preventDefault();
  const activePage = document.querySelector(".pagination .active .page-link").dataset.page;
  if (activePage < contentSections.length) {
    setActivePage(parseInt(activePage) + 1);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchForm = document.getElementById("searchForm");

  // Toggle search form saat tombol search diklik
  searchButton.addEventListener("click", () => {
    if (searchForm.classList.contains("d-none")) {
      searchForm.classList.remove("d-none");
      searchForm.classList.add("d-block");
    } else {
      searchForm.classList.add("d-none");
      searchForm.classList.remove("d-block");
    }
  });

  // Opsional: klik di luar form untuk menyembunyikan
  document.addEventListener("click", (event) => {
    if (
      !searchForm.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      searchForm.classList.add("d-none");
      searchForm.classList.remove("d-block");
    }
  });
});



