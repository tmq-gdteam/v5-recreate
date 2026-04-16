import React, { useState } from 'react';
import { MapIcon } from '../components/Icons';

// --- Local Icons ---
const CalendarIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const GlobeIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const MonitorIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
const SparklesIcon = ({ className }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>;
const ChevronDownIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9" /></svg>;
const ArrowRightIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;

export default function JourneyView() {
  const [currentView, setCurrentView] = useState('aggregate');
  const [visMode, setVisMode] = useState('story');

  return (
    <div className="p-4 md:p-6 w-full max-w-[1920px] mx-auto flex flex-col gap-6">

      {/* Page Header */}
      <section className="mb-1 w-full">
        <h1 className="text-page-header font-bold text-accent-teal tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
          User Journeys
        </h1>
        <p className="text-page-sub text-text-paragraph mt-1">Visualize how users navigate through your platform</p>
      </section>

      {/* KPI Cards Strip */}
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-6 w-full pb-4 md:pb-0 scrollbar-hide">

        <div className="bg-white rounded-xl shadow-card p-5 md:p-6 flex flex-col shrink-0 w-[260px] md:w-auto snap-start">
          <div className="text-card-stats-num font-normal text-[#28514d] mb-1 flex justify-between items-baseline">
            24,568 <span className="text-success text-[11px] font-normal font-sans">▲ +33%</span>
          </div>
          <div className="text-xs text-[#28514d] font-normal mt-1">Total Visitors</div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-5 md:p-6 flex flex-col shrink-0 w-[260px] md:w-auto snap-start">
          <div className="text-card-stats-num font-normal text-[#28514d] mb-1 flex justify-between items-baseline">
            12.4% <span className="text-success text-[11px] font-normal font-sans">▲ +33%</span>
          </div>
          <div className="text-xs text-[#28514d] font-normal mt-1">Avg. Conversion Rate</div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-5 md:p-6 flex flex-col shrink-0 w-[260px] md:w-auto snap-start">
          <div className="text-card-stats-num font-normal text-[#28514d] mb-1 flex justify-between items-baseline">
            /home <span className="text-success text-[11px] font-normal font-sans">▲ +33%</span>
          </div>
          <div className="text-xs text-[#28514d] font-normal mt-1">Top Entry Page</div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-5 md:p-6 flex flex-col shrink-0 w-[260px] md:w-auto snap-start">
          <div className="text-card-stats-num font-normal text-[#28514d] mb-1 flex justify-between items-baseline">
            3m 42s <span className="text-success text-[11px] font-normal font-sans">▲ +33%</span>
          </div>
          <div className="text-xs text-[#28514d] font-normal mt-1">Avg. Session Duration</div>
        </div>

      </div>

      {/* Unified Master Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full mb-6 flex flex-col mt-4">
        {/* Tabs as Header */}
        <div className="flex items-end border-b border-gray-200 px-6 pt-4">
          <div
            onClick={() => setCurrentView('aggregate')}
            className={`cursor-pointer whitespace-nowrap text-[13px] transition-colors ${currentView === 'aggregate' ? 'text-[#e46335] border-b-2 border-[#e46335] pb-3 font-medium px-2' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent pb-3 font-normal px-2'}`}
          >
            Aggregate View
          </div>
          <div
            onClick={() => setCurrentView('individual')}
            className={`cursor-pointer whitespace-nowrap text-[13px] transition-colors ${currentView === 'individual' ? 'text-[#e46335] border-b-2 border-[#e46335] pb-3 font-medium px-2 ml-6' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent pb-3 font-normal px-2 ml-6'}`}
          >
            Individual View
          </div>
        </div>

        {currentView === 'individual' && (
          <>
            {/* Layout Grid constraints INT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-6 md:p-8">

              {/* Left Flow Column */}
              <div className="md:col-span-8 flex flex-col gap-4">

                {/* Title and Views row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-1">
                  <h2 className="text-gray-900 font-normal text-[16px]">Individual User Journey</h2>

                  {/* Toggle View */}
                  <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 shrink-0 order-first sm:order-last ml-auto sm:ml-0 overflow-hidden">
                    <div
                      onClick={() => setVisMode('story')}
                      className={`px-4 py-1.5 text-sm rounded-full flex items-center gap-2 transition-colors cursor-pointer ${visMode === 'story' ? 'bg-white text-[#f59e0b] shadow-sm font-medium' : 'text-slate-500 hover:text-slate-700 bg-transparent font-normal'}`}>
                      <svg className={`w-4 h-4 ${visMode === 'story' ? 'text-[#f59e0b]' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg> Story View
                    </div>
                    <div
                      onClick={() => setVisMode('explorer')}
                      className={`px-4 py-1.5 text-sm rounded-full transition-colors flex items-center gap-2 cursor-pointer ${visMode === 'explorer' ? 'bg-white text-[#f59e0b] shadow-sm font-medium' : 'text-slate-500 hover:text-slate-700 bg-transparent font-normal'}`}>
                      <MapIcon className={`w-4 h-4 ${visMode === 'explorer' ? 'text-[#f59e0b]' : 'text-slate-500'}`} /> Explorer View
                    </div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  <input type="text" placeholder="Search visitor by name, company, or ID..." className="bg-transparent border-none outline-none w-full placeholder-gray-400 font-normal" />
                </div>

                {/* Filters row */}
                <div className="flex flex-wrap gap-2.5 mt-0.5">
                  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3.5 py-1.5 text-[12px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    <CalendarIcon className="w-3.5 h-3.5 text-gray-500" /> Last 30 Days <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3.5 py-1.5 text-[12px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    <GlobeIcon className="w-3.5 h-3.5 text-gray-500" /> All Sources <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3.5 py-1.5 text-[12px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    <MonitorIcon className="w-3.5 h-3.5 text-gray-500" /> All Devices <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                </div>

                {/* Breadcrumb Row / Telemetry */}
                <div className="bg-[#f0fdf4] text-emerald-800 rounded-lg px-4 py-2 flex items-center justify-between text-[13px] font-normal mt-0.5 border border-emerald-100/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span className="font-semibold text-emerald-900 border-r border-emerald-200 pr-3 mr-1">On: /pricing</span>
                    <span className="text-emerald-700">Home</span>
                    <ArrowRightIcon className="w-3 h-3 text-emerald-400 shrink-0 mx-0.5" />
                    <span className="text-emerald-700">Solutions</span>
                    <ArrowRightIcon className="w-3 h-3 text-emerald-400 shrink-0 mx-0.5" />
                    <span className="text-emerald-700">Enterprise</span>
                    <ArrowRightIcon className="w-3 h-3 text-emerald-400 shrink-0 mx-0.5" />
                    <span className="text-[#f59e0b] font-medium">Pricing</span>
                  </div>
                  <div className="text-[10px] font-medium tracking-wide text-emerald-700 bg-emerald-100/50 px-2.5 py-0.5 rounded-full shrink-0">High Intent</div>
                </div>

                {/* Profile Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col xl:flex-row xl:items-center justify-between mt-2 shadow-sm gap-4">
                  <div className="flex items-center gap-3 w-full xl:w-auto shrink-0">
                    <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-12 h-12 rounded-full border border-gray-200 object-cover" />
                    <div className="flex flex-col justify-center gap-1">
                      <h3 className="font-normal text-gray-900 text-[15px] leading-tight">Alex Morgan</h3>
                      <div className="flex items-center flex-wrap gap-1.5 text-[11px] text-gray-500 font-normal leading-tight">
                        <span className="flex items-center rounded border bg-[#f3f4f6] text-gray-600 px-1 font-bold border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.05)] text-[9px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg></span>
                        <span>Marketing Director</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-normal leading-tight">
                        <GlobeIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Orbital Inc.</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[12px] text-gray-400 font-normal w-full xl:max-w-xs xl:mx-auto">
                    <div className="flex gap-2 justify-between border-b border-gray-50 pb-1 w-full"><span>Total Visits</span> <span className="font-medium text-gray-900">1</span></div>
                    <div className="flex gap-2 justify-between border-b border-gray-50 pb-1 w-full"><span>Avg. Time</span> <span className="font-medium text-gray-900">12m 45s</span></div>
                    <div className="flex gap-2 justify-between w-full pt-0.5"><span>Device</span> <span className="font-medium text-gray-900">MacBook Pro</span></div>
                    <div className="flex gap-2 justify-between w-full pt-0.5"><span>Browser</span> <span className="font-medium text-gray-900">Chrome 120</span></div>
                  </div>

                  <div className="bg-teal-50 text-teal-700 rounded-lg px-4 py-3 flex flex-col xl:items-end border border-teal-100 shrink-0 w-full xl:w-auto h-full justify-center">
                    <div className="text-[10px] font-medium tracking-wide">Enrichment Confidence</div>
                    <div className="text-[26px] font-normal leading-none mt-1 text-[#0f766e]">94%</div>
                  </div>
                </div>

                {/* Conditional Views */}
                {visMode === 'story' && (
                  <div className="flex flex-col relative w-full h-auto min-h-[460px] overflow-hidden mt-2">

                    {/* Canvas Background with Flow */}
                    <div className="flex-1 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:16px_16px] relative p-8 flex items-center justify-center overflow-x-auto rounded-b-xl">
                      <div className="relative min-w-[600px] h-[360px] flex items-center justify-between w-full max-w-4xl">

                        {/* Step 1 */}
                        <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative z-20 w-48 border border-border-soft/50 hover:border-blue-300 transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-blue-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-blue-100/50">🏠</div>
                          <div>
                            <div className="font-bold text-[13px] text-text">Homepage</div>
                            <div className="text-[11px] text-text-subtle mt-0.5">12.5K visits</div>
                          </div>
                        </div>

                        {/* SVG Connections (Mocked) */}
                        <div className="absolute inset-0 pointer-events-none z-10 flex items-center">
                          <svg width="100%" height="100%" className="w-full h-full" preserveAspectRatio="none">
                            {/* Path to Features */}
                            <path d="M 170 180 C 260 180, 260 90, 360 90" fill="none" stroke="#46a756" strokeWidth="36" opacity="0.15" />
                            {/* Path to Pricing */}
                            <path d="M 170 180 C 260 180, 260 270, 360 270" fill="none" stroke="#e14617" strokeWidth="28" opacity="0.15" />
                            {/* Path from Features to Sign Up */}
                            <path d="M 520 90 C 580 90, 580 90, 620 90" fill="none" stroke="#46a756" strokeWidth="20" opacity="0.15" />
                            {/* Path from Pricing to Exit */}
                            <path d="M 520 270 C 580 270, 580 270, 620 270" fill="none" stroke="#e14617" strokeWidth="24" opacity="0.15" />
                            {/* Minor paths connecting downwards */}
                            <path d="M 330 90 C 280 150, 480 200, 520 270" fill="none" className="opacity-0" stroke="#d1d5db" strokeWidth="8" />
                          </svg>
                        </div>

                        {/* Step 2 Column */}
                        <div className="flex flex-col gap-12 relative z-20">
                          <div className="bg-white shadow-card rounded-[14px] p-3.5 flex flex-col relative w-44 border border-success/30 hover:border-success/60 transition-colors cursor-pointer">
                            <div className="absolute -top-2.5 right-2 bg-[#dcfce7] text-success text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-success/30 flex items-center gap-1 uppercase tracking-wider">
                              ✓ Strong intent
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <div className="w-10 h-10 bg-green-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-green-100/50">📄</div>
                              <div>
                                <div className="font-bold text-[13px] text-text">Features</div>
                                <div className="text-[11px] text-text-subtle mt-0.5">8.2K visits</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white shadow-card rounded-[14px] p-3.5 flex flex-col relative w-44 border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                            <div className="absolute -top-2.5 right-2 bg-[#fee2e2] text-primary text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-primary/20 flex items-center gap-1 uppercase tracking-wider">
                              ! High drop-off
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <div className="w-10 h-10 bg-red-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-red-100/50">💳</div>
                              <div>
                                <div className="font-bold text-[13px] text-text">Pricing</div>
                                <div className="text-[11px] text-text-subtle mt-0.5">6.8K visits</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 3 Column */}
                        <div className="flex flex-col gap-12 relative z-20 ml-10">
                          <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative w-44 border border-border-soft/50 hover:border-border-soft transition-colors cursor-pointer mt-4">
                            <div className="w-10 h-10 bg-blue-50/30 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-blue-100/50 text-blue-500 font-bold">✓</div>
                            <div>
                              <div className="font-bold text-[13px] text-text">Sign Up</div>
                              <div className="text-[11px] text-text-subtle mt-0.5">3.4K visits</div>
                            </div>
                          </div>

                          <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative w-44 border border-border-soft/50 hover:border-border-soft transition-colors cursor-pointer mt-4">
                            <div className="w-10 h-10 bg-orange-50/30 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-orange-100/50 text-[#f59e0b] font-bold">✕</div>
                            <div>
                              <div className="font-bold text-[13px] text-text">Exit</div>
                              <div className="text-[11px] text-text-subtle mt-0.5">5.1K visits</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 bg-white border border-border-soft rounded-md px-3 py-1.5 text-xs font-semibold text-text shadow-sm flex items-center gap-2 cursor-pointer hover:bg-background-content transition-colors z-30">
                      Legend <span className="text-[9px]">▲</span>
                    </div>
                  </div>
                )}

                {visMode === 'explorer' && (
                  <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden min-h-[460px] flex flex-col shadow-sm mt-2">
                    <div className="overflow-auto flex-1">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-white border-b border-gray-200 sticky top-0 z-10">
                          <tr>
                            <th className="text-[11px] text-gray-500 uppercase tracking-wider font-medium px-4 py-3">TIMESTAMP</th>
                            <th className="text-[11px] text-gray-500 uppercase tracking-wider font-medium px-4 py-3 text-center">TYPE</th>
                            <th className="text-[11px] text-gray-500 uppercase tracking-wider font-medium px-4 py-3">EVENT NAME</th>
                            <th className="text-[11px] text-gray-500 uppercase tracking-wider font-medium px-4 py-3">PAGE / CONTEXT</th>
                            <th className="text-[11px] text-gray-500 uppercase tracking-wider font-medium px-4 py-3">METADATA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:52:15 AM</td>
                            <td className="px-4 py-3 flex justify-center"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Toggle Annual Billing</td>
                            <td className="px-4 py-3 text-xs text-gray-500">/pricing</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">Switched to Annual view</div></td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:52:02 AM</td>
                            <td className="px-4 py-3 flex justify-center"><GlobeIcon className="w-4 h-4 text-blue-400" /></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Page View</td>
                            <td className="px-4 py-3 text-xs text-gray-500">/pricing</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">Duration: 45s</div></td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:48:30 AM</td>
                            <td className="px-4 py-3 flex justify-center"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Download PDF</td>
                            <td className="px-4 py-3 text-xs text-gray-500">/resources/security</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">security-whitepaper.pdf</div></td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:45:12 AM</td>
                            <td className="px-4 py-3 flex justify-center"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Scroll Depth 60%</td>
                            <td className="px-4 py-3 text-xs text-gray-500">/features/sso</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">Read full integration list</div></td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:44:05 AM</td>
                            <td className="px-4 py-3 flex justify-center"><GlobeIcon className="w-4 h-4 text-blue-400" /></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Page View</td>
                            <td className="px-4 py-3 text-xs text-gray-500">/features/sso</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">Duration: 3m 12s</div></td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-xs text-gray-400">10:42:00 AM</td>
                            <td className="px-4 py-3 flex justify-center"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg></td>
                            <td className="px-4 py-3 text-sm text-gray-800 font-normal">Ad Click</td>
                            <td className="px-4 py-3 text-xs text-gray-500">LinkedIn</td>
                            <td className="px-4 py-3 text-xs text-gray-500"><div className="truncate max-w-[200px]">Campaign: Enterprise_Q1</div></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar Column */}
              <div className="md:col-span-4 flex flex-col gap-6">

                {/* Session Timeline */}
                <div className="p-6">
                  <h3 className="text-[#28514d] font-normal text-base mb-6">Session Timeline</h3>

                  <div className="relative border-l border-gray-200 ml-3 space-y-7 pb-2">

                    {/* Node 1 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                      <div className="text-sm text-gray-800 font-normal leading-tight">Landed on Homepage</div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">Homepage</div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-[#f59e0b] border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                      <div className="text-sm text-gray-800 font-normal leading-tight">Viewed Pricing</div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">Pricing Page</div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                      <div className="text-sm text-gray-800 font-normal leading-tight">Explored Features</div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">Features</div>
                    </div>

                    {/* Node 4 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                      <div className="text-sm text-gray-800 font-normal leading-tight">Requested Demo</div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">Demo Request</div>
                    </div>

                    {/* Node 5 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                      <div className="text-sm text-gray-800 font-normal leading-tight">Landed on Homepage</div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">Homepage</div>
                    </div>

                    {/* Node 6 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:23 AM</div>
                          <div className="text-sm text-gray-800 font-normal leading-tight">Filled Contact Form</div>
                          <div className="text-xs text-gray-500 font-normal mt-0.5">Contact Form</div>
                        </div>
                        <div className="bg-green-50 text-green-600 text-[9px] px-2 py-0.5 rounded uppercase tracking-wide border border-green-100 shrink-0">
                          Conversion Event
                        </div>
                      </div>
                    </div>

                    {/* Node 7 */}
                    <div className="relative pl-6 flex flex-col">
                      <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-white shadow-sm ring-1 ring-gray-100"></div>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="text-xs text-gray-400 font-normal leading-none mb-1.5">10:24 AM</div>
                          <div className="text-sm text-gray-800 font-normal leading-tight">Submitted Contact Form</div>
                          <div className="text-xs text-gray-500 font-normal mt-0.5">Contact Form</div>
                        </div>
                        <div className="bg-green-50 text-green-600 text-[9px] px-2 py-0.5 rounded uppercase tracking-wide border border-green-100 shrink-0">
                          Success
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Top Paths */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
                  <h3 className="font-normal text-text text-base">Top Paths</h3>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Pricing → Exit</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">3.2k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">45% <span className="text-success pb-0.5 font-sans">↗</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-success h-full transition-all" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Features → Sign Up</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">2.8k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">38% <span className="text-success pb-0.5 font-sans">↗</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-success h-full opacity-70 transition-all" style={{ width: '38%' }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Pricing → Sign Up</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">1.4k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">17% <span className="text-primary pb-0.5 font-sans">↘</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-[#f59e0b] h-full transition-all" style={{ width: '17%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Drop-offs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
                  <h3 className="font-normal text-text text-base mb-1">Common Drop-offs</h3>

                  <div className="bg-card border border-border-soft rounded-lg flex flex-col divide-y divide-border-soft/60 overflow-hidden">
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer rounded-t-lg">
                      <div>
                        <div className="font-normal text-sm text-text">Pricing Page</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 67%</div>
                      </div>
                      <span className="bg-red-50 text-primary text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">High</span>
                    </div>
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer">
                      <div>
                        <div className="font-normal text-sm text-text">Homepage</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 15%</div>
                      </div>
                      <span className="bg-green-50 text-success text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-success/30 shrink-0">Low</span>
                    </div>
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer rounded-b-lg">
                      <div>
                        <div className="font-normal text-sm text-text">Features Page</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 22%</div>
                      </div>
                      <span className="bg-yellow-50 text-yellow-700 text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-yellow-200 shrink-0">Medium</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

        {currentView === 'aggregate' && (
          <>
            {/* Layout Grid constraints AGG */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-6 md:p-8">

              {/* Left Flow Column */}
              <div className="md:col-span-8 flex flex-col gap-4">

                {/* Title and Filters row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
                  <h2 className="text-gray-900 font-semibold text-[16px] tracking-wide">Aggregate User Journey</h2>

                  {/* Toggle View */}
                  <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shrink-0 order-first sm:order-last ml-auto sm:ml-0 shadow-sm">
                    <div className="px-4 py-1.5 bg-[#fff5f0] text-[#e46335] text-[13px] font-medium rounded-full flex items-center gap-1.5 transition-colors cursor-pointer border border-[#fed7aa]">
                      <svg className="w-4 h-4 text-[#e46335]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg> Story View
                    </div>
                    <div className="px-4 py-1.5 text-gray-500 hover:text-gray-700 text-[13px] font-medium rounded-full transition-colors flex items-center gap-1.5 cursor-pointer">
                      <MapIcon className="w-4 h-4" /> Explorer View
                    </div>
                  </div>
                </div>

                {/* Flow Diagram Container */}
                <div className="flex flex-col relative w-full h-auto min-h-[500px]">

                  {/* Filters inside diagram area at top */}
                  <div className="flex flex-wrap gap-2.5 p-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm z-20 rounded-t-xl">
                    <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3.5 py-1.5 text-[11px] font-medium text-gray-700 transition-colors shadow-sm">
                      <CalendarIcon className="w-3.5 h-3.5 text-gray-400" /> Last 30 Days <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3.5 py-1.5 text-[11px] font-medium text-gray-700 transition-colors shadow-sm">
                      <GlobeIcon className="w-3.5 h-3.5 text-gray-400" /> All Sources <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3.5 py-1.5 text-[11px] font-medium text-gray-700 transition-colors shadow-sm">
                      <MonitorIcon className="w-3.5 h-3.5 text-gray-400" /> All Devices <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>

                  {/* Canvas Background with Flow */}
                  <div className="flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] relative p-8 flex items-center justify-center overflow-x-auto rounded-b-xl">
                    <div className="relative min-w-[600px] h-[360px] flex items-center justify-between w-full max-w-4xl">

                      {/* Step 1 */}
                      <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative z-20 w-48 border border-border-soft/50 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-blue-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-blue-100/50">🏠</div>
                        <div>
                          <div className="font-bold text-[13px] text-text">Homepage</div>
                          <div className="text-[11px] text-text-subtle mt-0.5">12.5K visits</div>
                        </div>
                      </div>

                      {/* SVG Connections (Mocked) */}
                      <div className="absolute inset-0 pointer-events-none z-10 flex items-center">
                        <svg width="100%" height="100%" className="w-full h-full" preserveAspectRatio="none">
                          {/* Path to Features */}
                          <path d="M 170 180 C 260 180, 260 90, 360 90" fill="none" stroke="#46a756" strokeWidth="36" opacity="0.15" />
                          {/* Path to Pricing */}
                          <path d="M 170 180 C 260 180, 260 270, 360 270" fill="none" stroke="#e14617" strokeWidth="28" opacity="0.15" />
                          {/* Path from Features to Sign Up */}
                          <path d="M 520 90 C 580 90, 580 90, 620 90" fill="none" stroke="#46a756" strokeWidth="20" opacity="0.15" />
                          {/* Path from Pricing to Exit */}
                          <path d="M 520 270 C 580 270, 580 270, 620 270" fill="none" stroke="#e14617" strokeWidth="24" opacity="0.15" />
                          {/* Minor paths connecting downwards */}
                          <path d="M 330 90 C 280 150, 480 200, 520 270" fill="none" className="opacity-0" stroke="#d1d5db" strokeWidth="8" />
                        </svg>
                      </div>

                      {/* Step 2 Column */}
                      <div className="flex flex-col gap-12 relative z-20">
                        <div className="bg-white shadow-card rounded-[14px] p-3.5 flex flex-col relative w-44 border border-success/30 hover:border-success/60 transition-colors cursor-pointer">
                          <div className="absolute -top-2.5 right-2 bg-[#dcfce7] text-success text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-success/30 flex items-center gap-1 uppercase tracking-wider">
                            ✓ Strong intent
                          </div>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="w-10 h-10 bg-green-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-green-100/50">📄</div>
                            <div>
                              <div className="font-bold text-[13px] text-text">Features</div>
                              <div className="text-[11px] text-text-subtle mt-0.5">8.2K visits</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white shadow-card rounded-[14px] p-3.5 flex flex-col relative w-44 border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                          <div className="absolute -top-2.5 right-2 bg-[#fee2e2] text-primary text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-primary/20 flex items-center gap-1 uppercase tracking-wider">
                            ! High drop-off
                          </div>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="w-10 h-10 bg-red-50/50 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-red-100/50">💳</div>
                            <div>
                              <div className="font-bold text-[13px] text-text">Pricing</div>
                              <div className="text-[11px] text-text-subtle mt-0.5">6.8K visits</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 Column */}
                      <div className="flex flex-col gap-12 relative z-20 ml-10">
                        <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative w-44 border border-border-soft/50 hover:border-border-soft transition-colors cursor-pointer mt-4">
                          <div className="w-10 h-10 bg-blue-50/30 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-blue-100/50 text-blue-500 font-bold">✓</div>
                          <div>
                            <div className="font-bold text-[13px] text-text">Sign Up</div>
                            <div className="text-[11px] text-text-subtle mt-0.5">3.4K visits</div>
                          </div>
                        </div>

                        <div className="bg-white shadow-card rounded-[14px] p-3.5 flex items-center gap-3 relative w-44 border border-border-soft/50 hover:border-border-soft transition-colors cursor-pointer mt-4">
                          <div className="w-10 h-10 bg-orange-50/30 rounded-[10px] flex items-center justify-center text-lg shadow-sm border border-orange-100/50 text-[#f59e0b] font-bold">✕</div>
                          <div>
                            <div className="font-bold text-[13px] text-text">Exit</div>
                            <div className="text-[11px] text-text-subtle mt-0.5">5.1K visits</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 bg-white border border-border-soft rounded-md px-3 py-1.5 text-xs font-semibold text-text shadow-sm flex items-center gap-2 cursor-pointer hover:bg-background-content transition-colors z-30">
                    Legend <span className="text-[9px]">▲</span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar Column */}
              <div className="md:col-span-4 flex flex-col gap-6">

                {/* AI Insights */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center gap-2 text-primary font-normal text-base mb-2.5">
                    <SparklesIcon className="text-primary w-4 h-4" /> AI Insights
                  </div>
                  <p className="text-text-paragraph text-sm leading-relaxed font-normal">
                    67% of users leave after the pricing page. Consider adding social proof and a comparison table to increase conversion.
                  </p>
                </div>

                {/* Suggested Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
                  <h3 className="font-normal text-text text-base">Suggested Actions</h3>

                  <div className="bg-card border border-border-soft rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-1 group">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="bg-red-50 border border-primary/20 text-primary text-[10px] font-normal px-2 py-0.5 rounded-full">High</span>
                      <ArrowRightIcon className="w-3 h-3 text-text-subtle group-hover:translate-x-1 group-hover:text-primary transition-all opacity-50" />
                    </div>
                    <h4 className="font-normal text-sm text-text">Simplify pricing page layout</h4>
                    <p className="text-xs text-text-subtle mt-0.5 font-normal">Reduce cognitive load by hiding advanced features by default.</p>
                  </div>

                  <div className="bg-card border border-border-soft rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-1 group">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-[10px] font-normal px-2 py-0.5 rounded-full">Medium</span>
                      <ArrowRightIcon className="w-3 h-3 text-text-subtle group-hover:translate-x-1 group-hover:text-primary transition-all opacity-50" />
                    </div>
                    <h4 className="font-normal text-sm text-text">Add social proof above demo</h4>
                    <p className="text-xs text-text-subtle mt-0.5 font-normal">Insert client logos before the form to increase trust.</p>
                  </div>

                  <div className="bg-card border border-border-soft rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-1 group">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="bg-red-50 border border-primary/20 text-primary text-[10px] font-normal px-2 py-0.5 rounded-full">High</span>
                      <ArrowRightIcon className="w-3 h-3 text-text-subtle group-hover:translate-x-1 group-hover:text-primary transition-all opacity-50" />
                    </div>
                    <h4 className="font-normal text-sm text-text">Optimize mobile form</h4>
                    <p className="text-xs text-text-subtle mt-0.5 font-normal">Switch to multi-step form for mobile devices.</p>
                  </div>
                </div>

                {/* Top Paths */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
                  <h3 className="font-normal text-text text-base">Top Paths</h3>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Pricing → Exit</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">3.2k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">45% <span className="text-success pb-0.5 font-sans">↗</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-success h-full transition-all" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Features → Sign Up</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">2.8k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">38% <span className="text-success pb-0.5 font-sans">↗</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-success h-full opacity-70 transition-all" style={{ width: '38%' }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end text-sm font-normal text-text">
                        <div className="flex flex-col truncate min-w-0 pr-2">
                          <span className="truncate">Homepage → Pricing → Sign Up</span>
                          <span className="text-xs text-text-subtle mt-0.5 font-normal truncate">1.4k users</span>
                        </div>
                        <span className="flex items-center gap-1 shrink-0">17% <span className="text-primary pb-0.5 font-sans">↘</span></span>
                      </div>
                      <div className="w-full bg-background-content h-[6px] rounded-full overflow-hidden border border-border-soft/50">
                        <div className="bg-[#f59e0b] h-full transition-all" style={{ width: '17%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Drop-offs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
                  <h3 className="font-normal text-text text-base mb-1">Common Drop-offs</h3>

                  <div className="bg-card border border-border-soft rounded-lg flex flex-col divide-y divide-border-soft/60 overflow-hidden">
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer rounded-t-lg">
                      <div>
                        <div className="font-normal text-sm text-text">Pricing Page</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 67%</div>
                      </div>
                      <span className="bg-red-50 text-primary text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">High</span>
                    </div>
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer">
                      <div>
                        <div className="font-normal text-sm text-text">Homepage</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 15%</div>
                      </div>
                      <span className="bg-green-50 text-success text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-success/30 shrink-0">Low</span>
                    </div>
                    <div className="p-3.5 flex justify-between items-center hover:bg-background-content/50 transition-colors cursor-pointer rounded-b-lg">
                      <div>
                        <div className="font-normal text-sm text-text">Features Page</div>
                        <div className="text-xs text-text-subtle mt-0.5 font-normal">Drop-off rate: 22%</div>
                      </div>
                      <span className="bg-yellow-50 text-yellow-700 text-[10px] font-normal px-2.5 py-0.5 rounded-full border border-yellow-200 shrink-0">Medium</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

        {/* Bottom Row (Engagement, Entry, Exit) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full">

          {/* Engagement Over Time */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[280px]">
            <h3 className="font-bold text-[13px] text-text flex items-center gap-2 mb-6 uppercase tracking-wider">
              <CalendarIcon className="w-4 h-4 text-primary" /> Engagement Over Time
            </h3>
            <div className="relative w-full flex-1 flex items-end">
              <div className="absolute inset-0 flex flex-col justify-between pt-2">
                {[600, 450, 300, 150, 0].map(val => (
                  <div key={val} className="border-t border-border-soft w-full flex items-start text-[10px] text-text-subtle font-medium">
                    <span className="-mt-2.5 pr-2 bg-white tracking-wider">{val}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 pl-10 pb-[18px]">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 80 Q 20 80, 25 70 T 45 40 T 55 10 T 70 30 T 85 50 T 100 70" fill="none" stroke="#3b82f6" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Dots */}
                  <circle cx="0" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="20" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="45" cy="40" r="3" fill="#3b82f6" />
                  <circle cx="55" cy="10" r="3" fill="#3b82f6" />
                  <circle cx="70" cy="30" r="3" fill="#3b82f6" />
                  <circle cx="85" cy="50" r="3" fill="#3b82f6" />
                  <circle cx="100" cy="70" r="3" fill="#3b82f6" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-10 right-0 flex justify-between text-[9px] font-semibold text-text-subtle -mb-4">
                <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span>
              </div>
            </div>
          </div>

          {/* Top Entry Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[280px]">
            <h3 className="font-bold text-[13px] text-text flex items-center gap-2 mb-6 uppercase tracking-wider">
              <ArrowRightIcon className="w-4 h-4 text-success" /> Top Entry Pages
            </h3>
            <div className="relative w-full flex-1 flex items-end">
              <div className="absolute inset-0 flex flex-col justify-between pt-2">
                {['10,000', '7,500', '5,000', '2,500', 0].map(val => (
                  <div key={val} className="border-t border-border-soft w-full flex items-start text-[10px] text-text-subtle font-medium">
                    <span className="-mt-2.5 pr-2 bg-white tracking-wider">{val}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 pl-12 pb-[18px] flex items-end justify-around gap-2 px-3">
                <div className="w-[30%] bg-success rounded-t-sm" style={{ height: '85%' }}></div>
                <div className="w-[30%] bg-success/80 rounded-t-sm" style={{ height: '35%' }}></div>
                <div className="w-[30%] bg-success/60 rounded-t-sm" style={{ height: '18%' }}></div>
                <div className="w-[30%] bg-success/40 rounded-t-sm" style={{ height: '12%' }}></div>
              </div>
              <div className="absolute bottom-0 left-12 right-0 flex justify-around text-[9px] font-semibold text-text-subtle -mb-4 px-3">
                <span className="w-1/4 text-center">Homepage</span>
                <span className="w-1/4 text-center">Blog</span>
                <span className="w-1/4 text-center">Pricing</span>
                <span className="w-1/4 text-center">Features</span>
              </div>
            </div>
          </div>

          {/* Exit Rates */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[280px]">
            <h3 className="font-bold text-[13px] text-text flex items-center gap-2 mb-6 uppercase tracking-wider">
              <span className="text-primary font-bold">↳</span> Exit Rates
            </h3>
            <div className="relative w-full flex-1 flex items-end">
              <div className="w-full h-full flex flex-col justify-between pb-6 pt-2">
                <div className="flex items-center gap-4 w-full">
                  <span className="text-[10px] text-text-subtle w-14 text-right shrink-0">Pricing</span>
                  <div className="h-6 bg-primary rounded-r-sm" style={{ width: '80%' }}></div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="text-[10px] text-text-subtle w-14 text-right shrink-0">Features</span>
                  <div className="h-6 bg-primary/80 rounded-r-sm" style={{ width: '30%' }}></div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="text-[10px] text-text-subtle w-14 text-right shrink-0">Homepage</span>
                  <div className="h-6 bg-primary/60 rounded-r-sm" style={{ width: '15%' }}></div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="text-[10px] text-text-subtle w-14 text-right shrink-0">Sign Up</span>
                  <div className="h-6 bg-primary/40 rounded-r-sm" style={{ width: '8%' }}></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-16 ml-2 right-0 border-t border-border-soft pt-2 flex justify-between text-[9px] font-semibold text-text-subtle -mb-4">
                <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
