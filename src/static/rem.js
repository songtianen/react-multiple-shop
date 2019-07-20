/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
(function() {
  var docEl = document.documentElement;
  // 设置html font-size基准值大小
  function setRemUinit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = `${rem}px`;
  }
  setRemUinit();
  window.addEventListener('resize', setRemUinit);
})();
