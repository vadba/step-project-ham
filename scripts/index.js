const tabs = document.querySelectorAll('.tabs-title');
const tabsContent = document.querySelectorAll('.list-item');
const menu = document.querySelectorAll('.tabs2-title');
const loadMore = document.querySelector('.load');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

tabs.forEach(i => {
    i.addEventListener('click', e => {
        tabsContent.forEach(iContent => {
            iContent.classList.remove('active-tab');
            if (e.target.dataset.item === iContent.dataset.item) {
                iContent.classList.add('active-tab');
            }
        });

        tabs.forEach(item => {
            item.classList.remove('active');
            e.target.classList.add('active');
        });
    });
});

menu.forEach(i => {
    i.addEventListener('click', e => {
        const sli = document.querySelectorAll('.sladerwrapper');

        sli.forEach(i => {
            if (e.target.dataset.item === 'all') {
                i.classList.remove('ondisey');
                i.classList.remove('offdisey');
            } else {
                i.classList.add('offdisey');
                i.classList.remove('ondisey');
                if (i.dataset.item === e.target.dataset.item) {
                    i.classList.add('ondisey');
                }
            }
        });
        menu.forEach(tab => {
            tab.classList.remove('active-tabs2');
        });
        e.target.classList.add('active-tabs2');
    });
});

loadMore.addEventListener('click', e => {
    const ulGallery = document.querySelector('.filter-item');

    for (let index = 4; index < 7; index++) {
        const rawHtml = `<li class="sladerwrapper" data-item="graphic">
        <img class="gallery-img" src="./img/graphic design/graphic-design${index}.jpg" alt="Graphic Design parasol" />
        <div class="hover-wrapper">
            <div class="link">
                <a href="">
                    <img src="./img/linkhovergalery.png" alt="" />
                </a>
                <a href="">
                    <img src="./img/hovergalery.png" alt="" />
                </a>
            </div>
            <div class="item-galery-title">creative design</div>
            <div class="item-galery-subtitle">Graphic Design</div>
        </div>
        </li>
        <li class="sladerwrapper" data-item="web">
        <img class="gallery-img" src="./img/web design/web-design${index}.jpg" alt="Web Design icons" />
        <div class="hover-wrapper">
            <div class="link">
                <a href="">
                    <img src="./img/linkhovergalery.png" alt="" />
                </a>
                <a href="">
                    <img src="./img/hovergalery.png" alt="" />
                </a>
            </div>
            <div class="item-galery-title">creative design</div>
            <div class="item-galery-subtitle">Web Design</div>
        </div>
        </li>
        <li class="sladerwrapper" data-item="landing">
            <img class="gallery-img" src="./img/landing page/landing-page${index}.jpg" alt="Landing Pages with apples products" />
            <div class="hover-wrapper">
            <div class="link">
                <a href="">
                    <img src="./img/linkhovergalery.png" alt="" />
                </a>
                <a href="">
                    <img src="./img/hovergalery.png" alt="" />
                </a>
            </div>
            <div class="item-galery-title">creative design</div>
            <div class="item-galery-subtitle">Page Design</div>
        </div>
        </li>
        <li class="sladerwrapper" data-item="wordpress">
        <img class="gallery-img" src="./img/wordpress/wordpress${index}.jpg" alt="Wordpress media" />
        <div class="hover-wrapper">
        <div class="link">
            <a href="">
                <img src="./img/linkhovergalery.png" alt="" />
            </a>
            <a href="">
                <img src="./img/hovergalery.png" alt="" />
            </a>
        </div>
        <div class="item-galery-title">creative design</div>
        <div class="item-galery-subtitle">Wordpress Design</div>
        </div>
        </li>`;
        ulGallery.insertAdjacentHTML('beforeend', rawHtml);
    }

    loadMore.remove();
});

let avatarCounter = 2;
const avatars = document.querySelectorAll('.avatars-item');
const face = document.querySelector('.face');
const author = document.querySelector('.section7-author');

const animationSpinning = [{ transform: 'rotate(360deg) scale(0)' }, { transform: 'rotate(0) scale(1)' }];

const animationTiming = {
    duration: 1000,
    iterations: 1,
};

left.addEventListener('click', e => {
    if (avatarCounter > 0) {
        avatarCounter--;
        avatars.forEach(item => {
            if (avatarCounter >= 0) {
                item.classList.remove('avatars-item-active');
            }
        });

        avatars[avatarCounter]?.classList.add('avatars-item-active');
        face.setAttribute('src', avatars[avatarCounter].getAttribute('src'));
        face.animate(animationSpinning, animationTiming);
        author.innerHTML = avatars[avatarCounter].dataset.name;
    }
});

right.addEventListener('click', e => {
    if (avatarCounter < 3) {
        avatarCounter++;
        avatars.forEach(item => {
            if (avatarCounter <= 3) {
                item.classList.remove('avatars-item-active');
            }
        });

        avatars[avatarCounter]?.classList.add('avatars-item-active');
        face.setAttribute('src', avatars[avatarCounter].getAttribute('src'));
        face.animate(animationSpinning, animationTiming);
        author.innerHTML = avatars[avatarCounter].dataset.name;
    }
});

avatars.forEach(item => {
    item.addEventListener('click', e => {
        avatarCounter = +e.target.dataset.counter;
        avatars.forEach(item => {
            item.classList.remove('avatars-item-active');
        });
        e.target.classList.add('avatars-item-active');
        face.setAttribute('src', e.target.getAttribute('src'));
        face.animate(animationSpinning, animationTiming);
        author.innerHTML = e.target.dataset.name;
    });
});
