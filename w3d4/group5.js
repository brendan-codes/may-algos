
// Group 5 is Kevin, Joshua, and Thomas //


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
      treatableSymptoms: ["anxiety",
      "cognitive decline",
      "depression"],
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

// hmmmmmm Hello noooo! get out
// haha                                // we didnt look at your code! Is that so?=)

  function webMD(ailments, medications){
      let bestmeds=[];
      let maxTreated=0;
      for (const medication of medications){
          count = 0;
          for (const ailment of ailments){
              if (medication.treatableSymptoms.includes(ailment)){
                  count+=1
                  if (count>maxTreated){
                      bestmeds=[medication.name]
                      maxTreated=count
                  }
                  else if (count===maxTreated){
                      bestmeds.push(medication.name)
                  }
              }
          }
      }
    //if no matches
    if (bestmeds.length==0){
      bestmeds=["You're doomed; make peace with your Lord, or maybe Satan(who might be your lord)"]
    }
    return bestmeds;
  }
  console.log(webMD(ailments2, medications))