(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){const i=document.querySelector("#body"),o=document.createElement("div");o.classList.add("navbar"),i.appendChild(o);const s=document.createElement("a");s.classList.add("a1"),s.textContent="Menu",o.appendChild(s);const d=document.createElement("a");d.classList.add("a2"),d.textContent="Contact",o.appendChild(d);const c=document.createElement("a");c.classList.add("a3"),c.textContent="Home",o.appendChild(c),c.addEventListener("click",(function(){a(i),n()})),d.addEventListener("click",(function(){a(i),function(){const e=document.querySelector("#body"),t=document.createElement("div");t.classList.add("basket"),e.appendChild(t);const n=document.createElement("div");n.classList.add("contact-info"),t.appendChild(n);const a=document.createElement("div");a.classList.add("input-form"),t.appendChild(a);const i=document.createElement("p");i.innerHTML="The Boba Lounge <br> 1200 N Sails Drive <br> Amanosa, IA 52043 <br> 555-867-5309 <br> boba@thespot.com",n.appendChild(i)}()})),s.addEventListener("click",(function(){a(i),function(){const e=document.querySelector("#body");t();const n=document.createElement("div");n.classList.add("menu-container"),e.appendChild(n);const a=document.createElement("div");a.classList.add("menu-items"),n.appendChild(a);const i=document.createElement("div");i.classList.add("pic-tags"),n.appendChild(i);const o=["../minimalist-still-life-asian-tea (4).jpg","../minimalist-still-life-asian-tea (1).jpg","../minimalist-still-life-asian-tea (2).jpg","../minimalist-still-life-asian-tea (3).jpg"];for(let e=0;e<o.length;e++){const t=document.createElement("img");t.src=o[e],t.alt="Image of cup with bubble tea",t.classList.add("menu-pics"),a.appendChild(t)}const s=["oolong","mango","rose","milk"];for(let e of s){let t=document.createElement("p");i.appendChild(t),"oolong"===e&&(t.textContent="Oolong Tea : Oolong tea is made from the Camellia sinensis plant. Its dried leaves and leaf buds are used to make several different teas, including black and green teas. Oolong tea is fermented for longer than green tea, but less than black tea. It contains caffeine which affects thinking and alertness."),"mango"===e&&(t.textContent="Mango Tea : Sweet, ripened mangoes are pureed and combined with a homemade simple syrup and then shaken with freshly brewed tea over ice. "),"rose"===e&&(t.textContent="Rose Tea : A cup of rose tea can help to soothe anxiety and reduce stress. Studies show that rose petals can have a relaxing effect.  Rose tea is made by infusing hot water with the whole flower, which releases a wide variety of antioxidants and vitamin C."),"milk"===e&&(t.textContent="Milk Tea : Made with sweetened black tea, milk, and add-ons of choice, this classic milk tea recipe is sweet, creamy, and delicious.  Brewed with whole milk, 2% or skim.")}const d=document.createElement("div");d.classList.add("sidebar-items"),n.appendChild(d);const c=document.createElement("div");c.classList.add("add-ons"),d.appendChild(c);const l=["Add-On Menu","Boba Pearls","Lychee","Jelly","Taro","Chia"];for(let e=0;e<6;e++){const t=document.createElement("p");t.textContent=l[e],c.appendChild(t)}}()}))}function n(){const e=document.querySelector("#body");t();const n=document.createElement("div");e.appendChild(n),n.classList.add("main-container");const a=document.createElement("h1");a.textContent="The Boba Lounge",a.classList.add("header"),n.appendChild(a);const i=document.createElement("img");i.src="../minimalist-still-life-asian-tea.jpg",i.classList.add("main-image"),n.appendChild(i);const o=document.createElement("p");o.textContent="Cast your worries aside in the Boba Lounge.  Enjoy a refreshing and fun beverage in calm, minimalist surroundings. Sip on a milk tea with friends or in our solo dining booths, designed for those who want to escape the noise of the modern world.  And everyone, and everything.",o.classList.add("para"),n.appendChild(o)}function a(e){for(;e.firstChild;)e.removeChild(e.firstChild)}e.d({},{r:()=>a}),n()})();