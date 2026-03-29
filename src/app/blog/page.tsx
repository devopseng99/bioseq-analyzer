import Link from 'next/link';

const categories = ['All', 'Tutorials', 'Research', 'Product Updates', 'Industry News'];

const posts = [
  {
    title: 'A Beginner\'s Guide to Variant Calling with BioSeq Analyzer',
    excerpt: 'Learn how to go from raw FASTQ files to annotated VCF in under 30 minutes using our automated variant calling pipeline.',
    category: 'Tutorials',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'How We Achieved 99.97% Alignment Accuracy',
    excerpt: 'A deep dive into the algorithm optimizations and validation strategies behind our industry-leading alignment accuracy.',
    category: 'Research',
    date: 'Jan 10, 2024',
    readTime: '12 min read',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Introducing Batch Analysis v2.0',
    excerpt: 'Process up to 10,000 samples in a single run with our redesigned batch analysis engine — 3x faster with better QC.',
    category: 'Product Updates',
    date: 'Jan 5, 2024',
    readTime: '5 min read',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    title: 'The Future of Clinical Genomics: 2024 Outlook',
    excerpt: 'Key trends shaping clinical genomics this year, from liquid biopsy advances to AI-powered variant interpretation.',
    category: 'Industry News',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    gradient: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'Building Phylogenetic Trees: Best Practices',
    excerpt: 'Which inference method should you use? A practical comparison of ML, Bayesian, and distance-based approaches.',
    category: 'Tutorials',
    date: 'Dec 20, 2023',
    readTime: '15 min read',
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Case Study: Tracking Antimicrobial Resistance with BioSeq',
    excerpt: 'How a research hospital used our platform to track AMR gene spread across 2,000 clinical isolates.',
    category: 'Research',
    date: 'Dec 15, 2023',
    readTime: '7 min read',
    gradient: 'from-teal-600 to-cyan-500',
  },
  {
    title: 'New: HIPAA-Compliant Cloud Deployment',
    excerpt: 'BioSeq Analyzer now offers fully HIPAA-compliant cloud deployments with SOC 2 Type II certification.',
    category: 'Product Updates',
    date: 'Dec 8, 2023',
    readTime: '4 min read',
    gradient: 'from-teal-300 to-emerald-400',
  },
  {
    title: 'Understanding GRCh38 vs T2T-CHM13 Reference Genomes',
    excerpt: 'When should you use the telomere-to-telomere assembly? A guide to choosing the right reference for your analysis.',
    category: 'Tutorials',
    date: 'Dec 1, 2023',
    readTime: '11 min read',
    gradient: 'from-emerald-300 to-teal-500',
  },
  {
    title: 'FDA Clears First AI-Driven Genomic Analysis Tool',
    excerpt: 'What the FDA\'s latest clearance means for the clinical genomics industry and how it affects analysis standards.',
    category: 'Industry News',
    date: 'Nov 25, 2023',
    readTime: '6 min read',
    gradient: 'from-cyan-300 to-teal-400',
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Tutorials, research insights, product updates, and industry news from the BioSeq Analyzer team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:bg-teal-50 hover:text-teal-600 cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured post */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className={`h-64 lg:h-auto bg-gradient-to-br ${posts[0].gradient} flex items-center justify-center`}>
              <div className="text-white/30 text-5xl font-bold">Featured</div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full w-fit mb-3">{posts[0].category}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{posts[0].date}</span>
                <span>{posts[0].readTime}</span>
              </div>
              <Link href="#" className="mt-4 text-teal-600 font-medium text-sm hover:text-teal-700">
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <div className="text-white/20 text-3xl font-bold">{post.category.split(' ')[0]}</div>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">{post.category}</span>
                <h3 className="text-base font-semibold text-gray-900 mt-3 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
