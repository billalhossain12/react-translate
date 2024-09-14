import motivationalTeamImg from "../assets/motivational-team.jpg"
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation(); // Access the translation function
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* About Section */}
      <section className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">{t('about.title')}</h1>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={motivationalTeamImg} alt="Motivational Team" className="rounded-lg shadow-lg" />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
            {t('about.content', { returnObjects: true }).map((content, index) => (
              <p key={index} className="text-gray-600 mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img src={motivationalTeamImg} alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img src={motivationalTeamImg} alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Content Officer</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img src={motivationalTeamImg} alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

