   /**

import app from '@/module/firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Initialize Firebase

const db = getFirestore(app);

 * Function to add data from an array to a Firebase Firestore collection.
 * @param {Array} dataArray - Array of objects to be added.
 * @param {string} collectionName - The name of the Firestore collection.
 
   
   
   
   async function addDataToFirebase(dataArray, collectionName) {
  try {
    if (!Array.isArray(dataArray)) {
      throw new Error("Input data must be an array.");
    }

    const collectionRef = collection(db, collectionName);

    const promises = dataArray.map(async (data) => {
      if (typeof data == "object") {
        return await addDoc(collectionRef, data);
      } else {
        throw new Error("Each item in the array must be an object.");
      }
    });

    const results = await Promise.all(promises);
    console.log("Data added successfully:", results);
  } catch (error) {
    console.error("Error adding data to Firebase:", error.message);
  }
}

// Example usage
const sampleData = [
{
  "question_Five": "The old woman, her face etched with wrinkles, smiled warmly at the child.",
  "question_Four": "Her eyes, though faded with age, sparkled with kindness and wisdom.",
  "question_Three": "She had lived a long life, filled with both joy and sorrow.",
  "question_Two": "Her presence radiated a sense of peace and tranquility.",
  "question_One": "The child, initially shy, was drawn to her gentle aura.",
  "answerOne": "C, B, A, D, E",
  "id": "101"
},
{
  "question_Five": "The abandoned factory, its windows shattered and walls crumbling, stood as a relic of a bygone era.",
  "question_Four": "Nature had slowly begun to reclaim the space, with vines creeping up the walls and weeds sprouting through the cracks.",
  "question_Three": "It once buzzed with activity, a symbol of industrial progress.",
  "question_Two": "Now, it stood silent and empty, a haunting reminder of the past.",
  "question_One": "The rusted machinery and scattered debris bore witness to its former glory.",
  "answerOne": "C, A, E, D, B",
  "id": "102"
},
{
  "question_Five": "The adventurer, his heart pounding with excitement, stood at the edge of the uncharted territory.",
  "question_Four": "He had dreamed of this moment for years, and now it was finally within his grasp.",
  "question_Three": "Maps and legends hinted at untold wonders and hidden dangers.",
  "question_Two": "With a deep breath and a determined spirit, he ventured into the unknown.",
  "question_One": "The thrill of discovery beckoned him forward.",
  "answerOne": "B, C, A, E, D",
  "id": "103"
},
{
  "question_Five": "The detective, his mind sharp and focused, examined the crime scene meticulously.",
  "question_Four": "Every detail, no matter how small, could hold the key to solving the mystery.",
  "question_Three": "The victim lay motionless, surrounded by a pool of blood.",
  "question_Two": "He carefully collected evidence, piecing together the fragments of a puzzle.",
  "question_One": "The air was thick with tension and the weight of unanswered questions.",
  "answerOne": "C, A, D, B, E",
  "id": "104"
},
{
  "question_Five": "The chef, his hands moving with practiced precision, prepared the dish with artistry and passion.",
  "question_Four": "Each ingredient was carefully selected and expertly combined.",
  "question_Three": "The aroma filled the kitchen, tantalizing the senses.",
  "question_Two": "He poured his heart and soul into his culinary creations.",
  "question_One": "The final result was a masterpiece, a symphony of flavors and textures.",
  "answerOne": "B, D, C, A, E",
  "id": "105"
},
{
  "question_Five": "The athlete, his muscles burning and lungs aching, pushed himself to the limit.",
  "question_Four": "He had trained relentlessly for this moment, sacrificing comfort and leisure.",
  "question_Three": "The roar of the crowd fueled his determination.",
  "question_Two": "He crossed the finish line, collapsing in exhaustion but triumphant.",
  "question_One": "The taste of victory was sweet, a reward for his unwavering dedication.",
  "answerOne": "A, D, C, B, E",
  "id": "106"
},
{
  "question_Five": "The teacher, her voice filled with enthusiasm, inspired her students to reach their full potential.",
  "question_Four": "She nurtured their curiosity and encouraged their dreams.",
  "question_Three": "Her classroom was a haven of learning, where knowledge was cherished and minds were expanded.",
  "question_Two": "She believed in the power of education to transform lives.",
  "question_One": "Her impact extended beyond the classroom, shaping the future of her students.",
  "answerOne": "C, A, D, B, E",
  "id": "107"
},
{
  "question_Five": "The writer, his pen gliding across the page, poured his thoughts and emotions into words.",
  "question_Four": "Stories unfolded, characters came to life, and worlds were created.",
  "question_Three": "He found solace and freedom in the act of writing.",
  "question_Two": "His imagination knew no bounds, transporting readers to realms both familiar and fantastical.",
  "question_One": "His words painted vivid pictures, evoking a tapestry of emotions.",
  "answerOne": "A, D, B, E, C",
  "id": "108"
},
{
  "question_Five": "The musician, her fingers dancing across the keys, filled the concert hall with enchanting melodies.",
  "question_Four": "The music soared, weaving a tapestry of emotions that resonated with the audience.",
  "question_Three": "Each note was infused with passion and artistry.",
  "question_Two": "Her performance was a testament to years of dedicated practice and unwavering love for her craft.",
  "question_One": "The silence in the hall was broken only by the thunderous applause that erupted at the end.",
  "answerOne": "A, C, B, D, E",
  "id": "109"
},
{
  "question_Five": "The scientist, her eyes glued to the microscope, explored the mysteries of the universe.",
  "question_Four": "She sought to unravel the secrets of nature, pushing the boundaries of human knowledge.",
  "question_Three": "Her laboratory was a sanctuary of discovery, where curiosity reigned supreme.",
  "question_Two": "With each experiment, she inched closer to understanding the intricate workings of the world.",
  "question_One": "Her dedication to scientific inquiry was unwavering, driven by a thirst for knowledge and a desire to make a difference.",
  "answerOne": "C, A, D, B, E",
  "id": "110"
},
{
  "question_Five": "The entrepreneur, his mind buzzing with ideas, envisioned a future filled with possibilities.",
  "question_Four": "He was driven by a passion to innovate and create, to leave his mark on the world.",
  "question_Three": "He embraced challenges, seeing them as opportunities for growth and learning.",
  "question_Two": "His determination and resilience fueled his journey towards success.",
  "question_One": "He built his business from the ground up, transforming his vision into reality.",
  "answerOne": "A, D, C, B, E",
  "id": "111"
},
{
  "question_Five": "The photographer, her lens capturing fleeting moments in time, froze them forever in photographs.",
  "question_Four": "Her images told stories, evoked emotions, and sparked conversations.",
  "question_Three": "She had a keen eye for detail, finding beauty in the ordinary and extraordinary alike.",
  "question_Two": "Her camera was an extension of herself, a tool for expressing her unique perspective on the world.",
  "question_One": "Through her lens, she shared her vision with the world, inviting others to see the world through her eyes.",
  "answerOne": "A, C, D, B, E",
  "id": "112"
},
{
  "question_Five": "The architect, his blueprints spread across the table, meticulously planned every detail of the structure.",
  "question_Four": "He envisioned spaces that were both functional and aesthetically pleasing, blending form and function seamlessly.",
  "question_Three": "His designs were innovative and sustainable, pushing the boundaries of architectural design.",
  "question_Two": "He sought to create buildings that were not just structures, but works of art that inspired and uplifted.",
  "question_One": "His creations stood as testaments to his vision and creativity, shaping the skylines of cities and enriching the lives of those who inhabited them.",
  "answerOne": "A, D, B, C, E",
  "id": "113"
},
{
  "question_Five": "The doctor, her stethoscope pressed against the patient's chest, listened intently to the rhythm of their heart.",
  "question_Four": "She was dedicated to healing and comforting, to alleviating suffering and restoring health.",
  "question_Three": "Her touch was gentle, her words reassuring, and her presence a source of comfort.",
  "question_Two": "She treated her patients with compassion and empathy, recognizing the human being behind the illness.",
  "question_One": "Her knowledge and expertise were invaluable, but it was her humanity that truly made a difference.",
  "answerOne": "A, C, D, B, E",
  "id": "114"
},
{
  "question_Five": "The lawyer, her voice ringing out in the courtroom, passionately defended her client's rights.",
  "question_Four": "She was a champion of justice, fighting for fairness and equality.",
  "question_Three": "Her arguments were sharp and persuasive, her logic irrefutable.",
  "question_Two": "She believed in the power of the law to protect the innocent and uphold the truth.",
  "question_One": "Her dedication to her clients was unwavering, her commitment to justice unyielding.",
  "answerOne": "A, C, B, D, E",
  "id": "115"
},
{
  "question_Five": "The pilot, his hands firmly on the controls, guided the aircraft through the stormy skies.",
  "question_Four": "He remained calm and focused, navigating the turbulence with skill and precision.",
  "question_Three": "Lightning flashed, thunder roared, and the plane bucked and swayed.",
  "question_Two": "He had faced countless challenges in his career, but his passion for flying never wavered.",
  "question_One": "He safely landed the plane, bringing his passengers to their destination despite the adverse conditions.",
  "answerOne": "A, C, B, D, E",
  "id": "116"
},
{
  "question_Five": "The farmer, his hands calloused from years of toil, nurtured the land with love and care.",
  "question_Four": "He understood the rhythms of nature, the delicate balance between earth and sky.",
  "question_Three": "He planted seeds, tended crops, and harvested the fruits of his labor.",
  "question_Two": "His connection to the land ran deep, a bond forged through generations of farmers before him.",
  "question_One": "He provided sustenance for his community, nourishing both body and soul.",
  "answerOne": "A, C, D, B, E",
  "id": "117"
},
{
  "question_Five": "The firefighter, his face grimy with soot, emerged from the burning building carrying a child to safety.",
  "question_Four": "He rushed back into the inferno, risking his life to save others.",
  "question_Three": "Flames danced and smoke billowed, engulfing the structure in a fiery embrace.",
  "question_Two": "His courage and selflessness knew no bounds, driven by a deep sense of duty to protect and serve.",
  "question_One": "He was a hero, a beacon of hope in the face of danger.",
  "answerOne": "C, A, D, B, E",
  "id": "118"
},
{
  "question_Five": "The astronaut, her gaze fixed on the Earth below, marveled at the beauty and fragility of our planet.",
  "question_Four": "She had ventured into the vastness of space, leaving behind the familiar comforts of home.",
  "question_Three": "From her vantage point, she saw no borders, no divisions, only a unified world.",
  "question_Two": "Her experience transformed her perspective, instilling a profound sense of awe and responsibility.",
  "question_One": "She returned to Earth with a renewed appreciation for our interconnectedness and a commitment to protecting our shared home.",
  "answerOne": "A, C, D, B, E",
  "id": "119"
},
{
  "question_Five": "The engineer, her mind brimming with innovative solutions, tackled complex problems with creativity and precision.",
  "question_Four": "She designed bridges that spanned vast distances, buildings that touched the sky, and machines that revolutionized industries.",
  "question_Three": "Her creations were testaments to human ingenuity, pushing the boundaries of what was possible.",
  "question_Two": "She was a problem-solver, a builder, a visionary who shaped the world around her.",
  "question_One": "Her work improved lives, connected communities, and advanced human progress.",
  "answerOne": "A, D, B, C, E",
  "id": "120"
},
{
  "question_Five": "The librarian, surrounded by towering shelves of books, was a guardian of knowledge and stories.",
  "question_Four": "She guided readers on literary journeys, recommending hidden gems and beloved classics.",
  "question_Three": "Her library was a sanctuary of learning, a place where imaginations soared and minds expanded.",
  "question_Two": "She fostered a love of reading, nurturing a passion for words and ideas.",
  "question_One": "She was a keeper of stories, a connector of people and ideas, a champion of literacy and learning.",
  "answerOne": "A, C, B, D, E",
  "id": "121"
},
{
  "question_Five": "The nurse, her hands gentle and caring, tended to the sick and injured with compassion and expertise.",
  "question_Four": "She was a source of comfort and support, a beacon of hope in times of need.",
  "question_Three": "She worked tirelessly, often behind the scenes, ensuring the well-being of her patients.",
  "question_Two": "Her dedication to her profession was unwavering, her commitment to patient care absolute.",
  "question_One": "She was a healer, a caregiver, an advocate for those entrusted to her care.",
  "answerOne": "A, C, D, B, E",
  "id": "122"
},
{
  "question_Five": "The social worker, her heart filled with empathy, dedicated her life to helping others overcome adversity.",
  "question_Four": "She empowered individuals, strengthened families, and built stronger communities.",
  "question_Three": "She worked with the most vulnerable members of society, advocating for their rights and providing support.",
  "question_Two": "Her compassion and dedication knew no bounds, her impact immeasurable.",
  "question_One": "She was a voice for the voiceless, a champion for social justice, a force for positive change.",
  "answerOne": "A, C, D, B, E",
  "id": "123"
},
{
  "question_Five": "The veterinarian, his touch gentle and reassuring, cared for animals with kindness and expertise.",
  "question_Four": "He healed the sick, comforted the injured, and advocated for the well-being of all creatures great and small.",
  "question_Three": "His clinic was a haven for animals, a place where they received compassionate care and loving attention.",
  "question_Two": "He understood the special bond between humans and animals, recognizing the important role they play in our lives.",
  "question_One": "He was a champion for animal welfare, a voice for the voiceless, a protector of those who depend on us.",
  "answerOne": "A, C, D, B, E",
  "id": "124"
},
{
  "question_Five": "The journalist, her pen a powerful weapon against injustice, exposed corruption and held those in power accountable.",
  "question_Four": "She sought truth and reported it fearlessly, even in the face of adversity.",
  "question_Three": "Her words sparked conversations, challenged perspectives, and inspired action.",
  "question_Two": "She believed in the power of the press to inform, educate, and empower.",
  "question_One": "She was a watchdog, a truth-teller, a guardian of democracy.",
  "answerOne": "A, C, B, D, E",
  "id": "125"
},
{
  "question_Five": "The environmentalist, her passion for nature unwavering, dedicated her life to protecting our planet.",
  "question_Four": "She fought for clean air and water, for the preservation of forests and oceans, for the survival of endangered species.",
  "question_Three": "She inspired others to join the cause, to become stewards of the Earth.",
  "question_Two": "Her voice was a powerful force for change, her actions a testament to her commitment.",
  "question_One": "She was a guardian of nature, a champion for sustainability, a voice for the planet.",
  "answerOne": "A, D, C, B, E",
  "id": "126"
},




  {
    "question_Five": "The writer, her words flowing like a river, crafted stories that transported readers to other worlds.",
    "question_Four": "Her characters leaped off the page, their lives and struggles resonating with readers.",
    "question_Three": "She wove tales of love, loss, adventure, and intrigue, capturing the essence of the human experience.",
    "question_Two": "Her imagination knew no bounds, her creativity a boundless source of wonder.",
    "question_One": "She was a storyteller, a weaver of dreams, a magician with words.",
    "answerOne": "A, C, B, D, E",
    "id": "128"
  },
  {
    "question_Five": "The musician, his fingers flying across the strings, poured his heart and soul into every note.",
    "question_Four": "His music was a reflection of his life, a tapestry of emotions, experiences, and dreams.",
    "question_Three": "He played with passion and intensity, captivating audiences with his virtuosity.",
    "question_Two": "His melodies soared, his rhythms pulsed, his music resonated with the depths of human emotion.",
    "question_One": "He was a maestro, a conduit of emotions, a master of his instrument.",
    "answerOne": "A, C, B, D, E",
    "id": "129"
  },
  {
    "question_Five": "The dancer, her body a graceful instrument of expression, moved with fluidity and precision.",
    "question_Four": "Her every step, every gesture, every leap conveyed a story, an emotion, a dream.",
    "question_Three": "She commanded the stage with her presence, captivating audiences with her artistry.",
    "question_Two": "Her movements were poetry in motion, a symphony of grace and power.",
    "question_One": "She was an artist, an athlete, a storyteller through movement.",
    "answerOne": "A, C, B, D, E",
    "id": "130"
  },
  {
    "question_Five": "The actor, his voice resonating through the theater, brought characters to life with depth and nuance.",
    "question_Four": "He embodied their emotions, their struggles, their triumphs, making them real and relatable.",
    "question_Three": "He commanded the stage with his presence, captivating audiences with his portrayal.",
    "question_Two": "His performance was a transformation, a journey into the heart and soul of another being.",
    "question_One": "He was a chameleon, a storyteller, a master of illusion.",
    "answerOne": "A, C, B, D, E",
    "id": "131"
  },
  {
    "question_Five": "The teacher, his passion for knowledge contagious, ignited a spark of curiosity in his students.",
    "question_Four": "He challenged them to think critically, to question assumptions, to explore new ideas.",
    "question_Three": "He nurtured their minds, fostering a love of learning that would last a lifetime.",
    "question_Two": "His classroom was a space of exploration, where knowledge was shared and minds expanded.",
    "question_One": "He was a mentor, a guide, a beacon of enlightenment.",
    "answerOne": "A, C, B, D, E",
    "id": "132"
  },
  {
    "question_Five": "The scientist, her curiosity insatiable, sought to unravel the mysteries of the universe.",
    "question_Four": "She conducted experiments, analyzed data, and formulated theories, pushing the boundaries of human knowledge.",
    "question_Three": "Her discoveries revolutionized our understanding of the world, opening up new possibilities for the future.",
    "question_Two": "Her dedication to scientific inquiry was unwavering, her pursuit of truth relentless.",
    "question_One": "She was an explorer, an innovator, a pioneer in the realm of science.",
    "answerOne": "A, D, B, C, E",
    "id": "133"
  },
  {
    "question_Five": "The entrepreneur, his vision bold and ambitious, dared to dream of a better future.",
    "question_Four": "He took risks, embraced challenges, and persevered through setbacks, driven by an unwavering belief in his ideas.",
    "question_Three": "He created jobs, fostered innovation, and contributed to the growth of the economy.",
    "question_Two": "His leadership inspired others, his determination fueled his success.",
    "question_One": "He was a visionary, a risk-taker, a builder of dreams.",
    "answerOne": "A, D, C, B, E",
    "id": "134"
  },
  {
    "question_Five": "The athlete, his dedication unwavering, pushed his body and mind to the limits of human potential.",
    "question_Four": "He trained tirelessly, honing his skills and perfecting his technique.",
    "question_Three": "He competed with passion and sportsmanship, inspiring others with his determination and resilience.",
    "question_Two": "His achievements were a testament to his hard work, his discipline, and his unwavering pursuit of excellence.",
    "question_One": "He was a champion, an inspiration, a testament to the human spirit.",
    "answerOne": "A, D, B, C, E",
    "id": "135"
  },
  {
    "question_Five": "The chef, his culinary creations a symphony of flavors, tantalized taste buds and delighted diners.",
    "question_Four": "He combined ingredients with artistry and precision, transforming ordinary meals into extraordinary experiences.",
    "question_Three": "His dishes were a fusion of creativity and passion, a celebration of taste and texture.",
    "question_Two": "His kitchen was a laboratory of culinary innovation, where he experimented with new flavors and techniques.",
    "question_One": "He was an artist, a scientist, a master of the culinary arts.",
    "answerOne": "A, D, B, C, E",
    "id": "136"
  },
  {
    "question_Five": "The architect, her designs a blend of form and function, shaped the skylines of cities and the lives of those who inhabited them.",
    "question_Four": "She created spaces that were both beautiful and practical, inspiring and sustainable.",
    "question_Three": "Her buildings were testaments to her vision, her creativity, and her commitment to excellence.",
    "question_Two": "She envisioned structures that were not just buildings, but works of art that enriched the human experience.",
    "question_One": "She was an artist, an engineer, a visionary who shaped the world around her.",
    "answerOne": "A, D, B, C, E",
    "id": "137"
  },
  {
    "question_Five": "The doctor, his compassion boundless, dedicated his life to healing and comforting those in need.",
    "question_Four": "He treated his patients with empathy and respect, recognizing the human being behind the illness.",
    "question_Three": "His knowledge and expertise were invaluable, but it was his humanity that truly made a difference.",
    "question_Two": "He alleviated suffering, restored hope, and improved the lives of countless individuals.",
    "question_One": "He was a healer, a caregiver, a champion of human well-being.",
    "answerOne": "A, D, B, C, E",
    "id": "138"
  },
  {
    "question_Five": "The lawyer, her commitment to justice unwavering, fought tirelessly to protect the rights of the innocent.",
    "question_Four": "She defended the accused, challenged injustice, and upheld the principles of fairness and equality.",
    "question_Three": "Her courtroom was a battleground for truth and justice, where she wielded her legal expertise with precision and passion.",
    "question_Two": "Her voice was a powerful force for change, her actions a testament to her unwavering belief in the law.",
    "question_One": "She was an advocate, a defender, a champion of justice.",
    "answerOne": "A, C, B, D, E",
    "id": "139"
  },
  {
    "question_Five": "The pilot, his eyes fixed on the horizon, navigated the skies with skill and precision.",
    "question_Four": "He soared above the clouds, a master of his aircraft and the elements.",
    "question_Three": "He transported passengers and cargo across vast distances, connecting people and places.",
    "question_Two": "His passion for flying was evident in every maneuver, his dedication to safety unwavering.",
    "question_One": "He was an aviator, an explorer, a master of the skies.",
    "answerOne": "A, C, B, D, E",
    "id": "140"
  },
  {
    "question_Five": "The farmer, his hands weathered by years of toil, nurtured the land with wisdom and respect.",
    "question_Four": "He understood the delicate balance of nature, the interconnectedness of all living things.",
    "question_Three": "He cultivated the soil, planted seeds, and harvested the fruits of his labor, providing sustenance for his community.",
    "question_Two": "His connection to the earth ran deep, a bond forged through generations of farmers before him.",
    "question_One": "He was a steward of the land, a provider, a guardian of our food supply.",
    "answerOne": "A, C, D, B, E",
    "id": "141"
  },
  {
    "question_Five": "The firefighter, his courage unwavering, faced danger head-on to protect lives and property.",
    "question_Four": "He rushed into burning buildings, battled raging infernos, and rescued those trapped by flames.",
    "question_Three": "His bravery and selflessness inspired others, his actions a testament to the human spirit's capacity for heroism.",
    "question_Two": "He was a symbol of hope, a beacon of light in the face of adversity.",
    "question_One": "He was a hero, a lifesaver, a guardian of our communities.",
    "answerOne": "A, D, B, C, E",
    "id": "142"
  },
  {
    "question_Five": "The astronaut, her gaze fixed on the stars, ventured into the vast unknown, pushing the boundaries of human exploration.",
    "question_Four": "She orbited the Earth, walked on the Moon, and explored the depths of space, expanding our understanding of the universe.",
    "question_Three": "Her courage and curiosity inspired generations, her achievements a testament to human ingenuity and perseverance.",
    "question_Two": "She was a pioneer, a trailblazer, a symbol of humanity's relentless pursuit of knowledge and adventure.",
    "question_One": "She was an explorer, a scientist, a voyager among the stars.",
    "answerOne": "A, D, B, C, E",
    "id": "143"
  },
  {
    "question_Five": "The engineer, her mind a powerhouse of innovation, designed and built the structures and systems that shape our world.",
    "question_Four": "She created bridges that spanned vast distances, buildings that touched the sky, and machines that revolutionized industries.",
    "question_Three": "Her ingenuity and problem-solving skills transformed ideas into reality, improving lives and advancing human progress.",
    "question_Two": "Her creations were testaments to her intellect, her creativity, and her dedication to excellence.",
    "question_One": "She was an innovator, a builder, a problem-solver who shaped the world around her.",
    "answerOne": "A, D, B, C, E",
    "id": "144"
  },
  {
    "question_Five": "The librarian, her love of books contagious, opened up worlds of knowledge and imagination to countless readers.",
    "question_Four": "She curated collections, organized shelves, and guided readers on literary journeys, fostering a love of learning.",
    "question_Three": "Her library was a sanctuary of knowledge, a place where stories came alive and minds expanded.",
    "question_Two": "She was a guardian of stories, a champion of literacy, a beacon of knowledge in a world hungry for information.",
    "question_One": "She was a teacher, a guide, a keeper of the written word.",
    "answerOne": "A, C, B, D, E",
    "id": "145"
  },
  {
    "question_Five": "The nurse, her touch gentle and reassuring, provided care and comfort to those in need.",
    "question_Four": "She administered medications, monitored vital signs, and offered emotional support, ensuring the well-being of her patients.",
    "question_Three": "Her compassion and dedication were evident in every interaction, her presence a source of solace and strength.",
    "question_Two": "She was a caregiver, an advocate, a beacon of hope in times of illness and vulnerability.",
    "question_One": "She was a healer, a comforter, an angel of mercy.",
    "answerOne": "A, D, B, C, E",
    "id": "146"
  },
  {
    "question_Five": "The social worker, her heart filled with empathy, dedicated her life to helping others overcome adversity.",
    "question_Four": "She empowered individuals, strengthened families, and advocated for social justice, creating a more equitable and compassionate society.",
    "question_Three": "Her work addressed poverty, inequality, and injustice, providing support and guidance to those facing life's challenges.",
    "question_Two": "Her compassion and dedication were unwavering, her impact on the lives of others immeasurable.",
    "question_One": "She was a champion for the vulnerable, a voice for the voiceless, an agent of positive change.",
    "answerOne": "A, C, D, B, E",
    "id": "147"
  },
  {
    "question_Five": "The veterinarian, his love for animals evident in every interaction, dedicated his life to their care and well-being.",
    "question_Four": "He treated their illnesses, mended their injuries, and advocated for their welfare, ensuring they received the compassion and respect they deserved.",
    "question_Three": "His clinic was a haven for animals, a place where they received expert care and loving attention.",
    "question_Two": "He was a healer, a protector, a champion for those who cannot speak for themselves.",
    "question_One": "He was a veterinarian, an animal advocate, a guardian of our furry, feathered, and scaled friends.",
    "answerOne": "A, C, D, B, E",
    "id": "148"
  },
  {
    "question_Five": "The journalist, her pen a powerful tool for truth and justice, exposed corruption, held those in power accountable, and gave voice to the voiceless.",
    "question_Four": "She investigated stories, uncovered facts, and reported the news with integrity and courage, informing and empowering the public.",
    "question_Three": "Her words sparked conversations, challenged perspectives, and inspired action, shaping public discourse and holding a mirror to society.",
    "question_Two": "She was a watchdog, a truth-teller, a guardian of democracy in a world where information is power.",
    "question_One": "She was a journalist, a storyteller, a champion of the free press.",
    "answerOne": "A, C, B, D, E",
    "id": "149"
  },
  {
    "question_Five": "The environmentalist, her passion for nature unwavering, dedicated her life to protecting our planet.",
    "question_Four": "She fought for clean air and water, for the preservation of forests and oceans, for the survival of endangered species.",
    "question_Three": "She educated, advocated, and inspired, empowering others to join the cause and become stewards of the Earth.",
    "question_Two": "Her voice was a powerful force for change, her actions a testament to her unwavering commitment to environmental sustainability.",
    "question_One": "She was a guardian of nature, a champion for sustainability, a voice for the planet.",
    "answerOne": "A, D, C, B, E",
    "id": "150"
  },

  
    {
      "question_Five": "The ramifications of this decision were far-reaching, impacting not only the individuals involved but also the broader community.",
      "question_Four": "The council members deliberated for hours, weighing the potential consequences of their actions.",
      "question_Three": "The town council was faced with a difficult dilemma, a decision that would shape the future of their community.",
      "question_Two": "The debate was heated, with passionate arguments on both sides of the issue.",
      "question_One": "Ultimately, they reached a consensus, a decision that would forever alter the course of their town's history.",
      "answerOne": "C, D, B, A, E",
      "id": "151"
    },
    {
      "question_Five": "The expedition was fraught with danger, with treacherous terrain, unpredictable weather, and the constant threat of wild animals.",
      "question_Four": "But they pressed on, driven by an insatiable curiosity and a thirst for knowledge.",
      "question_Three": "Their goal was to uncover the secrets of the ancient civilization, to shed light on a lost chapter of human history.",
      "question_Two": "A team of archaeologists ventured into the heart of the dense jungle, their mission to explore the ruins of a long-lost city.",
      "question_One": "They faced numerous challenges, their resolve tested at every turn, but their determination never wavered.",
      "answerOne": "D, C, A, E, B",
      "id": "152"
    },
    {
      "question_Five": "The concert hall was abuzz with excitement as the renowned pianist took the stage, his presence electrifying the atmosphere.",
      "question_Four": "The music flowed through him, a torrent of emotions that captivated the audience.",
      "question_Three": "His fingers danced across the keys, effortlessly producing a cascade of melodies that filled the hall.",
      "question_Two": "The performance was a masterpiece, a testament to the pianist's years of dedication and mastery of his craft.",
      "question_One": "The audience was mesmerized, transported to another world by the sheer beauty and power of the music.",
      "answerOne": "A, C, B, D, E",
      "id": "153"
    },
    {
      "question_Five": "The novel, a sprawling epic that spanned generations and continents, explored the complexities of human relationships and the enduring power of love.",
      "question_Four": "The characters were richly drawn, their lives intertwined in a tapestry of joy, sorrow, and resilience.",
      "question_Three": "The story unfolded against a backdrop of historical events, weaving a narrative that was both intimate and sweeping in scope.",
      "question_Two": "The author's prose was lyrical and evocative, painting vivid pictures in the reader's mind.",
      "question_One": "It was a literary masterpiece, a testament to the author's profound understanding of the human condition.",
      "answerOne": "A, C, B, D, E",
      "id": "154"
    },
    {
      "question_Five": "The company, once a struggling startup, had become a global leader in its industry, its innovative products and services transforming the way people lived and worked.",
      "question_Four": "Its success was a testament to the vision, dedication, and hard work of its founders and employees.",
      "question_Three": "It had overcome numerous challenges, adapted to changing market conditions, and consistently pushed the boundaries of innovation.",
      "question_Two": "From humble beginnings in a garage, it had grown into a multinational corporation with a global reach.",
      "question_One": "Its story was an inspiration to aspiring entrepreneurs, a testament to the power of perseverance and the pursuit of excellence.",
      "answerOne": "B, D, C, A, E",
      "id": "155"
    },
    {
      "question_Five": "The debate raged on, with both sides presenting compelling arguments and counterarguments, each seeking to sway public opinion in their favor.",
      "question_Four": "The issue at stake was one of great importance, with far-reaching implications for the future of the country.",
      "question_Three": "The media fueled the flames, providing a platform for the opposing viewpoints and analyzing every twist and turn of the debate.",
      "question_Two": "The nation was divided, with passionate voices on both sides of the issue, each convinced of the righteousness of their cause.",
      "question_One": "The outcome remained uncertain, the fate of the nation hanging in the balance as the debate reached its climax.",
      "answerOne": "D, B, A, C, E",
      "id": "156"
    },
    {
      "question_Five": "The film, a poignant exploration of love, loss, and redemption, resonated with audiences on a deeply emotional level.",
      "question_Four": "The actors delivered powerful performances, bringing the characters to life with authenticity and nuance.",
      "question_Three": "The cinematography was breathtaking, capturing the beauty and fragility of the human experience.",
      "question_Two": "The story unfolded against a backdrop of social and political upheaval, exploring the resilience of the human spirit in the face of adversity.",
      "question_One": "It was a cinematic masterpiece, a testament to the power of storytelling to move and inspire.",
      "answerOne": "A, C, B, D, E",
      "id": "157"
    },
    {
      "question_Five": "The athlete, her body honed to perfection through years of dedicated training, stood poised at the starting line, her eyes fixed on the finish line.",
      "question_Four": "The crowd roared with anticipation, their cheers echoing through the stadium as the starting gun fired.",
      "question_Three": "She burst forward, her muscles propelling her with incredible speed and grace.",
      "question_Two": "The race was a test of endurance, a battle against both her competitors and her own limitations.",
      "question_One": "She crossed the finish line, victorious, her arms raised in triumph as the cheers of the crowd washed over her.",
      "answerOne": "A, D, C, B, E",
      "id": "158"
    },
    {
      "question_Five": "The scientist, his mind a crucible of ideas, tirelessly pursued his research, driven by an insatiable curiosity and a desire to unlock the secrets of the universe.",
      "question_Four": "His laboratory was a sanctuary of knowledge, a place where he conducted experiments, analyzed data, and formulated theories that challenged conventional wisdom.",
      "question_Three": "His discoveries revolutionized our understanding of the natural world, pushing the boundaries of human knowledge and inspiring future generations of scientists.",
      "question_Two": "He was a pioneer, an innovator, a visionary who dared to question the status quo and explore the unknown.",
      "question_One": "His legacy was one of intellectual curiosity, scientific rigor, and a profound commitment to the pursuit of truth.",
      "answerOne": "A, D, B, C, E",
      "id": "159"
    },
    {
      "question_Five": "The teacher, her classroom a haven of learning, nurtured the minds of her students, fostering a love of knowledge and a passion for discovery.",
      "question_Four": "She inspired them to think critically, to question assumptions, and to embrace the challenges of learning.",
      "question_Three": "Her lessons were engaging and thought-provoking, sparking curiosity and igniting a thirst for knowledge.",
      "question_Two": "She created a safe and supportive environment where students felt comfortable taking risks, exploring new ideas, and expressing themselves freely.",
      "question_One": "Her impact extended beyond the classroom, shaping the lives of her students and inspiring them to reach their full potential.",
      "answerOne": "A, D, C, B, E",
      "id": "160"
    },
    {
      "question_Five": "The detective, his mind sharp and analytical, meticulously examined the crime scene, searching for clues that would lead him to the perpetrator.",
      "question_Four": "He interviewed witnesses, analyzed evidence, and pieced together the fragments of the puzzle, determined to bring justice to the victim.",
      "question_Three": "The case was complex, with twists and turns that kept him guessing, but his dedication to uncovering the truth never wavered.",
      "question_Two": "He followed every lead, no matter how obscure, his instincts guiding him through the labyrinth of deceit and deception.",
      "question_One": "He was a master of deduction, a relentless pursuer of justice, a beacon of hope in a world shrouded in darkness.",
      "answerOne": "A, C, B, D, E",
      "id": "161"
    },
    {
      "question_Five": "The chef, his culinary creations a symphony of flavors and textures, delighted the palates of discerning diners, his dishes a testament to his artistry and passion.",
      "question_Four": "His kitchen was a culinary playground, where he experimented with new ingredients and techniques, pushing the boundaries of gastronomy.",
      "question_Three": "He sourced the finest ingredients, his passion for quality evident in every dish he created.",
      "question_Two": "His presentations were works of art, each plate a canvas on which he painted a masterpiece of culinary delight.",
      "question_One": "He was a culinary maestro, a master of his craft, a creator of edible art that tantalized the senses and nourished the soul.",
      "answerOne": "A, D, B, C, E",
      "id": "162"
    },
    {
      "question_Five": "The architect, her vision a blend of artistry and functionality, designed structures that were not only aesthetically pleasing but also served the needs of their inhabitants.",
      "question_Four": "Her buildings were landmarks, testaments to her creativity and her ability to harmonize form and function.",
      "question_Three": "She considered every detail, from the flow of space to the interplay of light and shadow, creating environments that were both inspiring and practical.",
      "question_Two": "Her designs were innovative and sustainable, reflecting her commitment to creating spaces that were both beautiful and environmentally responsible.",
      "question_One": "She was a visionary, an artist, a master builder who shaped the urban landscape with her creations.",
      "answerOne": "A, D, B, C, E",
      "id": "163"
    },
    {
      "question_Five": "The doctor, her compassion and expertise a beacon of hope for her patients, dedicated her life to healing and alleviating suffering.",
      "question_Four": "She listened attentively, diagnosed accurately, and treated effectively, her patients' well-being her top priority.",
      "question_Three": "Her presence was a source of comfort and reassurance, her touch gentle and healing.",
      "question_Two": "She was a skilled physician, a compassionate caregiver, a champion of health and wellness.",
      "question_One": "Her dedication to her patients extended beyond the clinical setting, her impact felt throughout the community.",
      "answerOne": "A, C, D, B, E",
      "id": "164"
    },
    {
      "question_Five": "The lawyer, his voice a powerful instrument of justice, defended the rights of the accused, ensuring that everyone had a fair trial and equal access to the law.",
      "question_Four": "He was a skilled orator, his arguments persuasive and his logic irrefutable.",
      "question_Three": "He navigated the complexities of the legal system, his knowledge and experience guiding him through the labyrinth of laws and precedents.",
      "question_Two": "He was a champion of justice, a defender of the innocent, a guardian of the legal system.",
      "question_One": "His dedication to his clients was unwavering, his commitment to upholding the principles of justice absolute.",
      "answerOne": "A, C, B, D, E",
      "id": "165"
    },
    {
      "question_Five": "The pilot, his hands steady on the controls, guided the aircraft through the stormy skies, his expertise and calm demeanor reassuring the passengers.",
      "question_Four": "He navigated through turbulence, avoided hazardous weather conditions, and ensured the safe arrival of his passengers at their destination.",
      "question_Three": "His knowledge of aerodynamics and meteorology was extensive, his judgment sound and decisive.",
      "question_Two": "He was a skilled aviator, a master of his craft, a guardian of the skies.",
      "question_One": "His passion for flying was evident in every maneuver, his dedication to safety unwavering.",
      "answerOne": "A, C, B, D, E",
      "id": "166"
    },
    {
      "question_Five": "The farmer, his hands calloused from years of toil, worked the land with a deep respect for nature's rhythms and cycles.",
      "question_Four": "He nurtured the soil, planted seeds, and tended to his crops with care, ensuring a bountiful harvest that would sustain his community.",
      "question_Three": "He understood the delicate balance of the ecosystem, his practices sustainable and environmentally conscious.",
      "question_Two": "He was a steward of the land, a provider of sustenance, a guardian of our food supply.",
      "question_One": "His connection to the earth ran deep, his livelihood intertwined with the health and well-being of the land.",
      "answerOne": "A, C, D, B, E",
      "id": "167"
    },
    {
      "question_Five": "The firefighter, his courage and selflessness an inspiration to all, faced danger head-on, risking his life to protect others from the ravages of fire.",
      "question_Four": "He battled blazes, rescued those trapped in burning buildings, and provided aid and comfort to those affected by disaster.",
      "question_Three": "His bravery and dedication to duty were unwavering, his actions a testament to the human spirit's capacity for heroism.",
      "question_Two": "He was a symbol of hope, a beacon of light in the face of adversity, a true hero in every sense of the word.",
      "question_One": "His presence brought a sense of calm and reassurance to those in distress, his actions speaking louder than words.",
      "answerOne": "A, D, B, C, E",
      "id": "168"
    },
    {
      "question_Five": "The astronaut, her gaze fixed on the stars, ventured into the vast expanse of space, pushing the boundaries of human exploration and expanding our understanding of the universe.",
      "question_Four": "She orbited the Earth, conducted experiments in microgravity, and explored the mysteries of distant planets, her courage and curiosity inspiring generations.",
      "question_Three": "Her journey was a testament to human ingenuity, perseverance, and the relentless pursuit of knowledge.",
      "question_Two": "She was a pioneer, a trailblazer, a symbol of humanity's indomitable spirit and our boundless capacity for discovery.",
      "question_One": "Her legacy was one of scientific advancement, human endeavor, and the boundless possibilities that lie beyond our planet.",
      "answerOne": "A, D, B, C, E",
      "id": "169"
    },
    {
      "question_Five": "The engineer, her mind a powerhouse of innovation and creativity, designed and built the structures and systems that shape our modern world.",
      "question_Four": "She harnessed the forces of nature, creating bridges that spanned vast distances, buildings that soared to the sky, and machines that revolutionized industries.",
      "question_Three": "Her ingenuity and problem-solving skills transformed ideas into reality, improving lives and advancing human progress.",
      "question_Two": "She was a visionary, a builder, a problem-solver who left an indelible mark on the world with her creations.",
      "question_One": "Her legacy was one of innovation, ingenuity, and a profound commitment to improving the human condition through engineering excellence.",
      "answerOne": "A, D, B, C, E",
      "id": "170"
    },
  

  
   ]


addDataToFirebase(sampleData, "Jumble");

export default addDataToFirebase
*/

const test = ()=>{


  return (<>Test</>)
}

export default test 