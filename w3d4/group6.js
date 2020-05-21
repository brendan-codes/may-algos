// Michael Remy

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

    function MedicationFinder(ailments1, medications) {
        let result = [];
        let count = 0;
        for (var key in data){
            if (key == treatableSymptoms && treatableSymptoms.includes(medications)) {
                if (count < treatableSymptoms.length) {
                    count = treatableSymptoms.length
                    if (result.length == 0) {
                        result.push(treatableSymptoms);
                    }
                    else {
                        result.pop()
                        result.push(treatableSymptoms);
                    }
                }
            }
        }
        return result;
    }