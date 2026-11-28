"use strict";

document.documentElement.classList.add("js");

const canonicalLink = document.querySelector('link[rel="canonical"]');

if (canonicalLink) {
  const canonicalUrl = new URL(canonicalLink.getAttribute("href"), window.location.href);
  if (canonicalUrl.pathname.endsWith("/index.html")) {
    canonicalUrl.pathname = canonicalUrl.pathname.slice(0, -"index.html".length);
  }
  canonicalUrl.search = "";
  canonicalUrl.hash = "";
  canonicalLink.href = canonicalUrl.href;

  let openGraphUrl = document.querySelector('meta[property="og:url"]');
  if (!openGraphUrl) {
    openGraphUrl = document.createElement("meta");
    openGraphUrl.setAttribute("property", "og:url");
    document.head.append(openGraphUrl);
  }
  openGraphUrl.content = canonicalUrl.href;
}

document.querySelectorAll('meta[property="og:image"]').forEach((meta) => {
  meta.content = new URL(meta.content, window.location.href).href;
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm instanceof HTMLFormElement) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(enquiryForm);
    const message = String(formData.get("message") || "").trim();
    const note = document.querySelector("#form-note");

    if (!message) {
      if (note) note.textContent = "Please add a few details about your lifting requirement.";
      enquiryForm.querySelector("#enquiry-message")?.focus();
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const enquiry = [
      "Hello, I have a crane rental enquiry for Shiv Ganga Crane Service.",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      `Requirements: ${message}`,
    ].filter(Boolean).join("\n");
    const whatsappUrl = `https://wa.me/916200303206?text=${encodeURIComponent(enquiry)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

