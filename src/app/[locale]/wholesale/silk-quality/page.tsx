import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premium Silk Quality Control Standards | Taihu Silk Manufacturing',
  description: 'Discover our rigorous silk quality control processes. From Grade A mulberry silk selection to OEKO-TEX certification, learn how we ensure premium silk bedding quality.',
  keywords: 'silk quality control, mulberry silk standards, OEKO-TEX certified silk, silk testing procedures, premium silk bedding quality assurance',
};

export default function SilkQuality() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'Silk Quality Control', isCurrent: true }]} />
      
      {/* Hero Section */}
      <section className="space-y-6 px-4">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Premium Silk Quality Control Standards
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
          At Taihu Snow Silk, quality is our cornerstone. Our comprehensive quality control system ensures every silk product 
          meets the highest international standards, from raw material selection to final product delivery.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/oeko-tex-certified" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">OEKO-TEX Certified</Link>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Grade A Mulberry Silk</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">ISO 9001 Compliant</span>
        </div>
      </section>

      {/* Raw Material Quality */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">Raw Material Selection</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Grade A Mulberry Silk</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 100% long-strand mulberry silk cocoons</li>
              <li>• 6A grade silk fibers only</li>
              <li>• Minimum 25 denier thickness</li>
              <li>• Natural protein fiber structure preserved</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <h3 className="text-xl font-semibold mb-3 text-green-900">Fiber Testing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Tensile strength testing</li>
              <li>• Fiber length measurement</li>
              <li>• Moisture content analysis</li>
              <li>• Purity verification (no synthetic blend)</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-900">Source Verification</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Certified silk farms only</li>
              <li>• Traceable supply chain</li>
              <li>• Seasonal quality assessment</li>
              <li>• Sustainable farming practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Manufacturing Quality Control */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">Manufacturing Quality Assurance</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Weaving Process Control
              </h3>
              <ul className="space-y-2 text-gray-700 pl-11">
                <li>• Thread count verification (400+ per inch)</li>
                <li>• Tension consistency monitoring</li>
                <li>• Weave pattern accuracy check</li>
                <li>• Real-time quality inspection</li>
              </ul>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Dyeing & Finishing
              </h3>
              <ul className="space-y-2 text-gray-700 pl-11">
                <li>• Non-toxic, eco-friendly dyes only</li>
                <li>• Color fastness testing</li>
                <li>• pH level control (6.0-7.5)</li>
                <li>• Shrinkage prevention treatment</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Product Assembly
              </h3>
              <ul className="space-y-2 text-gray-700 pl-11">
                <li>• Precise cutting </li>
                <li>• Reinforced seaming techniques</li>
                <li>• Fill power testing for duvets</li>
                <li>• Dimensional accuracy verification</li>
              </ul>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Final Inspection
              </h3>
              <ul className="space-y-2 text-gray-700 pl-11">
                <li>• Visual defect inspection (100% products)</li>
                <li>• Weight and size verification</li>
                <li>• Packaging quality check</li>
                <li>• Batch tracking and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Standards */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">International Testing Standards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Physical Testing</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-medium">Thread Count</span>
                <span className="text-gray-600">400-600 TPI</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-medium">Tensile Strength</span>
                <span className="text-gray-600">≥350 N/cm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-medium">Shrinkage Rate</span>
                <span className="text-gray-600">≤3%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-medium">Color Fastness</span>
                <span className="text-gray-600">Grade 4-5</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Smoothness</span>
                <span className="text-gray-600">≤4.5μm</span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">Safety Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">OEKO-TEX Standard 100</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">ISO 9001:2015 Quality Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">ASTM D6193 Silk Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">GB/T 24252 Chinese Silk Standard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">EU REACH Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">Our Quality Metrics</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
            <h3 className="text-lg font-semibold mb-2">Pass Rate</h3>
            <p className="text-gray-600 text-sm">First-time quality inspection success rate</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl font-bold text-green-600 mb-2">&lt;0.1%</div>
            <h3 className="text-lg font-semibold mb-2">Defect Rate</h3>
            <p className="text-gray-600 text-sm">Manufacturing defects in finished products</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
            <h3 className="text-lg font-semibold mb-2">Response Time</h3>
            <p className="text-gray-600 text-sm">Quality issue resolution timeframe</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
            <h3 className="text-lg font-semibold mb-2">Test Points</h3>
            <p className="text-gray-600 text-sm">Quality checkpoints in production</p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">Quality Assurance Workflow</h2>
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-xl">
          <div className="grid gap-6 md:grid-cols-5">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
              <h4 className="font-semibold mb-2">Raw Material Inspection</h4>
              <p className="text-sm text-gray-600">Incoming silk fiber quality verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
              <h4 className="font-semibold mb-2">In-Process Monitoring</h4>
              <p className="text-sm text-gray-600">Real-time production quality checks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
              <h4 className="font-semibold mb-2">Pre-Shipment Testing</h4>
              <p className="text-sm text-gray-600">Comprehensive final product evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <p className="text-sm text-gray-600">Complete traceability records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
              <h4 className="font-semibold mb-2">Continuous Improvement</h4>
              <p className="text-sm text-gray-600">Feedback analysis and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6 py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">Quality Control FAQ</h2>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">How do you ensure consistent silk quality across batches?</h3>
            <p className="text-gray-700">We maintain strict batch tracking, use standardized testing protocols, and source from certified suppliers with consistent quality records. Each batch undergoes identical testing procedures.</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">What certifications validate your quality standards?</h3>
            <p className="text-gray-700">Our products are OEKO-TEX Standard 100 certified, ISO 9001:2015 compliant, and meet ASTM D6193 silk testing standards. We also comply with EU REACH regulations.</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Can you provide quality test reports for wholesale orders?</h3>
            <p className="text-gray-700">Yes, we provide comprehensive quality test reports including fiber analysis, tensile strength, color fastness, and safety certifications for every wholesale shipment.</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">What happens if a product doesn't meet quality standards?</h3>
            <p className="text-gray-700">Products that don't meet our standards are rejected and either reworked or discarded. We offer quality guarantees and will replace any defective products at no additional cost.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Experience Premium Silk Quality</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Partner with us for silk products that exceed international quality standards. 
          Request samples and quality documentation today.
        </p>
        <ContactButton>
          Start Your Project
        </ContactButton>
      </section>
    </>
  );
} 