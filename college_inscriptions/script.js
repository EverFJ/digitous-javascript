var universites = [{
    "name": "Sorbonne",
    "address": "Rue de Chépaquoi",
    "étudiants": [{
        "name": "Fatoumata",
        "number": 54
    }, {
        "name": "Amir",
        "number": 66
    }],
    inscrireEtudiant(etudiant) {
        if (etudiant.name && etudiant.number >= 1 && etudiant.number <= 100) {
            this.étudiants.push(etudiant);
        }
    },
}];

var profs = [{
    "name": "Hervé",
    "étudiants": [{
        "name": "Fatoumata",
        "number": 54
    }, {
        "name": "Amir",
        "number": 66
    }],
    enregistrer(etudiant) {
        if (this.étudiants.length <= 10) {
            this.étudiants.push(etudiant);
        }
    },
}];


var etudiants = [{
        "name": "Francois",
        "number": 78,
    },
    {
        "name": "Alexandre",
        "number": 42,
    },
];

universites[0].inscrireEtudiant(etudiants[0]);
profs[0].enregistrer(etudiants[1]);
profs[0].enregistrer({
    "name": "Ishram",
    "number": 10
});

console.log("Universités : ");
console.log(universites[0]);
console.log("Profs : ");
console.log(profs[0]);
console.log("Etudiants : ");
console.log(etudiants);