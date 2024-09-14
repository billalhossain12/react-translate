import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/featured/?motivation")',
        }}
      >
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50 pt-5">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
            {t("homepage.hero.title")}
            </h1>
            <p className="text-gray-300 text-lg mb-6">
             {t("homepage.hero.subtitle")}
            </p>
            <a
              href="/get-started"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              {t("homepage.hero.button")}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{t("homepage.features.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("homepage.features.feature1.title")}
            </h3>
            <p className="text-gray-600">
            {t("homepage.features.feature1.description")}
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("homepage.features.feature2.title")}
            </h3>
            <p className="text-gray-600">
            {t("homepage.features.feature2.description")}
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("homepage.features.feature3.title")}
            </h3>
            <p className="text-gray-600">
              {t("homepage.features.feature3.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t("homepage.testimonials.title")}
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:space-x-8">
            <div className="bg-white p-6 shadow-md rounded-lg mb-6 md:mb-0">
              <p className="text-gray-600 italic">
              {t("homepage.testimonials.testimonial1.quote")}
              </p>
              <p className="text-gray-800 font-semibold mt-4">{t("homepage.testimonials.testimonial1.author")}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-600 italic">
              {t("homepage.testimonials.testimonial2.quote")}
              </p>
              <p className="text-gray-800 font-semibold mt-4">{t("homepage.testimonials.testimonial2.author")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
