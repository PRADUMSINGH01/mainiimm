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
      "id": 1,
      "question_One": "Exhausted but safe, they spent the night listening to...",
      "question_Two": "Despite the storm, the team decided to continue their journey.",
      "question_Three": "They had to make several detours due to flooded roads.",
      "question_Four": "The rain poured heavily, making visibility almost impossible.",
      "question_Five": "Eventually, they found shelter in an abandoned cabin.",
      "answerOne": "D B C E A"
    },
    {
      "id": 2,
      "question_One": "After a long day of hiking, they were grateful for the peaceful evening.",
      "question_Two": "They decided to set up a campfire and watch the stars.",
      "question_Three": "The sun was setting, casting an orange glow across the sky.",
      "question_Four": "A gentle breeze started to blow as they made their way towards the beach.",
      "question_Five": "They stopped to admire the view, taking in the tranquility of the moment.",
      "answerOne": "C D E A B"
    },
    {
      "id": 3,
      "question_One": "The crowd paused for a moment, captivated by the beautiful music.",
      "question_Two": "A loud horn blared from a passing car, adding to the chaos of the street.",
      "question_Three": "Amid the noise, a street performer began playing a violin.",
      "question_Four": "The city was bustling with activity as people rushed to their destinations.",
      "question_Five": "As the performance ended, the crowd applauded and resumed their hurried pace.",
      "answerOne": "D B C A E"
    },
    {
      "id": 4,
      "question_One": "It was a quiet morning in the countryside, with the sun peeking through the trees.",
      "question_Two": "Birds chirped softly, signaling the start of a new day.",
      "question_Three": "The farmer began his work, tending to the animals and crops.",
      "question_Four": "Later, he sat down to a simple breakfast, enjoying the peace around him.",
      "question_Five": "As the day progressed, the farm became busier with activity.",
      "answerOne": "A B C D E"
    },
    {
      "id": 5,
      "question_One": "The train arrived at the station on time, but the platform was crowded.",
      "question_Two": "People pushed and shoved to get onto the train as the doors opened.",
      "question_Three": "Amidst the chaos, a young child lost sight of their parent.",
      "question_Four": "A kind stranger noticed the child and helped them find their parent.",
      "question_Five": "Once reunited, the family breathed a sigh of relief and boarded the train.",
      "answerOne": "B A D C E"
    },
    {
      "id": 6,
      "question_One": "The wind picked up, and the waves crashed violently against the rocks.",
      "question_Two": "The storm seemed to grow stronger with each passing minute.",
      "question_Three": "The ship rocked dangerously as it made its way through the storm.",
      "question_Four": "The crew members held on tightly, their faces filled with determination.",
      "question_Five": "Eventually, the storm passed, and the sea became calm again.",
      "answerOne": "D B A C E"
    },
    {
      "id": 7,
      "question_One": "The old mansion stood at the end of the street, its windows dark and lifeless.",
      "question_Two": "Children often dared each other to venture into its spooky halls at night.",
      "question_Three": "Despite its eerie appearance, the mansion had a rich history.",
      "question_Four": "Over time, many people had disappeared mysteriously around the area.",
      "question_Five": "One day, a brave explorer decided to uncover its secrets.",
      "answerOne": "A D B C E"
    },
    {
      "id": 8,
      "question_One": "The conference room was filled with tension as the negotiations began.",
      "question_Two": "Each side was determined to get the best deal possible.",
      "question_Three": "The representatives from both parties exchanged stern words.",
      "question_Four": "Finally, after hours of discussion, they reached a compromise.",
      "question_Five": "The agreement was signed, and both parties left the room satisfied.",
      "answerOne": "A B C D E"
    },
    {
      "id": 9,
      "question_One": "The library was quiet, the only sound was the soft rustle of pages turning.",
      "question_Two": "A young woman sat at a table, deeply engrossed in a book.",
      "question_Three": "As she read, she was transported to a world full of adventure and magic.",
      "question_Four": "The hours passed by quickly as the story captivated her attention.",
      "question_Five": "Eventually, the library closed, and she reluctantly left the book behind.",
      "answerOne": "A B C D E"
    },
    {
      "id": 10,
      "question_One": "The sound of the alarm echoed through the building, waking everyone up.",
      "question_Two": "People scrambled out of bed, trying to get dressed and gather their things.",
      "question_Three": "The fire had started in the kitchen, and the smoke quickly filled the halls.",
      "question_Four": "Emergency responders arrived within minutes to control the situation.",
      "question_Five": "Thankfully, everyone evacuated safely, and the fire was put out in time.",
      "answerOne": "A B C D E"
    },
    {
      "id": 11,
      "question_One": "The sun dipped below the horizon, casting a warm orange glow over the landscape.",
      "question_Two": "The sound of crickets began to fill the air as the evening settled in.",
      "question_Three": "A family gathered around the campfire, roasting marshmallows and telling stories.",
      "question_Four": "The fire crackled and popped, sending sparks into the night sky.",
      "question_Five": "As the night grew darker, they all sat in comfortable silence, gazing at the stars.",
      "answerOne": "C D A E B"
    },

  
  {
    "id": 13,
    "question_One": "The sun rose early over the mountains, casting long shadows across the valley.",
    "question_Two": "The air was crisp, and the smell of pine trees filled the atmosphere.",
    "question_Three": "A group of hikers gathered their gear and set off on the trail.",
    "question_Four": "They passed through dense forests, stopping to admire the view at various points.",
    "question_Five": "After several hours of hiking, they reached the summit and marveled at the breathtaking scenery.",
    "answerOne": "A C D E B"
  },
  {
    "id": 14,
    "question_One": "The kitchen was filled with the smell of freshly baked bread.",
    "question_Two": "A large pot of soup simmered on the stove, adding to the cozy atmosphere.",
    "question_Three": "The family gathered around the table, eagerly waiting for dinner.",
    "question_Four": "The youngest member of the family set the table, placing plates and utensils in their proper places.",
    "question_Five": "As everyone sat down, they shared stories from their day, enjoying each other's company.",
    "answerOne": "B D E A C"
  },
  {
    "id": 15,
    "question_One": "The classroom was quiet as the students listened intently to the teacher's lecture.",
    "question_Two": "Some students took notes, while others stared out the window, lost in thought.",
    "question_Three": "The teacher paused to ask a question, and the class collectively groaned.",
    "question_Four": "A few students raised their hands, eager to answer and demonstrate their understanding.",
    "question_Five": "The bell rang, signaling the end of class, and the students hurriedly packed their bags.",
    "answerOne": "A B D E C"
  },
  {
    "id": 16,
    "question_One": "The circus tent loomed large in the center of the town square.",
    "question_Two": "Children ran excitedly toward the entrance, pulling their parents behind them.",
    "question_Three": "Inside, the performers rehearsed their acts, ensuring everything would be perfect.",
    "question_Four": "The ringmaster appeared in the center of the ring, raising his hand to signal the start of the show.",
    "question_Five": "The audience gasped in awe as acrobats flew through the air and clowns performed their hilarious tricks.",
    "answerOne": "A C E D B"
  },
  {
    "id": 17,
    "question_One": "The garden was lush with vibrant flowers, their colors popping against the greenery.",
    "question_Two": "A gentle breeze swayed the trees, their leaves rustling in the wind.",
    "question_Three": "A gardener carefully pruned the bushes, ensuring each plant was healthy and well-maintained.",
    "question_Four": "The sound of birds chirping filled the air as butterflies flitted between the flowers.",
    "question_Five": "After a long day of work, the gardener stepped back and admired the beauty of the garden.",
    "answerOne": "B C A E D"
  },
  {
    "id": 18,
    "question_One": "The streets were bustling with activity as people went about their daily routines.",
    "question_Two": "Cars honked their horns as they navigated through traffic, trying to avoid the rush hour delays.",
    "question_Three": "Street vendors sold their wares, calling out to passersby and offering samples.",
    "question_Four": "A group of children ran down the sidewalk, laughing and playing together.",
    "question_Five": "Despite the chaos, there was a sense of community, as everyone seemed to know one another.",
    "answerOne": "E A B C D"
  },
  {
    "id": 19,
    "question_One": "The bookstore was quiet, with only the sound of pages turning and soft footsteps.",
    "question_Two": "Customers browsed through the aisles, carefully selecting books to add to their collection.",
    "question_Three": "A friendly clerk offered recommendations, sharing her favorite titles with eager readers.",
    "question_Four": "In the back corner, a small café served coffee and pastries, providing a cozy spot to read.",
    "question_Five": "As the afternoon wore on, the store began to fill with more people, each lost in their own world of books.",
    "answerOne": "A B C E D"
  },
  {
    "id": 20,
    "question_One": "The airport terminal was crowded with travelers, all rushing to their gates.",
    "question_Two": "Announcements echoed over the loudspeakers, informing passengers of flight delays and gate changes.",
    "question_Three": "A family sat in the waiting area, their luggage scattered around them as they nervously checked the time.",
    "question_Four": "In the distance, a plane could be seen taxiing down the runway, ready for takeoff.",
    "question_Five": "Eventually, the family stood up and made their way to the gate, relieved that their flight was finally boarding.",
    "answerOne": "E C A B D"
  },
  {
    "id": 21,
    "question_One": "The night sky was filled with stars, twinkling like diamonds against the dark expanse.",
    "question_Two": "A small campfire crackled in front of the group, casting flickering shadows on their faces.",
    "question_Three": "The group sat in silence, each lost in their own thoughts, staring at the fire.",
    "question_Four": "A few of them started to tell stories, their voices low and hushed as they tried to create an eerie atmosphere.",
    "question_Five": "As the night grew colder, they huddled closer to the fire, enjoying the warmth and the company of their friends.",
    "answerOne": "D B A E C"
  },
  {
    "id": 22,
    "question_One": "The laboratory was filled with the faint smell of chemicals, and the sound of bubbling liquids could be heard.",
    "question_Two": "A scientist carefully mixed a series of ingredients in a beaker, her face focused in concentration.",
    "question_Three": "Nearby, a colleague worked at a microscope, peering into a sample to analyze its properties.",
    "question_Four": "On the far side of the room, a machine whirred and beeped as it ran an experiment.",
    "question_Five": "After hours of work, the team gathered around the results, discussing their findings excitedly.",
    "answerOne": "C B D A E"
  },
  {
    "id": 23,
    "question_One": "The football field was packed with players, coaches, and spectators, all eagerly awaiting the game.",
    "question_Two": "The players stretched and warmed up, preparing themselves for the intense competition ahead.",
    "question_Three": "The referee blew the whistle, signaling the start of the match.",
    "question_Four": "The teams battled fiercely, each trying to outsmart and outplay the other.",
    "question_Five": "At the final whistle, the crowd erupted into cheers as the winning team celebrated their victory.",
    "answerOne": "B D A C E"
  },

  {
    "id": 24,
    "question_One": "The park was bustling with families enjoying the warm weather.",
    "question_Two": "Children ran around, their laughter echoing across the green fields.",
    "question_Three": "Picnickers spread out blankets and unpacked baskets filled with sandwiches and drinks.",
    "question_Four": "A couple strolled hand in hand along the winding path, admiring the flowers in bloom.",
    "question_Five": "In the distance, a group of joggers circled the park's running track.",
    "answerOne": "A C E B D"
  },
  {
    "id": 25,
    "question_One": "The museum was filled with visitors, each absorbed in the exhibits around them.",
    "question_Two": "Some people lingered in front of the paintings, carefully studying the brushstrokes.",
    "question_Three": "A group of students gathered around a large dinosaur skeleton, taking notes for their project.",
    "question_Four": "In the interactive section, children pressed buttons and watched displays come to life.",
    "question_Five": "After hours of exploring, the visitors made their way toward the gift shop to purchase souvenirs.",
    "answerOne": "D C A E B"
  },
  {
    "id": 26,
    "question_One": "The beach was quiet early in the morning, with only a few people walking along the shore.",
    "question_Two": "The sound of waves crashing against the rocks was soothing, and the salty air filled their lungs.",
    "question_Three": "A couple of surfers prepared their boards, waiting for the perfect wave.",
    "question_Four": "Children played near the water, building sandcastles and chasing seagulls.",
    "question_Five": "As the sun began to rise higher, more visitors arrived, ready to enjoy the day at the beach.",
    "answerOne": "B D A E C"
  },
  {
    "id": 27,
    "question_One": "The city was alive with the sounds of traffic, honking horns, and chatter.",
    "question_Two": "Pedestrians hurried down the sidewalks, weaving in and out of the crowds.",
    "question_Three": "Street vendors sold their goods, offering everything from hot dogs to handmade jewelry.",
    "question_Four": "Above the street, skyscrapers loomed, their glass windows reflecting the sun.",
    "question_Five": "As the day turned to evening, the lights of the city flickered on, creating a dazzling skyline.",
    "answerOne": "E C A B D"
  },
  {
    "id": 28,
    "question_One": "The mountain trail was steep, but the hikers pressed on, determined to reach the summit.",
    "question_Two": "Along the way, they passed through dense forests, filled with towering trees.",
    "question_Three": "Occasionally, they stopped to take pictures of the breathtaking views below.",
    "question_Four": "As the altitude increased, the air grew thinner, making each step more difficult.",
    "question_Five": "After hours of climbing, they finally reached the peak, exhilarated by their achievement.",
    "answerOne": "A C E B D"
  },
  {
    "id": 29,
    "question_One": "The classroom was filled with the sound of pencils scribbling across paper.",
    "question_Two": "The teacher walked around, offering help to students who had questions.",
    "question_Three": "A few students raised their hands, eager to contribute to the discussion.",
    "question_Four": "Others were deep in thought, their eyes focused on their notebooks as they worked.",
    "question_Five": "As the bell rang, the students packed their bags and headed out, ready for the next lesson.",
    "answerOne": "B C A D E"
  },
  {
    "id": 30,
    "question_One": "The bakery was filled with the smell of fresh pastries and bread.",
    "question_Two": "A long line of customers waited to place their orders, each eager for a sweet treat.",
    "question_Three": "The baker behind the counter smiled as he handed over freshly baked croissants.",
    "question_Four": "A couple of customers grabbed a coffee to go, excited to enjoy their breakfast on the way to work.",
    "question_Five": "By noon, the shelves were nearly empty, with only a few pastries left behind.",
    "answerOne": "D A C E B"
  },
  {
    "id": 31,
    "question_One": "The gym was busy with people working out, lifting weights, and running on the treadmills.",
    "question_Two": "Some people took group fitness classes, following along with the instructor's moves.",
    "question_Three": "The sound of music pumped through the speakers, motivating everyone to push harder.",
    "question_Four": "A few individuals took breaks, sipping water and catching their breath before starting again.",
    "question_Five": "As the day came to an end, the gym started to empty out, leaving only a few die-hard fitness enthusiasts.",
    "answerOne": "C E D A B"
  },
  {
    "id": 32,
    "question_One": "The restaurant was elegant, with soft lighting and the sound of gentle conversation filling the air.",
    "question_Two": "Waiters moved swiftly between tables, delivering orders and refilling glasses.",
    "question_Three": "The kitchen was busy, with chefs carefully preparing dishes and plating them to perfection.",
    "question_Four": "Couples dined together, enjoying each other's company over a fine meal.",
    "question_Five": "As the evening wore on, the atmosphere became more relaxed, with guests lingering over dessert.",
    "answerOne": "A C E B D"
  },
  {
    "id": 33,
    "question_One": "The road stretched out before them, winding through the hills and valleys.",
    "question_Two": "They passed by small villages, where farmers tended to their crops and animals.",
    "question_Three": "Occasionally, they stopped to take in the view, admiring the beauty of the landscape.",
    "question_Four": "As they traveled further, the weather began to change, with clouds rolling in from the horizon.",
    "question_Five": "By the time they reached their destination, it was late afternoon, and the sky had turned a soft pink.",
    "answerOne": "A C E B D"
  },
  {
    "id": 34,
    "question_One": "The concert hall was filled with the sound of the orchestra tuning their instruments.",
    "question_Two": "The conductor stood at the front, waiting for the audience to settle into their seats.",
    "question_Three": "The lights dimmed, and the performance began, with the first notes of the symphony filling the air.",
    "question_Four": "The music swelled, drawing the audience into a world of emotion and grandeur.",
    "question_Five": "As the final notes faded, the audience erupted into applause, grateful for the breathtaking performance.",
    "answerOne": "B D A E C"
  },
  {
    "id": 35,
    "question_One": "The zoo was a popular destination for families looking for a fun day out.",
    "question_Two": "Children pressed their faces against the glass, watching the animals as they played and ate.",
    "question_Three": "Zookeepers led educational talks, teaching visitors about the different species.",
    "question_Four": "In the reptile house, people marveled at the snakes and lizards resting in their enclosures.",
    "question_Five": "By the afternoon, the zoo was quiet, with only a few people strolling through the exhibits.",
    "answerOne": "D A C E B"
  },
  {
    "id": 36,
    "question_One": "The airport was busy, with passengers rushing through security and making their way to their gates.",
    "question_Two": "Overhead, the announcements warned travelers about flight delays and cancellations.",
    "question_Three": "Shops and restaurants were bustling with people grabbing last-minute snacks and gifts.",
    "question_Four": "Travelers sat in the waiting area, checking their phones and watching the clock tick by.",
    "question_Five": "Finally, the boarding call was made, and passengers lined up to board their flights.",
    "answerOne": "A B C D E"
  },
  {
    "id": 37,
    "question_One": "The office was quiet except for the sound of typing and the occasional phone call.",
    "question_Two": "Employees sat at their desks, focused on their work and pushing to meet deadlines.",
    "question_Three": "In the break room, a few colleagues chatted over coffee, taking a short break from their tasks.",
    "question_Four": "The boss walked through, checking on progress and offering encouragement where needed.",
    "question_Five": "As the day came to an end, employees gathered their things and headed home, ready to start fresh the next day.",
    "answerOne": "C E A B D"
  },
  {
    "id": 38,
    "question_One": "The library was peaceful, with soft lighting and the rustling of pages turning.",
    "question_Two": "A few students were seated at tables, working on projects and studying for exams.",
    "question_Three": "Others wandered through the aisles, searching for new books to read.",
    "question_Four": "Librarians walked through the aisles, ensuring the shelves were well-organized.",
    "question_Five": "As the library began to close, students reluctantly packed up their things and left.",
    "answerOne": "B C A D E"
  },
  {
    "id": 39,
    "question_One": "The movie theater was filled with excited moviegoers, eager to watch the latest release.",
    "question_Two": "The lights dimmed, and the trailers for upcoming films began to play.",
    "question_Three": "As the main feature started, the audience sat in silence, captivated by the story unfolding on screen.",
    "question_Four": "Popcorn was passed around, and the sound of munching filled the air.",
    "question_Five": "When the credits rolled, the audience erupted into applause, praising the film.",
    "answerOne": "E B A D C"
  },




  
    {
      "id": 40,
      "question_One": "The president's speech was eloquent, addressing both the nation’s challenges and its potential.",
      "question_Two": "His words were carefully chosen, aiming to strike a balance between optimism and realism.",
      "question_Three": "Despite the turbulent political climate, he managed to rally the crowd with his vision for the future.",
      "question_Four": "At the end of the speech, the audience gave a standing ovation, signaling their approval.",
      "question_Five": "As the applause subsided, the president’s team exchanged looks of relief and pride.",
      "answerOne": "B A D C E"
    },
    {
      "id": 41,
      "question_One": "The scientist's theory, though innovative, was met with skepticism by her peers.",
      "question_Two": "Her arguments were based on years of rigorous experimentation and data analysis.",
      "question_Three": "However, some critics felt her conclusions were too speculative and lacked sufficient evidence.",
      "question_Four": "In her response, the scientist pointed to recent developments in the field as proof of the theory’s viability.",
      "question_Five": "Despite the controversy, her work opened up new avenues for research and exploration.",
      "answerOne": "A C B D E"
    },
    {
      "id": 42,
      "question_One": "The company’s sudden decision to cut costs sparked protests among its employees.",
      "question_Two": "Although the management justified the move as a necessary step to ensure long-term stability, the workers felt betrayed.",
      "question_Three": "The protests intensified as rumors spread about potential layoffs and reductions in benefits.",
      "question_Four": "In a bid to quell the unrest, the CEO addressed the employees, emphasizing the need for collective effort.",
      "question_Five": "While some employees remained unconvinced, others appreciated the transparency and pledged their support.",
      "answerOne": "C A B E D"
    },
    {
      "id": 43,
      "question_One": "The novel’s protagonist struggled with the dichotomy between personal desires and societal expectations.",
      "question_Two": "Throughout the story, the character’s internal conflict was mirrored by the external pressures of their environment.",
      "question_Three": "At times, the protagonist found solace in solitude, but this only deepened their sense of isolation.",
      "question_Four": "As the narrative progressed, the character began to question their own values and assumptions.",
      "question_Five": "By the end of the novel, the protagonist achieved a reluctant reconciliation between their own identity and the world around them.",
      "answerOne": "B D C A E"
    },
    {
      "id": 44,
      "question_One": "The architect’s design was both modern and minimalist, emphasizing open spaces and natural light.",
      "question_Two": "While many admired the aesthetic appeal, some critics felt the design lacked warmth and human scale.",
      "question_Three": "The building’s stark lines and geometric forms seemed to alienate some visitors, who found the space too impersonal.",
      "question_Four": "Despite the criticism, the building attracted attention for its innovation and its ability to challenge traditional architectural norms.",
      "question_Five": "In time, the structure became a symbol of modernity, admired for its boldness and vision.",
      "answerOne": "A B D C E"
    },
    {
      "id": 45,
      "question_One": "The CEO's decision to expand internationally was based on extensive market research and careful analysis.",
      "question_Two": "Despite initial doubts, the company’s entry into new markets proved to be highly profitable in the long run.",
      "question_Three": "However, challenges arose as cultural differences and local regulations complicated the company’s operations abroad.",
      "question_Four": "In response, the CEO hired local experts to navigate these complexities and ensure the company’s success in the foreign markets.",
      "question_Five": "As a result, the company not only survived but thrived, cementing its position as a global player.",
      "answerOne": "B E A D C"
    },
    {
      "id": 46,
      "question_One": "The philosopher’s argument was grounded in ethics, emphasizing the importance of individual responsibility.",
      "question_Two": "He contended that moral actions should not be dictated by external authorities but by an individual's own conscience.",
      "question_Three": "Critics, however, questioned whether personal conscience could always be trusted to make morally sound decisions.",
      "question_Four": "Despite the criticism, the philosopher’s work sparked a broader conversation about the nature of morality and self-determination.",
      "question_Five": "Over time, his ideas influenced a generation of thinkers, sparking debates that continue to this day.",
      "answerOne": "A B D C E"
    },
    {
      "id": 47,
      "question_One": "The experiment's results were inconclusive, leading to further questions and hypotheses about the initial findings.",
      "question_Two": "While the data suggested a potential correlation, the sample size was too small to draw definitive conclusions.",
      "question_Three": "The researchers decided to refine their methodology and conduct additional experiments to address these gaps.",
      "question_Four": "In the meantime, the scientific community continued to debate the implications of the study's findings.",
      "question_Five": "As more data became available, the theory was revisited, ultimately leading to a more refined understanding of the phenomenon.",
      "answerOne": "B D A C E"
    },
    {
      "id": 48,
      "question_One": "The government's policy on climate change has been a subject of intense debate, with differing opinions on the best course of action.",
      "question_Two": "Some argue for immediate, drastic measures, while others advocate for gradual, market-driven solutions.",
      "question_Three": "Despite the urgency of the issue, political gridlock has hindered meaningful progress on the matter.",
      "question_Four": "In recent years, however, there has been a shift towards greater collaboration between governments, corporations, and environmental groups.",
      "question_Five": "This cooperation has led to some promising initiatives, but questions about long-term effectiveness remain unresolved.",
      "answerOne": "C B A E D"
    },
    {
      "id": 49,
      "question_One": "The artist’s latest exhibit challenged traditional notions of beauty, presenting raw, unsettling images of modern life.",
      "question_Two": "At first, many visitors were taken aback by the provocative nature of the artwork.",
      "question_Three": "However, as they engaged with the pieces, a deeper understanding of the artist’s message began to emerge.",
      "question_Four": "The exhibit was not simply a critique of society, but also a call for introspection and a reevaluation of personal values.",
      "question_Five": "By the end of the exhibit, even the most skeptical viewers were moved, recognizing the power of art to challenge and transform perspectives.",
      "answerOne": "B A C E D"
    },
    {
      "id": 50,
      "question_One": "The debate on artificial intelligence and its implications for society continues to evolve as technology advances.",
      "question_Two": "Some experts predict that AI will revolutionize industries, while others fear the potential for mass unemployment and social disruption.",
      "question_Three": "At the heart of the discussion is the question of ethics: how can we ensure that AI is used for the greater good?",
      "question_Four": "As AI becomes more integrated into everyday life, governments and businesses are grappling with the responsibility of regulating its use.",
      "question_Five": "Ultimately, the impact of AI will depend on how society chooses to balance innovation with ethical considerations.",
      "answerOne": "A D B E C"
    },




  
    {
      "id": 51,
      "question_One": "The city’s rapid urbanization has led to unforeseen challenges, particularly in the realm of public transportation.",
      "question_Two": "While new infrastructure projects have alleviated some of the pressure, they have often failed to keep pace with the growing population.",
      "question_Three": "Residents have become increasingly frustrated with the inconsistent service and overcrowding, leading to widespread protests.",
      "question_Four": "In response, city planners have proposed a series of reforms aimed at improving efficiency and reducing congestion.",
      "question_Five": "However, critics argue that these measures are short-term solutions and that a more fundamental shift in urban planning is required.",
      "answerOne": "B D A E C"
    },
    {
      "id": 52,
      "question_One": "The evolution of technology has transformed the way we communicate, making it easier than ever to connect with others.",
      "question_Two": "While this increased connectivity has led to more frequent interactions, it has also raised concerns about the quality of these connections.",
      "question_Three": "Social media platforms, in particular, have been criticized for fostering superficial relationships that lack depth and authenticity.",
      "question_Four": "On the other hand, proponents argue that technology enables individuals to maintain meaningful relationships across distances and time zones.",
      "question_Five": "As we move forward, the challenge lies in balancing the convenience of technology with the need for genuine, face-to-face interactions.",
      "answerOne": "B A D C E"
    },
    {
      "id": 53,
      "question_One": "The rise of populism in recent years can be traced to a combination of economic stagnation and increasing political polarization.",
      "question_Two": "Populist leaders have capitalized on widespread dissatisfaction with the political establishment, promising to restore power to the people.",
      "question_Three": "However, critics argue that this approach often undermines democratic institutions and exacerbates social divisions.",
      "question_Four": "While populism has gained significant traction, it remains unclear whether it can provide long-term solutions to the problems it claims to address.",
      "question_Five": "As the global political landscape continues to evolve, the future of populism will depend on its ability to adapt to changing economic and social realities.",
      "answerOne": "C D A E B"
    },
    {
      "id": 54,
      "question_One": "In the field of economics, there is an ongoing debate about the role of government intervention in markets.",
      "question_Two": "Some economists argue that government intervention is necessary to correct market failures and promote social welfare.",
      "question_Three": "Others contend that excessive regulation stifles innovation and economic growth, leading to inefficiencies in the market.",
      "question_Four": "Recent events, such as the global financial crisis, have reignited this debate, with some calling for stronger regulatory measures.",
      "question_Five": "Despite differing opinions, it is widely agreed that finding the right balance between government oversight and market freedom is crucial for long-term economic stability.",
      "answerOne": "B C D A E"
    },
    {
      "id": 55,
      "question_One": "The role of education in society is often seen as a means to promote social mobility and economic progress.",
      "question_Two": "However, critics argue that the education system often reinforces existing inequalities, rather than mitigating them.",
      "question_Three": "In particular, disparities in access to quality education are linked to differences in socioeconomic status, race, and geography.",
      "question_Four": "To address these issues, many advocates have called for reforms that focus on equal access to educational resources and opportunities.",
      "question_Five": "Yet, even with such reforms, it remains uncertain whether education alone can bridge the deep-seated inequalities that exist within society.",
      "answerOne": "B C A D E"
    },
    {
      "id": 56,
      "question_One": "The increasing reliance on artificial intelligence in various sectors raises important questions about ethics and accountability.",
      "question_Two": "While AI has the potential to revolutionize industries, there are concerns about its impact on employment and privacy.",
      "question_Three": "Furthermore, the use of AI in decision-making processes, such as hiring or criminal justice, has been criticized for perpetuating biases and inequalities.",
      "question_Four": "Advocates for AI regulation argue that clear guidelines must be established to ensure that these technologies are used responsibly and fairly.",
      "question_Five": "As the role of AI in society continues to grow, it is crucial to address these ethical concerns to prevent unintended consequences.",
      "answerOne": "C D B A E"
    },
    {
      "id": 57,
      "question_One": "The relationship between globalization and cultural identity is complex and multifaceted.",
      "question_Two": "While globalization has facilitated the spread of ideas and cultural exchange, it has also led to concerns about cultural homogenization.",
      "question_Three": "Many fear that local cultures and traditions may be lost in the face of global consumerism and the dominance of Western ideals.",
      "question_Four": "On the other hand, some argue that globalization allows for greater cultural diversity and the preservation of traditions through increased awareness and connectivity.",
      "question_Five": "Ultimately, the impact of globalization on cultural identity will depend on how societies choose to navigate this tension between preservation and adaptation.",
      "answerOne": "B A D C E"
    },
    {
      "id": 58,
      "question_One": "The concept of ‘fake news’ has become a significant concern in the digital age, as misinformation spreads rapidly online.",
      "question_Two": "While some argue that social media platforms have exacerbated the problem, others suggest that traditional media outlets are also culpable for sensationalism and bias.",
      "question_Three": "In response, efforts have been made to develop fact-checking mechanisms and promote media literacy among the public.",
      "question_Four": "However, the sheer volume of information available online makes it difficult to distinguish between credible sources and unreliable ones.",
      "question_Five": "As the digital landscape continues to evolve, addressing the issue of fake news will require cooperation from both the public and private sectors.",
      "answerOne": "C D A E B"
    },
    {
      "id": 59,
      "question_One": "The debate over climate change has become increasingly polarized, with opposing views on the extent of human responsibility for global warming.",
      "question_Two": "While the scientific consensus overwhelmingly supports the notion that human activity is a major driver of climate change, some argue that natural factors play a larger role.",
      "question_Three": "This divide has led to challenges in crafting effective policy solutions, as differing views on the causes of climate change result in disagreements over the appropriate course of action.",
      "question_Four": "Despite these challenges, there is growing recognition of the need for global cooperation to mitigate the effects of climate change and transition to more sustainable practices.",
      "question_Five": "Ultimately, addressing climate change will require not only scientific advances, but also political will and public support to implement meaningful change.",
      "answerOne": "B C A E D"
    },
    {
      "id": 60,
      "question_One": "The increasing automation of the workforce has led to concerns about the future of employment, particularly in manufacturing and low-skilled jobs.",
      "question_Two": "While automation has the potential to increase productivity and reduce costs, it also threatens to displace millions of workers.",
      "question_Three": "Economists disagree on the long-term effects of automation, with some arguing that new technologies will create new job opportunities, while others predict widespread unemployment.",
      "question_Four": "In response, there have been calls for policies that focus on retraining and reskilling workers to adapt to the changing job market.",
      "question_Five": "As automation continues to transform the global economy, finding ways to balance technological progress with social stability will be a major challenge for policymakers.",
      "answerOne": "C B A D E"
    },
    {
      "id": 61,
      "question_One": "The exploration of space has long been viewed as a symbol of human progress and the pursuit of knowledge.",
      "question_Two": "While some argue that space exploration offers valuable insights into the origins of the universe, others question the allocation of resources to such endeavors.",
      "question_Three": "Critics contend that the money spent on space missions could be better used to address pressing issues on Earth, such as poverty and climate change.",
      "question_Four": "Supporters of space exploration, however, argue that the technological advancements resulting from these missions often have far-reaching benefits for society as a whole.",
      "question_Five": "As the private sector becomes increasingly involved in space exploration, the debate about its value and priorities is likely to intensify.",
      "answerOne": "B C A D E"
    },
    {
      "id": 62,
      "question_One": "The rise of populist movements around the world has sparked debates about the future of democracy and the role of political elites.",
      "question_Two": "Populist leaders often frame their rhetoric as a battle between ‘the people’ and ‘the elite,’ appealing to the frustrations of the masses.",
      "question_Three": "While populist movements have gained significant traction in many countries, they are often criticized for undermining democratic institutions and fostering division.",
      "question_Four": "Supporters of populism argue that it provides a necessary counterbalance to entrenched political elites who are out of touch with the needs of ordinary citizens.",
      "question_Five": "As populist movements continue to rise, it remains to be seen whether they will lead to lasting changes in the political landscape or contribute to further instability.",
      "answerOne": "A D B C E"
    },
    {
      "id": 63,
      "question_One": "The impact of social media on mental health has been the subject of growing concern in recent years.",
      "question_Two": "While some studies suggest that social media can foster feelings of connection and support, others have found a link between excessive use and negative outcomes, such as depression and anxiety.",
      "question_Three": "Psychologists warn that the constant exposure to idealized images of others can lead to feelings of inadequacy and self-doubt, particularly among younger users.",
      "question_Four": "Despite these concerns, social media platforms have become increasingly ingrained in everyday life, making it difficult for many individuals to disconnect.",
      "question_Five": "As the effects of social media on mental health continue to be studied, it is crucial for individuals and society to find ways to use these platforms responsibly.",
      "answerOne": "C B D A E"
    },
    {
      "id": 64,
      "question_One": "The concept of universal basic income (UBI) has gained traction as a potential solution to poverty and income inequality.",
      "question_Two": "Proponents argue that UBI would provide a safety net for individuals who are displaced by automation and technological advancements.",
      "question_Three": "Opponents, however, contend that UBI could disincentivize work and lead to higher taxes or unsustainable government spending.",
      "question_Four": "While pilot programs in various countries have yielded mixed results, the idea of UBI continues to be a topic of debate among policymakers and economists.",
      "question_Five": "Ultimately, the success of UBI will depend on its implementation and the broader economic context in which it is introduced.",
      "answerOne": "A D B C E"
    },
    {
      "id": 65,
      "question_One": "The rapid pace of technological innovation has raised questions about the ethical implications of new technologies, particularly in the fields of genetic engineering and biotechnology.",
      "question_Two": "While these technologies hold the potential to improve human health and well-being, they also pose risks that could have unintended consequences.",
      "question_Three": "One major concern is the potential for genetic modifications to be used for non-medical purposes, such as enhancing physical or intellectual traits.",
      "question_Four": "As the science of biotechnology advances, calls for ethical guidelines and regulations to govern its use have become louder.",
      "question_Five": "Balancing the potential benefits of these technologies with their ethical risks will require careful consideration and collaboration between scientists, policymakers, and the public.",
      "answerOne": "B A D C E"
    },
    {
      "id": 66,
      "question_One": "In the face of rising nationalism and protectionism, international cooperation has become increasingly difficult.",
      "question_Two": "Many countries, particularly in the West, are turning inward, prioritizing domestic concerns over global collaboration.",
      "question_Three": "While some argue that this shift is necessary to protect national interests, others contend that it undermines the progress made in fostering global unity and tackling shared challenges.",
      "question_Four": "In response, international organizations such as the United Nations and the European Union are working to maintain dialogue and cooperation, despite growing tensions.",
      "question_Five": "The future of international cooperation will depend on how well countries can balance national priorities with the need for collective action on issues like climate change, security, and trade.",
      "answerOne": "C E B D A"
    },
    {
      "id": 67,
      "question_One": "The ethics of surveillance in the digital age have become a major point of contention, particularly with regard to privacy rights.",
      "question_Two": "Governments argue that surveillance is necessary to ensure national security and combat terrorism, while critics claim that it infringes upon civil liberties.",
      "question_Three": "In particular, the widespread use of facial recognition technology has raised concerns about potential misuse and the erosion of personal freedoms.",
      "question_Four": "As technology continues to evolve, the challenge of balancing security and privacy will remain a central issue in the ongoing debate about surveillance.",
      "question_Five": "Ultimately, the solution may lie in establishing clear legal frameworks and safeguards to protect individual rights without compromising security.",
      "answerOne": "B D A C E"
    },
    {
      "id": 68,
      "question_One": "The concept of meritocracy has been central to discussions about social mobility, particularly in education and employment.",
      "question_Two": "While merit-based systems are designed to reward individuals based on their abilities and achievements, critics argue that they often fail to account for the unequal starting points that individuals face.",
      "question_Three": "In particular, factors such as socioeconomic background, race, and access to resources can create barriers that prevent some individuals from realizing their full potential.",
      "question_Four": "As a result, many have called for a more holistic approach to meritocracy, one that takes into account both individual achievements and the broader social context.",
      "question_Five": "This debate has significant implications for education, employment, and the distribution of wealth, as policymakers seek to create a more just and equitable society.",
      "answerOne": "C B A E D"
    },
    {
      "id": 69,
      "question_One": "The rise of populist movements in many democracies has led to questions about the health and stability of democratic institutions.",
      "question_Two": "Populist leaders often capitalize on public dissatisfaction with traditional political elites, promising to give power back to the people.",
      "question_Three": "However, critics argue that populism undermines the principles of democracy by promoting divisive rhetoric and undermining the rule of law.",
      "question_Four": "Despite these criticisms, populist movements have garnered significant support, particularly in response to economic inequality and political corruption.",
      "question_Five": "As populism continues to shape the political landscape, the future of democracy may depend on how it evolves and how democratic institutions adapt to these new challenges.",
      "answerOne": "D C A E B"
    },
    {
      "id": 70,
      "question_One": "The increasing complexity of global supply chains has led to greater interdependence among nations, but also to new vulnerabilities.",
      "question_Two": "While the interconnectedness of global trade has driven economic growth, it has also made economies more susceptible to disruptions.",
      "question_Three": "The COVID-19 pandemic, for example, exposed the fragility of global supply chains, as disruptions in one part of the world rippled across industries worldwide.",
      "question_Four": "In response, many companies have re-evaluated their supply chain strategies, seeking to build more resilient and diversified networks.",
      "question_Five": "As the global economy continues to evolve, managing supply chain risks will be a key challenge for businesses and policymakers alike.",
      "answerOne": "B E C D A"
    },
  

  
  
    {
      "id": 71,
      "question_One": "The role of artificial intelligence in healthcare is becoming increasingly prominent, with numerous applications being explored across various domains.",
      "question_Two": "From improving diagnostic accuracy to streamlining administrative tasks, AI promises to transform the healthcare landscape, but concerns about its ethical implications remain.",
      "question_Three": "One of the key concerns is the potential for AI to exacerbate existing inequalities in healthcare access, particularly in low-income or underserved regions.",
      "question_Four": "Another challenge is ensuring that AI systems are transparent and free from bias, as they are only as good as the data they are trained on.",
      "question_Five": "Despite these challenges, the integration of AI into healthcare holds tremendous potential for improving outcomes and increasing efficiency in the sector.",
      "answerOne": "B D A E C"
    },
    {
      "id": 72,
      "question_One": "In a rapidly globalizing world, national sovereignty is increasingly being tested by supranational organizations and international agreements.",
      "question_Two": "While some argue that such cooperation is necessary to address global challenges like climate change and economic inequality, others fear that it undermines national identity and governance.",
      "question_Three": "The debate over the European Union’s role in member states’ policies highlights the tensions between national autonomy and collective governance.",
      "question_Four": "Moreover, the rise of populist movements in various countries reflects a growing skepticism towards the perceived erosion of sovereignty in the face of globalism.",
      "question_Five": "The future of national sovereignty will depend on finding a balance between national interests and the need for global cooperation on pressing issues.",
      "answerOne": "C B D E A"
    },
    {
      "id": 73,
      "question_One": "The increasing prevalence of mental health issues in modern society has raised questions about the effectiveness of current treatment approaches.",
      "question_Two": "While traditional methods such as therapy and medication continue to be widely used, there is growing interest in alternative treatments like mindfulness and holistic therapies.",
      "question_Three": "One challenge in addressing mental health is the stigma that still surrounds it, which can discourage individuals from seeking help when they need it most.",
      "question_Four": "Additionally, the accessibility of mental health services remains a significant issue, with many people unable to afford or access adequate care.",
      "question_Five": "Despite these challenges, there is hope that greater awareness and more diverse treatment options will lead to better outcomes for those struggling with mental health issues.",
      "answerOne": "B A D E C"
    },
    {
      "id": 74,
      "question_One": "The role of the media in shaping public opinion has come under intense scrutiny in recent years, especially with the rise of digital platforms.",
      "question_Two": "While traditional media outlets have long been the primary sources of information, social media platforms have given rise to a new era of citizen journalism",
      "question_Three": "This shift has led to concerns about the accuracy and credibility of news, with many stories being shaped by individuals with no formal journalistic training.",
      "question_Four": "Despite these concerns, social media platforms have also democratized the flow of information, giving marginalized voices a platform to be heard.",
      "question_Five": "The future of the media will likely depend on how well these platforms balance the need for free speech with the responsibility to ensure the accuracy and integrity of information.",
      "answerOne": "C A D E B"
    },
    {
      "id": 75,
      "question_One": "The ongoing debate between market economies and command economies centers on the ideal role of government intervention in economic affairs.",
      "question_Two": "Proponents of market economies argue that minimal government intervention allows for greater innovation and efficiency, driven by the forces of supply and demand.",
      "question_Three": "On the other hand, supporters of command economies contend that state control can ensure equitable distribution of resources and prevent exploitation by private interests.",
      "question_Four": "In practice, most economies fall somewhere in between, with varying degrees of state involvement in areas like healthcare, education, and social welfare.",
      "question_Five": "The debate will continue as governments around the world grapple with how to balance economic growth with social equity.",
      "answerOne": "B D A C E"
    },
    {
      "id": 76,
      "question_One": "The rise of automation in the workplace has sparked a profound transformation in many industries, leading to both opportunities and challenges",
      "question_Two": "While automation has the potential to increase productivity and reduce costs, it also threatens to displace large numbers of workers, particularly in manufacturing and low-skill jobs.",
      "question_Three": "Some economists argue that automation will ultimately lead to the creation of new jobs, particularly in fields related to technology and artificial intelligence.",
      "question_Four": "However, the rapid pace of technological change has raised concerns about the ability of workers to adapt to new roles, especially those without access to adequate retraining programs.",
      "question_Five": "As automation continues to reshape the labor market, it is crucial for policymakers to address the challenges of worker displacement and inequality through education and retraining programs.",
      "answerOne": "C B D E A"
    },
    {
      "id": 77,
      "question_One": "In the aftermath of the 2008 financial crisis, governments around the world implemented a variety of measures to prevent a recurrence of such an event.",
      "question_Two": "Among these measures were stricter regulations on banks, aimed at reducing risk-taking behavior and increasing transparency in financial transactions.",
      "question_Three": "While these regulations were widely seen as necessary to restore trust in the financial system, some argue that they stifled innovation and hampered economic growth.",
      "question_Four": "Others contend that the global financial system remains vulnerable, with many institutions still engaging in risky practices despite the new regulations.",
      "question_Five": "The future of financial regulation will depend on the ability of governments and financial institutions to balance risk and innovation in a rapidly changing global economy.",
      "answerOne": "D B C E A"
    },
    {
      "id": 78,
      "question_One": "The debate over renewable energy has intensified as concerns about climate change and environmental degradation continue to grow.",
      "question_Two": "While renewable energy sources like wind, solar, and hydroelectric power offer the potential for a cleaner, more sustainable future, they also face significant challenges, particularly in terms of cost and infrastructure",
      "question_Three": "Moreover, the intermittency of some renewable energy sources raises questions about their reliability and the ability to meet demand during periods of low production.",
      "question_Four": "Despite these challenges, many countries are making significant investments in renewable energy as part of a broader strategy to reduce reliance on fossil fuels and mitigate the impacts of climate change.",
      "question_Five": "Ultimately, the success of renewable energy will depend on continued technological advancements, supportive policy frameworks, and public willingness to transition away from traditional energy sources.",
      "answerOne": "C D A E B"
    },
    {
      "id": 79,
      "question_One": "The growth of the global digital economy has revolutionized industries, particularly in the areas of finance, retail, and entertainment.",
      "question_Two": "While the digital economy has opened up new opportunities for businesses and consumers, it has also raised concerns about data privacy, cybersecurity, and the concentration of power in the hands of a few large tech companies",
      "question_Three": "As more transactions move online, the risks of fraud and cyberattacks have increased, requiring businesses to invest heavily in security measures.",
      "question_Four": "At the same time, questions about the ethical use of consumer data have led to calls for stronger regulations and greater transparency from tech companies.",
      "question_Five": "The future of the digital economy will depend on how governments, businesses, and consumers navigate these challenges and strike a balance between innovation and privacy.",
      "answerOne": "B A D E C"
    },
    {
      "id": 80,
      "question_One": "The concept of corporate social responsibility (CSR) has gained significant traction in recent years as companies are increasingly expected to consider the social and environmental impact of their operations",
      "question_Two": "While some argue that CSR is simply a marketing tool used by companies to enhance their image, others contend that it is an essential component of responsible business practices.",
      "question_Three": "Critics of CSR argue that it often fails to address the root causes of social and environmental issues and is more about public relations than meaningful change.",
      "question_Four": "Proponents, however, argue that CSR can lead to positive outcomes, such as improved community relations, employee satisfaction, and environmental sustainability.",
      "question_Five": "As public pressure on corporations continues to grow, CSR is likely to become an increasingly important part of business strategy, though its true effectiveness remains debated.",
      "answerOne": "C D B E A"
    },
    {
      "id": 81,
      "question_One": "The globalization of trade has led to increased economic interdependence among nations, but it has also contributed to widening income inequality within countries",
      "question_Two": "While some argue that globalization has lifted millions out of poverty, particularly in emerging markets, others contend that it has disproportionately benefited the wealthy and left many workers behind.",
      "question_Three": "One of the key drivers of this inequality is the offshoring of manufacturing jobs to countries with lower labor costs, which has led to job losses in developed economies.",
      "question_Four": "At the same time, globalization has facilitated the spread of technology and knowledge, enabling countries to access new markets and improve productivity.",
      "question_Five": "The future of globalization will depend on how countries address the challenges of inequality and ensure that the benefits of trade are more evenly distributed.",
      "answerOne": "C B D E A"
    },
  {
    "id": 82,
    "question_One": "The concept of identity has evolved significantly in the modern world, influenced by globalization, technology, and shifting social norms.",
    "question_Two": "In the past, identity was largely defined by factors such as nationality, family background, and occupation, but today, it is increasingly shaped by digital presence and global interconnectedness.",
    "question_Three": "While this transformation has allowed individuals greater freedom to explore different facets of their identity, it has also raised questions about authenticity and the pressure to conform to societal expectations.",
    "question_Four": "Furthermore, the rise of social media has played a pivotal role in both amplifying and distorting perceptions of identity, with people curating online personas that may differ significantly from their offline selves.",
    "question_Five": "Ultimately, the modern conception of identity is fluid and multifaceted, shaped by both internal self-perception and external social forces.",
    "answerOne": "B A D E C"
  },
  {
    "id": 83,
    "question_One": "The increasing prominence of artificial intelligence (AI) in creative industries has sparked a debate about the role of human creativity in the future of art and design.",
    "question_Two": "AI-driven tools have already demonstrated the ability to generate artworks, music, and literature, challenging the traditional notion that creativity is uniquely human.",
    "question_Three": "While some argue that AI's creative output lacks the emotional depth and personal experience that human creators bring to their work, others believe that AI can enhance human creativity by serving as a powerful tool for exploration and innovation.",
    "question_Four": "The question, however, remains whether AI will complement human creativity or replace it altogether, particularly as these technologies continue to evolve at an exponential pace.",
    "question_Five": "As AI continues to be integrated into creative industries, it will be important to carefully examine the ethical implications, including the potential for copyright infringement and the devaluation of human artistry.",
    "answerOne": "C B A E D"
  },
  {
    "id": 84,
    "question_One": "The dynamics of modern warfare have shifted dramatically with the advancement of technology, raising questions about the future of armed conflict.",
    "question_Two": "Emerging technologies such as drones, cyber warfare, and artificial intelligence are reshaping military strategy, reducing the need for traditional ground troops and enabling more precise and remote forms of combat.",
    "question_Three": "However, these technologies also raise new ethical concerns, particularly regarding civilian casualties, surveillance, and the potential for autonomous systems to make life-or-death decisions without human oversight.",
    "question_Four": "Moreover, the proliferation of such technologies among both state and non-state actors has made it increasingly difficult to regulate the use of force and maintain global stability.",
    "question_Five": "The future of warfare, therefore, will require a careful balance between technological innovation and ethical responsibility to prevent the escalation of conflict and safeguard human rights.",
    "answerOne": "B D A C E"
  },
  {
    "id": 85,
    "question_One": "The concept of sustainable development has gained significant traction in recent decades as global leaders have recognized the urgent need to balance economic growth with environmental preservation.",
    "question_Two": "While economic development has long been seen as a primary driver of human progress, it has increasingly become clear that unchecked growth can lead to environmental degradation, resource depletion, and climate change.",
    "question_Three": "Sustainable development, therefore, seeks to promote policies and practices that meet the needs of the present without compromising the ability of future generations to meet their own needs.",
    "question_Four": "This approach requires cooperation across sectors, including government, business, and civil society, to implement strategies that promote both economic and environmental resilience.",
    "question_Five": "The future of sustainable development depends on our ability to reconcile the competing demands of economic growth and environmental stewardship, while also addressing issues of social equity and justice.",
    "answerOne": "A C B D E"
  },
  {
    "id": 86,
    "question_One": "The role of education in shaping societal values is one of the most debated topics in contemporary discourse, with different perspectives on how it should be structured and what it should aim to achieve.",
    "question_Two": "While some argue that education should primarily focus on equipping individuals with practical skills for the workforce, others believe it should nurture critical thinking, creativity, and civic responsibility.",
    "question_Three": "The tension between these views is evident in the ongoing debates over standardized testing, curriculum design, and the increasing role of technology in the classroom.",
    "question_Four": "Moreover, the global disparity in access to quality education highlights the importance of ensuring that education systems are inclusive and equitable, providing opportunities for all individuals to reach their full potential.",
    "question_Five": "Ultimately, education is not only a tool for personal development but also a means of shaping the values, beliefs, and social structures that underpin society as a whole.",
    "answerOne": "B D C A E"
  },
  {
    "id": 87,
    "question_One": "The relationship between economic growth and environmental protection remains one of the most complex challenges facing policymakers today.",
    "question_Two": "On one hand, economic growth is essential for improving living standards and reducing poverty, but on the other hand, it often comes at the cost of environmental degradation and resource depletion.",
    "question_Three": "This dilemma has led to the development of the concept of a 'green economy', which seeks to reconcile economic development with the preservation of natural resources and ecosystems.",
    "question_Four": "Proponents of a green economy argue that investments in renewable energy, sustainable agriculture, and clean technologies can drive growth while also reducing environmental harm.",
    "question_Five": "However, critics argue that the transition to a green economy may be costly and may not deliver the same level of growth as traditional, resource-intensive industries.",
    "answerOne": "C A D E B"
  },
  {
    "id": 88,
    "question_One": "In recent years, there has been growing concern about the erosion of privacy in the digital age, with individuals' personal data being collected and analyzed by a range of organizations.",
    "question_Two": "While some argue that the benefits of data collection, such as personalized services and targeted advertising, outweigh the risks, others contend that the loss of privacy has far-reaching implications for individual freedom and autonomy.",
    "question_Three": "Furthermore, the rise of surveillance technologies, including facial recognition and location tracking, has led to fears of a 'Big Brother' society, where citizens are constantly monitored and controlled.",
    "question_Four": "The issue is further complicated by the global nature of data flows, which raises questions about the sovereignty of nations to protect their citizens' privacy in a world of interconnected networks.",
    "question_Five": "As the digital landscape continues to evolve, the future of privacy will depend on how governments, corporations, and individuals navigate the complex balance between technological progress and personal freedom.",
    "answerOne": "B C A E D"
  },
  {
    "id": 89,
    "question_One": "The evolution of consumer behavior in the digital age has had a profound impact on industries across the globe, particularly in sectors like retail, entertainment, and finance.",
    "question_Two": "With the rise of online shopping, streaming services, and digital banking, consumers now have unprecedented access to goods and services, often at the touch of a button.",
    "question_Three": "However, this shift has also raised concerns about the erosion of traditional business models, job displacement, and the increasing dominance of large corporations in the digital economy.",
    "question_Four": "Moreover, the increasing reliance on data-driven algorithms to predict and influence consumer preferences has raised questions about privacy, autonomy, and the ethics of digital marketing.",
    "question_Five": "As the digital landscape continues to evolve, businesses must adapt to these changes by embracing new technologies, while also addressing the ethical and social implications of their practices.",
    "answerOne": "C D A B E"
  },
  {
    "id": 90,
    "question_One": "The rise of populist movements around the world has led to a renewed debate over the future of democracy and the role of elites in governance.",
    "question_Two": "Populist leaders often argue that the political establishment has become disconnected from the needs of ordinary citizens, and that their rise represents a necessary correction to the status quo.",
    "question_Three": "However, critics of populism argue that these movements are often driven by demagoguery and misinformation, and that they pose a threat to democratic institutions and civil liberties.",
    "question_Four": "Despite these concerns, populist movements have gained significant traction in recent years, fueled by economic inequality, cultural tensions, and dissatisfaction with traditional political elites.",
    "question_Five": "The future of democracy will depend on how political systems respond to the challenges posed by populism, and whether they can restore trust in institutions and ensure that governance remains responsive to the needs of all citizens.",
    "answerOne": "B C A E D"
  },

  
    {
      "id": 92,
      "question_One": "The rapid advancement of biotechnology has opened up new possibilities in medicine, agriculture, and environmental conservation.",
      "question_Two": "One of the most promising applications of biotechnology is in the development of genetically modified organisms (GMOs), which can be engineered to resist pests, tolerate drought, and produce higher yields.",
      "question_Three": "However, the use of GMOs has raised ethical concerns, particularly around the long-term effects on human health and the environment, as well as the potential for monopolization by large corporations.",
      "question_Four": "Furthermore, advances in gene editing technologies like CRISPR have sparked a global debate over the possibility of 'designer babies' and the ethical implications of altering the human genome.",
      "question_Five": "The future of biotechnology will depend on how society navigates these ethical dilemmas, ensuring that innovation is balanced with caution and responsibility.",
      "answerOne": "B D A E C"
    },
    {
      "id": 93,
      "question_One": "The idea of posthumanism challenges traditional notions of human nature, arguing that the boundaries between human, animal, and machine are increasingly blurred in the modern world.",
      "question_Two": "Proponents of posthumanism argue that technological advancements, particularly in artificial intelligence, robotics, and genetic engineering, will eventually lead to a redefinition of what it means to be human.",
      "question_Three": "This redefinition could include the possibility of enhancing human capabilities beyond their natural limits or even merging human consciousness with machines, creating new forms of life.",
      "question_Four": "However, critics of posthumanism argue that this vision of the future raises profound ethical questions, particularly regarding the loss of individuality, autonomy, and the potential for exploitation of those who are unable to afford such enhancements.",
      "question_Five": "Ultimately, the future of posthumanism will depend on the ethical and social frameworks that emerge around these technologies and how they are used to reshape society.",
      "answerOne": "C B A E D"
    },
    {
      "id": 94,
      "question_One": "The debate over the ethics of climate engineering has become increasingly relevant as the world faces the impacts of global climate change.",
      "question_Two": "Proponents argue that climate engineering could offer a quick and effective way to reduce the effects of global warming, particularly in the absence of sufficient political will for emissions reductions.",
      "question_Three": "However, critics caution that climate engineering technologies, such as geoengineering, could have unintended consequences that may be difficult to predict or control, potentially exacerbating environmental damage.",
      "question_Four": "Moreover, there are concerns that the deployment of such technologies could disproportionately affect vulnerable populations and ecosystems, raising issues of justice and equity.",
      "question_Five": "The future of climate engineering will depend on how society balances the need for immediate action with the risks and ethical dilemmas these technologies present.",
      "answerOne": "A D C B E"
    },
    {
      "id": 95,
      "question_One": "The rise of nationalism in the 21st century has sparked a global debate about the future of international cooperation and the role of global institutions.",
      "question_Two": "Nationalists argue that globalization has undermined the sovereignty of nations, leading to the erosion of cultural identities and economic independence, and that countries should prioritize their own interests over international cooperation.",
      "question_Three": "On the other hand, globalists contend that challenges like climate change, terrorism, and economic inequality can only be addressed through collective action and the strengthening of global institutions such as the United Nations and the World Trade Organization.",
      "question_Four": "As nationalist movements continue to grow in power, the question remains whether the world can maintain the international cooperation needed to tackle these pressing global issues.",
      "question_Five": "The future of global governance will depend on finding a balance between national sovereignty and the need for collaborative, multilateral solutions.",
      "answerOne": "B C A E D"
    },
    {
      "id": 96,
      "question_One": "The concept of artificial scarcity, in which goods or services are intentionally withheld to create a perception of scarcity and drive demand, has become a key feature of modern consumer culture.",
      "question_Two": "Companies use artificial scarcity to manipulate consumer behavior, creating a sense of urgency around products that are not actually in limited supply, leading consumers to make purchases they might otherwise delay or forgo.",
      "question_Three": "While this strategy can be highly effective in boosting sales and generating buzz around new products, it has raised concerns about its long-term impact on consumer trust and the ethical implications of creating false perceptions of scarcity.",
      "question_Four": "Moreover, artificial scarcity often perpetuates a culture of overconsumption, where consumers are driven by the fear of missing out, rather than genuine need or desire.",
      "question_Five": "The challenge moving forward will be to find ways to balance consumer demand with ethical marketing practices that do not exploit psychological vulnerabilities.",
      "answerOne": "C D A B E"
    },
    {
      "id": 97,
      "question_One": "The rise of big data analytics has fundamentally transformed the way businesses operate, providing companies with unprecedented insights into consumer behavior, market trends, and operational efficiency.",
      "question_Two": "However, the growing use of big data has raised significant concerns about privacy, as individuals' personal information is increasingly collected and analyzed without their explicit consent.",
      "question_Three": "Furthermore, there is the risk that the reliance on data-driven decision-making could reinforce existing biases, leading to discriminatory practices and unequal treatment of certain groups or individuals.",
      "question_Four": "To address these challenges, many have called for stronger regulations on data collection, storage, and usage, as well as greater transparency and accountability in the algorithms that power big data analytics.",
      "question_Five": "The future of big data will depend on finding a way to balance the benefits of data-driven insights with the need to protect individuals' privacy and ensure that data is used ethically.",
      "answerOne": "A C B E D"
    },
    {
      "id": 98,
      "question_One": "The question of whether the government should intervene in the economy to address income inequality has been the subject of intense debate in recent years.",
      "question_Two": "Proponents of government intervention argue that rising income inequality is a serious threat to social stability and economic mobility, and that redistribution policies such as progressive taxation and social welfare programs are necessary to address this issue.",
      "question_Three": "On the other hand, critics argue that such interventions distort market forces, discourage entrepreneurship, and create dependency on government assistance, which can ultimately hinder economic growth and innovation.",
      "question_Four": "Ultimately, the question is not whether the government should intervene, but how to strike the right balance between promoting social equity and fostering a dynamic, competitive economy.",
      "question_Five": "The future of economic policy will depend on finding solutions that address the root causes of inequality while also ensuring that markets remain efficient and entrepreneurial activity is encouraged.",
      "answerOne": "B A C E D"
    },
    {
      "id": 99,
      "question_One": "The future of work in the age of automation and artificial intelligence presents both opportunities and challenges, particularly with regard to job displacement and workforce transformation.",
      "question_Two": "While automation has the potential to increase productivity and reduce costs, it also threatens to replace large segments of the workforce, particularly in industries such as manufacturing, transportation, and retail.",
      "question_Three": "At the same time, new opportunities are emerging in fields such as robotics, data analysis, and AI development, requiring workers to develop new skills and adapt to a rapidly changing job market.",
      "question_Four": "The key challenge for policymakers will be to ensure that displaced workers have access to retraining and reskilling programs, and that social safety nets are in place to support those who are unable to transition into new roles.",
      "question_Five": "Ultimately, the future of work will be shaped by the ability of individuals, businesses, and governments to navigate these transitions and ensure that technological progress leads to broader economic benefits.",
      "answerOne": "C D A E B"
    },
    {
      "id": 100,
      "question_One": "The rise of digital currencies such as Bitcoin has sparked a debate about the future of money, with proponents arguing that cryptocurrencies could revolutionize the financial system.",
      "question_Two": "Cryptocurrencies offer the promise of decentralized, peer-to-peer transactions that bypass traditional banks and financial institutions, potentially reducing transaction costs and increasing financial inclusion.",
      "question_Three": "However, critics argue that the volatility and lack of regulation associated with cryptocurrencies make them risky investments, and that they could facilitate money laundering and other illicit activities.",
      "question_Four": "Additionally, the environmental impact of cryptocurrency mining, which consumes vast amounts of energy, has raised concerns about the sustainability of these technologies in the long term.",
      "question_Five": "As the adoption of digital currencies continues to grow, the future of money will depend on how regulators and financial institutions respond to these challenges and integrate cryptocurrencies into the existing financial ecosystem.",
      "answerOne": "B C A E D"
    }
  

  

  
   ]


addDataToFirebase(sampleData, "Jumble");

export default addDataToFirebase */


const test = ()=>{


  return (<>Test</>)
}

export default test