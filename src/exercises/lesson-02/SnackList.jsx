//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

export default function SnackList() {
  const snackObjects = [
    { rank: 6, name: 'Celery sticks' },
    { rank: 5, name: 'Carrot sticks' },
    { rank: 4, name: 'String cheese' },
    { rank: 3, name: 'Potato chips' },
    { rank: 2, name: 'Popcorn' },
    { rank: 1, name: 'Doritos' },
  ];

  const snackObjectsRanked = snackObjects.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {snackObjectsRanked.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
