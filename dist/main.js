(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){const i=document.querySelector("#body"),d=document.createElement("div");d.classList.add("navbar"),i.appendChild(d);const o=document.createElement("a");o.classList.add("a1"),o.textContent="Menu",d.appendChild(o);const s=document.createElement("a");s.classList.add("a2"),s.textContent="Contact",d.appendChild(s);const c=document.createElement("a");c.classList.add("a3"),c.textContent="Home",d.appendChild(c),c.addEventListener("click",(function(){a(i),n()})),s.addEventListener("click",(function(){a(i),function(){const e=document.querySelector("#body");t();const n=document.createElement("div");n.classList.add("basket"),e.appendChild(n);const a=document.createElement("div");a.classList.add("contact-info"),n.appendChild(a);const i=document.createElement("div");i.classList.add("input-form"),n.appendChild(i);const d=document.createElement("p");d.innerHTML="The Boba Lounge <br> 1200 N Sails Drive <br> Amanosa, IA 52043 <br> 555-867-5309 <br> boba@thespot.com",a.appendChild(d);const o=document.createElement("form"),s=document.createElement("input"),c=document.createElement("input"),l=document.createElement("textarea");i.appendChild(o),o.appendChild(s).setAttribute("type","text"),o.appendChild(c).setAttribute("type","email"),o.appendChild(l).setAttribute("id","comments")}()})),o.addEventListener("click",(function(){a(i),function(){const e=document.querySelector("#body");t();const n=document.createElement("div");n.classList.add("menu-container"),e.appendChild(n);const a=document.createElement("div");a.classList.add("menu-items"),n.appendChild(a);const i=document.createElement("div");i.classList.add("pic-tags"),n.appendChild(i);const d=["../minimalist-still-life-asian-tea (4).jpg","../minimalist-still-life-asian-tea (1).jpg","../minimalist-still-life-asian-tea (2).jpg","../minimalist-still-life-asian-tea (3).jpg"];for(let e=0;e<d.length;e++){const t=document.createElement("img");t.src=d[e],t.alt="Image of cup with bubble tea",t.classList.add("menu-pics"),a.appendChild(t)}const o=["oolong","mango","rose","milk"];for(let e of o){let t=document.createElement("p");i.appendChild(t),"oolong"===e&&(t.textContent="Oolong Tea : Oolong tea is made from the Camellia sinensis plant. Its dried leaves and leaf buds are used to make several different teas, including black and green teas. Oolong tea is fermented for longer than green tea, but less than black tea. It contains caffeine which affects thinking and alertness."),"mango"===e&&(t.textContent="Mango Tea : Sweet, ripened mangoes are pureed and combined with a homemade simple syrup and then shaken with freshly brewed tea over ice. "),"rose"===e&&(t.textContent="Rose Tea : A cup of rose tea can help to soothe anxiety and reduce stress. Studies show that rose petals can have a relaxing effect.  Rose tea is made by infusing hot water with the whole flower, which releases a wide variety of antioxidants and vitamin C."),"milk"===e&&(t.textContent="Milk Tea : Made with sweetened black tea, milk, and add-ons of choice, this classic milk tea recipe is sweet, creamy, and delicious.  Brewed with whole milk, 2% or skim.")}const s=document.createElement("div");s.classList.add("sidebar-items"),n.appendChild(s);const c=document.createElement("div");c.classList.add("add-ons"),s.appendChild(c);const l=["Add-On Menu","Boba Pearls","Lychee","Jelly","Taro","Chia"];for(let e=0;e<6;e++){const t=document.createElement("p");t.textContent=l[e],c.appendChild(t)}}()}))}function n(){const e=document.querySelector("#body");t();const n=document.createElement("div");e.appendChild(n),n.classList.add("main-container");const a=document.createElement("h1");a.textContent="The Boba Lounge",a.classList.add("header"),n.appendChild(a);const i=document.createElement("img");i.src="../minimalist-still-life-asian-tea.jpg",i.classList.add("main-image"),n.appendChild(i);const d=document.createElement("p");d.textContent="Cast your worries aside in the Boba Lounge.  Enjoy a refreshing and fun beverage in calm, minimalist surroundings. Sip on a milk tea with friends or in our solo dining booths, designed for those who want to escape the noise of the modern world.  And everyone, and everything.",d.classList.add("para"),n.appendChild(d)}function a(e){for(;e.firstChild;)e.removeChild(e.firstChild)}e.d({},{r:()=>a}),n()})();