const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = isOpen
       ? 'fa-solid fa-xmark'
       : 'fa-solid fa-bars'
    }
    function menuShow() {
            let item = document.getElementById("left_menu");
            if(item.style.left==="0px") {
                item.style.left="-10em"
                item.style.opacity="0"
            }else{
                item.style.left="0px"
                item.style.opacity="1"
            }
        }
        let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", menuShow);

const toggleSwitch = document.getElementById('switch');
const linkElement = document.getElementById('style-link');
const darkModeLinkElement = document.getElementById('darkmode-style-link');
const lightModeCSS = 'CSS/lightmode_style.css';
const darkModeCSS = 'CSS/darkmode/darkmode_style.css';

// 初始加载时根据用户偏好切换样式
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
    toggleSwitch.checked = true;
}else{
  enableLightMode();
}

// 切换到Light Mode
function enableLightMode() {
    applyStyleSheet(lightModeCSS);
}

// 切换到Dark Mode
function enableDarkMode() {
  applyStyleSheet(darkModeCSS);
}

function applyStyleSheet(styleSheet) {
  const existingStyle = document.getElementById('theme-style');
  if (existingStyle) {
    existingStyle.remove();
  }
  const newStyle = document.createElement('link');
  newStyle.id = 'theme-style';
  newStyle.rel = 'stylesheet';
  newStyle.href = styleSheet;

  document.head.appendChild(newStyle);
}

// 监听开关按钮变化事件
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        enableDarkMode();
        localStorage.setItem('theme', 'dark');
    } else {
        enableLightMode();
        localStorage.setItem('theme', 'light');
    }
});