import Image from 'next/image';


export default function OekoTexPage() {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/80 text-secondary text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4">OEKO-TEX® Standard 100</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Ensuring the highest safety standards for textiles through rigorous testing and certification processes
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">100+</div>
                <div className="text-sm opacity-80">Test Parameters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">Class II</div>
                <div className="text-sm opacity-80">Certification Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">16</div>
                <div className="text-sm opacity-80">Global Test Institutes</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">1. What is OEKO-TEX® Standard 100?</h2>
              
              <p className="text-gray-700">
                The OEKO-TEX® standards 100 is developed and managed by the International OEKO-TEX® Association, a group of 16 textile research and test institutes in Europe and Japan, with representative agencies and contact offices in over 60 countries worldwide.
              </p>
              
              <p className="text-gray-700">
                Products that pass the test in this system are allowed to carry a certification label that guarantees to the consumers that the product does not contain harmful substances at levels that can be dangerous to the human body. No matter beddings or sleepwears, most of TaiHuSnow's products own the OEKO certification and are safe and healthy for your skin.
              </p>
              
              <Image src="/images/taihu-snow-silk-oeko-tex-1.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
              <Image src="/images/taihu-snow-silk-oeko-tex-2.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />

              <p className="text-gray-700">
                OEKO-TEX® Standard 100 applies throughout the textile industry and its scope covers textile and leather items at all levels of production, including textile and non-textile accessories. The standard is also applicable to mattresses, feathers and downs, foams, upholstery, and others material with similar characteristics.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-700">OEKO-TEX® products classes are divided based on their intended use:</p>
                
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Class I:</strong> Textiles and textile toys for babies and small children up to the age of three, e.g. underwear, romper suits, bed linen, bedding, soft toys etc. (43% of all certificates.)</p>
                  
                  <p className="text-gray-700"><strong>Class II:</strong> Textiles having a large part of their surface in direct contact with the skin, e.g. underwear, bed linen, terry goods, shirts, blouses etc. (53% of all certificates.)</p>
                  
                  <p className="text-gray-700"><strong>Class III:</strong> Textiles which do not come into contact with the skin, or only have a small part of their surface in contact with the skin, e.g. jackets, coats, interlining materials etc. (1% of all certificates.)</p>
                  
                  <p className="text-gray-700"><strong>Class IV:</strong> Furnishing materials for decorative purposes such as table linen and curtains, but also textile wall and floor coverings etc. (3% of all certificates.)</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                A tested textile product is allocated to one of the four Oeko-Tex® product classes based on its intended use. The more intensively a product comes into contact with the skin, the stricter the human ecological requirements it must fulfill.
              </p>
              
              <p className="text-gray-700">
                TaiHuSnow has obtained Oeko-Tex Standard 100 Class II certification. This means our product passed a highly reliable test consisting of over 100 strict test standards determined by the above research institutions.
              </p>
              
              <p className="text-gray-700">
                An OEKO-TEX® certificate is valid for 12 months. At the end of this time, it can be renewed for another year. This approach is recommended to ensure continuous product safety and smooth processes all along the textile production chain.
              </p>
            </section>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">2. How to check the validity of the certificate?</h2>
              
              <p className="text-gray-700">
                Enter the certificate number in the Official Authorization Website, the result will produce details of the validity status, the relevant product class and the articles covered by this certificate number. If the validity needs to be verified, the contact details of the relevant institute will be displayed.
              </p>
              <Image src="/images/taihu-snow-silk-oeko-tex-3.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
              <Image src="/images/taihu-snow-silk-oeko-tex-4.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
            </section>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">3. How TAIHUSNOW Products Get Oeko-Tex® Standard 100 Certified</h2>
              
              <p className="text-gray-700">
                The process for TAIHUSNOW' pure silk fabric to be Oeko-Tex® Standard 100 Certified is quite rigorous, complicated and must be renewed on an annual basis. Every year TAIHUSNOW submits a preliminary application inquiry to the OEKO-TEX certification institute, then we receive a copy of the application materials provided by the issuing authority, including the application form, quality compliance statement, and quality system report. TAIHUSNOW only need to truthfully declare the processing information of the product (including raw materials, auxiliary materials, dyeing and chemical materials, various processing procedures and product control measures, etc.) according to the questions on the application form, and then the OEKO-TEX institute will verify the relevant information and classify products, and a "sample order" will be received to prepare test silk samples.
              </p>
              
              <p className="text-gray-700">
                Next, an independent Oeko-Tex® lab tests the silk according to protocol and documents, and they will send a professional inspectors to have a on-site audit in our factory. Certificates will be given only all the test passed.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
