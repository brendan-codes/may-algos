
// Anthony Yi, Deny Glukhovskyi, Jon Yoo, and Petra Franklin.
/*
  Given an array of ailments (illnesses), and an array of medication objects
  that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/
// 1.) Function that finds medication object to cure to ailment symptom(s)
// 2.) Map through medication objects to find symptom keys.
// 2.) Then returns the medication.names that cure those symptoms.

function medication (arrayOfMedication, arrayOfAilments) {
  let output =[];
  var cures = 0;
  let highestOutput = 0;
  let storage = new Map();
    for (let i =0; i < arrayOfAilments.length; i++) {
      for (let j=0; j < arrayOfMedication.length; j++) {
        for (let k = 0; k < arrayOfMedication[j].treatableSymptoms.length; k++) {
            if (arrayOfAilments[i]== arrayOfMedication[j].treatableSymptoms[k]) {
                cures++;
            }
            if (k == arrayOfMedication[j].treatableSymptoms.length-1) {
                storage.set(arrayOfAilments[i], cures)
                if (cures > highestOutput) {
                  highestOutput = cures;
                }
                cures = 0;
            }
        }
      }
    }
    for (let v of storage.values()) {
        console.log(v)
      if (storage.values == highestOutput) {
        output.push(storage.keys())
      }
    }
    return output;
}


medication(ailments, medications)


function medicationFunctionalish(ailments, medications) {
    const arrayOfMedication = medications.filter(medicine => {
        return ailments.every(sym => medicine.treatableSymptoms.includes(sym))
    })

    return arrayOfMedication.map(({name}) => name)
}

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
