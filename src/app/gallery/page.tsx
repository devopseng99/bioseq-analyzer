'use client';

import { useState } from 'react';

const categories = ['All', 'Alignments', 'Variants', 'Phylogenetics', 'Annotations', 'Pipelines'];

const items = [
  { title: 'Whole Genome Alignment — BRCA1 Region', category: 'Alignments', gradient: 'from-teal-300 to-cyan-400', description: 'Multi-species alignment of BRCA1 locus showing conserved domains' },
  { title: 'Somatic Variant Landscape — Melanoma', category: 'Variants', gradient: 'from-emerald-400 to-teal-500', description: 'Circos plot of somatic mutations across 200 melanoma samples' },
  { title: 'SARS-CoV-2 Phylogeny — Global Lineages', category: 'Phylogenetics', gradient: 'from-teal-400 to-emerald-300', description: 'Radial phylogenetic tree of 5,000 SARS-CoV-2 genomes' },
  { title: 'Gene Annotation Browser — Chr17', category: 'Annotations', gradient: 'from-cyan-300 to-teal-500', description: 'Interactive view of chromosome 17 gene annotations with regulatory tracks' },
  { title: 'RNA-Seq Batch Pipeline — 500 Samples', category: 'Pipelines', gradient: 'from-teal-500 to-teal-700', description: 'Automated differential expression pipeline with QC dashboard' },
  { title: 'Pairwise Alignment — Human vs Mouse', category: 'Alignments', gradient: 'from-teal-200 to-cyan-500', description: 'Dot plot visualization of syntenic regions between human and mouse' },
  { title: 'Germline Variant Report — WES Panel', category: 'Variants', gradient: 'from-emerald-300 to-teal-400', description: 'Filtered variant report from whole-exome sequencing panel' },
  { title: 'Bacterial Phylogeny — Gut Microbiome', category: 'Phylogenetics', gradient: 'from-teal-300 to-emerald-500', description: 'Neighbor-joining tree of 16S rRNA sequences from gut microbiome study' },
  { title: 'Epigenetic Annotation — Histone Marks', category: 'Annotations', gradient: 'from-cyan-400 to-emerald-400', description: 'ChIP-seq peak overlay with gene expression correlation' },
  { title: 'Metagenomics Pipeline — Soil Samples', category: 'Pipelines', gradient: 'from-teal-600 to-cyan-400', description: 'Taxonomic classification and abundance profiling from 120 soil samples' },
  { title: 'Structural Variant Detection — Cancer Panel', category: 'Variants', gradient: 'from-teal-400 to-teal-600', description: 'SV breakpoint visualization from long-read sequencing data' },
  { title: 'Maximum Likelihood Tree — Influenza A', category: 'Phylogenetics', gradient: 'from-emerald-400 to-cyan-300', description: 'Time-calibrated ML tree showing seasonal influenza evolution' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Analysis Gallery</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Explore examples of our genomic analysis outputs — from alignment visualizations to phylogenetic trees.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <div className="text-white/30 text-6xl font-bold">
                  {item.category === 'Alignments' && '|||'}
                  {item.category === 'Variants' && 'SNP'}
                  {item.category === 'Phylogenetics' && 'Tree'}
                  {item.category === 'Annotations' && 'Gene'}
                  {item.category === 'Pipelines' && 'Flow'}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">{item.category}</span>
                <h3 className="text-base font-semibold text-gray-900 mt-3 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
