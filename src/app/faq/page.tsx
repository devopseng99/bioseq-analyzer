'use client';

import { useState } from 'react';
import Link from 'next/link';

const sections = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I upload my sequencing data?',
        a: 'After creating an account, navigate to the Dashboard and click "New Analysis." You can upload FASTQ, FASTA, BAM, or VCF files via our web interface (up to 50 GB) or use our CLI tool for larger datasets. We also support direct integration with Illumina BaseSpace and AWS S3.',
      },
      {
        q: 'What file formats do you support?',
        a: 'We support all major bioinformatics file formats: FASTQ, FASTA, BAM, SAM, CRAM, VCF, BED, GFF3, GTF, and more. Our platform automatically detects the format and validates file integrity before processing.',
      },
      {
        q: 'How long does a typical analysis take?',
        a: 'Processing time depends on the analysis type and number of samples. Single-sample alignment typically completes in 15-30 minutes. Variant calling takes 30-60 minutes. Batch analyses scale linearly — 100 samples usually complete in 2-4 hours. Rush processing can cut these times in half.',
      },
    ],
  },
  {
    title: 'Sequence Alignment',
    questions: [
      {
        q: 'Which alignment algorithms are available?',
        a: 'We offer BLAST, BWA-MEM, BWA-MEM2, Bowtie2, STAR (for RNA-seq), and Minimap2 (for long reads). Professional and Enterprise plans have access to all algorithms, while the Starter plan includes BLAST.',
      },
      {
        q: 'Can I use a custom reference genome?',
        a: 'Yes! Upload your custom reference in FASTA format and our platform will automatically index it. Custom references are available on all plans. We also maintain pre-built indices for 50+ commonly used reference genomes.',
      },
    ],
  },
  {
    title: 'Variant Calling',
    questions: [
      {
        q: 'What types of variants can you detect?',
        a: 'Our platform detects SNPs, small indels (insertions/deletions), copy number variants (CNVs), structural variants (SVs), and complex rearrangements. The variant types available depend on your plan — Starter includes SNPs, Professional adds indels, and Enterprise provides full-spectrum detection.',
      },
      {
        q: 'How do you ensure variant calling accuracy?',
        a: 'We validate all variant calling pipelines against NIST Genome in a Bottle (GIAB) truth sets, achieving >99.5% sensitivity and >99.9% specificity for SNPs. All results include quality scores, and we provide automated filtering recommendations based on GATK best practices.',
      },
    ],
  },
  {
    title: 'Phylogenetic Analysis',
    questions: [
      {
        q: 'Which phylogenetic inference methods do you support?',
        a: 'We support Neighbor-Joining, Maximum Likelihood (RAxML, IQ-TREE), Bayesian inference (MrBayes, BEAST2), and distance-based methods. All trees include bootstrap or posterior probability support values.',
      },
      {
        q: 'Can I visualize and edit the resulting trees?',
        a: 'Yes! Our interactive tree viewer lets you zoom, rotate, reroot, collapse clades, and annotate nodes. Export options include Newick, NEXUS, PhyloXML, and publication-ready SVG/PDF images.',
      },
    ],
  },
  {
    title: 'Data Security & Compliance',
    questions: [
      {
        q: 'Is my data secure on your platform?',
        a: 'Absolutely. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We maintain SOC 2 Type II certification, and our infrastructure is hosted in HIPAA-compliant data centers. Access is controlled via role-based permissions with MFA.',
      },
      {
        q: 'Can I use BioSeq Analyzer for clinical/diagnostic work?',
        a: 'Our Enterprise plan includes CAP-accredited analysis pipelines and FDA 21 CFR Part 11 compliance features. Contact our sales team to discuss your specific regulatory requirements and how we can support your clinical workflows.',
      },
    ],
  },
  {
    title: 'Billing & Plans',
    questions: [
      {
        q: 'Can I switch plans at any time?',
        a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features with prorated billing. When downgrading, your current features remain active until the end of your billing cycle.',
      },
      {
        q: 'Do you offer academic or non-profit discounts?',
        a: 'Yes! We offer 40% discounts for verified academic institutions and 50% for registered non-profit organizations. Contact us with your institutional email or non-profit documentation to get started.',
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-sm text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Find answers to common questions about our genomic analysis platform, features, and services.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                {section.questions.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-teal-50 rounded-xl p-8 border border-teal-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-sm text-gray-600 mb-4">Our team is happy to help with any questions about our platform.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors text-sm">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
