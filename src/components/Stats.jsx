function Stats() {
  const stats = [
    { number: "10K+", label: "Active Jobs" },
    { number: "2K+", label: "Companies" },
    { number: "50K+", label: "Candidates" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              {item.number}
            </h2>

            <p className="text-gray-600 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;