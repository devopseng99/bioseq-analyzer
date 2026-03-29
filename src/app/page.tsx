import Link from 'next/link';

const stats = [
  { value: '2.5M+', label: 'Sequences Analyzed' },
  { value: '99.97%', label: 'Alignment Accuracy' },
  { value: '1,200+', label: 'Research Labs' },
  { value: '<30min', label: 'Avg. Processing Time' },
];

const features = [
  {
    title: 'Sequence Alignment',
    description: 'Multi-sequence alignment with support for DNA, RNA, and protein sequences using advanced algorithms like BLAST and Smith-Waterman.',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'Variant Calling',
    description: 'Identify SNPs, indels, and structural variants with high sensitivity and specificity across whole-genome and targeted sequencing data.',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    title: 'Phylogenetic Trees',
    description: 'Construct and visualize evolutionary relationships with interactive phylogenetic tree builder supporting multiple inference methods.',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Annotation Browser',
    description: 'Browse gene annotations, regulatory elements, and functional domains with an interactive genome browser interface.',
    gradient: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'Batch Analysis',
    description: 'Process hundreds of samples simultaneously with our distributed computing pipeline and automated quality control checks.',
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Data Security',
    description: 'HIPAA-compliant infrastructure with end-to-end encryption, SOC 2 certified data centers, and granular access controls.',
    gradient: 'from-teal-600 to-cyan-500',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              Now processing 10,000+ genomes daily
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Decode Genomes with
              <span className="block text-teal-100">Laboratory Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 mb-8 max-w-2xl">
              BioSeq Analyzer delivers enterprise-grade genomic sequence analysis with alignment visualization, variant calling, and phylogenetic tree construction — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg"
              >
                Start Analysis
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Genomic Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From raw sequence data to actionable insights — our platform covers every step of the bioinformatics pipeline.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Analyze Your Sequences?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get started with a free trial — upload your first dataset and see results in minutes.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
