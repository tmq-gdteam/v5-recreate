import React from 'react';

// --- Local Icons ---
const SearchIcon = ({ className }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>;
const FilterIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
const DownloadIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const UploadIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>;
const StarIcon = ({ className, filled }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const MoreVerticalIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>;
const ShieldIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const MailIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const UserIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const BriefcaseIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
const PhoneIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const LinkedInIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
const ChevronDownIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9" /></svg>;
const CloseIcon = ({ className }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
const LightningIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const DatabaseIcon = ({ className }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;

export default function LeadsView() {
  const visitors = [
    { id: 1, name: 'Alex Morgan', org: 'alex.morgan@orbital.com', phone: '+1 (649) 126-3952', status: 'CONTACTED', time: '2 hrs ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: true, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    { id: 2, name: 'Anonymous Visitor', org: 'x.x@x.com', phone: '+x xxx xxx xxxx', status: 'CONTACTED', time: '1 hr ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: true, starred: false, avatar: 'AV', isBlur: true },
    { id: 3, name: 'Sarah Johnson', org: 'sarah.j@techcorp.com', phone: '+1 (826) 941-7732', status: 'CONTACTED', time: '5 hrs ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: false, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: 4, name: 'Evan Calderon', org: 'evan.calderon@corp.com', phone: '+1 (415) 803-2984', status: 'CONTACTED', time: '1 day ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: true, avatar: 'EC' },
    { id: 5, name: 'Noelle Ramirez', org: 'noelle.ramirez@corp.com', phone: '+1 (323) 512-8841', status: 'CONTACTED', time: '2 days ago', enriched: 'Partial', isPart: true, sources: ['database'], hasUnlock: true, starred: false, avatar: 'NR' },
    { id: 6, name: 'Marcus O\'Halloran', org: 'm.ohalloran@corp.com', phone: '+1 (617) 429-7609', status: 'CONTACTED', time: '3 days ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: false, avatar: 'MO' },
    { id: 7, name: 'Priyanka Desai', org: 'priyanka.desai@corp.com', phone: '+1 (408) 771-5463', status: 'CONTACTED', time: '5 days ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: true, avatar: 'PD' },
    { id: 8, name: 'Julian Moretti', org: 'julian.moretti@corp.com', phone: '+1 (917) 308-9921', status: 'CONTACTED', time: '5 days ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: true, avatar: 'JM' },
    { id: 9, name: 'Alyssa Nguyen', org: 'alyssa.n@corp.com', phone: '+1 (714) 840-2187', status: 'CONTACTED', time: '1 wk ago', enriched: 'Enriched', isEnriched: true, sources: ['linkedin'], hasUnlock: false, starred: false, avatar: 'AN' },
    { id: 10, name: 'Theo Bouchard', org: 't.bouchard@corp.com', phone: '+1 (504) 389-6714', status: 'CONTACTED', time: '1 wk ago', enriched: 'Missing', isMissing: true, sources: ['database'], hasUnlock: false, starred: true, avatar: 'TB' },
  ];

  return (
    <div className="w-full max-w-[1920px] px-8 md:px-12 mx-auto flex flex-col gap-6 pt-2">

      {/* Top Row: Title & Action */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
        <div>
          <h1 className="text-page-header font-bold text-accent-teal tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
            Visitor Enrichment
          </h1>
          <p className="text-[13px] text-text-paragraph mt-1">
            248 visitors tracked • 187 enriched • Last updated 2 min ago
          </p>
        </div>
        <button className="flex items-center gap-2 border border-primary text-primary bg-white px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-primary/5 transition-colors">
          <UploadIcon className="w-4 h-4" /> Export
        </button>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mt-2 w-full">

        {/* Left Main Area: Table & Filters */}
        <div className="xl:col-span-9 flex flex-col gap-6 w-full min-w-0">

          {/* Credit Board */}
          <div className="bg-card border border-border-soft rounded-card p-6 shadow-card flex flex-col lg:flex-row justify-start lg:items-center gap-8 overflow-hidden relative">

            {/* Left Stats */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-2xl text-text leading-none">42 <span className="text-[13px] font-medium text-text-subtle">credits left</span></span>
                  <div className="w-6 h-6 rounded-full bg-[#fdf7ee] text-[#f59e0b] border border-[#f59e0b]/20 flex items-center justify-center font-bold pb-0.5 cursor-pointer shadow-sm">+</div>
                </div>
                <div className="w-36 bg-background-content h-2 rounded-full overflow-hidden border border-border-soft/50">
                  <div className="bg-primary h-full transition-all" style={{ width: '40%' }}></div>
                </div>
                <div className="text-[10px] text-text-subtle">Resets in 12 days</div>
              </div>

              <div className="h-12 w-px bg-border-soft hidden sm:block"></div>

              <div className="flex flex-col hidden sm:flex">
                <span className="font-bold text-xl text-text leading-none">58 <span className="text-[13px] font-medium text-text-subtle">credits used</span></span>
                <span className="text-[11px] text-text-subtle mt-1.5">This billing cycle</span>
              </div>
            </div>

            {/* Usage Guarantee Box */}
            <div className="bg-[#f4fbf6] border border-success/30 rounded-md p-3.5 flex gap-3 shadow-sm max-w-sm">
              <ShieldIcon className="text-success w-5 h-5 shrink-0" />
              <div>
                <div className="font-bold text-success text-[12px]">Fair Usage Guarantee</div>
                <p className="text-[11px] text-success/80 mt-0.5 leading-tight">You only spend credits when you successfully unmask data.</p>
              </div>
            </div>

            {/* Floating Unlock Hints */}
            <div className="absolute bottom-3.5 right-6 hidden md:flex items-center gap-3 text-[11px] text-text-subtle font-medium">
              Credits Unlock:
              <div className="flex items-center gap-3 ml-1">
                <span className="flex items-center gap-1.5"><MailIcon /> Email</span>
                <span className="flex items-center gap-1.5"><UserIcon /> Role</span>
                <span className="flex items-center gap-1.5"><BriefcaseIcon /> Company</span>
                <span className="flex items-center gap-1.5"><DatabaseIcon className="w-3.5 h-3.5" /> Social</span>
                <span className="flex items-center gap-1.5"><PhoneIcon /> Phone</span>
              </div>
            </div>
          </div>

          {/* Massive Fluid White Card for Toolbar + Table */}
          <div className="bg-card border border-border-soft rounded-card shadow-card flex flex-col w-full">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-border-soft">
              <button className="bg-[#f59e0b] text-white font-medium text-sm px-5 py-2 rounded-full shadow-sm flex items-center gap-2 hover:bg-[#d97706] transition-colors">
                + New Contact
              </button>

              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="flex items-center bg-white border border-border-soft rounded-md px-3 py-2 shadow-sm text-sm w-56 focus-within:border-primary transition-colors">
                  <SearchIcon className="w-4 h-4 text-text-subtle mr-2" />
                  <input type="text" placeholder="Search" className="bg-transparent outline-none text-text w-full text-[13px]" />
                </div>
                <button className="flex items-center gap-2 bg-white border border-border-soft rounded-full px-5 py-2 text-sm font-medium text-text hover:bg-background-content transition-colors shadow-sm">
                  <FilterIcon className="w-3.5 h-3.5 text-text-subtle" /> Filters
                </button>
                <button className="flex items-center gap-2 bg-white border border-border-soft rounded-full px-5 py-2 text-sm font-medium text-text hover:bg-background-content transition-colors shadow-sm">
                  <UploadIcon className="w-3.5 h-3.5 text-text-subtle" /> Export
                </button>
                <button className="flex items-center gap-2 bg-white border border-border-soft rounded-full px-5 py-2 text-sm font-medium text-text hover:bg-background-content transition-colors shadow-sm">
                  <DownloadIcon className="w-3.5 h-3.5 text-text-subtle" /> Import
                </button>
              </div>
            </div>

            {/* Table Wrapper (now inside the card) */}
            <div className="w-full relative">
              <div className="w-full overflow-x-auto pb-4 pt-1">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] font-bold text-text-subtle uppercase tracking-wider">
                      <th className="py-2.5 pl-6 w-10"><input type="checkbox" className="rounded border-border-soft cursor-pointer text-primary focus:ring-primary" /></th>
                      <th className="py-2.5 w-10"></th>
                      <th className="py-2.5 px-3 w-[220px]">Name</th>
                      <th className="py-2.5 px-3 w-[240px]">Contact</th>
                      <th className="py-2.5 px-3 w-[120px]">Status</th>
                      <th className="py-2.5 px-3 w-[120px]">Last Activity</th>
                      <th className="py-2.5 px-3 w-[100px]">Enrichment</th>
                      <th className="py-2.5 px-3 w-[80px]">Sources</th>
                      <th className="py-2.5 pr-6 text-right w-[100px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] text-text">
                    {visitors.map((v) => (
                      <tr key={v.id} className="hover:bg-background-content/30 transition-colors group border-b border-gray-100">
                        <td className="py-2 pl-6"><input type="checkbox" className="rounded border-border-soft cursor-pointer text-primary focus:ring-primary" /></td>
                        <td className="py-2 text-center">
                          <StarIcon className={`w-4 h-4 mx-auto cursor-pointer ${v.starred ? 'text-[#f59e0b] fill-[#f59e0b]' : 'text-border-soft'}`} filled={v.starred} />
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-3">
                            {v.avatar.includes('http') ? (
                              <img src={v.avatar} className="w-7 h-7 rounded-full border border-border-soft" alt="Avatar" />
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-background-content text-text-subtle flex items-center justify-center font-bold text-[10px] border border-border-soft uppercase tracking-tighter">
                                {v.avatar}
                              </div>
                            )}
                            <div className="font-medium text-text">{v.name}</div>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <div className={`flex flex-col gap-0.5 ${v.isBlur ? 'blur-[3px] select-none opacity-60' : ''}`}>
                            <span className="flex items-center gap-1.5 text-text-subtle text-[11px]"><MailIcon className="w-3 h-3" /> {v.org}</span>
                            <span className="flex items-center gap-1.5 text-text-subtle text-[11px]"><PhoneIcon className="w-3 h-3" /> {v.phone}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-medium text-success tracking-wide uppercase">{v.status}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 text-text-subtle whitespace-nowrap text-[12px]">{v.time}</td>
                        <td className="py-2 px-3">
                          <div className={`flex items-center gap-2 text-xs font-normal ${v.isEnriched ? 'text-emerald-600' : v.isPart ? 'text-amber-500' : 'text-red-500'}`}>
                            <div className={`w-2 h-2 rounded-full ${v.isEnriched ? 'bg-emerald-500' : v.isPart ? 'bg-amber-500' : 'bg-red-500'}`}></div>
                            {v.enriched}
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-1.5">
                            {v.sources.map((s, i) => (
                              s === 'linkedin' ?
                                <div key={i} className="w-5 h-5 rounded bg-[#f0f7ff] text-[#0077b5] flex items-center justify-center"><LinkedInIcon className="w-3.5 h-3.5" /></div> :
                                <div key={i} className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><DatabaseIcon className="w-3.5 h-3.5" /></div>
                            ))}
                          </div>
                        </td>
                        <td className="py-2 pr-6 text-right">
                          {v.hasUnlock ? (
                            <button className="text-[11px] font-bold text-primary border border-primary bg-white px-3 py-0.5 rounded-full shadow-sm hover:bg-primary/5 transition-colors inline-block">
                              Unlock
                            </button>
                          ) : (
                            <div className="flex items-center justify-end w-full cursor-pointer text-text-subtle hover:text-text">
                              <MoreVerticalIcon className="w-4 h-4" />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-border-soft p-4 px-6 flex justify-between items-center text-[12px] font-medium text-text-subtle w-full bg-white/50">
                <div>Showing 1 to 10 of 50 results</div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-border-soft bg-white hover:bg-background-content cursor-pointer shadow-sm">
                    <ChevronDownIcon className="w-4 h-4 rotate-90 opacity-50" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f59e0b] text-[#f59e0b] font-bold bg-[#fdf7ee]">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-border-soft cursor-pointer text-text">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-border-soft cursor-pointer text-text">3</button>
                  <span className="w-6 text-center text-text-subtle tracking-widest leading-none">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-border-soft cursor-pointer text-text">8</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-border-soft bg-white hover:bg-background-content cursor-pointer shadow-sm">
                    <ChevronDownIcon className="w-4 h-4 -rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Filter Sidebar */}
        <div className="xl:col-span-3 bg-white border border-border-soft rounded-card shadow-card flex flex-col xl:sticky xl:top-[88px] w-full min-w-[280px]">
          <div className="flex justify-between items-center p-4 border-b border-border-soft">
            <h2 className="font-bold text-text text-[15px]">Filter</h2>
            <CloseIcon className="w-4 h-4 text-text-subtle cursor-pointer hover:text-text" />
          </div>

          <div className="flex flex-col px-4 pt-4 pb-5 gap-5 overflow-y-auto max-h-[calc(100vh-250px)]">

            {/* Source Accordion */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-[13px] text-text">Source</span>
                <ChevronDownIcon className="w-4 h-4 text-text-subtle" />
              </div>
              <div className="flex flex-col gap-2mt-1">
                <input type="text" placeholder="Filter by title" className="w-full bg-white border border-border-soft rounded px-3 py-2 text-[12px] focus:border-primary outline-none shadow-sm" />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">VP <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Director <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Manager <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="text-primary font-bold text-[11px] px-1 cursor-pointer hover:underline">+ Add</div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-border-soft/60"></div>

            {/* Status Accordion */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-[13px] text-text">Status</span>
                <ChevronDownIcon className="w-4 h-4 text-text-subtle" />
              </div>
              <div className="flex flex-col gap-2mt-1">
                <input type="text" placeholder="Filter by title" className="w-full bg-white border border-border-soft rounded px-3 py-2 text-[12px] focus:border-primary outline-none shadow-sm" />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">VP <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Director <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Manager <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="text-primary font-bold text-[11px] px-1 cursor-pointer hover:underline">+ Add</div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-border-soft/60"></div>

            {/* Date Filters */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-[13px] text-text">Date Filters</span>
                <ChevronDownIcon className="w-4 h-4 text-text-subtle" />
              </div>
              <div className="flex flex-col gap-2mt-1">
                <input type="text" placeholder="Filter by title" className="w-full bg-white border border-border-soft rounded px-3 py-2 text-[12px] focus:border-primary outline-none shadow-sm" />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">VP <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Director <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs flex items-center gap-1 cursor-pointer">Manager <CloseIcon className="w-2.5 h-2.5" /></div>
                  <div className="text-primary font-bold text-[11px] px-1 cursor-pointer hover:underline">+ Add</div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-border-soft/60"></div>

            {/* Enrichment Status */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-[13px] text-text">Enrichment Status</span>
                <ChevronDownIcon className="w-4 h-4 text-text-subtle" />
              </div>
              <div className="flex flex-col gap-2.5 mt-0.5">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded border-border-soft text-success focus:ring-success w-3.5 h-3.5 cursor-pointer accent-success" />
                    <span className="text-[12px] text-text font-medium flex items-center gap-1.5 group-hover:text-success"><div className="w-1.5 h-1.5 rounded-full bg-success"></div> Enriched</span>
                  </div>
                  <span className="text-[11px] text-text-subtle font-medium">187</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border-soft text-[#f59e0b] focus:ring-[#f59e0b] w-3.5 h-3.5 cursor-pointer accent-[#f59e0b]" />
                    <span className="text-[12px] text-text font-medium flex items-center gap-1.5 group-hover:text-[#f59e0b]"><div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div> Partial</span>
                  </div>
                  <span className="text-[11px] text-text-subtle font-medium">43</span>
                </label>
              </div>
            </div>
            <div className="h-px w-full bg-border-soft/60"></div>

            {/* Buying Intent */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-[13px] text-text">Buying Intent</span>
                <ChevronDownIcon className="w-4 h-4 text-text-subtle" />
              </div>
              <div className="flex flex-col gap-2.5 mt-0.5">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border-soft text-primary focus:ring-primary w-3.5 h-3.5 cursor-pointer accent-primary" />
                    <span className="text-[12px] text-text font-medium flex items-center gap-1 group-hover:text-primary"><LightningIcon className="w-3.5 h-3.5 text-primary" /> High Intent</span>
                  </div>
                  <span className="text-[11px] text-text-subtle font-medium">34</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border-soft text-[#f59e0b] focus:ring-[#f59e0b] w-3.5 h-3.5 cursor-pointer accent-[#f59e0b]" />
                    <span className="text-[12px] text-text font-medium flex items-center gap-1 group-hover:text-[#f59e0b]"><LightningIcon className="w-3.5 h-3.5 text-[#f59e0b]" /> Medium Intent</span>
                  </div>
                  <span className="text-[11px] text-text-subtle font-medium">78</span>
                </label>
              </div>
            </div>
            <div className="h-px w-full bg-border-soft/60 mb-1"></div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-between pb-1">
              <button className="flex-1 bg-white border border-gray-200 text-gray-700 hover:text-[#0f172a] hover:bg-gray-50 font-medium text-sm py-2 rounded-full transition-colors w-full shadow-sm">
                Clear
              </button>
              <button className="flex-1 bg-[#e46335] text-white font-medium text-sm py-2 rounded-full hover:bg-orange-600 transition-colors w-full shadow-sm">
                Apply
              </button>
            </div>
            <button className="w-full bg-white border border-orange-200 text-orange-600 font-medium text-sm py-2 rounded-full mt-2 hover:bg-orange-50 transition-colors shadow-sm">
              Save View
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
