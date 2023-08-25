document
  .querySelector(".nav_links")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if(e.target.classList.contains(`nav-link`)){
        console.log(e.target);
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
  });

  console.log(`hey`);