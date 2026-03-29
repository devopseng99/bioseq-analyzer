'use client';

import { useState } from 'react';

const analysisTypes = [
  { id: 'alignment', name: 'Sequence Alignment', price: 0.5 },
  { id: 'variant', name: 'Variant Calling', price: 1.2 },
  { id: 'phylo', name: 'Phylogenetic Analysis', price: 2.0 },
  { id: 'annotation', name: 'Annotation Browser', price: 0.8 },
  { id: 'batch', name: 'Batch Pipeline', price: 0.3 },
];

const organisms = ['Human (GRCh38)', 'Mouse (GRCm39)', 'E. coli (K-12)', 'SARS-CoV-2', 'Drosophila', 'Zebrafish', 'Custom Reference'];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    analysisType: '',
    organism: '',
    sampleCount: 1,
    sequencingType: 'whole-genome',
    priority: 'standard',
    notes: '',
  });

  const selectedAnalysis = analysisTypes.find((a) => a.id === form.analysisType);
  const priorityMultiplier = form.priority === 'rush' ? 2.5 : form.priority === 'priority' ? 1.5 : 1;
  const estimatedCost = selectedAnalysis ? selectedAnalysis.price * form.sampleCount * priorityMultiplier : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'sampleCount' ? parseInt(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Book an Analysis</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Submit your sequencing data for analysis. Our team will process your samples and deliver results within your chosen timeline.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= s ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > s ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : s}
              </div>
              {s < 3 && <div className={`w-20 h-1 mx-2 rounded ${step > s ? 'bg-teal-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {step === 4 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analysis Submitted!</h2>
            <p className="text-gray-600 mb-4">Your analysis request has been received. We&apos;ll send a confirmation to {form.email} with upload instructions for your sequencing data.</p>
            <p className="text-sm text-gray-500">Estimated cost: <span className="font-semibold text-teal-600">${estimatedCost.toFixed(2)}</span></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution / Organization</label>
                  <input type="text" name="institution" value={form.institution} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
                </div>
                <button type="button" onClick={() => setStep(2)} className="w-full bg-teal-500 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-600 transition-colors">
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Configuration</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Analysis Type</label>
                  <select name="analysisType" value={form.analysisType} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                    <option value="">Select analysis type</option>
                    {analysisTypes.map((a) => (
                      <option key={a.id} value={a.id}>{a.name} — ${a.price}/sample</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference Organism</label>
                  <select name="organism" value={form.organism} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                    <option value="">Select organism</option>
                    {organisms.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Samples</label>
                  <input type="number" name="sampleCount" value={form.sampleCount} onChange={handleChange} min={1} max={10000} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sequencing Type</label>
                  <select name="sequencingType" value={form.sequencingType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                    <option value="whole-genome">Whole Genome Sequencing</option>
                    <option value="exome">Whole Exome Sequencing</option>
                    <option value="targeted">Targeted Panel</option>
                    <option value="rnaseq">RNA-Seq</option>
                    <option value="amplicon">Amplicon Sequencing</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="flex-1 bg-teal-500 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-600 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Review & Submit</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Processing Priority</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'standard', label: 'Standard', desc: '5-7 business days', mult: '1x' },
                      { id: 'priority', label: 'Priority', desc: '2-3 business days', mult: '1.5x' },
                      { id: 'rush', label: 'Rush', desc: '24 hours', mult: '2.5x' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, priority: p.id }))}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          form.priority === p.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-sm text-gray-900">{p.label}</div>
                        <div className="text-xs text-gray-500">{p.desc}</div>
                        <div className="text-xs text-teal-600 font-medium mt-1">{p.mult} rate</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" placeholder="Special requirements, file format details, etc." />
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Estimated Cost</span>
                    <span className="text-2xl font-bold text-teal-600">${estimatedCost.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {form.sampleCount} sample{form.sampleCount !== 1 ? 's' : ''} &times; ${selectedAnalysis?.price.toFixed(2) ?? '0.00'}/sample &times; {priorityMultiplier}x priority
                  </p>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex-1 bg-teal-500 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-600 transition-colors">
                    Submit Analysis
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
