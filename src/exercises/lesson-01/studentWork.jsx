//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Kelli';
  const myAge = 37;
  const hobbies = [
    { id: 1, title: 'dog sports, including comformation and agility' },
    {
      id: 2,
      title:
        'NCAA gymnastics (my favorite team is the University of Utah Red Rocks)',
    },
    {
      id: 3,
      title: 'NCAA basketball (my favorite team is the Utah State Aggies)',
    },
    { id: 4, title: 'sewing' },
    { id: 5, title: 'gardening' },
    { id: 6, title: 'walking' },
    { id: 7, title: 'lifting weights' },
    { id: 8, title: 'NCAA gymnastics' },
    { id: 9, title: 'learning languages' },
    { id: 10, title: 'violin' },
    { id: 11, title: 'reading' },
    { id: 12, title: 'Star Wars, Tolkien' },
  ];
  return (
    <div>
      <h1>About me</h1>
      <p>
        My name is {myName}, I am {myAge} years old, and I'm from Bountiful,
        Utah. I have worked as a Localization Engineer since 2011, though I
        started out as a web designer. I learned HTML, CSS, and used Photoshop
        to create graphics for websites, and briefly worked creating websites
        for clients during college. Those skills helped me land my first job in
        localization, and I have been adding to them ever since. For the last
        year, I have been returning to web development and learning JavaScript,
        React, and Python. I hope to find a role where my localization
        experience and my growing web development skills can complement each
        other and set me apart as a candidate.
      </p>
      <p>Some of my hobbies are:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
