import { useTranslation } from "react-i18next";




const service = {
  "sectionTitle": "Our Services",
  "introduction": {
    "text": "At <span class=\"font-bold text-gray-800\">MotivateMe</span>, we offer a wide range of motivational services designed to inspire, empower, and drive success."
  },
  "services": {
    "service1": {
      "title": "Daily Motivation",
      "description": "Receive daily inspirational quotes and messages directly to your inbox or through our app to start your day with positivity.",
      "linkText": "Learn more"
    },
    "service2": {
      "title": "Personal Coaching",
      "description": "Work with our expert coaches to set and achieve your personal goals. We offer one-on-one sessions tailored to your needs.",
      "linkText": "Learn more"
    },
    "service3": {
      "title": "Workshops & Seminars",
      "description": "Join our motivational workshops and seminars that provide strategies for personal growth, success, and resilience.",
      "linkText": "Learn more"
    }
  },
  "moreServices": {
    "sectionTitle": "More Services",
    "service4": {
      "title": "Motivational Blog",
      "description": "Explore our blog filled with motivational articles, success stories, and tips on how to maintain focus and positivity.",
      "linkText": "Read more"
    },
    "service5": {
      "title": "Corporate Programs",
      "description": "We offer corporate motivational programs to inspire teams, improve productivity, and build strong work cultures.",
      "linkText": "Learn more"
    }
  }
}

const Service = () => {
  const { t } = useTranslation(); // Access the translation function
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Services Section */}
      <section className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          {t("service.sectionTitle")}
        </h1>
        <p dangerouslySetInnerHTML={{__html:t("service.introduction.text")}} className="text-center text-gray-600 mb-12 text-lg leading-relaxed"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("service.services.service1.title")}
            </h2>
            <p className="text-gray-600 mb-4">
            {t("service.services.service1.description")}
            </p>
            <a
              href="/services/daily-motivation"
              className="text-blue-500 hover:underline"
            >
              {t("service.services.service1.linkText")}
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("service.services.service2.title")}
            </h2>
            <p className="text-gray-600 mb-4">
            {t("service.services.service2.description")}
            </p>
            <a
              href="/services/coaching"
              className="text-blue-500 hover:underline"
            >
              {t("service.services.service2.linkText")}
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("service.services.service3.title")}
            </h2>
            <p className="text-gray-600 mb-4">
            {t("service.services.service3.description")}
            </p>
            <a
              href="/services/workshops"
              className="text-blue-500 hover:underline"
            >
              {t("service.services.service3.linkText")}
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t("service.moreServices.sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t("service.moreServices.service4.title")}
              </h2>
              <p className="text-gray-600 mb-4">
              {t("service.moreServices.service4.description")}
              </p>
              <a
                href="/services/blog"
                className="text-blue-500 hover:underline"
              >
                {t("service.moreServices.service4.linkText")}
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t("service.moreServices.service5.title")}
              </h2>
              <p className="text-gray-600 mb-4">
              {t("service.moreServices.service5.description")}
              </p>
              <a
                href="/services/corporate"
                className="text-blue-500 hover:underline"
              >
               {t("service.moreServices.service5.linkText")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
