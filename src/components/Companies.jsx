import googleLogo from "../assets/logos/google.png";
import microsoftLogo from "../assets/logos/microsoft.png";
import amazonLogo from "../assets/logos/amazon.png";
import adobeLogo from "../assets/logos/adobe.png";
import infosysLogo from "../assets/logos/infosys.png";
import tcsLogo from "../assets/logos/tcs.png";
import wiproLogo from "../assets/logos/wipro.png";
import zohoLogo from "../assets/logos/zoho.png";

function Companies() {
  const companies = [
    { name: "Google", logo: googleLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Adobe", logo: adobeLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Zoho", logo: zohoLogo },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-3">
          Top Hiring Companies
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Explore opportunities from leading technology companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain mb-4"
              />

              <h3 className="font-semibold text-lg">
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;