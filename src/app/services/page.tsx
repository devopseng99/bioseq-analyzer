import Link from 'next/link';

const services = [
  {
    title: 'Sequence Alignment',
    description: 'Multi-sequence alignment for DNA, RNA, and protein sequences using BLAST, Bowtie2, and BWA-MEM algorithms. Supports FASTA, FASTQ, and BAM formats.',
    features: ['Pairwise & multiple alignment', 'Reference genome mapping', 'Gap analysis & scoring', 'Export to SAM/BAM'],
    price: 'From $0.50/sample',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'Variant Calling',
    description: 'Comprehensive variant detection including SNPs, indels, CNVs, and structural variants with clinical-grade sensitivity and specificity metrics.',
    features: ['Germline & somatic calling', 'VCF annotation & filtering', 'Allele frequency analysis', 'Clinical interpretation'],
    price: 'From $1.20/sample',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    title: 'Phylogenetic Analysis',
    description: 'Construct evolutionary trees using maximum likelihood, Bayesian inference, and neighbor-joining methods with bootstrap support analysis.',
    features: ['Interactive tree viewer', 'Multiple inference methods', 'Divergence dating', 'Ancestral reconstruction'],
    price: 'From $2.00/analysis',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Annotation Browser',
    description: 'Interactive genome browser with gene annotations, regulatory elements, epigenetic marks, and functional domain mapping across reference assemblies.',
    features: ['Gene & transcript view', 'Regulatory element overlay', 'Custom track upload', 'Cross-species comparison'],
    price: 'From $0.80/session',
    gradient: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'Batch Analysis Pipeline',
    description: 'High-throughput processing of hundreds to thousands of samples with automated QC, analysis workflows, and consolidated reporting.',
    features: ['Parallel processing', 'Auto QC & filtering', 'Custom pipelines', 'Bulk report generation'],
    price: 'From $0.30/sample',
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Custom Bioinformatics',
    description: 'Tailored analysis solutions for unique research needs — from metagenomics to single-cell RNA-seq, our team builds custom pipelines.',
    features: ['Dedicated pipeline dev', 'Method consulting', 'Publication support', 'Ongoing maintenance'],
    price: 'Custom quote',
    gradient: 'from-teal-600 to-cyan-500',
  },
];

const comparison = [
  { feature: 'Max sequences per run', basic: '100', pro: '10,000', enterprise: 'Unlimited' },
  { feature: 'Alignment algorithms', basic: 'BLAST', pro: 'BLAST, BWA, Bowtie2', enterprise: 'All + custom' },
  { feature: 'Variant calling', basic: 'SNPs only', pro: 'SNPs + Indels', enterprise: 'Full spectrum' },
  { feature: 'Phylogenetic methods', basic: 'Neighbor-joining', pro: 'NJ + ML', enterprise: 'All methods' },
  { feature: 'Storage', basic: '10 GB', pro: '500 GB', enterprise: '5 TB+' },
  { feature: 'API access', basic: 'No', pro: 'Yes', enterprise: 'Yes + priority' },
  { feature: 'Support', basic: 'Email', pro: 'Priority email', enterprise: 'Dedicated team' },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Analysis Services</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            End-to-end genomic analysis services powered by cutting-edge bioinformatics algorithms and cloud-scale infrastructure.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-semibold">{service.price}</span>
                  <Link href="/booking" className="text-sm font-medium text-teal-600 hover:text-teal-700">
                    Get Started &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-4 text-sm font-semibold text-gray-900">Feature</th>
                <th className="text-center p-4 text-sm font-semibold text-gray-900">Basic</th>
                <th className="text-center p-4 text-sm font-semibold text-teal-600">Professional</th>
                <th className="text-center p-4 text-sm font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-teal-50/30' : ''}>
                  <td className="p-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.basic}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.pro}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
