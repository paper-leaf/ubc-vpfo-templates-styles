(()=>{function e(){document.querySelectorAll(".vpfo .resource-card").forEach((function(e){var t=e.querySelector(".resource-card-inner");t.style.paddingBottom="0";var i=e.querySelector(".view-resource a");i&&(i.style.height="auto",i.style.visibility="hidden");var o=(i?i.offsetHeight:0)+16;t&&o&&(t.style.paddingBottom="".concat(o,"px"));var r=e.offsetHeight;i&&(i.style.height="".concat(r,"px"),i.style.visibility="visible")}))}document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e)})();