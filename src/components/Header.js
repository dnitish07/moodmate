export default function Header() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-indigo-600">MoodMate</h1>
      <p className="text-indigo-400 mt-1">{dateStr}</p>
      <p className="text-gray-600 mt-6 text-lg font-medium">
        How are you feeling today?
      </p>
    </header>
  );
}