import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const pathname = useLocation();
  console.log(pathname.pathname);

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        Invalid path: localhost:5173<b>{pathname.pathname}</b>
      </p>
      <p>
        <Link to="/lessons/lesson-10">Go Home</Link>
      </p>
    </section>
  );
}
