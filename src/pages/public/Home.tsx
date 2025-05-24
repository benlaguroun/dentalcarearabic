import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Shield, Award, Star, ArrowRight } from "lucide-react";

const PublicHome: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <section dir="rtl" className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1661434856831-76779e04e8bc?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="عيادة أسنان"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ابتسامتك تستحق أفضل رعاية
            </h1>
            <p className="text-xl mb-8">
              استمتع برعاية أسنان متميزة مع فريقنا من المتخصصين المكرّسين لصحة
              فمك وابتسامتك الجميلة.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <Calendar className="h-5 w-5 mr-2" />
                احجز موعداً
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                استعرض الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section dir="rtl" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              لماذا تختار عيادة DentalCare؟
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              نجمع بين التكنولوجيا المتقدمة والرعاية الإنسانية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                تكنولوجيا حديثة
              </h3>
              <p className="text-gray-600">
                عيادتنا مجهزة بأحدث تقنيات طب الأسنان لضمان تشخيص دقيق وعلاج
                مريح.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                فريق ذو خبرة
              </h3>
              <p className="text-gray-600">
                يتمتع أطباؤنا وموظفونا بخبرة طويلة ويواكبون أحدث ممارسات طب
                الأسنان.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                رعاية تركز على المريض
              </h3>
              <p className="text-gray-600">
                نولي الأولوية لراحتك ورضاك، لضمان تجربة أسنان إيجابية في كل
                زيارة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section dir="rtl" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">خدماتنا</h2>
            <p className="mt-4 text-lg text-gray-600">
              رعاية شاملة للأسنان لجميع أفراد العائلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://plus.unsplash.com/premium_photo-1661277793925-9a74734a8fd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="General Dentistry"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                طب الأسنان العام
              </h3>
              <p className="text-gray-600 mb-4">
                فحوصات دورية، وتنظيفات، ورعاية وقائية للحفاظ على صحة فمك.
              </p>
              <Link
                to="/services#general"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                اكتشف المزيد <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1684607632845-723f8f427110?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29zbWV0aWMlMjBEZW50aXN0cnl8ZW58MHx8MHx8fDA%3D"
                alt="Cosmetic Dentistry"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                طب الأسنان التجميلي
              </h3>
              <p className="text-gray-600 mb-4">
                حسّن ابتسامتك من خلال تبييض الأسنان، والقشور التجميلية، وإجراءات
                أخرى.
              </p>
              <Link
                to="/services#cosmetic"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                اكتشف المزيد <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://plus.unsplash.com/premium_photo-1681997203595-e45e06abe034?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3J0aG9kb250aWNzfGVufDB8fDB8fHww"
                alt="Orthodontics"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                تقويم الأسنان
              </h3>
              <p className="text-gray-600 mb-4">
                قم بتقويم أسنانك باستخدام التقويم التقليدي أو الشفاف للحصول على
                ابتسامة جميلة.
              </p>
              <Link
                to="/services#orthodontics"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                اكتشف المزيد <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section dir="rtl" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">آراء مرضانا</h2>
            <p className="mt-4 text-lg text-gray-600">
              اقرأ شهادات مرضانا الراضين عن خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "لقد كنت أزور عيادة DentalCare منذ سنوات ودائمًا ما أتلقى علاجًا
                ممتازًا. الطاقم ودود ومحترف، والدكتور جونسون هو الأفضل!"
              </p>
              <div className="font-medium text-gray-900">سارة م.</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "كنت أخاف كثيرًا من زيارة طبيب الأسنان، لكن لا أستطيع أن أوصي
                بعيادة DentalCare بما فيه الكفاية. لقد جعلوني أشعر بالراحة
                وشرحوا كل شيء بوضوح."
              </p>
              <div className="font-medium text-gray-900">مايكل ت.</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "أطفالي يحبون الذهاب إلى DentalCare! الدكتور ديفيس رائع مع
                الأطفال ويجعل التجربة ممتعة وخالية من التوتر. أنصح بها بشدة
                للعائلات!"
              </p>
              <div className="font-medium text-gray-900">جنيفر ل.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section dir="rtl" className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لحجز موعدك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            احجز موعدك اليوم واتخذ الخطوة الأولى نحو ابتسامة أكثر صحة.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Calendar className="h-5 w-5 mr-2" />
            احجز موعداً
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PublicHome;
