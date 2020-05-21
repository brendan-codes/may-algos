// Group Members: Ryan, Kamakani, Song
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
        "ageing", //Questionable?
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


  const webMD = (symptoms, medicines) =>{
    let maxAil = 0;
    let currentAil = 0;
    let outputMedicine = []
    for(let i = 0; i < medicines.length; i++){
        currentAil= 0;
      for(let j=0; j<medicines[i]['treatableSymptoms'].length; j++){
        for(let x=0; x<symptoms.length;x++){
            // for(let z=0; z<=5; z++){
            //     console.log('This is a useless for loop!')
            // }
          if(medicines[i]['treatableSymptoms'][j]==symptoms[x]){
              currentAil++
          }
        }
      }
      if(currentAil>maxAil && currentAil > 0){
          maxAil=currentAil;
          outputMedicine = [medicines[i]['name']]
      }
      else if(currentAil===maxAil && currentAil > 0){
          outputMedicine.push(medicines[i]['name'])
      }
    }
    return outputMedicine;
  }