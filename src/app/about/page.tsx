const team = [
  { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', bio: 'Former head of bioinformatics at Broad Institute. 15+ years in genomics.', gradient: 'from-teal-400 to-cyan-400' },
  { name: 'Dr. Marcus Rivera', role: 'CTO & Co-Founder', bio: 'Ex-Google Health engineering lead. Expert in distributed computing for genomics.', gradient: 'from-emerald-400 to-teal-400' },
  { name: 'Dr. Aisha Patel', role: 'VP of Science', bio: 'Published 80+ papers in computational biology. Led variant calling at Illumina.', gradient: 'from-teal-500 to-emerald-400' },
  { name: 'James Okonkwo', role: 'VP of Engineering', bio: 'Built scalable bioinformatics platforms at 23andMe and Pacific Biosciences.', gradient: 'from-cyan-400 to-teal-500' },
  { name: 'Dr. Elena Volkov', role: 'Head of Phylogenetics', bio: 'Pioneer in Bayesian phylogenetic methods. Former professor at ETH Zurich.', gradient: 'from-teal-300 to-emerald-500' },
  { name: 'David Kim', role: 'Head of Product', bio: 'Designed bioinformatics tools used by 500+ labs worldwide. UX-first approach.', gradient: 'from-teal-400 to-teal-600' },
];

const values = [
  { title: 'Scientific Rigor', description: 'Every algorithm we deploy is peer-reviewed and validated against gold-standard datasets. We never sacrifice accuracy for speed.' },
  { title: 'Reproducibility', description: 'All analyses are fully reproducible with versioned pipelines, containerized environments, and complete audit trails.' },
  { title: 'Accessibility', description: 'We believe powerful genomic analysis should be available to every researcher, not just those with bioinformatics expertise.' },
  { title: 'Data Privacy', description: 'Your genomic data is encrypted at rest and in transit. We are HIPAA-compliant and SOC 2 Type II certified.' },
];

const certifications = [
  'HIPAA Compliant',
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Ready',
  'CAP Accredited Pipelines',
  'FDA 21 CFR Part 11',
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">About BioSeq Analyzer</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            We&apos;re building the future of genomic analysis — making it faster, more accurate, and accessible to every researcher.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, BioSeq Analyzer was born from a frustration shared by genomics researchers worldwide: powerful analysis tools existed, but they required extensive bioinformatics expertise and massive compute infrastructure to use effectively.
              </p>
              <p>
                Our founders, Dr. Sarah Chen and Dr. Marcus Rivera, envisioned a platform that would democratize genomic analysis — combining state-of-the-art algorithms with an intuitive interface that any researcher could use.
              </p>
              <p>
                Today, BioSeq Analyzer serves over 1,200 research labs across 45 countries, processing more than 2.5 million sequences to date. From small academic labs to large pharmaceutical companies, our platform powers discoveries that advance human health.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-white/30 text-5xl font-bold text-center">Lab<br />Photo</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-teal-50/50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-teal-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-teal-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white text-center mb-8">Certifications & Compliance</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="bg-teal-800 text-teal-100 px-4 py-2 rounded-lg text-sm font-medium">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
