(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    if (!expanded) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = `100%`;

    } else {
      document.body.style.position = 'initial'; 
      document.body.style.top = ''; 
      document.body.style.width = ''; 
    }

    mobileMenuRef.classList.toggle("is-open");
    
  });
})();
