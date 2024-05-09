import{i as n,S as m}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function d(r){const a=`https://pixabay.com/api/?key=43769580-78f5aea5f54664bb89b2b40f7&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function f(r,a){let i=[];for(let e=0;e<r.hits.length;e++){let s={};s.url=r.hits[e].webformatURL,s.largeUrl=r.hits[e].largeImageURL,s.tags=r.hits[e].tags,s.likes=r.hits[e].likes,s.views=r.hits[e].views,s.comments=r.hits[e].comments,s.downloads=r.hits[e].downloads,i.push(s)}const l=e=>`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeUrl}">
                <img class="gallery-image"
                  src="${e.url}"
                  alt="${e.tags}"
                />
              </a>
              <div class="item-info">
                <div class="item-data">
                  <p class="item-param">Likes</p>
                  <p class="item-counter">${e.likes}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Views</p>
                  <p class="item-counter">${e.views}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Comments</p>
                  <p class="item-counter">${e.comments}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Downloads</p>
                  <p class="item-counter">${e.downloads}</p>
                </div>
              </div>
            </li>`,t=i.map(e=>l(e)).join("");a.innerHTML=t}const o=document.querySelector(".search-form"),p=o.querySelector("input");let c;const u=document.querySelector("ul.gallery");function h(r){r.preventDefault();const a=p.value.trim();a===""?n.warning({title:"Caution",message:"This field must be filled in",position:"topLeft"}):(c=a,o.reset(),u.innerHTML="",d(c).then(i=>{i.hits.length>0?(f(i,u),new m(".gallery a",{captionsData:"alt"}).refresh()):n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(i=>{console.error("Виникла помилка: ",i)}))}o.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
