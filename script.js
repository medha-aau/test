const body = document.getElementsByTagName('body')[0];
const footer = document.getElementById('footer');
const divIcons = document.createElement('div');
divIcons.classList.add('beforeFooter');

const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('iconsWrapper');

const iconData = [
    {
        image: `<img src='https://drive.google.com/uc?export=view&id=1bU9oyeKJm4AAUZFmpPYSEO4X6HD04nxk' alt='icon' class='myImage'/>`,
        text: 'UNIK GAVEINDPAKNING',
        subText: `Royal Copenhagens gaveindpakning er ganske unik og baseret på en teknik udviklet af Dronning
        Ingrid, der havde en forkærlighed for origami. Husk blot at tilvælge "Gaveindpakning" ved checkout`
    },
    {
        image: `<img src='https://drive.google.com/uc?export=view&id=1US_rj-CvWWinPx6uydUf4kz-R45UWCpY' alt='icon' height='100%' class='myImage'/>`,
        text: 'BRUDGARANTI',
        subText: `Selvom porcelæn er skrøbeligt, er porcelæn fra Royal Copenhagen skabt til at blive brugt hver dag.
        Skulle dit porcelæn få skår eller brud, tilbyder vi to års Brudgaranti på produkter i 1.sortering`
    },
    {
        image: `<img src='https://drive.google.com/uc?export=view&id=1zlUvy-EnxqlFfb_450hhPugUzoMG-jrE' alt='icon' height='100%' class='myImage'/>`,
        text: 'FORLÆNGET RETURRET',
        subText: `Her på royalcopenhagen.com kan du som altid shoppe det fulde sortiment af Royal Copenhagens
        porcelæn. Lige nu tilbyder vi forlænget returret på 60 dage`
    }
]

const elementNodes = iconData.map(({ image, text, subText }) => {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv')

    const iconDivImage = document.createElement('div');
    iconDivImage.classList.add('imgDiv');
    iconDivImage.innerHTML = image;

    const iconDivText = document.createElement('div');
    iconDivText.innerHTML = text;
    const iconDivSub = document.createElement('div');
    iconDivSub.innerHTML = subText;
    iconDivSub.classList.add('subText');
    iconDiv.append(iconDivImage, iconDivText, iconDivSub);
    return iconDiv
});

iconsWrapper.append(...elementNodes);

divIcons.append(iconsWrapper);

body.insertBefore(divIcons, footer);