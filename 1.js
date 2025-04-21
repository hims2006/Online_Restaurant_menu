function highlight(element) {
    const items = document.querySelectorAll("ol li");
    items.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
  }
  