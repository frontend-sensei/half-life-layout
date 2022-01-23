function navbarToggle() {
  const appNavbar = document.querySelector('.app-navbar')
  const appContentWrapper = document.querySelector('.app-content-wrapper')

  appNavbar.classList.toggle("app-navbar--active")
  appContentWrapper.classList.toggle("app-content-wrapper--active")
}

function initNavbar() {
  const appNavbarLogoBtn = document.getElementById("app_navbar_logo_btn")
  if(!appNavbarLogoBtn) {
    return
  }

  appNavbarLogoBtn.addEventListener("click", navbarToggle)
}

initNavbar()
