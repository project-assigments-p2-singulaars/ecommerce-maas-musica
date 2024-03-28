
function createHeaderSection(){
    let headerSectionContainer = document.createElement('div');
    
    headerSectionContainer.id = 'headerSection';

    let adminContainer = document.createElement('div');

    adminContainer.classList.add('adminDiv');

    let anchorAdmin = document.createElement ('a');
    anchorAdmin.href = '#admin';

    let imgAdmin = document.createElement('img');
    imgAdmin.id ='adminIcon';
    imgAdmin.src="/src/resources/avatarSVG.svg";
    imgAdmin.alt = 'Admin Icon';

    let herumTitle = document.createElement('h1');
    herumTitle.id = 'herumTitle';
    herumTitle.textContent = 'HERUM';

    let buttonHamburguer = document.createElement('button');
    buttonHamburguer.id = "idbutton";
    buttonHamburguer.classList.add('buttonHamburguer');
    buttonHamburguer.alt = 'Hamburguer Button';
    buttonHamburguer.onclick = toggleMenu;

    let anchorButtonHamburguer = document.createElement('a');
    anchorButtonHamburguer.href='#hamburguerMenuID';

    let imgButtonHamburguer = document.createElement('img');
    imgButtonHamburguer.classList.add('hamburguerButton');
    imgButtonHamburguer.src ='/src/resources/hamburguericon.svg';
    imgButtonHamburguer.alt ='Hamburguer Icon';

    anchorAdmin.appendChild(imgAdmin);
    adminContainer.appendChild(anchorAdmin);

    anchorButtonHamburguer.appendChild(imgButtonHamburguer);
    buttonHamburguer.appendChild(anchorButtonHamburguer);

    headerSectionContainer.append(adminContainer,herumTitle,buttonHamburguer);

    return headerSectionContainer;
}

function createMenuHamburguer(){
    
    let navHamburguerContainer = document.createElement('nav');
    navHamburguerContainer.id = 'hamburguerMenuID';

    let ulHamburguer = document.createElement('ul');
    ulHamburguer.id ='listHamburguerMenu';

    let listHomeHamburguer = document.createElement('li');
    listHomeHamburguer.id ='home';
 
    let anchorhome = document.createElement('a');
    anchorhome.href='#home';
    anchorhome.classList.add('listHamburguerMenu');
    anchorhome.textContent = 'Home';

    let listProductHamburguer = document.createElement('li');
    listProductHamburguer.id ='product';
    
    let anchorproduct = document.createElement('a');
    anchorproduct.href='#product';
    anchorproduct.classList.add('listHamburguerMenu');
    anchorproduct.textContent = 'Product';

    listProductHamburguer.appendChild(anchorproduct);
    listHomeHamburguer.appendChild(anchorhome);

    ulHamburguer.append(listHomeHamburguer,listProductHamburguer);
    navHamburguerContainer.appendChild(ulHamburguer);

    return navHamburguerContainer;
}

function toggleMenu() {
    const headerHiddenNavBar = document.getElementById('hamburguerMenuID');
    const isMenuVisible = headerHiddenNavBar.style.display === "flex";
  
     headerHiddenNavBar.style.display = isMenuVisible ? "none" : "flex";
  }

function createHeader(){
    const bodyElement = document.body;
    let headerContainer = document.createElement('header');

    let headerNavBar = createHeaderSection();
    let headerHiddenNavBar = createMenuHamburguer();

    let buttonHamburguer = document.getElementById('idbutton');
    
    headerContainer.append(headerNavBar,headerHiddenNavBar);
    bodyElement.appendChild(headerContainer);

    buttonHamburguer.addEventListener("click", toggleMenu);
}

createHeader();





















