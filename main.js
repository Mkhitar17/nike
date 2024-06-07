const AC = e => document.createElement(e);
const body = document.body;
document.body.style.background = 'lightblue';
const style = AC('style');

document.head.append(style);
style.innerText = `
*{
    margin:0; 
    padding:0; 
    box-sizing:border-box;
}
body{
    height:2000px;
}
`;

//amboxj sayti targmanutyun@ linelu e aystex
const GlobalData = Object.seal({   //freeze-i nman e, uxxaki i tarberutyun freeze-i tuyl e talis popoxutyun anel
    language:[
        {
            link:['Home', 'Products', 'Services', 'About Us', 'Feetback'],
            
            proNameData:['Nike Shoes', 'Nike Shoes', 'Nike Shoes', 'Nike Shoes', 'Nike Shoes', 'Nike Shoes', 'Football Nike Shoes', 'Football Nike Shoes', 'Football Nike Shoes', 'Football Nike Shoes', 'Football Nike Shoes', 'Football Nike Shoes'],
            
            proPriceData:['250 $', '200 $', '240 $', '410 $', '350 $', '400 $', '500 $', '700 $', '750 $', '950 $', '1500 $', '3000 $'],

            chif:'Nike Shoes',

            langQuant:'Quantity',

            langTotal:'Total',

            rate:'$',
        },
        {
            link:['Главная', 'Продукы', 'Услуги', 'О нас', 'Обратная связь'],
            
            proNameData:['Найк Shoes', 'Найк Shoes', 'Найк Shoes', 'Найк Shoes', 'Найк Shoes', 'Найк Shoes', 'Футбол Найк Shoes', 'Футбол Найк Shoes', 'Футбол Найк Shoes', 'Футбол Найк Shoes', 'Футбол Найк Shoes', 'Футбол Найк Shoes'],

            proPriceData:['25000 руб', '20000 руб', '24000 руб', '41000 руб', '35000 руб', '40000 руб', '50000 руб', '70000 руб', '75000 руб', '95000 руб', '150000 руб', '300000 руб'],

            chif:'Nike Обувь',

            langQuant:'Количество',
            
            langTotal:'Итог',

            rate:'руб',
        },
        {
            link:['Գլխավոր', 'Պրոդուկտներ', 'Ծառայություններ', 'Մեր մասին', 'Հետադարձ կապ'],
            
            proNameData:['Նայք Կոշիկներ', 'Նայք Կոշիկներ', 'Նայք Կոշիկներ', 'Նայք Կոշիկներ', 'Նայք Կոշիկներ', 'Նայք Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ', 'Նայք Ֆիրմայի Ֆուտբոլային Կոշիկներ'],

            proPriceData:['100000 դրամ', '90000 դրամ', '98000 դրամ', '170000 դրամ', '140000 դրամ', '160000 դրամ', '200000 դրամ', '280000 դրամ', '300000 դրամ', '380000 դրամ', '600000 դրամ', '1200000 դրամ'],

            chif:'Nike Կոշիկ',

            langQuant:'Քանակ',

            langTotal:'Ընդամենը',

            rate:'դրամ',
        },
    ],

    scrollId:['#home', '#products', '#', '#about', '#feetback'],  //dnelu enq href-i mej

    image:['pictures/1.png', 'https://wallpapercg.com/download/nike--14108.jpg', '2.jpg', '3.jpeg', 'pictures/7.jpg', 'https://www.the-sun.com/wp-content/uploads/sites/6/2020/01/Future_Lab_2020132971-e1579818596399-2.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', 'https://3.bp.blogspot.com/-nmpi2kVjJVc/XzFTIWf9Z-I/AAAAAAACkYc/fEQulIhi9x8rSieN8V-HDbKU5jr89-lzACNcBGAsYHQ/s1600/nike-black-chile-red-boots-pack%2B%25284%2529.jpg', 'https://sneakerfortress.com/wp-content/uploads/2023/11/Christmas-Air-Jordan-1-Red-Toe-Sneaker.jpg', 'https://talksport.com/wp-content/uploads/sites/5/2020/03/11-nike-phantom-vnm-t90.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', 'https://images4.alphacoders.com/632/632661.jpg'],

    proImg:['nike1/1.png', 'nike1/2.png', 'nike1/3.png', 'nike1/4.png', 'nike1/5.png', 'nike1/6.png', 'nike1/7.png', 'nike1/8.png', 'nike1/9.png', 'nike1/10.png', 'nike1/11.png', 'nike1/12.png'],
    
    totalData:[],

    langIndex: 0,

    cloneData:{
        name:[],
        price:[],
    },
});

(writeTitle = () => {
    const titleName = 'Sneakers Shoes';
    let titleCur = 0;

    let setTitle = setInterval(() => {
        document.title = titleName.slice(0, ++titleCur);
        if(document.title == titleName){
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(() => {
                    document.title = titleName.slice(0, titleCur--);
                    if(document.title == 'S'){
                        clearInterval(setTitle2);
                        writeTitle();
                    };
                },250);
            },1000);
        };
    },250);
})();

const pageIcon = AC('link');
document.head.append(pageIcon);
pageIcon.rel = 'shortcut icon';
pageIcon.href = 'icon.png';

const header = AC('header');
header.style = 'background:#ff3fff; display:flex; align-items:center; justify-content:space-between; padding:10px 20px';
body.append(header);

const logo = AC('a');
logo.style = 'display:block';
logo.href = 'index.html';
header.append(logo);

const logoImage = AC('img');
logoImage.alt = 'img';
logoImage.title = 'Nike Shoes';
logoImage.src = 'logo.png';
logo.append(logoImage);
logoImage.setAttribute('style', 'height:110px; transition:.5s;');
logo.onmouseover = () => logoImage.style.transform = 'scale(-1) rotate(180deg)';
logo.onmouseleave = () => logoImage.style.transform = null;

const nav = AC('nav');
logo.after(nav);

const menu = AC('ul');
menu.setAttribute('style', 'display:flex; list-style:none;');
nav.append(menu);

GlobalData.language[0].link.forEach((item, index) => {
    const li = AC('li');
    menu.append(li);

    const a = AC('a');
    li.append(a);
    a.innerText = item;
    a.href = GlobalData.scrollId[index];
    a.style = 'color:#fff; font:bold 22px cursive; margin:0 20px; text-decoration:none; position:relative;';

    const after = AC('span');
    a.append(after);
    after.style = 'position:absolute; bottom:-5px; left:0; width:100%; height:2px; background:#fff; transition:.4s; scale:0 1;';
    a.onmouseover = () => after.style.scale = 1;
    a.onmouseleave = () => after.style.scale = '0 1';
    a.className = 'link'; //talis enq menu i lezun poxelu hamar
});

const searchBlock = AC('div');
nav.after(searchBlock);

const search = AC('input');
search.type = 'search';
searchBlock.append(search);
search.setAttribute('style', 'height:30px; width:220px; border-radius:30px; border:2px solid #000; padding:0 10px; font:bold 16px cursive; transition:.4s;');
search.onfocus = e => (e.target.style.background = '#000', e.target.style.color = '#fff');
search.onblur = e => (e.target.style.background = null, e.target.style.color = null);

(autoWrite = () => {
    const titleName = 'Search...';
    let titleCur = 0;
    setTimeout(() => {
    let setTitle = setInterval(() => {
        search.placeholder = titleName.slice(0, ++titleCur);
        if(search.placeholder == titleName){
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(()=> {
                    search.placeholder = titleName.slice(0, titleCur--);
                    if(search.placeholder == ''){
                        clearInterval(setTitle2);
                        autoWrite();
                    };
                },100);
            },1000);
        };
    },70);
    },1000);
})();

//slideri skizb
const slider = AC('div');
slider.setAttribute('style', 'overflow:hidden; height:'.concat(innerHeight - header.offsetHeight,'px; position:relative;'));
header.after(slider);

const chiefTitle = AC('h1');
chiefTitle.innerText = 'Nike Shoes';
slider.append(chiefTitle);
chiefTitle.setAttribute('style', 'position:absolute; top:50%; left:50%; translate:-50% -50%; z-index:1; font:bold 7vw sans-serif; -webkit-text-stroke:2px #fff; color:#ff3fff; text-shadow:0 8px 7px #000, 0 -10px 7px #0f0; white-space:nowrap; transition:opacity .4s;');

const slideBig = AC('div');
slideBig.setAttribute('style', `width:${GlobalData.image.length * 100}%; height:100%; display:flex; position:relative; left:-100%; transition:.4s;`);
slider.append(slideBig);

const sliderRadio = AC('div');//grum enq cikly greluc heto
sliderRadio.style = 'position:absolute; bottom:3%; left:0; width:100%; text-align:center;';
slider.append(sliderRadio);

let sliderCur = -100; // -100 nra hamar e, vor irakanum 2rd divi vra enq
let sliderBull = true; //
let radCur = 0;

GlobalData.image.forEach((item, index) => {
    const list = AC('div');
    slideBig.append(list);
    list.setAttribute('style', `width:100%; height:100%; background:url(${item}) no-repeat center / cover;`);
    list.className = 'repeat'; // scrollin kpnelu hamar  tvecinq class

    if(index != GlobalData.image.length - 1){
        const inpRad = AC('input');
        inpRad.type = 'radio';
        inpRad.name = 'LIKA';
        index == 0 ? inpRad.checked = true : '';
        sliderRadio.append(inpRad);
        inpRad.style = 'width:20px; height:20px; margin:0 4px; cursor:pointer; accent-color:#ff3fff;';
        inpRad.onchange = () => {
            sliderCur = (index + 1) * -100;
            radCur = index;
            slideBig.style.left = sliderCur + '%';
        };
    };
});

for(let i = 0; i < 2; i++){
    const btn = AC('button');
    btn.className = 'slide';
    slider.append(btn);
    btn.setAttribute('style', 'padding:15px 40px; font-size:4.5rem; border-radius:12px; background:#0008; position:absolute; top:50%; translate:0 -50%; cursor:pointer; transition:.3s; color:#fff; box-shadow:0 0 15px 4px #fff;');
    i == 0 ? (btn.style.left = '3%', btn.innerHTML = '&#10092;') : (btn.style.right = '3%', btn.innerHTML = '&#10093;');
    btn.onmouseover = () => (btn.style.background = '#ff3fff', btn.style.color = '#000');
    btn.onmouseleave = () => (btn.style.background = '#0008', btn.style.color = '#fff');

    btn.onclick = () => {
        if(i == 0){
            if(sliderBull){
                sliderBull = false;
                sliderCur += 100;
                radCur--;
                radCur < 0 ? radCur = GlobalData.image.length -2 : '';
                if(sliderCur > 0){
                    slideBig.style.transition = 'none';
                    sliderCur = (GlobalData.image.length - 1) * -100;
                    setTimeout(() => {
                        slideBig.style.transition = '.4s';
                        sliderCur = (GlobalData.image.length - 2) * -100;
                        slideBig.style.left = sliderCur + '%';
                    },40);
                };
                slideBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBull = true, 400);
                sliderRadio.children[radCur].checked = true;
            };
        }
        else{
            // sliderCur -= 100;
            // slideBig.style.left = sliderCur + '%';
            if(sliderBull){
                sliderBull = false;
                sliderCur -= 100;
                radCur++;
                radCur == GlobalData.image.length - 1 ? radCur = 0 : '';
                if(sliderCur < (GlobalData.image.length - 1) * -100){
                    slideBig.style.transition = 'none';
                    sliderCur = 0;
                    setTimeout(() => {
                        slideBig.style.transition = '.4s';
                        sliderCur = -100;
                        slideBig.style.left = sliderCur + '%';
                    },40);
                };
                slideBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBull = true, 400);
                sliderRadio.children[radCur].checked = true;
            };
        };
    };
};

const main = AC('main');
slider.after(main);
main.style = 'display:flex; flex-wrap:wrap; justify-content:space-evenly; padding:50px 0;overflow:hidden;';

for(let i = 0; i < 12; i++){
    const itemBlock = AC('div');
    itemBlock.className = 'product';
    main.append(itemBlock);
    itemBlock.style = 'width:320px; height:360px; perspective:850px; padding:30px;';
    const item = AC('div');
    itemBlock.append(item);
    item.style = 'height:100%; transition:.2s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:inset 0 0 15px #0006; text-align:center; padding:8px 8px 15px;';
    itemBlock.onmousemove = e => {
        // console.log(e.offsetX, e.layerX);
        item.style.transform = `rotateY(${(e.layerX - item.offsetWidth/2)/5}deg) rotateX(${-(e.layerY - item.offsetHeight/2)/5}deg)`;
    };
    itemBlock.onmouseleave = e => item.style.transform = 'none';
    const img = AC('img');
    const proName = AC('h3');
    proName.className = 'pName';
    const price =AC('h4');
    price.className = 'priceList';
    // item.append(img,proName,price);

    img.src = GlobalData.proImg[i];
    img.style = 'width:100%; height:175px; object-fit:cover;';

    proName.innerText = GlobalData.language[0].proNameData[i];
    proName.style = 'font:bold 15px verdana; color:#fff700; -webkit-text-stroke:.8px #000; text-shadow:0 2px 0 #000, 0 4px 4px #ff0081;';

    price.innerText = GlobalData.language[0].proPriceData[i];
    price.style = 'margin-top:7px; font:bold 23px sans-serif;';

    const quantityBlock = AC('div');
    item.append(img, proName, price, quantityBlock);

    const minus = AC('div');
    const display = AC('div');
    const plus = AC('div');

    minus.innerText = '-';
    plus.innerText = '+';
    display.innerText = 1;

    quantityBlock.style = 'display:flex; justify-content:center; align-item:center; margin-top:10px; padding-left:37px; user-select:none; transition:.3s';
    minus.style = 'border:1px solid #000; width:30px; height:30px; font:bold 18px sans-serif; display:grid; place-items:center; cursor:pointer;';
    plus.style = 'border:1px solid #000; width:30px; height:30px; font:bold 18px sans-serif; display:grid; place-items:center; cursor:pointer;';
    display.style = 'border:1px solid #000; width:30px; height:30px; font:bold 18px sans-serif; display:grid; place-items:center; cursor:pointer; background:#31ff00';

    const add = AC('div');
    add.innerHTML = '<img src="https://e7.pngegg.com/pngimages/908/629/png-clipart-computer-icons-shopping-cart-shopping-cart-angle-retail.png" alt="add" height="30px">'
    add.style = 'cursor:pointer; margin-left:7px; transition:.3s; transform-origin:top left;';

    quantityBlock.append(minus, display, plus, add);

    add.onmouseover = () => add.style.rotate = '-10deg';
    add.onmouseleave = () => add.style.rotate = null;
    plus.onclick = () => display.innerText < 20 ? display.innerText++ : '';
    minus.onclick = () => display.innerText > 1 ? display.innerText-- : '';

    add.onclick = () => {
        add.style.filter = 'hue-rotate(90deg)';
        add.style.pointerEvents = 'none';

        quantityBlock.style.pointerEvents = 'none';
        quantityBlock.style.opacity = .3;

        const line = AC('div');
        cartDisplay.append(line);
        line.style = 'border-bottom:2px solid #fff; height:170px; padding:20px; display:flex; align-items:center; justify-content:space-between; transition:.5s;';

        const cloneImg = img.cloneNode(true);
        cloneImg.style.width = '160px';
        cloneImg.style.height = '100%';

        const cloneName = proName.cloneNode(true);
        GlobalData.cloneData.name[i] = cloneName;
        cloneName.className = '';
        // cloneName.className = 'cloneProName';

        const clonePrice = price.cloneNode(true);
        GlobalData.cloneData.price[i] = clonePrice;
        clonePrice.className = '';
        clonePrice.style.color = '#fff';

        const myQuantity = AC('h4');
        myQuantity.className = 'cloneQuant';
        myQuantity.innerText = GlobalData.language[GlobalData.langIndex].langQuant + ' - ' + display.innerText;
        myQuantity.style = clonePrice.getAttribute('style');

        const total = AC('h4');
        total.className = 'cloneTotal';
        total.innerText = GlobalData.language[GlobalData.langIndex].langTotal + ' - ' + display.innerText * /[0-9]+/.exec(price.innerText) + GlobalData.language[GlobalData.langIndex].rate;

        GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(price.innerText);
        total.style = clonePrice.getAttribute('style');

        globalTotal.innerText = GlobalData.language[GlobalData.langIndex].langTotal + ' - ' + GlobalData.totalData.reduce((total, item) => total + item, 0) + GlobalData.language[GlobalData.langIndex].rate;

        const plusMinusBlock = AC('div');
        plusMinusBlock.style = 'display:flex;';
        const cloneMinus = minus.cloneNode(true); 
        cloneMinus.style.borderColor= '#fff';
        cloneMinus.style.color = '#fff';

        const clonePlus = plus.cloneNode(true); 
        clonePlus.style.borderColor= '#fff';
        clonePlus.style.color = '#fff';

        cloneMinus.onclick = () => {
            display.innerText > 1 ? display.innerText-- : '';

            total.innerText = GlobalData.language[GlobalData.langIndex].langTotal  + ' - ' + display.innerText * /[0-9]+/.exec(price.innerText) + GlobalData.language[GlobalData.langIndex].rate;

            GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(price.innerText);

            globalTotal.innerText = GlobalData.language[GlobalData.langIndex].langTotal  + ' - ' + GlobalData.totalData.reduce((total, item) => total + item, 0) + GlobalData.language[GlobalData.langIndex].rate;

            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('-') + 1);
            // console.log(x); // x tesnelu haskanalu hamar

            x--;

            if(x == 0){
                plusMinusBlock.style.pointerEvents = 'none';
                quantityBlock.style.pointerEvents = null;
                quantityBlock.style.opacity = null;
                add.style.filter = null;
                add.style.pointerEvents = null;
                line.style.scale = 0;
                GlobalData.totalData[i] = 0; // nra hamar e vor totali mej verjum stanaq 0 ijacnelun (- aneluc)

                globalTotal.innerText = GlobalData.language[GlobalData.langIndex].langTotal  + ' - ' + GlobalData.totalData.reduce((total, item) => total + item, 0) + GlobalData.language[GlobalData.langIndex].rate; // sranov zangvacy tarmanum e

                setTimeout(() => {
                    line.remove();
                    cartDisplay.childElementCount == 0 ? cartBlock.style.clipPath = 'circle(0 at 100% 100%)' : '';
                },5e2);
            };
            myQuantity.innerText = GlobalData.language[GlobalData.langIndex].langQuant + ' - ' + x;
        };

        clonePlus.onclick = () => {
            display.innerText < 20 ? display.innerText++ : '';

            total.innerText = GlobalData.language[GlobalData.langIndex].langTotal + ' - ' + display.innerText * /[0-9]+/.exec(price.innerText) + GlobalData.language[GlobalData.langIndex].rate;

            GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(price.innerText);

            globalTotal.innerText = GlobalData.language[GlobalData.langIndex].langTotal  + ' - ' + GlobalData.totalData.reduce((total, item) => total + item, 0) + GlobalData.language[GlobalData.langIndex].rate;

            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('-') + 1);

            x < 20 ? x++ : '';

            myQuantity.innerText = GlobalData.language[GlobalData.langIndex].langQuant + ' - ' + x;
        };
        plusMinusBlock.append(cloneMinus, clonePlus);
        line.append(cloneImg, cloneName, clonePrice, myQuantity, total, plusMinusBlock);
    };
};

const cartBlock = AC('div');
main.after(cartBlock);
cartBlock.style = 'position:fixed; top:0; left:0; width:100%; height:100%; backdrop-filter:blur(5px); z-index:2; transition:3s; display:grid; place-items:center; align-content:center; clip-path:circle(0 at 100% 100%); user-select:none;';
const cartDisplay = AC('div');
cartDisplay.style = 'width:70%; height:80vh; background:#111; border-radius:25px; overflow:auto;';

const cartLogo = AC('div');
cartBlock.after(cartLogo);
cartLogo.innerHTML = '<img src="https://e7.pngegg.com/pngimages/350/803/png-clipart-retail-customer-service-product-company-grocery-basket-company-retail.png" alt="logo" height="70px">';
cartBlock.append(cartDisplay);
cartLogo.style = 'position:fixed; bottom:10px; right:10px; cursor:pointer';
cartLogo.onclick = () => cartBlock.style.clipPath = 'circle(100%)';

const closeCart = AC('div');
// cartBlock.append(closeCart, cartDisplay);
closeCart.innerText = 'x';
closeCart.style = 'position:absolute; top:5px; left:50%; translate:-50%; font:bold 22px sans-serif; cursor:pointer;';
closeCart.onclick = () => cartBlock.style.clipPath = 'circle(0 at 100% 100%)';

const globalTotal = AC('h2');
globalTotal.innerText = GlobalData.language[GlobalData.langIndex].langTotal + ' - 0' ;

cartBlock.append(closeCart, cartDisplay, globalTotal);

globalTotal.style = 'background:#111; color:#fff; padding:10px 25px; border-radius:0 0 40px 40px; font:bold 22px sans-serif;';

const footer = AC('div');
cartBlock.after(footer);
footer.style = 'display:flex; width:100%; height:200px; background:#ff3fff;';

window.onscroll = () => {
    // console.log(scrollY);
    document.querySelectorAll('.repeat').forEach(item => {
        item.style.backgroundPositionY = -scrollY/6 + 50 + '%';
    });
    chiefTitle.style.translate = '-50%' + (scrollY/2 -50) + '%';
    document.querySelectorAll('.slide').forEach(item => {
        item.style.opacity = Math.max(-scrollY/300 + 1, 0);
        item.style.transition = '.5s';
    });
    document.querySelectorAll('.product').forEach(item => {
        if(scrollY > item.offsetTop - 600){
            if(item.offsetLeft < innerWidth/2){
                item.style.translate = Math.min(scrollY - item.offsetTop + 200, 0) + 'px';
            }
            else if(item.offsetLeft +item.offsetWidth > innerWidth/2){
                item.style.translate = Math.max(-(scrollY - item.offsetTop + 200), 0) + 'px';
            };
        };
    });
};

const langBlock = AC('div');
document.body.prepend(langBlock);
langBlock.style = 'position:fixed; top:-100%; left:-100%; padding:12px; border-radius:8px; background:#ff3fff; box-shadow:0 0 22px #0008; z-index:20;';
document.oncontextmenu = e => {
    langBlock.style.top = e.y + 'px';
    langBlock.style.left = e.x + 'px';
    return false;
};
document.onclick = () => {
    langBlock.style.top = '-100%';
    langBlock.style.left = '-100%';
};
const flagImg = [
    'url(https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg) no-repeat center / cover',
    'linear-gradient(#fff 33.3%, #00f 33.3% 66.6%, #f00 66.6%)',
    'linear-gradient(#f00 33.3%, #00f 33.3% 66.6%, #fa0 66.6%)',
];

for(let i = 0; i < 3; i++){
    const flag = AC('button');
    langBlock.append(flag);
    flag.style = `width:60px; height:35px; border-radius:5px; margin:0 3px; background:${flagImg[i]};`;

    flag.onclick = () => {
        GlobalData.langIndex = i;
        document.querySelectorAll('.link').forEach(item => item.style.opacity = 0);
        chiefTitle.style.opacity = 0;
        document.querySelectorAll('.pName').forEach(item => item.style.opacity = 0);
        document.querySelectorAll('.priceList').forEach(item => item.style.opacity = 0);

        setTimeout(() => {
            document.querySelectorAll('.link').forEach((item, index) => {
                item.style.opacity = 1;
                item.innerText = GlobalData.language[i].link[index];
            });
            chiefTitle.style.opacity = 1;
            chiefTitle.innerText = GlobalData.language[i].chif;
            document.querySelectorAll('.pName').forEach((item, index) => {
                item.style.opacity = 1;
                item.innerText = GlobalData.language[i].proNameData[index]; 
            });
            document.querySelectorAll('.priceList').forEach((item, index) => {
                item.style.opacity = 1;
                item.innerText = GlobalData.language[i].proPriceData[index];
            });
            document.querySelectorAll('.cloneQuant').forEach((item, index) => {
                item.opacity = 1;
                item.innerText = GlobalData.language[i].langQuant + item.innerText.slice(item.innerText.indexOf('-') - 1);
            });
            GlobalData.cloneData.name.forEach((item, index) => {
                item.opacity = 1;
                item.innerText = GlobalData.language[i].proNameData[index];

                GlobalData.cloneData.price[index].innerText = GlobalData.language[i].proPriceData[index];

                GlobalData.totalData[index] = /\d+/.exec(GlobalData.cloneData.price[index].innerText) * /\d+/.exec(GlobalData.cloneData.price[index].nextElementSibling.innerText);
            });
            document.querySelectorAll('.cloneTotal').forEach((item, index) => {
                item.opacity = 1;
                item.innerText = GlobalData.language[i].langTotal + ' - ' + /\d+/.exec(item.previousElementSibling.innerText) * /\d+/.exec(item.previousElementSibling.previousElementSibling.innerText) + GlobalData.language[i].rate;
            });
            globalTotal.innerText = GlobalData.language[i].langTotal + ' - ' + GlobalData.totalData.reduce((total, item) => total + item, 0) + GlobalData.language[i].rate;
        },400);
    };
};