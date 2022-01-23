function userInfoToggle() {
  const userInfo = document.querySelector('.app-user-info')
  userInfo.classList.toggle("app-user-info--active")
}

function initUserInfo() {
  const userInfoBtnOpen = document.querySelector("#user_info_open")
  const userInfoBtnClose = document.querySelector("#user_info_close")
  if(!userInfoBtnOpen || !userInfoBtnClose) {
    return
  }

  userInfoBtnOpen.addEventListener("click", userInfoToggle)
  userInfoBtnClose.addEventListener("click", userInfoToggle)
}

initUserInfo()
