const tasks = [
    {
      question: `Task 1: Jump for joy in the middle where and when water streams. dance in Geel's pulsating heart. Equip three of the following items each:
      <ul style="list-style: none; padding-left: 0;">
        <li>Diving mask</li>
        <li>Snorkel</li>
        <li>Party hat</li>
        <li>Flippers</li>
        <li>An inflatable animal</li>
        <li>An inflatable tube</li>
      </ul>
      <strong>Beware of double agents!</strong>`,
      answer: "Liefde is alles wat we nodig hebben"
    },
    {
      question: "Task 2: Bel Lennerd voor je volgende opdracht! ",
      answer: "jippe"
    },
    {
        question: `De 'Noob Kit' Zoeken:<br><br>
    Jullie Runescape-avontuur begint met een lege inventaris, behalve voor de meest basale uitrusting. Zoek in jullie huis de drie meest nutteloze, onhandige of grappige objecten die jullie bezitten.<br>
    Deze moeten objecten zijn die je in RuneScape <strong>nooit</strong> in je inventaris zou willen hebben (bijv. een kapotte paraplu, een enkele sok, een te kleine kinderfietshelm).<br><br>
    Stuur de drie objecten die hebben jullie gekozen in de chat?`,
        answer: "jippe" 
      },
      {
        question: `De 'Noob Walk' Uitvoeren:<br><br>
    In RuneScape beweegt een noob op een specifieke manier: stijf, houterig, en vaak verdwaald.<br>
    Neem een video van maximaal 10 seconden op waarin jullie als duo een 'Noob Walk' uitvoeren van de ene naar de andere kant van jullie woonkamer.<br>
    Eén van jullie moet precies de RuneScape 'walk animation' nadoen (armen stil, schouders omhoog, benen stijf), terwijl de ander de drie nutteloze objecten vasthoudt en probeert te jongleren of op een andere onhandige manier beweegt.<br><br>
    Hebben jullie deze 'Noob Walk' uitgevoerd en de video gestuurd?`,
        answer: "jippe" 
      },
      {
        question: `De 'Noob Inventaris Foto':<br><br>
    Maak na de video een foto samen waarbij jullie er zo 'noob' mogelijk uitzien (bijv. verwarde blik, kleding half binnenstebuiten) en de drie nutteloze objecten prominent in beeld zijn.<br>
    Deze foto is jullie bewijs van 'Noob Status'#JustMarried.<br><br>
    Hebben jullie de foto gemaakt en gestuurd?`,
        answer: "jippe"
      },
    {
        question: `OSRS Skills Challenge!<br><br>
        Jij en Jolien gaan samen <strong>alle</strong> OSRS skills opnoemen in één filmpje. Jullie nemen samen een video op waarin jullie om de beurt één skill noemen, zonder te spieken!<br><br>
        <span style="color: #ff4444; font-weight: bold;">Elke skill moet binnen 1 minuut genoemd worden.</span> Als jullie te lang wachten of iets missen, is de challenge voorbij.<br><br>
        Belangrijk:<br>
        <ul style="list-style: disc; padding-left: 20px;">
          <li>Zeg om de beurt een skill op.</li>
          <li>Geen spieken of hulp gebruiken tijdens de opname.</li>
          <li>Jullie moeten samen alle skills noemen, zonder iets over te slaan.</li>
          <li>Stuur de volledige video in de groepschat + bloopers mogen ;).</li>
        </ul>
        <strong>Wie kan het helemaal afmaken zonder fouten? Succes!</strong>`,
      answer: "Jorre"
    }
  ];
  
  // Initialize currentTaskIndex from localStorage or 0
  let currentTaskIndex = parseInt(localStorage.getItem('currentTaskIndex')) || 0;
  
  function startHunt() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('task-screen').style.display = 'block';
    showTask();
  }
  
  function showTask() {
    document.getElementById('task-text').innerHTML = tasks[currentTaskIndex].question;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').textContent = '';
  }
  
  function submitAnswer() {
    const input = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = tasks[currentTaskIndex].answer.toLowerCase();
  
    if (input === correctAnswer) {
      currentTaskIndex++;
      localStorage.setItem('currentTaskIndex', currentTaskIndex); // save progress
  
      if (currentTaskIndex < tasks.length) {
        showTask();
      } else {
        localStorage.removeItem('currentTaskIndex'); // clear storage on completion
        document.getElementById('task-text').textContent = "🎉 Gefeliciteerd! Hunt completed!";
        document.getElementById('answer-input').style.display = 'none';
        document.querySelector('button').style.display = 'none';
      }
    } else {
      document.getElementById('feedback').textContent = "Oops! Try again.";
    }
  }
  
  function resetHunt() {
    localStorage.removeItem('currentTaskIndex');
    currentTaskIndex = 0;
    showTask();
  }
  
  // Video freeze logic - place outside any function
  const video = document.getElementById('background-video');
  if (video) {
    video.addEventListener('ended', () => {
      video.pause();
      video.currentTime = video.duration;
    });
  }
  