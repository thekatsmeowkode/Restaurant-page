(()=>{"use strict";function e(){const e=document.querySelector("#body"),t=document.querySelector("#content");t.classList.add("main-container");let n=document.createElement("div");n.classList.add("navbar"),e.insertBefore(n,t);const a=document.createElement("a");a.classList.add("a1"),a.textContent="Menu",n.appendChild(a);let d=document.createElement("a");d.classList.add("a2"),d.textContent="Contact",n.appendChild(d);let o=document.createElement("a");o.classList.add("a3"),o.textContent="Home",n.appendChild(o);let i=document.createElement("h1");i.textContent="The Boba Lounge",i.classList.add("header"),t.appendChild(i);let c=document.createElement("img");c.src="../minimalist-still-life-asian-tea.jpg",c.classList.add(".main-image"),t.appendChild(c);let l=document.createElement("p");l.textContent="Cast your worries aside in the Boba Lounge.  Enjoy a refreshing and fun beverage in calm, minimalist surroundings. Sip on a milk tea with friends or in our solo dining booths, designed for those who want to escape the noise of the modern world.  And everyone, and everything.",l.classList.add("para"),t.appendChild(l)}function t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}e(),document.querySelector(".a1").addEventListener("click",(function(){t(document.querySelector("#body")),console.log("hi"),function(){const e=document.querySelector("#body");let t=document.createElement("div");t.classList.add("navbar"),e.appendChild(t);const n=document.createElement("a");n.classList.add("a1"),n.textContent="Menu",t.appendChild(n);let a=document.createElement("a");a.classList.add("a2"),a.textContent="Contact",t.appendChild(a);let d=document.createElement("a");d.classList.add("a3"),d.textContent="Home",t.appendChild(d);const o=document.createElement("div");o.classList.add("menuContainer"),e.appendChild(o);let i=document.createElement("div");i.classList.add("menu-items"),o.appendChild(i);let c=document.createElement("div");c.classList.add("sidebar-items"),o.appendChild(c)}()})),document.querySelector(".a3").addEventListener("click",(function(){t(document.querySelector("#body")),console.log("hello"),e()}))})();