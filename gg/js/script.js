const navigationItems = document.querySelectorAll('.Navigation-Bar a');

removeNavigationItems = () =>{
  navigationItems.forEach(item => {
    item.classList.remove('active');
  });
}

const AddActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      let currentPage = document.querySelector(`.Navigation-Bar a[href="#${entry.target.id}"]`);
      removeNavigationItems();
      currentPage.classList.add('active');
    }
  });
};
pages = document.querySelectorAll(".page")
options = {threshold: 0.6};
const observer = new IntersectionObserver(AddActiveClass, options);
pages.forEach(page => {
  observer.observe(page);
})

document.addEventListener('DOMContentLoaded', () => {
    if (!CSS.supports('animation-timeline', 'view(block)')) {
      const cards = document.querySelectorAll('.My-Scroll-Show-Up');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.animation = 'scrollShowUp 1s ease-out forwards';
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -20% 0px', threshold: 0.6 }
      );
      cards.forEach((card) => observer.observe(card));
    }
});
