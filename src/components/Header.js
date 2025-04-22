export default function Header() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">MoodMate</h1>
      <p className="text-gray-500 mt-1">{dateStr}</p>
      <p className="text-gray-600 mt-4">How are you feeling today?</p>
    </header>
  );
}