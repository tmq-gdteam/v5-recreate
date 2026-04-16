import React, { useState } from 'react';
import { SearchIcon } from '../components/Icons';

export default function InboxView() {
  const [mobileView, setMobileView] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [message, setMessage] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcriptMode, setTranscriptMode] = useState('minimal');
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState('journey');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [isIntentOpen, setIsIntentOpen] = useState(true);

  return (
    <div className="px-4 pb-3 pt-2 md:px-4 md:pt-0 md:pb-3 w-full mx-auto h-[calc(100dvh-64px)] md:h-[calc(100vh-88px)] overflow-hidden bg-transparent md:-mb-10">
      <div className="flex flex-col md:flex-row w-full h-full gap-4 md:gap-4 overflow-hidden">

        {/* Pane 1: Messages List */}
        <div className={`w-full md:w-72 flex-col bg-white rounded-2xl shadow-md flex-shrink-0 transition-all ${mobileView === 'list' ? 'flex' : 'hidden md:flex'}`}>

          {/* Header */}
          <div className="p-4 md:p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-card-stats-text font-bold text-accent-teal leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>Messages</h2>
              <button className="bg-[#f59e0b] hover:bg-yellow-500 text-white rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition-colors flex items-center gap-1">
                + New
              </button>
            </div>

            <div className="flex items-center gap-3 relative">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon className="text-text-subtle w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-card border border-border-soft rounded-md text-sm text-text placeholder:text-text-subtle outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary shadow-sm"
                />
              </div>
              <div className="flex items-center gap-1 shrink-0 opacity-80">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`relative group p-1.5 rounded-md transition-colors ${isFilterOpen ? 'bg-gray-100 text-primary' : 'text-text hover:bg-gray-100 hover:text-primary'}`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21v-7" /><path d="M4 10V3" /><path d="M12 21v-9" /><path d="M12 8V3" /><path d="M20 21v-5" /><path d="M20 12V3" /><path d="M1 14h6" /><path d="M9 8h6" /><path d="M17 16h6" /></svg>
                  <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    Filter messages
                  </div>
                </button>

                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className={`relative group p-1.5 rounded-md transition-colors ${isSortOpen ? 'bg-gray-100 text-primary' : 'text-text hover:bg-gray-100 hover:text-primary'}`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 9 12 5 16 9" /><polyline points="16 15 12 19 8 15" /></svg>
                  <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    Sort Messages
                  </div>
                </button>
              </div>

              {/* Sort Dropdown */}
              {isSortOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-[100]">
                  <div className="flex flex-col py-2">
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      <span>Most Recent</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      <span>Oldest First</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                      <span>Hot Leads First</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                      <span>High Intent First</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                      <span>Longest Wait Time</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      <span>Most Messages</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsSortOpen(false)}>
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 20 8 16" /><line x1="12" y1="20" x2="12" y2="4" /><polyline points="8 8 12 4 16 8" /></svg>
                      <span>Name (A-Z)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Filter Popover */}
              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-[360px] bg-white rounded-xl shadow-xl border border-gray-100 z-[100] p-5">
                  <h3 className="font-bold text-sm mb-4 text-[#0f172a]">Filter Messages</h3>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">

                    {/* Status */}
                    <div className="flex flex-col">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Status</h4>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> All (112)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Active (3)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Pending (3)
                      </label>
                    </div>

                    {/* Topic Category */}
                    <div className="flex flex-col">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Topic Category</h4>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Sales (67)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Support (34)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> General (11)
                      </label>
                    </div>

                    {/* Intent Level */}
                    <div className="flex flex-col">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Intent Level</h4>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> High (24)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Medium (45)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Low (43)
                      </label>
                    </div>

                    {/* Lead Quality */}
                    <div className="flex flex-col">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Lead Quality</h4>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> A+ (8)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> A (16)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> B (34)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> C (54)
                      </label>
                    </div>

                    {/* Last Activity */}
                    <div className="flex flex-col">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Last Activity</h4>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> Today (42)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> This Week (156)
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 my-1.5 cursor-pointer hover:opacity-80">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" /> This Month (248)
                      </label>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button className="text-red-500 underline text-sm font-medium hover:text-red-600 transition-colors cursor-pointer">
                      Clear all filters
                    </button>
                    <div className="flex gap-2.5">
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="bg-[#f59e0b] hover:bg-yellow-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center bg-background-content p-1.5 rounded-lg mt-1 w-full gap-1 shadow-inner border border-border-soft/50">
              <div
                onClick={() => setActiveTab('All')}
                className={`flex-1 text-center py-1.5 rounded-md text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'All' ? 'bg-white shadow-sm text-text font-bold border border-border-soft' : 'text-text-subtle font-semibold hover:text-text'}`}
              >
                All <span className="w-4 h-4 rounded-full bg-border-soft flex items-center justify-center text-[9px] text-text">9</span>
              </div>
              <div
                onClick={() => setActiveTab('Open')}
                className={`flex-1 text-center py-1.5 rounded-md text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'Open' ? 'bg-white shadow-sm text-text font-bold border border-border-soft' : 'text-text-subtle font-semibold hover:text-text'}`}
              >
                Open <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[9px] shadow-sm">2</span>
              </div>
              <div
                onClick={() => setActiveTab('Pending')}
                className={`flex-1 text-center py-1.5 rounded-md text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'Pending' ? 'bg-white shadow-sm text-text font-bold border border-border-soft' : 'text-text-subtle font-semibold hover:text-text'}`}
              >
                Pending <span className="w-4 h-4 rounded-full bg-success/10 text-success flex items-center justify-center text-[9px] shadow-sm">✓</span>
              </div>
              <div className="px-1 text-[#9ca3af] flex items-center justify-center cursor-pointer hover:text-text shrink-0 pb-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto flex flex-col">

            {/* Active Item (Alex Morgan) */}
            <div
              onClick={() => setMobileView('thread')}
              className="mx-2 my-1 p-2.5 bg-[linear-gradient(#f7ac2e40,#f7ac2e40)] rounded-xl border border-transparent cursor-pointer relative group hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 h-full">
                {/* Left Column */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-12 h-12 rounded-full border border-border-soft object-cover bg-border-soft" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex gap-1.5 text-slate-500 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-medium text-[#0d202f] text-sm truncate leading-tight">Alex Morgan</h3>
                    <div className="flex items-center gap-1 text-text-paragraph text-card-hd mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#0d202fb3] shrink-0"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                      <p className="truncate font-medium text-gray-500 text-xs leading-tight pt-0.5">I'm having trouble with...</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2.5">
                    <span className="text-[10px] font-normal text-gray-500 bg-transparent px-2.5 py-0.5 rounded-full border border-gray-200 uppercase tracking-wide">VIP</span>
                    <span className="text-[10px] font-normal text-gray-500 bg-transparent px-2.5 py-0.5 rounded-full border border-gray-200 tracking-wide">Contacts</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-end justify-between shrink-0 h-[64px]">
                  {/* Avatars */}
                  <div className="relative group">
                    <div className="flex -space-x-1.5 cursor-pointer">
                      <img src="https://i.pravatar.cc/150?img=9" alt="Agent" className="w-7 h-7 rounded-full border-2 border-transparent z-10" />
                      <div className="w-7 h-7 rounded-full bg-[#ffedd5] text-[#e46335] border-2 border-transparent z-0 flex items-center justify-center text-[10px] font-bold">+2</div>
                    </div>

                    {/* Popover Container */}
                    <div className="absolute top-full right-0 mt-2 w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] cursor-default text-left">
                      <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Agents</div>
                      <div className="flex flex-col gap-2">

                        {/* Agent 1 */}
                        <div className="flex items-center gap-3 border-b border-gray-50 pb-2">
                          <img src="https://i.pravatar.cc/150?img=9" className="w-8 h-8 rounded-full" alt="Michelle Johnson" />
                          <div className="flex flex-col flex-1 justify-center">
                            <span className="text-sm text-[#0d202f] font-medium leading-none whitespace-nowrap">Michelle Johnson</span>
                            <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full w-max mt-1 font-medium border border-gray-200">Support Team</span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">2 days ago</span>
                        </div>

                        {/* Agent 2 */}
                        <div className="flex items-center gap-3">
                          <img src="https://i.pravatar.cc/150?img=10" className="w-8 h-8 rounded-full" alt="Michelle Johnson" />
                          <div className="flex flex-col flex-1 justify-center">
                            <span className="text-sm text-[#0d202f] font-medium leading-none whitespace-nowrap">Michelle Johnson</span>
                            <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full w-max mt-1 font-medium border border-gray-200">Sales Team</span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">2 days ago</span>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Badge Middle */}
                  <div className="w-5 h-5 rounded-full bg-[#e46335] text-white flex items-center justify-center text-[10px] font-normal shadow-sm">
                    3
                  </div>
                  {/* Timestamp */}
                  <span className="text-xs text-[#9ca3af] font-medium whitespace-nowrap mb-0.5">1h ago</span>
                </div>
              </div>
            </div>

            {/* Item 2 (Emma Wilson) */}
            <div
              onClick={() => setMobileView('thread')}
              className="mx-2 my-1 p-2.5 bg-card rounded-xl border border-transparent cursor-pointer hover:bg-background transition-colors"
            >
              <div className="flex gap-3 h-full">
                {/* Left Column */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=emma" alt="Emma Wilson" className="w-12 h-12 rounded-full border border-border-soft object-cover bg-border-soft" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-card"></div>
                  </div>
                  <div className="flex gap-1.5 text-slate-500 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-medium text-[#0d202f] text-sm truncate leading-tight">Emma Wilson</h3>
                    <div className="flex items-center gap-1 text-text-paragraph text-card-hd mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#0d202fb3] shrink-0"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                      <p className="truncate font-medium text-gray-500 text-xs leading-tight pt-0.5">I'm having an issue with...</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2.5">
                    <span className="text-[10px] font-normal text-gray-500 bg-transparent px-2.5 py-0.5 rounded-full border border-gray-200 tracking-wide">Prospect</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-end justify-between shrink-0 h-[64px]">
                  {/* Avatars */}
                  <div className="flex -space-x-1.5 text-red-500 opacity-0"></div>
                  {/* Badge Middle */}
                  <div className="w-5 h-5 rounded-full bg-[#e46335] text-white flex items-center justify-center text-[10px] font-normal shadow-sm">
                    1
                  </div>
                  {/* Timestamp */}
                  <span className="text-xs text-[#9ca3af] font-medium whitespace-nowrap mb-0.5">1h ago</span>
                </div>
              </div>
            </div>

            {/* Item 3 (Dean Roberts) */}
            <div
              onClick={() => setMobileView('thread')}
              className="mx-2 my-1 p-2.5 bg-card rounded-xl border border-transparent cursor-pointer hover:bg-background transition-colors opacity-70"
            >
              <div className="flex gap-3 h-full">
                {/* Left Column */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=dean" alt="Dean Roberts" className="w-12 h-12 rounded-full border border-border-soft object-cover bg-border-soft grayscale" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-text-subtle rounded-full border-2 border-card"></div>
                  </div>
                  <div className="flex gap-1.5 text-slate-500 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-medium text-[#0d202f] text-sm truncate leading-tight">Dean Roberts</h3>
                    <div className="flex items-center gap-1 text-text-paragraph text-card-hd mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#0d202fb3] shrink-0"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                      <p className="truncate font-medium text-gray-500 text-xs leading-tight pt-0.5">Thank you for the qu...</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2.5">
                    <span className="text-[10px] font-normal text-gray-500 bg-transparent px-2.5 py-0.5 rounded-full border border-gray-200 tracking-wide">Contacts</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-end justify-between shrink-0 h-[64px]">
                  {/* Avatars */}
                  <div className="flex -space-x-1.5">
                    <div className="w-7 h-7 rounded-full bg-border-soft text-text-subtle border-2 border-card z-0 flex items-center justify-center text-[10px] font-bold">3</div>
                  </div>
                  {/* Badge Middle */}
                  <div className="w-5 h-5 rounded-full bg-transparent"></div>
                  {/* Timestamp */}
                  <span className="text-xs text-[#9ca3af] font-medium whitespace-nowrap mb-0.5">1h ago</span>
                </div>
              </div>
            </div>

            {/* Item 4 (Sofie Chen) */}
            <div
              onClick={() => setMobileView('thread')}
              className="mx-2 my-1 p-2.5 bg-card rounded-xl border border-transparent cursor-pointer hover:bg-background transition-colors"
            >
              <div className="flex gap-3 h-full">
                {/* Left Column */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=sofie" alt="Sofie Chen" className="w-12 h-12 rounded-full border border-border-soft object-cover bg-border-soft" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-card"></div>
                  </div>
                  <div className="flex gap-1.5 text-slate-500 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-medium text-[#0d202f] text-sm truncate leading-tight">Sofie Chen</h3>
                    <div className="flex items-center gap-1 text-text-paragraph text-card-hd mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#0d202fb3] shrink-0"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                      <p className="truncate font-medium text-gray-500 text-xs leading-tight pt-0.5">Thank you for the qu...</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2.5">
                    <span className="text-[10px] font-normal text-gray-500 bg-transparent px-2.5 py-0.5 rounded-full border border-gray-200 tracking-wide">Prospect</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-end justify-between shrink-0 h-[64px]">
                  {/* Avatars */}
                  <div className="flex -space-x-1.5">
                    <div className="w-7 h-7 rounded-full bg-[#fde68a] text-[#b45309] border-2 border-card z-0 flex items-center justify-center text-[10px] font-bold">+1</div>
                  </div>
                  {/* Badge Middle */}
                  <div className="w-5 h-5 rounded-full bg-[#e46335] text-white flex items-center justify-center text-[10px] font-normal shadow-sm">
                    3
                  </div>
                  {/* Timestamp */}
                  <span className="text-xs text-[#9ca3af] font-medium whitespace-nowrap mb-0.5">1h ago</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Pane 2: Thread */}
        <div className={`w-full flex-1 flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all ${mobileView === 'thread' ? 'flex' : 'hidden md:flex'}`}>
          {/* Header */}
          <div className="flex flex-col bg-card shadow-sm z-10 flex-shrink-0 relative transition-all">

            {/* Top Row (Identity & Actions) */}
            <div className="px-4 md:px-5 py-3 md:py-3.5 flex justify-between items-center bg-[#fefefe] border-b border-[#f1f5f9]" style={{ backgroundColor: '#fffbf8' }}>

              {/* Left Side */}
              <div className="flex items-center gap-3.5 border-none">
                <button
                  className="md:hidden p-1 -ml-1 text-[#64748b] hover:text-[#0f172a] cursor-pointer"
                  onClick={() => setMobileView('list')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-14 h-14 rounded-full shadow-sm bg-white object-cover border border-[#f1f5f9] hidden sm:block" />
                <div className="flex flex-col">
                  <h2
                    className="text-base font-semibold text-[#0d202f] tracking-tight leading-none mb-1 cursor-pointer md:cursor-auto hover:underline md:hover:no-underline"
                    onClick={() => setMobileView('info')}
                  >
                    Alex Morgan
                  </h2>
                  <span className="text-[#475569] text-[13px] font-medium leading-none">alex.morgan@orbital.com</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 border-none">

                <div className="flex items-center gap-2.5 leading-tight text-right hidden md:flex border-r border-[#cbd5e1] pr-4">
                  <div className="bg-orange-50 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center border border-orange-100 shadow-sm shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left justify-center gap-0.5">
                    <span className="text-[#475569] font-medium text-[12.5px] leading-none mb-0.5">AI Bot is responding in real-time</span>
                    <span className="text-[#ea580c] font-medium text-[12.5px] leading-none">customers.new assistant active</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-none">
                  <button className="bg-[#f7ac2e] hover:bg-[#dea02c] text-white rounded-full px-5 py-2.5 font-bold text-[13px] shadow-sm flex items-center justify-center gap-2 transition-colors hidden sm:flex">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 8.5V16c0 3.6-2.9 6.5-6.5 6.5S5.5 19.6 5.5 16v-8C5.5 6.1 7 4.6 8.9 4.6c.3 0 .5.1.8.2V3.5C9.7 1.6 11.2.1 13.1.1c1.3 0 2.4.7 3 1.7.2 0 .5-.1.8-.1 1.9 0 3.4 1.5 3.4 3.4v3.4h-1.8z" /></svg>
                    Takeover Chat
                  </button>
                  <button className="bg-[#46a756] hover:bg-[#3d914b] text-white rounded-full px-5 py-2.5 font-bold text-[13px] shadow-sm flex items-center justify-center gap-2 transition-colors hidden sm:flex">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 8.5V16c0 3.6-2.9 6.5-6.5 6.5S5.5 19.6 5.5 16v-8C5.5 6.1 7 4.6 8.9 4.6c.3 0 .5.1.8.2V3.5C9.7 1.6 11.2.1 13.1.1c1.3 0 2.4.7 3 1.7.2 0 .5-.1.8-.1 1.9 0 3.4 1.5 3.4 3.4v3.4h-1.8z" /></svg>
                    Takeover Call
                  </button>

                  {/* 3-dot Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setIsChatMenuOpen(!isChatMenuOpen)}
                      className={`text-[#64748b] transition-colors p-1.5 rounded-lg cursor-pointer ml-1 ${isChatMenuOpen ? 'bg-gray-100 text-[#0f172a]' : 'hover:bg-gray-100 hover:text-[#0f172a]'}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                    </button>

                    {/* Dropdown Popover */}
                    {isChatMenuOpen && (
                      <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-[100] overflow-hidden">
                        <div className="flex flex-col py-2">

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 6 7 17 2 12"></polyline><path d="M22 10l-4.5 4.5"></path><path d="M11 21l-3-3"></path></svg>
                            <span>Mark as Read</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.73 21a2 2 0 0 1-3.46 0" /><path d="M18.63 13A17.89 17.89 0 0 1 18 8" /><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" /><path d="M18 8a6 6 0 0 0-9.33-5" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                            <span>Mute Notifications</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                            <span>Close Conversation</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="18" y1="8" x2="23" y2="13" /><line x1="23" y1="8" x2="18" y2="13" /></svg>
                            <span>Block Customer</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="12" y1="7" x2="12" y2="11" /><line x1="12" y1="15" x2="12.01" y2="15" /></svg>
                            <span>Report Conversation</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                            <span>Export Transcription</span>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0d202f] hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                            <span>Turn Off AI Assistance</span>
                          </div>

                          <div className="h-px bg-gray-100 my-1"></div>

                          <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 cursor-pointer transition-colors" onClick={() => setIsChatMenuOpen(false)}>
                            <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                            <span>Delete</span>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Middle Row (Quick Context) */}
            <div
              onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
              className="px-4 md:px-5 py-3 flex items-center bg-white border-b border-border-soft overflow-x-auto no-scrollbar shadow-sm hover:bg-[rgba(225,70,23,0.1)] transition-colors cursor-pointer"
            >
              <div className="flex items-center min-w-max">

                <div className="flex items-center gap-1.5 text-sm font-medium text-[#1f2937]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                  On: /pricing
                </div>

                <div className="border-l border-[#e2e8f0] h-4 mx-4"></div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-[#4b5563]">
                  <svg className="w-4 h-4 text-[#94a3b8]" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 19H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V9h2v2zm0-4H7V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2z" /></svg>
                  Orbital Inc · Marketing Director
                </div>

                <div className="border-l border-[#e2e8f0] h-4 mx-4"></div>

                <div className="flex items-center gap-2">
                  <div className="text-[11px] font-normal text-[#059669] bg-[#d1fae5] px-2 py-0.5 rounded flex items-center justify-center">
                    Viewed Pricing x3
                  </div>
                  <div className="text-[11px] font-normal text-[#059669] bg-[#d1fae5] px-2 py-0.5 rounded flex items-center justify-center">
                    Team size &gt; 50
                  </div>
                </div>

                <button
                  className="ml-3 text-[#94a3b8] hover:text-[#475569] transition-colors p-1 rounded-sm outline-none"
                >
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isHeaderExpanded ? 'rotate-180 text-[#64748b]' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </button>

              </div>
            </div>

            {/* Expanded State (Telemetry Grid) */}
            {isHeaderExpanded && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 z-[60] py-4 px-6 flex flex-wrap gap-x-12 gap-y-3 animate-in slide-in-from-top-1 fade-in duration-300">

                {/* Col 1 */}
                <div className="flex flex-col gap-1.5 min-w-[140px]">
                  <h4 className="text-xs font-bold text-[#28514d] tracking-wide uppercase mb-0">Session Details</h4>
                  <div className="flex flex-col gap-0.5 text-sm text-slate-800 font-normal leading-relaxed">
                    <div>Time on site: 4m 12s</div>
                    <div>Visit count: 3</div>
                    <div>Source: Direct</div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col gap-1.5 min-w-[140px]">
                  <h4 className="text-xs font-bold text-[#28514d] tracking-wide uppercase mb-0">Tech Stack</h4>
                  <div className="flex flex-col gap-0.5 text-sm text-slate-800 font-normal leading-relaxed">
                    <div>Chrome on Desktop</div>
                    <div>San Francisco, US</div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs font-bold text-[#28514d] tracking-wide uppercase mb-0">Recent Path</h4>
                  <div className="flex flex-wrap items-center gap-1.5 text-sm font-normal text-slate-800">
                    <span>Home</span>
                    <svg className="w-3.5 h-3.5 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <span>Solutions</span>
                    <svg className="w-3.5 h-3.5 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <span>Enterprise</span>
                    <svg className="w-3.5 h-3.5 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <span className="text-[#f59e0b]">Pricing</span>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 bg-[#f8f8f8] relative">

            {/* User Message (Left) */}
            <div className="flex w-full">
              <div className="flex items-end gap-3 max-w-[85%]">
                <div className="relative shrink-0">
                  <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-12 h-12 rounded-full shadow-sm object-cover border border-[#e2e8f0]" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                </div>
                <div className="bg-white text-[#0f172a] p-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-[#e2e8f0] relative transition-shadow flex-1">
                  <p className="text-base md:text-lg leading-relaxed">Hi there! I'm having an issue with my recent purchase.</p>
                </div>
                <div className="text-[11px] font-bold text-[#94a3b8] mb-1.5 shrink-0 uppercase tracking-wider">
                  10:30 AM
                </div>
              </div>
            </div>

            {/* AI Response Message (Right) */}
            <div className="flex w-full justify-end">
              <div className="flex items-end gap-3 max-w-[85%] justify-end">
                <div className="text-[11px] font-bold text-[#94a3b8] mb-1.5 shrink-0 flex items-center gap-1.5 uppercase tracking-wider">
                  2:35 PM <span className="text-[#f59e0b] font-black text-[22px] leading-none mt-0">&bull;</span> AI
                </div>
                <div className="bg-[#fff8f6] text-[#0f172a] p-4 py-3 rounded-2xl rounded-br-sm shadow-sm border border-[#fed7aa] relative transition-shadow flex-1">
                  <p className="text-sm leading-relaxed tracking-tight">Hi Alex, I'm Greg from the solutions team. I'm sorry to hear that. Could you please provide your order number so I can look into this for you?</p>
                </div>
                <div className="relative shrink-0">
                  <div className="bg-orange-50 text-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Divider */}
            <div className="flex items-center justify-center relative w-full my-4">
              <hr className="w-full border-[#e2e8f0] absolute" />
              <span className="bg-[#f8f8f8] px-3 text-xs font-semibold text-emerald-600 relative z-10 flex items-center gap-1.5 uppercase tracking-wider">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call Started at 10:30 AM
              </span>
            </div>

            {/* Custom widget / Call Player */}
            <div className="w-full flex justify-center mt-2 mb-8">
              <div className="bg-card border border-border-soft rounded-card w-full max-w-3xl shadow-card p-4 flex flex-col relative pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src="https://i.pravatar.cc/150?u=alex" alt="" className="w-8 h-8 rounded-full border border-border-soft object-cover" />
                      <img src="https://i.pravatar.cc/50?u=bot" alt="" className="w-6 h-6 rounded-full border-2 border-white absolute -bottom-1 -right-2" />
                    </div>
                    <div>
                      <div className="font-normal text-sm text-[#0f172a] flex items-center gap-2">
                        Call with Alex Morgan
                        <span className="text-[9px] font-bold text-success bg-success/10 px-2 py-0.5 rounded border border-success/20 uppercase tracking-widest">Live Call</span>
                      </div>
                      <div className="text-[11px] text-text-subtle font-medium mt-0.5">Today at 2:45 PM</div>
                    </div>
                  </div>
                  <div
                    className="text-[#f59e0b] text-[12px] font-bold flex items-center gap-1 cursor-pointer hover:underline"
                    onClick={() => setShowTranscript(!showTranscript)}
                  >
                    {showTranscript ? (
                      <>Hide Transcript <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg></>
                    ) : (
                      <>Show Transcript <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></>
                    )}
                  </div>
                </div>

                {/* Player Slider */}
                <div className="flex items-center gap-4 mt-2 w-full px-2">
                  <button className="w-12 h-12 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white flex items-center justify-center shadow-md transition-colors shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  </button>
                  <div className="text-text-subtle font-bold text-[11px] shrink-0 w-8 text-right">3:32</div>

                  <div className="flex-1 relative h-1.5 flex items-center cursor-pointer">
                    <div className="absolute w-full h-1.5 bg-[#e2e8f0] rounded-full"></div>
                    <div className="absolute h-1.5 bg-[#f59e0b] rounded-full z-10 w-[60%]"></div>
                    {/* Slider Knob */}
                    <div className="absolute w-3.5 h-3.5 bg-white border-2 border-[#e46335] rounded-full shadow-md z-30 left-[60%] -ml-1.5 cursor-grab"></div>
                    {/* Bookmarks */}
                    <div className="w-5 h-5 bg-white border-2 border-[#e46335] rounded-full flex items-center justify-center absolute -top-2 left-[20%] z-20 -ml-2.5 shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#e46335" stroke="#e46335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                    </div>
                    <div className="w-5 h-5 bg-white border-2 border-[#e46335] rounded-full flex items-center justify-center absolute -top-2 left-[45%] z-20 -ml-2.5 shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#e46335" stroke="#e46335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                    </div>
                    <div className="w-5 h-5 bg-white border-2 border-[#e46335] rounded-full flex items-center justify-center absolute -top-2 left-[85%] z-20 -ml-2.5 shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#e46335" stroke="#e46335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                    </div>
                  </div>

                  <div className="text-text-subtle font-bold text-[11px] shrink-0 text-right w-8">2:35</div>
                  <button className="text-[#94a3b8] hover:text-[#475569] transition-colors ml-1 p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                  </button>
                </div>

                {showTranscript && (
                  <div className="mt-6 flex flex-col w-full">
                    {/* The View Toggle (Minimal / Full Pills) */}
                    <div className="flex justify-between items-center px-2 mb-4">
                      <div className="flex bg-background border border-border-soft rounded-full p-0.5 shadow-sm">
                        <button
                          onClick={() => setTranscriptMode('minimal')}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${transcriptMode === 'minimal' ? 'bg-white shadow-sm text-[#f59e0b] border border-[#fbd38d]' : 'text-[#64748b] hover:text-[#1e293b] border border-transparent'}`}
                        >
                          Minimal
                        </button>
                        <button
                          onClick={() => setTranscriptMode('full')}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${transcriptMode === 'full' ? 'bg-white shadow-sm text-[#f59e0b] border border-[#fbd38d]' : 'text-[#64748b] hover:text-[#1e293b] border border-transparent'}`}
                        >
                          Full
                        </button>
                      </div>
                      {/* Live Audio Waves (Visualizer) */}
                      <div className="flex items-end gap-1 h-4 relative overflow-hidden">
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-2"></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-3" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-1" style={{ animationDelay: '300ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-4" style={{ animationDelay: '450ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-2" style={{ animationDelay: '600ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-4" style={{ animationDelay: '100ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-1" style={{ animationDelay: '250ms' }}></div>
                        <div className="w-1 bg-[#e46335] rounded-full animate-pulse h-3" style={{ animationDelay: '500ms' }}></div>
                      </div>
                    </div>

                    {/* Transcript Bubbles */}
                    <div className="flex flex-col gap-6 px-1 mt-2">

                      {transcriptMode === 'full' && (
                        <>
                          {/* Alex bubble 1 */}
                          <div className="flex flex-row items-end gap-3 w-full">
                            <div className="relative shrink-0">
                              <img src="https://i.pravatar.cc/150?u=alex" alt="" className="w-10 h-10 rounded-full shadow-sm object-cover border border-[#e2e8f0]" />
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-sm p-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                              </div>
                            </div>
                            <div className="bg-white shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-bl-sm border border-[#e2e8f0] relative max-w-[70%]">
                              <p className="text-sm leading-relaxed">Sure, it's #12345-AB. I ordered a laptop but received a keyboard instead.</p>
                            </div>
                            <div className="font-normal text-xs text-gray-400 mb-1.5 shrink-0">10:30 AM</div>
                          </div>

                          {/* Agent bubble 1 */}
                          <div className="flex flex-row items-end justify-end gap-3 w-full">
                            <div className="font-normal text-[11px] text-[#94a3b8] mb-1.5 shrink-0 flex items-center gap-1.5">2:35 PM <span className="font-bold text-[#f59e0b] text-[10px]">AI</span></div>
                            <div className="bg-[#fff8f6] shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-br-sm border border-[#fed7aa] relative max-w-[70%]">
                              <p className="text-sm leading-relaxed">Thank you for calling. I can see your order details now. It looks like there was a mix-up in our warehouse. I'll arrange for the correct item to be sent out immediately and...</p>
                            </div>
                            <div className="relative shrink-0">
                              <div className="bg-orange-50 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center border border-orange-200 shadow-sm shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                  <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                                </svg>
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-sm p-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                              </div>
                            </div>
                          </div>

                          {/* Overlapping Speech Component */}
                          <div className="w-full flex items-center justify-center my-4 relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative z-10 bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 border border-yellow-100">
                              <svg className="text-yellow-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                              Overlapping Speech Detected
                            </div>
                          </div>

                          {/* Overlapped Messages Block (Tight Spacing) */}
                          <div className="flex flex-col gap-2 w-full">

                            {/* User's Interruption (Left-Aligned) */}
                            <div className="flex flex-row items-end gap-3 w-full">
                              <div className="font-normal text-xs text-gray-400 mb-1.5 shrink-0">2:35 PM</div>
                              <img src="https://i.pravatar.cc/150?u=alex" alt="" className="w-6 h-6 rounded-full shadow-sm object-cover border border-[#e2e8f0]" />
                              <div className="bg-white shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-bl-sm border border-[#e2e8f0] relative max-w-[70%] flex items-center gap-2">
                                <svg className="text-[#94a3b8] shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                <p className="text-sm leading-relaxed">Oh, great—thank you!</p>
                              </div>
                            </div>

                            {/* AI's Continuation (Right-Aligned) */}
                            <div className="flex flex-row items-end justify-end gap-3 w-full">
                              <div className="bg-[#fff8f6] shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-tr-sm rounded-br-sm border border-[#fed7aa] relative max-w-[70%]">
                                <p className="text-sm leading-relaxed">... and also provide a return label for the keyboard.</p>
                              </div>
                              <div className="relative shrink-0">
                                <div className="bg-orange-50 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center border border-orange-200 shadow-sm shrink-0">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                                  </svg>
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-sm p-0.5">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Minimal messages */}
                      {transcriptMode === 'minimal' && (
                        <>
                          {/* Alex bubble */}
                          <div className="flex flex-row items-end gap-3 w-full">
                            <div className="relative shrink-0">
                              <img src="https://i.pravatar.cc/150?u=alex" alt="" className="w-10 h-10 rounded-full shadow-sm object-cover border border-[#e2e8f0]" />
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-sm p-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                              </div>
                            </div>
                            <div className="bg-white shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-bl-sm border border-[#e2e8f0] relative max-w-[70%]">
                              <p className="text-sm leading-relaxed">That's great, thank you. How long will it take for the laptop to arrive?</p>
                            </div>
                            <div className="font-normal text-xs text-gray-400 mb-1.5 shrink-0">10:30 AM</div>
                          </div>

                          {/* Agent bubble */}
                          <div className="flex flex-row items-end justify-end gap-3 w-full">
                            <div className="font-normal text-[11px] text-[#94a3b8] mb-1.5 shrink-0 flex items-center gap-1.5">2:35 PM <span className="font-bold text-[#f59e0b] text-[10px]">AI</span></div>
                            <div className="bg-[#fff8f6] shadow-md text-[#0f172a] p-4 py-3 rounded-2xl rounded-br-sm border border-[#fed7aa] relative max-w-[70%]">
                              <p className="text-sm leading-relaxed">We'll ship it with expedited delivery, so you should receive it within 2 business days. We'll also add a $50 store credit to your account for the inconvenience.</p>
                            </div>
                            <div className="relative shrink-0">
                              <div className="bg-orange-50 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center border border-orange-200 shadow-sm shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                  <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                                </svg>
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-sm p-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 md:p-6 pt-0 bg-[#f8f8f8] flex flex-col gap-4 relative z-10 w-full shrink-0">

            <div className="absolute -top-8 left-2 md:left-6 flex items-center gap-2">
              <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-5 h-5 rounded-full object-cover shadow-sm" />
              <span className="text-xs text-gray-500 font-medium">Alex Morgan is typing...</span>
            </div>

            <div className="relative flex items-center bg-white rounded-2xl shadow-sm py-2.5 px-4 border border-gray-100">
              <button className="text-[#64748b] hover:text-[#0f172a] transition-colors shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
              </button>
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-none text-[15px] md:text-base text-[#0f172a] placeholder-[#94a3b8] outline-none px-4 py-1"
              />
              <div className="flex items-center gap-4 shrink-0">
                <button className="text-[#64748b] hover:text-[#0f172a] transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                </button>
                <button className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white shadow-md flex items-center justify-center transition-colors shrink-0">
                  <svg className="w-5 h-5 -ml-0.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </div>
            </div>

            <div className="flex gap-2.5 flex-wrap ml-1">
              <button className="bg-gray-100 hover:bg-gray-200 text-[#0d202f] text-[15px] font-normal px-5 py-2.5 rounded-full transition-colors">
                Thank you for contacting us
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-[#0d202f] text-[15px] font-normal px-5 py-2.5 rounded-full transition-colors">
                I'll check that for you
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-[#0d202f] text-[15px] font-normal px-5 py-2.5 rounded-full transition-colors">
                Is there anything else?
              </button>
            </div>
          </div>
        </div>

        {/* Pane 3: Contact Panel */}
        <div className={`w-full md:w-80 flex-col bg-white rounded-2xl shadow-md flex-shrink-0 relative overflow-hidden transition-all ${mobileView === 'info' ? 'flex' : 'hidden md:flex'}`}>

          {/* Header */}
          <div className="p-5 flex justify-between items-center z-10 sticky top-0 bg-[#f8fafc]">
            <h2 className="text-lg text-accent-teal font-bold tracking-tight">Customer Information</h2>
            <button className="text-text-subtle hover:text-[#0f172a] transform translate-x-1 -translate-y-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#f8fafc] flex flex-col relative pb-4">

            {/* Profile Basic Info */}
            <div className="px-5 pb-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Morgan" className="w-[68px] h-[68px] rounded-full border border-white shadow-sm object-cover bg-white" />
              </div>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <h3 className="text-xl font-bold text-accent-teal leading-tight tracking-tight">Alex Morgan</h3>
                <p className="text-[12.5px] text-[#475569] font-medium flex items-center gap-2 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent-teal/70"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                  Marketing Director
                </p>
                <p className="text-[12.5px] text-[#475569] font-medium flex items-center gap-2 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent-teal/70"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  Orbital Inc.
                </p>
              </div>
            </div>

            {/* Tabs inside Panel */}
            <div className="flex bg-[#f8fafc] w-full px-2 pt-2 border-b border-border-soft top-0 z-10 gap-1 shrink-0">
              <button
                onClick={() => setActiveRightTab('profile')}
                className={`flex-1 flex flex-col relative items-center justify-center py-2.5 text-sm font-normal rounded-t-xl transition-all ${activeRightTab === 'profile'
                    ? 'bg-white shadow-sm border border-b-0 border-[#dbeafe] text-[#e46335] z-10'
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-black/5 bg-transparent border border-transparent'
                  }`}
              >
                {activeRightTab === 'profile' && <div className="absolute top-[-1px] left-[-1px] right-[-1px] h-[3px] bg-[#e46335] rounded-t-xl"></div>}
                <span className="flex items-center gap-2 z-10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> Profile
                </span>
                {activeRightTab === 'profile' && <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-white z-20"></div>}
              </button>

              <button
                onClick={() => setActiveRightTab('journey')}
                className={`flex-1 flex flex-col relative items-center justify-center py-2.5 text-sm font-normal rounded-t-xl transition-all ${activeRightTab === 'journey'
                    ? 'bg-white shadow-sm border border-b-0 border-[#dbeafe] text-[#e46335] z-10'
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-black/5 bg-transparent border border-transparent'
                  }`}
              >
                {activeRightTab === 'journey' && <div className="absolute top-[-1px] left-[-1px] right-[-1px] h-[3px] bg-[#e46335] rounded-t-xl"></div>}
                <span className="flex items-center gap-2 z-10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg> Journey
                </span>
                {activeRightTab === 'journey' && <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-white z-20"></div>}
              </button>
            </div>

            <div className="p-4 md:p-6 flex flex-col gap-5 w-full flex-1 overflow-y-auto relative bg-[#f8fafc] md:bg-white no-scrollbar">
              {/* Conditional Profile Rendering */}
              {activeRightTab === 'profile' && (
                <div className="flex flex-col gap-6 w-full animate-in fade-in zoom-in-95 duration-200">
                  {/* Data Enrichment Box */}
                  <div className="bg-[linear-gradient(90deg,#faf5ff,#eff6ff)] border border-[#e9d5ff] rounded-xl p-4 md:p-3 relative overflow-hidden shadow-sm w-full block">
                    <div className="flex justify-between items-center mb-1.5">
                      <h4 className="text-[14px] font-normal text-[#0f172a] flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0f172a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
                        Data Enrichment
                      </h4>
                      <span className="text-[11px] font-normal bg-[#e2e8f0] text-[#0f172a] px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-[#cbd5e1]">
                        <span className="text-[#0ea5e9]">⟳</span> 5 Credits
                      </span>
                    </div>
                    <div className="w-full text-center mt-2.5 pb-0.5">
                      <p className="text-[11px] text-[#64748b] font-normal leading-relaxed">
                        Auto-populate missing fields with external data
                      </p>
                    </div>
                  </div>

                  {/* Accordion Wrapper */}
                  <div className="bg-[#f9fafb] border border-[#dbeafe] rounded-xl overflow-hidden mt-1 divide-y divide-[#dbeafe]">

                    {/* Contact Details */}
                    <div>
                      <div onClick={() => setIsContactOpen(!isContactOpen)} className="px-4 py-3 pb-3 flex justify-between items-center cursor-pointer group hover:bg-[#f1f5f9] transition-colors">
                        <h4 className="text-[14px] font-normal text-[#0f172a]">Contact Details</h4>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-[#94a3b8] transition-transform ${!isContactOpen ? 'rotate-180' : ''}`}><path d="M18 15l-6-6-6 6" /></svg>
                      </div>
                      {isContactOpen && (
                        <div className="p-4 flex gap-4 w-full bg-[#f9fafb] text-[12.5px] items-stretch pt-0">
                          <div className="flex flex-col gap-1.5 flex-1">
                            <div className="flex items-center gap-2.5 text-[#334155] font-normal h-6">
                              <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></div>
                              alex.morgan@orbital.com
                            </div>
                            <div className="flex items-center gap-2.5 text-[#334155] font-normal h-6">
                              <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></div>
                              +1 (555) 123-4567
                            </div>
                            <div className="flex items-center gap-2.5 text-[#64748b] font-normal h-6">
                              <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg></div>
                              192.168.1.254 <span className="text-[10px] ml-0.5 border border-[#cbd5e1] text-[#94a3b8] rounded px-[4px] inline-flex items-center">?</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-[#334155] font-normal h-6">
                              <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg></div>
                              San Francisco, CA
                            </div>
                            <div className="flex items-center gap-2.5 text-[#64748b] font-normal h-6">
                              <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19C19.985 19 22 16.985 22 14.5C22 12.188 20.257 10.28 18 10.027V10C18 6.686 15.314 4 12 4C9.176 4 6.804 5.952 6.136 8.563C3.784 8.847 2 10.825 2 13.25C2 15.873 4.127 18 6.75 18H17.5V19Z" strokeLinejoin="round" /></svg></div>
                              72°F Sunny <span className="text-[10px] ml-0.5 border border-[#cbd5e1] text-[#94a3b8] rounded px-[4px] inline-flex items-center">?</span>
                            </div>
                          </div>
                          <div className="relative w-[110px] rounded-lg overflow-hidden border border-[#cbd5e1] shadow-sm shrink-0 flex items-center justify-center bg-[#ffedd5]">
                            <div className="absolute inset-0 bg-[#fed7aa]/20 w-full h-full object-contain overflow-hidden">
                              <div className="bg-[#ffedd5] w-[180%] h-[180%] -ml-6 -mt-6 opacity-60 transform -rotate-[22deg] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bae6fd] to-transparent"></div>
                              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 opacity-30">
                                {[...Array(25)].map((_, i) => <div key={i} className="border border-[#f59e0b] bg-white/20"></div>)}
                              </div>
                              <div className="absolute top-[48%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-[22px] h-[22px] bg-[#3b82f6] rounded-[50%_50%_50%_0] rotate-[-45deg] shadow-[0_4px_8px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center">
                                <div className="w-[6px] h-[6px] bg-white rounded-full rotate-[45deg]"></div>
                              </div>
                              <div className="absolute top-[48%] left-[55%] w-6 h-2 bg-black/20 blur-[2px] rounded-full transform -translate-x-1/2 translate-y-[2px] z-0"></div>

                              <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center border border-yellow-200">
                                <span className="text-[12px]">☀️</span>
                              </div>
                              <div className="absolute top-[30%] w-full text-center tracking-widest text-[12px] font-normal text-[#0f172a] opacity-80 transform -rotate-[15deg]">San Francisco</div>
                            </div>
                            <div className="absolute bottom-1 right-1 z-10 bg-white/95 px-1.5 py-1 rounded shadow-sm text-[9px] font-normal tracking-tight uppercase flex items-center gap-1 backdrop-blur-sm border border-[#e2e8f0] cursor-pointer hover:bg-white text-[#475569]">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg> Expand
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div>
                      <div onClick={() => setIsTagsOpen(!isTagsOpen)} className="px-4 py-3 pb-3 flex justify-between items-center cursor-pointer group hover:bg-[#f1f5f9] transition-colors">
                        <h4 className="text-[14px] font-normal text-[#0f172a]">Tags</h4>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-[#94a3b8] transition-transform ${!isTagsOpen ? 'rotate-180' : ''}`}><path d="M18 15l-6-6-6 6" /></svg>
                      </div>
                      {isTagsOpen && (
                        <div className="p-4 pt-1 flex flex-wrap gap-1.5 w-full bg-[#f9fafb]">
                          <span className="flex items-center gap-1.5 text-[11px] font-normal text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded-full border border-transparent cursor-pointer">
                            Marketing <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] font-normal text-[#9333ea] bg-[#faf5ff] px-2 py-0.5 rounded-full border border-transparent cursor-pointer">
                            Enterprise <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] font-normal text-[#ca8a04] bg-[#fefce8] px-2 py-0.5 rounded-full border border-transparent cursor-pointer">
                            VIP <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] font-normal text-[#16a34a] bg-[#f0fdf4] px-2 py-0.5 rounded-full border border-transparent cursor-pointer">
                            Key Account <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] font-normal text-[#64748b] bg-white px-2 py-0.5 rounded-full border border-[#cbd5e1] border-dashed shadow-sm cursor-pointer hover:bg-gray-50">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> Add
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Intent & Signals */}
                    <div>
                      <div onClick={() => setIsIntentOpen(!isIntentOpen)} className="px-4 py-3 pb-3 flex justify-between items-center cursor-pointer group hover:bg-[#f1f5f9] transition-colors">
                        <h4 className="text-[14px] font-normal text-[#0f172a] flex items-center gap-2">
                          Intent & Signals
                          <span className="text-[11.5px] font-normal text-[#f59e0b]">High Intent</span>
                        </h4>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-[#94a3b8] transition-transform ${!isIntentOpen ? 'rotate-180' : ''}`}><path d="M18 15l-6-6-6 6" /></svg>
                      </div>
                      {isIntentOpen && (
                        <div className="p-4 pt-1 flex flex-col gap-2.5 bg-[#f9fafb] w-full">
                          <div className="flex items-center gap-3 w-full text-[13px] font-normal text-[#475569] h-5">
                            <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></div>
                            Viewed pricing 3 times
                          </div>
                          <div className="flex items-center gap-3 w-full text-[13px] font-normal text-[#475569] h-5">
                            <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                            Long time on page (2.5min)
                          </div>
                          <div className="flex items-center gap-3 w-full text-[13px] font-normal text-[#475569] h-5">
                            <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v6h6" /><path d="M21 12A9 9 0 0 0 6 5.3L3 8" /><path d="M21 22v-6h-6" /><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" /></svg></div>
                            Returning visitor
                          </div>
                          <div className="flex items-center gap-3 w-full text-[13px] font-normal text-[#475569] h-5">
                            <div className="w-5 flex justify-center text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                            Enterprise company size
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Conditional Journey Rendering */}
              {activeRightTab === 'journey' && (
                <div className="flex flex-col gap-4 w-full animate-in fade-in zoom-in-95 duration-200">

                  {/* Card 1: Action */}
                  <div className="bg-[#faf5ff] border border-[#e9d5ff] rounded-[14px] p-3 shadow-sm w-full flex flex-col items-center justify-center cursor-pointer hover:shadow transition-all group">
                    <div className="bg-white border border-[#d8b4fe] rounded-[10px] px-6 py-2.5 font-normal text-[#334155] shadow-sm flex items-center justify-center gap-2.5 w-full text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" /><circle cx="12" cy="12" r="3.5" /></svg>
                      View Full Journey
                    </div>
                    <div className="text-[11px] text-[#64748b] mt-2 font-normal text-center">See user's journey in detail</div>
                  </div>

                  {/* Card 2: Current Session */}
                  <div className="bg-[#f9fafb] border border-green-200 rounded-xl p-4 shadow-sm w-full relative">
                    <div className="flex justify-between items-center mb-3.5">
                      <h4 className="font-normal text-[#0f172a] text-[13px]">Current Session</h4>
                      <span className="bg-[#10b981] text-white text-[10px] font-normal px-2 py-0.5 rounded-lg shadow-[0_2px_4px_rgba(16,185,129,0.3)] tracking-wide">Live</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <svg className="w-[18px] h-[18px] text-[#94a3b8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        <span className="text-[13px] text-[#334155] font-normal">Started <span className="text-[#64748b] ml-0.5">2:15 PM (19 min ago)</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-[18px] h-[18px] text-[#94a3b8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                        <span className="text-[13px] text-[#334155] font-normal">Device <span className="text-[#64748b] ml-0.5">Desktop • Chrome</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-[18px] h-[18px] text-[#94a3b8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        <span className="text-[13px] text-[#334155] font-normal">Referrer <span className="text-[#64748b] ml-0.5">Google Search</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Customer Journey UI */}
                  <div className="bg-[#f9fafb] border border-[#dbeafe] rounded-xl p-4 shadow-sm w-full">
                    <div className="flex justify-between items-center mb-5">
                      <h4 className="font-normal text-[#0f172a] text-[13px]">Customer Journey</h4>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="18 15 12 9 6 15" /></svg>
                    </div>

                    <div className="relative pl-3 pb-1">
                      {/* Vertical Context Line */}
                      <div className="absolute left-[29px] top-[40px] bottom-[40px] w-[2px] border-l-2 border-dotted border-[#cbd5e1] z-0"></div>

                      <div className="flex flex-col gap-4 relative z-10 w-full">
                        {/* Node 1: Checkout */}
                        <div className="flex items-start gap-4 pr-1">
                          <div className="w-[38px] h-[38px] rounded-full bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center shrink-0 z-10 relative">
                            <svg className="w-4 h-4 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="5" width="18" height="14" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          </div>
                          <div className="flex flex-col flex-1 w-full bg-transparent relative pt-[2px]">
                            <div className="flex justify-between items-start w-full">
                              <span className="text-[13.5px] font-normal text-[#0f172a]">Checkout Page</span>
                              <span className="text-[10px] font-normal text-[#10b981] uppercase tracking-wider mt-0.5">CURRENT</span>
                            </div>
                            <span className="text-[12px] text-[#64748b] font-normal">/checkout</span>
                            <div className="flex justify-between items-end mt-1.5 w-full">
                              <span className="text-[11px] text-[#64748b] font-normal">2:15 PM</span>
                              <span className="text-[10px] bg-[#f1f5f9] px-2.5 py-0.5 rounded-md font-normal text-[#475569] border border-[#e2e8f0]">2 min</span>
                            </div>
                          </div>
                        </div>

                        {/* Node 2: Cart */}
                        <div className="flex items-start gap-4 pr-1">
                          <div className="w-[38px] h-[38px] rounded-full bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center shrink-0 z-10 relative mt-1">
                            <svg className="w-[18px] h-[18px] text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                          </div>
                          <div className="flex flex-col flex-1 w-full bg-transparent relative pt-[5px]">
                            <div className="flex justify-between items-start w-full">
                              <span className="text-[13.5px] font-normal text-[#0f172a]">Shopping Cart</span>
                            </div>
                            <span className="text-[12px] text-[#64748b] font-normal">/cart</span>
                            <div className="flex justify-between items-end mt-1.5 w-full">
                              <span className="text-[11px] text-[#64748b] font-normal">2:15 PM</span>
                              <span className="text-[10px] bg-[#f1f5f9] px-2.5 py-0.5 rounded-md font-normal text-[#475569] border border-[#e2e8f0]">2 min</span>
                            </div>
                          </div>
                        </div>

                        {/* Node 3: Homepage */}
                        <div className="flex items-start gap-4 pr-1">
                          <div className="w-[38px] h-[38px] rounded-full bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center shrink-0 z-10 relative mt-1">
                            <svg className="w-[18px] h-[18px] text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                          </div>
                          <div className="flex flex-col flex-1 w-full bg-transparent relative pt-[5px]">
                            <div className="flex justify-between items-start w-full">
                              <span className="text-[13.5px] font-normal text-[#0f172a]">Homepage</span>
                              <span className="text-[10px] font-normal text-[#ea580c] uppercase tracking-wider mt-0.5">ENTRY</span>
                            </div>
                            <span className="text-[12px] text-[#64748b] font-normal">/</span>
                            <div className="flex justify-between items-end mt-1.5 w-full">
                              <span className="text-[11px] text-[#64748b] font-normal">2:15 PM</span>
                              <span className="text-[10px] bg-[#f1f5f9] px-2.5 py-0.5 rounded-md font-normal text-[#475569] border border-[#e2e8f0]">2 min</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Session Summary */}
                  <div className="bg-[#f9fafb] border border-[#dbeafe] rounded-xl p-4 shadow-sm w-full relative">
                    <h4 className="font-normal text-[#0f172a] text-[13px] mb-4">Session Summary</h4>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-4 px-2">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-[#0f172a] font-normal text-[14px] flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg> 5
                        </div>
                        <div className="text-[11px] text-[#64748b] font-normal mt-1">Pages Visited</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-[#0f172a] font-normal text-[14px] flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 19 min
                        </div>
                        <div className="text-[11px] text-[#64748b] font-normal mt-1">Total Time</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-[#0f172a] font-normal text-[14px] flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> 3
                        </div>
                        <div className="text-[11px] text-[#64748b] font-normal mt-1">Total Visits</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-[#0f172a] font-normal text-[14px] flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> High
                        </div>
                        <div className="text-[11px] text-[#64748b] font-normal mt-1">Intent Level</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Previous Session */}
                  <div className="bg-[#f9fafb] border border-[#dbeafe] rounded-xl p-4 shadow-sm w-full flex justify-between items-center cursor-pointer hover:border-[#bfdbfe] hover:shadow transition-all group">
                    <div className="flex flex-col">
                      <h4 className="font-normal text-[#0f172a] text-[13px]">Previous Session</h4>
                      <span className="text-[12px] text-[#64748b] mt-0.5">Yesterday, 3:45 PM • 8 pages • 12 min</span>
                    </div>
                    <svg className="w-5 h-5 text-[#94a3b8] group-hover:text-[#475569] group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>

                  {/* Card 6: Lead Alert */}
                  <div className="bg-blue-50 border border-[#e0f2fe] rounded-[14px] p-4 shadow-sm w-full relative mb-6">
                    <h4 className="font-normal text-[#0f172a] text-[13px] flex items-center gap-2 mb-1.5">
                      <svg className="w-3.5 h-3.5 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      High-Value Lead
                    </h4>
                    <p className="text-[12px] text-[#475569] leading-relaxed font-normal">
                      This visitor shows strong buying intent. Consider enriching for outreach.
                    </p>
                  </div>

                </div>
              )}

              <div className="mt-auto flex flex-col gap-3 pt-6 pb-4 border-t border-border-soft relative">
                <a href="#" className="text-[#f59e0b] hover:text-[#d97706] text-sm font-normal flex items-center gap-1 hover:underline transition-all">
                  See Credit Cost Breakdown <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
                <div>
                  <div className="text-[13px] font-normal text-[#64748b]">
                    Last Enrichment: <span className="font-normal text-[#0f172a]">2 minutes ago</span>
                  </div>
                  <div className="text-[#e14617] text-[13px] font-normal tracking-tight mt-0.5">
                    2 suggestions available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI Bubble */}
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-[50%] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#fed7aa] flex items-center justify-center p-0 cursor-pointer z-30 group hover:-translate-y-1 transition-transform">
          <div className="w-full h-full bg-gradient-to-br from-[#ffedd5] to-[#fed7aa] rounded-full overflow-hidden flex items-center justify-center relative inner-shadow scale-95 border-2 border-white">
            <img src="https://i.pravatar.cc/100?u=bot" alt="AI Agent" className="w-[125%] h-[125%] object-cover scale-110 opacity-95 group-hover:scale-125 transition-transform origin-bottom" />
          </div>
          <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-white rounded-full shadow-[0_2px_8px_rgb(0,0,0,0.15)] flex items-center justify-center border border-[#e2e8f0]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#ea580c" className="translate-y-[1px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
