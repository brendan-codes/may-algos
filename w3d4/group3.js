// Theary Ouk, mWm,
/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
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
      treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
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

function cure(ailments, medications){
    let cureList = [];
    for(let med of medications){
        let  count = 0;
        for(let sym of med.treatableSymptoms){
            for(let ail of ailments){
                if(sym === ail){
                    count ++;
                }
            }
        }
        if (count === ailments.length){
            cureList.push(med.name);
        }
    }
    return cureList;
}

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

console.log(cure(ailments2,medications))