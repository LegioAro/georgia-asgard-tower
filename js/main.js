isResize('.infrastructure__imgs', '.infrastructure__content', '.infrastructure__mob', 1150);
isResize('.header__content', '.header__wrapper', '.burger', 1200);

window.addEventListener('resize', () => {
  isResize('.infrastructure__imgs', '.infrastructure__content', '.infrastructure__mob', 1150);
  isResize('.header__content', '.header__wrapper', '.burger', 1200);
});

const swiper = new Swiper('.projects__item-slider', {
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper('.layouts__items2-item-img', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.layouts__items2-item-arrow-r',
    prevEl: '.layouts__items2-item-arrow-l',
    navigationDisabledClass: 'layouts__items2-item-arrow--disabled',
  },
});

function burgerHandle() {
  const burger = document.querySelector('.burger');
  const burgerBtn = document.querySelector('.burger__btn');
  // const body = document.querySelector('body');

  if (burgerBtn && burger) {
    burgerBtn.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      burgerBtn.classList.toggle('burger__btn--active');
      // body.classList.toggle('body--lock');
    });
  }
}

burgerHandle();

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 30,
      behavior: 'smooth',
    });
  });
}

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//presentation download

function downloadPresentation() {
  const downloadFileBtns = document.querySelectorAll('.form-download');
  const htmlLang = document.querySelector('html').getAttribute('lang');

  downloadFileBtns.forEach((elem) => {
    elem.addEventListener('click', () => {
      const download = document.createElement('a');
      download.setAttribute('href', `./documents/presentation-${htmlLang}.pdf`);
      download.setAttribute('download', `presentation-${htmlLang}.pdf`);
      download.click();
    });
  });
}
downloadPresentation();

//categorys

const categorys = document.querySelectorAll('.categorys');

if (categorys.length > 0) {
  categorys.forEach((categoryBlock) => {
    const categorysNames = categoryBlock.querySelectorAll('*[data-category]');
    const categorysContents = document.querySelectorAll('*[data-category-content]');

    categorysNames.forEach((categorysName) => {
      categorysName.addEventListener('click', () => {
        const categorysNameAttr = categorysName.getAttribute('data-category');
        const categorysNameContents = document.querySelectorAll(
          `*[data-category-content=${categorysNameAttr}]`,
        );

        categorysNames.forEach((item) => item.classList.remove('active'));
        categorysName.classList.add('active');

        if (categorysNameAttr === 'all') {
          categorysContents.forEach((item) => item.classList.remove('hide'));
        } else {
          categorysContents.forEach((item) => item.classList.add('hide'));
          categorysNameContents.forEach((item) => item.classList.remove('hide'));
        }
      });
    });
  });
}

//review

const reviewBtns = document.querySelectorAll('*[data-review-btn]');
const review = document.querySelector('*[data-review-img]');
if (review) {
  const reviewImg = review.querySelector('.review__img');
  const reviewZoomBtns = review.querySelectorAll('.review__btn');
  if (reviewBtns.length > 0 && reviewImg) {
    reviewBtns.forEach((reviewBtn) => {
      reviewBtn.addEventListener('click', () => {
        review.classList.remove('review--scale');
        const sourceBigImg = reviewBtn.getAttribute('data-review-big');
        reviewImg.setAttribute('src', sourceBigImg);
      });
    });
  }

  if (reviewZoomBtns.length > 0) {
    reviewZoomBtns.forEach((zoomBtn) => {
      zoomBtn.addEventListener('click', () => {
        if (zoomBtn.hasAttribute('data-review-zoom')) {
          let zoomBtnAttr = zoomBtn.getAttribute('data-review-zoom');

          if (zoomBtnAttr === 'plus') {
            review.classList.add('review--scale');
          } else if (zoomBtnAttr === 'minus') {
            review.classList.remove('review--scale');
          }
        }
      });
    });

    review.onmousedown = () => {
      let pageX = 0;
      let pageY = 0;

      document.onmousemove = (e) => {
        if (pageX !== 0) {
          review.scrollLeft = review.scrollLeft + (pageX - e.pageX);
        }
        if (pageY !== 0) {
          review.scrollTop = review.scrollTop + (pageY - e.pageY);
        }
        pageX = e.pageX;
        pageY = e.pageY;
      };

      review.onmouseup = () => {
        document.onmousemove = null;
        review.onmouseup = null;
      };

      review.ondragstart = () => {
        return false;
      };
    };
  }
}

//layout btn
const layoutBtns = document.querySelectorAll('.layout-btn');

layoutBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.g_widget_open(25565);
  });
});
