const body = document.getElementsByTagName('body')[0];
const footer = document.getElementById('footer');
const divIcons = document.createElement('div');

const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('iconsWrapper');

const iconDiv1 = document.createElement('div');

const iconDivImage1 = document.createElement('div');
iconDivImage1.innerHTML = 'Image 1';

const iconDivText1 = document.createElement('div');
iconDivText1.innerHTML = 'Text 1';
iconDiv1.append(iconDivImage1, iconDivText1);

const iconDiv2 = document.createElement('div');

const iconDivImage2 = document.createElement('div');
iconDivImage2.innerHTML = 'Image 2';

const iconDivText2 = document.createElement('div');
iconDivText2.innerHTML = 'Text 2';
iconDiv2.append(iconDivImage2, iconDivText2);

const iconDiv3 = document.createElement('div');

const iconDivImage3 = document.createElement('div');
iconDivImage3.innerHTML = 'Image 3';

const iconDivText3 = document.createElement('div');
iconDivText3.innerHTML = 'Text 3';
iconDiv3.append(iconDivImage3, iconDivText3);

iconDiv1.classList.add('iconDiv');
iconDiv2.classList.add('iconDiv');
iconDiv3.classList.add('iconDiv');

iconsWrapper.append(iconDiv1, iconDiv2, iconDiv3);

divIcons.append(iconsWrapper);

body.insertBefore(divIcons, footer);