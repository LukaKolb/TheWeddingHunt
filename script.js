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
      answer: "hihi xd"
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
        question: `Where law and love together lie,<br>
    Beneath the crest and flag on high.<br>
    Lovers pass through arch and square <br>
    Leave your mark if you both dare.<br><br>
    
    In white upon the cobblestone,<br>
    Draw a heart, not carved in stone.<br>
    Inside, two runes side by side,<br>
    Your initials bold with pride.<br><br>
    - Stuur een foto in de chat!`,
        answer: "Geduld"
      },
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
        document.getElementById('task-text').innerHTML = `
        🎉 Gefeliciteerd! Nog 1 laatste tripje!<br><br> - Luka ❤️ <br><br>
        <img src="assets/sol.jpg" alt="Solution" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />`;
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
  