export default function Child({ increment, count }) {
  return (
    <button
      onClick={(count) => {
        increment();
      }}
    >
      Increment Counter
    </button>
  );
}
