/* Mobile menu */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.link2');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
  nav.classList.toggle('open');
});

/* speakers section */

const data = [
  {
    name: 'Elizabeth Iro',
    img: 'images/image1.2.png',
    description1: 'World Health Organization Chief Nursing Officer (CNO)',
    description2: 'Ms. Iro was trained in New Zealand as a nurse and a midwife and holds a MHSc in Nursing and an MBA.',
  },
  {
    name: 'Jozef Suvada',
    img: 'images/image2.1.png',
    description1: 'HIV/AIDS, Cancer and Palliative Care',
    description2: 'St. Elizabeth College of Health and Social Work in Bratislava.',
  },
  {
    name: 'Dr Tedros Adhanom',
    img: 'images/image3.3.png',
    description1: 'WHO Director-General',
    description2: 'Dr Tedros Adhanom Ghebreyesus was elected WHO Director-General for a five-year term by WHO Member States at the Seventieth World Health Assembly in May 2017.',
  },
  {
    name: 'Biola Alabi',
    img: 'images/image4.4.png',
    description1: 'World Economic Forum',
    description2: 'Founder of “Grooming for Greatness” a leadership development and mentorship program for a new generation for African leaders and a Non- Executive Director of Unilever Nigeria.',
  },
  {
    name: 'Dr. Adaeze Oreh',
    img: 'images/image5.5.png',
    description1: 'Doctor, Healthcare Advocate, Author, Speaker Nigeria.',
    description2: 'Consultant Family Physician and Country Head of Planning, Research and Statistics for Nigeria’s National Blood Transfusion Service (NBTS).',
  },
  {
    name: 'Dr Vivek Murthy',
    img: 'images/image6.6.png',
    description1: 'U.S. Surgeon General',
    description2: 'Vice Admiral of the U.S. Public Health Service Commissioned Corps.',
  },
];

for (let i = 0; i < data.length; i += 1) {
  document.querySelector('.program').innerHTML += `
  <div class="sub-container3">
  <div class="img-cont">
  <img src="${data[i].img}" alt="image1" width="200px">
  </div>
  <div class="details">
  <h2 class="header6">${data[i].name}</h2>
  <p class="paragraph5">${data[i].description1}</p>
  <hr class="hr2">
  <p class="paragraph6">${data[i].description2}</p>
  </div>
  </div>
`;
}

const speaker = document.querySelector('.program');
const showMore = document.querySelector('.showmore');
const showLess = document.querySelector('.showless');
const button = document.querySelector('.button');
const arrow = document.querySelector('.button .fa');

const initial = {
  showAllContent: true,
};

function changeIcon(value) {
  const { element, currentIcon, newIcon } = value;
  element.classList.add(newIcon);
  element.classList.remove(currentIcon);
}
function showButton(button, visible = true) {
  if (!visible) {
    button.classList.add('d-none');
  } else {
    button.classList.remove('d-none');
  }
}
button.addEventListener('click', () => {
  const defaultValue = {
    element: arrow,
    currentIcon: 'fa-chevron-down',
    newIcon: 'fa-chevron-up',
  };

  if (initial.showAllContent) {
    showButton(showLess);
    showButton(showMore, false);
    speaker.classList.remove('gradient', 'maxHeight');
  } else {
    showButton(showLess, false);
    showButton(showMore);

    defaultValue.currentIcon = 'fa-chevron-up';
    defaultValue.newIcon = 'fa-chevron-down';
    speaker.classList.add('gradient', 'maxHeight');
  }
  changeIcon(defaultValue);
  initial.showAllContent = !initial.showAllContent;
});
