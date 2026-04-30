const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("is-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-audience]").forEach((button) => {
  button.addEventListener("click", () => {
    const audience = button.dataset.audience;

    document.querySelectorAll("[data-audience]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const isActive = panel.dataset.panel === audience;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

document.querySelectorAll(".direction-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".direction-card");
    if (!card) return;

    const copy = card.querySelector(".direction-copy");
    const marker = button.querySelector("b");
    const isOpen = card.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));

    if (copy) {
      copy.setAttribute("aria-hidden", String(!isOpen));
    }

    if (marker) {
      marker.textContent = isOpen ? "−" : "+";
    }
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;

    const answer = item.querySelector(".faq-answer");
    const marker = button.querySelector("b");
    const isOpen = item.classList.toggle("is-open");

    if (answer) {
      answer.hidden = !isOpen;
    }

    if (marker) {
      marker.textContent = isOpen ? "−" : "+";
    }

    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll("[data-role]").forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.dataset.role;

    document.querySelectorAll("[data-role]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll("[data-form-role]").forEach((form) => {
      const isActive = form.dataset.formRole === role;
      form.classList.toggle("is-active", isActive);
      form.hidden = !isActive;
    });
  });
});

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = document.querySelector(".form-status");
    if (status) {
      status.textContent = "Спасибо. Заявка подготовлена, осталось подключить отправку на нужный email или CRM.";
    }

    if (typeof form.reset === "function") {
      form.reset();
    }
  });
});
