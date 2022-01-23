function renderGradient() {
  const layer = document.querySelector(".safe-lock-circle-5-layer-1");
  if (!layer) {
    return;
  }

  const getGradientStyle = (degree) => {
    return `
    linear-gradient(
      ${degree}deg,
      transparent var(--from),
      var(--color) var(--from),
      var(--color) var(--to),
      transparent var(--to)
    ),`;
  };

  function renderLines(linesCount) {
    const degreeStep = 360 / linesCount;
    let backgroundImageStyle = "";

    for (
      let counter = 0, degree = 0;
      counter < linesCount;
      counter++, degree += degreeStep
    ) {
      backgroundImageStyle += getGradientStyle(degree);
    }
    backgroundImageStyle = backgroundImageStyle.slice(
      0,
      backgroundImageStyle.length - 1
    );

    layer.style.backgroundImage = backgroundImageStyle;
  }

  renderLines(72);
}

function registerListeners() {
  const safeLockBtn = document.querySelector(".safe-lock-btn");
  const circle5Layer1 = document.querySelector(".safe-lock-circle-5-layer-1");
  const loot = document.querySelector(".loot");
  const lootItem = document.querySelector(".loot__item");
  const lootList = [
    "bazooka.png",
    "crossbow.png",
    "crowbar.png",
    "gravity-gun.png",
    "machine-gun.png",
    "pistol.png",
    "revolver.png",
    "shotgun.png",
    "smg.png",
  ];
  const lootItemNode = document.querySelector(".loot__item");
  if (!safeLockBtn || !circle5Layer1 || !loot) {
    return console.error("Element not exists!");
  }

  function activateBtn() {
    const cssPropertyDuration =
      getComputedStyle(circle5Layer1).getPropertyValue("--duration");
    const duration =
      Number(cssPropertyDuration.slice(0, cssPropertyDuration.length - 1)) *
      1000;
    safeLockBtn.classList.add("safe-lock-btn--active");

    setTimeout(() => {
      showLoot();
    }, duration);
  }

  function showLoot() {
    loot.classList.add("loot--shown");
  }

  function hideLoot() {
    loot.classList.remove("loot--shown");
  }

  function gerRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setRandomLoot() {
    const lootIndex = gerRandomNumberBetween(0, lootList.length - 1);
    const lootItem = lootList[lootIndex];
    console.log(lootIndex, lootItem);
    lootItemNode.style.backgroundImage = `url(./img/loots/${lootItem})`;
  }

  function openSafeLock() {
    safeLockBtn.setAttribute("disabled", "disabled");
    setRandomLoot();
    activateBtn();
  }

  function closeSafeLock() {
    hideLoot();
    setTimeout(() => {
      safeLockBtn.classList.remove("safe-lock-btn--active");
      safeLockBtn.removeAttribute("disabled");
    }, 1000);
  }

  safeLockBtn.addEventListener("click", openSafeLock);
  lootItem.addEventListener("click", closeSafeLock);

  setRandomLoot();
}

function initSafeLock() {
  renderGradient();
  registerListeners();
}

initSafeLock();
