// good morning> Becky Betts, Chris Holley, John Stevens
/*
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
    name: "Sulforaphane",
    treatableSymptoms: [
        "dementia",
        "alzheimer's",
        "cancer",
        "inflammation",
        "neuropathy",
    ],
    },
    {
    name: "Longvida Curcumin",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
    ],
    },
    {
    name: "Hericium erinaceus",
    treatableSymptoms: [
        "anxiety",
        "cognitive decline",
        "depression"
        ],
    },
    {
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
        ],
    },
    {
    name: "PainAssassinator",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
    ],
    },
];

  /*
  Input: ailments1, medications
  Output: ["PainAssassinator", "Longvida Curcumin"]
  */
  const ailments1 = ["pain"];

  /*
  Input: ailments2, medications
  Output: ["Longvida Curcumin"]
  */
  const ailments2 = ["pain", "inflammation", "depression"];

  /*
  Input: ailments3, medications
  Output: []
  */
  const ailments3 = ["existential dread"];

  // iterative
  function jsDoctor(aliments, medications){

    let bestFit = []
    let numTreatable = 0

    for (const medication of medications){
        let count = 0
        for (const aliment of aliments){
            if (medication.treatableSymptoms.includes(aliment)){
                count += 1
                if (count > numTreatable){
                    bestFit = [medication.name]
                    numTreatable = count
                }
                else if (count === numTreatable){
                    bestFit.push(medication.name)
                }
            }
        }
    }
    return bestFit
}

console.log(jsDoctor(["pain"], medications)) // Output -> [ 'Longvida Curcumin', 'PainAssassinator' ]
console.log(jsDoctor(["pain", "inflammation", "depression"], medications)) // Output -> [ 'Longvida Curcumin' ]
console.log(jsDoctor(["existential dread"], medications)) // Output -> []