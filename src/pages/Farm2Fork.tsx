// src/pages/Farm2Fork.tsx



interface SectionCardProps {
  title: string;
  text: string;
  image: string;
  /** on desktop, flip image/text when true */
  reverse?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, text, image, reverse }) => (
  <div
    className={
      `flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ` +
      'bg-white rounded-lg shadow-lg overflow-hidden'
    }
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/2 h-48 md:h-auto object-cover"
    />
    <div className="p-6 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-[#093056] mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Farm2Fork: React.FC = () => {
  const sections = [
   {
      title: 'Eggs & Poultry',
      text: `Our eggs and chicken meat are sourced from farms committed to
        ethical and sustainable practices. Every carton of eggs is carefully
        inspected for freshness before it reaches our kitchen.`,
      image: '/images/Chickens.jpg',
    },
     {
      title: 'In-House Bakery',
      text: `Our bakery crafts a delightful range of cakes and pastries using
        organic flour, free-range eggs, and locally sourced dairy. Fresh daily!`,
      image: '/images/bread.jpg',
      reverse: true,
    },
     {
      title: 'Organic Farm Sourcing',
      text: `Here at Pioneer School, we believe in holistic education that
        extends beyond the classroom. We source most of our kitchen supplies
        from local organic farms, ensuring healthy, ethical food every day.`,
      image: '/images/vegetables.jpg',
    },
    {
      title: 'Milk & Dairy',
      text: `Our milk and dairy products arrive daily from local certified
        farms. Each batch undergoes rigorous testing for impurities,
        guaranteeing the highest quality and safety for our students.`,
      image: '/images/Cow.jpg',
      reverse: true,
    },
    
   
    {
      title: 'Eco-Friendly Fuel',
      text: `We minimize timber use by powering our kitchen stoves with
        briquettes made from macadamia, coffee, and tea by-products - keeping
        our operation green.`,
      image: '/images/charcoal.jpg',
    },
    {
      title: 'Clean Water',
      text: `Drinking water is drawn from the pristine Maragua River, treated
        on-site, and supplemented by municipal supply - so you always get clean,
        refreshing water.`,
      image: '/images/water.jpg',
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
     

      {/* Hero */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Woman.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#093056] opacity-60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Farm 2 Fork
          </h1>
        </div>
      </section>

      {/* Cards */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((sec, i) => (
            <SectionCard
              key={i}
              title={sec.title}
              text={sec.text}
              image={sec.image}
              reverse={sec.reverse}
            />
          ))}
        </div>
      </main>


    
    </div>
  );
};

export default Farm2Fork;
