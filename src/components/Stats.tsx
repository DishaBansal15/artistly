import { stats } from "@/data/stats";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto 
                       transition-transform duration-300 transform hover:scale-105 hover:shadow-lg bg-white p-5 rounded-xl"
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-foreground-accent">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
