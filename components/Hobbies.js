const hobbies = [
  { name: "Sports", icon: "⚽", desc: "I love playing football & badminton" },
  { name: "Cycling", icon: "🚴", desc: "Long rides on weekends" },
  { name: "Hiking", icon: "🥾", desc: "Exploring mountains & trails" },
  { name: "Camping", icon: "🏕️", desc: "Outdoor camping & chilling" },
  { name: "Workout", icon: "🏋️", desc: "Strength & endurance training" },
  { name: "Music", icon: "🎶", desc: "Listening to my favorite songs" },
  { name: "Dance", icon: "💃", desc: "Grooving to good music" },
  { name: "Chill", icon: "😎", desc: "Relaxing with friends & family" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-white text-gray-900">
     
<h2 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
               Hobbies
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {hobbies.map((hobby, i) => (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <span className="text-5xl">{hobby.icon}</span>
                <p className="mt-2 font-medium">{hobby.name}</p>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <p className="text-center text-sm">{hobby.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
