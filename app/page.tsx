export default function Home() {
  return (
    <main className="hero">
      <div className="container">
        <h1>Railway Design</h1>
        <p>
          A design system and guidelines for building beautiful, consistent
          interfaces. Start here to understand our principles, components, and
          patterns.
        </p>

        <div className="grid">
          <a href="/principles" className="card">
            <h2>Principles</h2>
            <p>
              Our design principles guide every decision we make, ensuring
              consistency and clarity across all experiences.
            </p>
          </a>

          <div className="card">
            <h2>Components</h2>
            <p>
              Reusable building blocks that form the foundation of our design
              system and user interfaces.
            </p>
          </div>

          <div className="card">
            <h2>Patterns</h2>
            <p>
              Common interaction patterns and layouts that solve recurring
              design problems elegantly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
