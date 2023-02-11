export const names = [
    'John',
    'Mary'
]
const elementCategoryArray = [
    //Alkali Metals
    ["Li", "Na", "K", "Rb", "Cs", "Fr"],
    
    //Alkaline Earth Metals
    ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    
    //Transition Metals
    ["Sc", "Y", "Ti", "Zr", "Hf", "Rf", "V", "Nb", "Ta", "Db", "Cr", "Mo", "W", "Sg", "Mn", "Tc", "Re", "Bh", "Fe", "Ru", "Os", "Hs", "Co", "Rh", "Ir", "Mt", "Ni", "Pd", "Pt", "Ds", "Cu", "Ag", "Au", "Rg"],
    
    //Post-transition Metals
    ["Zn", "Cd", "Hg", "Cn", "Al", "Ga", "In", "Tl", "Nh", "Sn", "Pb", "Fl", "Bi", "Mc", "Po", "Lv", "Ts"],

    //Metalloids
    ["B", "Si", "Ge", "As", "Sb", "Te", "At"],

    //Non-Metals
    ["H", "C", "N", "P", "O", "S", "Se"],

    //Halogens
    ["F", "Cl", "Br", "I"],

    //Noble Gases
    ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"],

    //Lanthanides
    ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],

    //Actinides
    ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lw"]
];

const categoryColors = {Alkali: "Plum", Alkaline: "MediumOrchid", Transition: "SlateBlue", 
PostTransition: "SkyBlue", Metalloid: "YellowGreen", NonMetal: "LightSalmon", Halogen: "Tomato", 
NobleGas: "DarkOrange", Lanthanide: "Khaki", Actinide: "DarkKhaki"};

function getCategory (elementSymbol) {
    for (let i = 0; i < elementCategoryArray.length; i++) {
        for (let j = 0; j < elementCategoryArray[i].length; j++) {
            if (elementSymbol == elementCategoryArray[i][j]) {
                return getColor(i);
            }
        }
    }
}

function getColor(arrayIndex) {
    let color = ""
    switch (arrayIndex) {
        case 0:  
            color = categoryColors.Alkali;
            break;
        case 1: 
            color = categoryColors.Alkaline;
            break;
        case 2: 
            color = categoryColors.Transition;
            break;
        case 3: 
            color = categoryColors.PostTransition;
            break;
        case 4: 
            color = categoryColors.Metalloid;
            break;
        case 5: 
            color = categoryColors.NonMetal;
            break;
        case 6: 
            color = categoryColors.Halogen;
            break;
        case 7: 
            color = categoryColors.NobleGas;
            break;
        case 8: 
            color = categoryColors.Lanthanide;
            break;
        case 9: 
            color = categoryColors.Actinide;
            break;
    }
    return color;
}
const elements = document.querySelectorAll("td.element")
const myButton = document.getElementById("load-flashcard-maker");
let numHighlighted = 0;
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getCategory(elements[i].innerText);
    elements[i].addEventListener("click", function() {
      if (elements[i].style.backgroundColor === "yellow") {
        elements[i].style.backgroundColor = getCategory(elements[i].innerText);
        numHighlighted--;
      } else {
        elements[i].style.backgroundColor = "yellow";
        numHighlighted++;
      }
      if (numHighlighted < 1) {
        myButton.disabled = true;
      }
      if (numHighlighted >= 1) {
        myButton.disabled = false;
      }
    });
  }
  document.getElementById("load-flashcard-maker").addEventListener("click", function() {
    window.location.href = "flashcards.html";
  });
  document.getElementById("selectAll").addEventListener("click", function() {
    if (document.getElementById("selectAll").innerText == "select all") {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "yellow";
            myButton.disabled = false;
            document.getElementById("selectAll").innerText = "un-select all";
            numHighlighted = 180;
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = getCategory(elements[i].innerText);
            myButton.disabled = true;
            document.getElementById("selectAll").innerText = "select all";
            numHighlighted = 0;
        }
    }
  });

  
