const Index = () => {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}tracker.html`}
      title="Mad Monkey World Cup 2026 Fixture Tracker"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
};

export default Index;
