import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For individual researchers running occasional analyses.',
    features: [
      'Up to 100 sequences per run',
      'BLAST alignment',
      'SNP variant calling',
      'Neighbor-joining trees',
      '10 GB storage',
      'Email support',
      'Basic reporting',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'For research teams needing advanced analysis capabilities.',
    features: [
      'Up to 10,000 sequences per run',
      'BLAST, BWA, Bowtie2 alignment',
      'SNP + Indel variant calling',
      'NJ + Maximum Likelihood trees',
      '500 GB storage',
      'Priority email support',
      'Detailed PDF reports',
      'API access',
      'Team collaboration (5 users)',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For institutions with high-throughput and compliance needs.',
    features: [
      'Unlimited sequences',
      'All alignment algorithms + custom',
      'Full-spectrum variant calling',
      'All phylogenetic methods',
      '5 TB+ storage',
      'Dedicated support team',
      'Custom pipeline development',
      'Priority API access',
      'Unlimited users',
      'HIPAA compliance',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const comparison = [
  { feature: 'Sequences per run', starter: '100', pro: '10,000', enterprise: 'Unlimited' },
  { feature: 'Alignment algorithms', starter: '1', pro: '3', enterprise: 'All + custom' },
  { feature: 'Variant types', starter: 'SNPs', pro: 'SNPs, Indels', enterprise: 'All (SNPs, Indels, CNVs, SVs)' },
  { feature: 'Phylogenetic methods', starter: '1', pro: '2', enterprise: 'All + Bayesian' },
  { feature: 'Annotation browser', starter: 'Basic', pro: 'Full', enterprise: 'Full + custom tracks' },
  { feature: 'Batch analysis', starter: 'No', pro: 'Up to 500 samples', enterprise: 'Unlimited' },
  { feature: 'Storage', starter: '10 GB', pro: '500 GB', enterprise: '5 TB+' },
  { feature: 'API access', starter: 'No', pro: 'Yes', enterprise: 'Yes + priority' },
  { feature: 'Team members', starter: '1', pro: '5', enterprise: 'Unlimited' },
  { feature: 'SLA', starter: 'None', pro: '99.9%', enterprise: '99.99%' },
  { feature: 'Support', starter: 'Email (48h)', pro: 'Priority (4h)', enterprise: 'Dedicated team (1h)' },
  { feature: 'Custom pipelines', starter: 'No', pro: 'No', enterprise: 'Yes' },
];

export default function PricingPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your research needs. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 ${
                tier.highlighted
                  ? 'bg-white border-2 border-teal-500 shadow-xl relative'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-500">{tier.period}</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">{tier.description}</p>
              <Link
                href={tier.name === 'Enterprise' ? '/contact' : '/booking'}
                className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  tier.highlighted
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'border border-teal-500 text-teal-600 hover:bg-teal-50'
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Detailed Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-4 text-sm font-semibold text-gray-900">Feature</th>
                <th className="text-center p-4 text-sm font-semibold text-gray-900">Starter</th>
                <th className="text-center p-4 text-sm font-semibold text-teal-600">Professional</th>
                <th className="text-center p-4 text-sm font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-teal-50/30' : ''}>
                  <td className="p-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.starter}</td>
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
