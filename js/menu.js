(() => {
    const refs = {
      openMenulBtn: document.querySelector("[data-menu-open]"),
      closeMenulBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
    }
  })();