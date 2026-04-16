import React from 'react';
import { 
  InboxIcon, MapIcon, DatabaseIcon, ArrowRightIcon, ChevronRightIcon 
} from './Icons';

export default function Dashboard() {
  return (
    <div className="px-5 md:px-12 w-full max-w-[1920px] mx-auto flex flex-col gap-6">
      
      {/* Welcome Header */}
      <section className="mb-1 w-full pt-2">
        <h1 className="text-page-header font-bold text-accent-teal tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
          Welcome back, Jenn 👋
        </h1>
        <p className="text-page-sub text-text-paragraph mt-1">Here's what's happening with your projects today</p>
      </section>

      {/* Layout Grid constraints */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* === OVERVIEW ROW (Spans full width) === */}
        <section className="md:col-span-12 w-full">
            <h2 className="text-section-hd text-text-section tracking-wider uppercase mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
              
              {/* KPI Card 1 */}
              <div className="bg-card border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-primary font-semibold text-card-hd">
                        <InboxIcon className="text-primary w-4 h-4" /> Inboxes
                    </div>
                    <span className="text-success text-xs font-bold flex items-center">▲ +33%</span>
                  </div>
                  <div className="text-card-stats-num font-bold text-text mb-1 flex items-baseline gap-1.5">
                    124 <span className="text-card-stats-text font-normal text-text-subtle">new messages</span>
                  </div>
                  <div className="text-sm text-text-subtle mt-auto">this week</div>
              </div>

              {/* KPI Card 2 */}
              <div className="bg-card border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-accent-teal font-semibold text-card-hd">
                        <MapIcon className="w-4 h-4" /> Journey
                    </div>
                    <span className="text-success text-xs font-bold flex items-center">▲ +42%</span>
                  </div>
                  <div className="text-card-stats-text font-semibold text-text mb-1 flex items-center gap-2 truncate">
                    Home <span className="text-text-subtle font-normal text-sm">→</span> Pricing <span className="text-text-subtle font-normal text-sm">→</span> Checkout
                  </div>
                  <div className="text-sm text-text-subtle mt-auto">Top Path</div>
              </div>

              {/* KPI Card 3 */}
              <div className="bg-card border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-success font-semibold text-card-hd">
                        <DatabaseIcon className="w-4 h-4" /> Data Enrichment
                    </div>
                    <span className="text-success text-xs font-bold flex items-center">▲ +75%</span>
                  </div>
                  <div className="text-card-stats-num font-bold text-text mb-1 flex items-baseline gap-1.5">
                    56 <span className="text-card-stats-text font-normal text-text-subtle">new profiles</span>
                  </div>
                  <div className="text-sm text-text-subtle mt-auto">enriched today</div>
              </div>

            </div>
        </section>
        
        {/* === LEFT COLUMN === (Col-Span 8) */}
        <div className="md:col-span-8 flex flex-col gap-6 w-full">

          {/* Conversation Topic Analysis */}
          <section className="flex flex-col">
            <h2 className="text-section-hd text-text-section tracking-wider uppercase mb-4">Conversation Topic Analysis</h2>
            <div className="bg-card border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex flex-col gap-5 h-full">
                {/* Segmented Bar */}
                <div className="flex h-6 rounded-md overflow-hidden bg-background-content w-full border border-border-soft/50">
                  <div className="bg-[#f59e0b] h-full transition-all" style={{ width: '58%' }}></div>
                  <div className="bg-text-subtle h-full transition-all" style={{ width: '32%' }}></div>
                  <div className="bg-[#d1d5db] h-full transition-all" style={{ width: '10%' }}></div>
                </div>
                
                <div className="flex flex-wrap justify-between items-center text-[10px] md:text-xs font-medium text-text pb-4 border-b border-border-soft">
                  <div className="flex gap-3 md:gap-5">
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div> Sales <span className="text-text-subtle">58%</span></div>
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-text-subtle"></div> Support <span className="text-text-subtle">32%</span></div>
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#d1d5db]"></div> Other <span className="text-text-subtle">10%</span></div>
                  </div>
                  <div className="text-text-subtle mt-2 sm:mt-0">Total: <span className="text-text font-bold">272</span> conversations</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-2 mt-1">
                  <div className="flex justify-between px-3 md:px-4 py-2.5 md:py-3 bg-background-content rounded-md items-center cursor-pointer hover:bg-[#ffb29a]/10 transition-colors">
                      <div className="flex items-center gap-3 font-medium text-text text-sm">
                        <ChevronRightIcon className="text-text-subtle" /> Sales Breakdown
                      </div>
                      <span className="text-primary font-bold text-sm">58% Total</span>
                  </div>
                  <div className="flex justify-between px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border-soft rounded-md items-center cursor-pointer hover:border-text-subtle transition-colors">
                      <div className="flex items-center gap-3 font-medium text-text text-sm">
                        <ChevronRightIcon className="text-text-subtle" /> Support Breakdown
                      </div>
                      <span className="text-text-subtle font-bold text-sm">32% Total</span>
                  </div>
                  <div className="flex justify-between px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border-soft rounded-md items-center cursor-pointer hover:border-text-subtle transition-colors">
                      <div className="flex items-center gap-3 font-medium text-text text-sm">
                        <ChevronRightIcon className="text-text-subtle" /> Other Breakdown
                      </div>
                      <span className="text-text-subtle font-bold text-sm">10% Total</span>
                  </div>
                </div>

                {/* Insight Card */}
                <div className="mt-2 bg-background border border-border-soft rounded-md p-4 flex gap-3 text-sm text-text-paragraph items-start shadow-sm">
                  <div className="text-[#3b82f6] text-lg leading-none mt-0.5 opacity-80">💡</div>
                  <div><strong className="text-text font-semibold mr-1">Insight:</strong> Sales-related conversations increased 12% compared to last week.</div>
                </div>
            </div>
          </section>

          {/* Journey Snapshot */}
          <section className="flex flex-col">
            <h2 className="text-section-hd text-text-section tracking-wider uppercase mb-4">Journey Snapshot</h2>
            <div className="bg-card border border-border-soft rounded-card p-6 shadow-md shadow-black/10 min-h-[300px] flex justify-center items-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="relative w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between z-10 gap-10 sm:gap-0 px-2 md:px-8 xl:px-12">
                  {/* Start Node */}
                  <div className="bg-white shadow-md shadow-black/10 rounded-[14px] p-3 flex items-center gap-3 relative z-20 w-40 md:w-48 border border-border-soft/50">
                      <div className="w-10 h-10 bg-background-content rounded-xl flex items-center justify-center text-xl shadow-sm border border-border-soft/50">🏠</div>
                      <div>
                        <div className="font-bold text-sm text-text">Homepage</div>
                        <div className="text-xs text-text-subtle">12.5K visits</div>
                      </div>
                  </div>

                  {/* SVG connection */}
                  <div className="absolute left-[180px] right-[180px] top-1/2 -translate-y-1/2 flex items-center justify-center opacity-40 z-0 hidden sm:block">
                      <svg width="100%" height="120" viewBox="0 0 200 120" preserveAspectRatio="none">
                        <path d="M 0 60 C 50 60, 50 20, 100 20" fill="none" stroke="#46a756" strokeWidth="24" opacity="0.2"/>
                        <path d="M 0 60 C 50 60, 50 100, 100 100" fill="none" stroke="#e14617" strokeWidth="24" opacity="0.2"/>
                      </svg>
                  </div>

                  {/* End Nodes */}
                  <div className="flex flex-col gap-8 relative z-20">
                      <div className="bg-white shadow-md shadow-black/10 rounded-[14px] p-3 flex flex-col relative w-40 md:w-48 border border-border-soft/50">
                        <div className="absolute -top-3 right-2 bg-[#dcfce7] text-success text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-success/30">
                            ✓ Strong intent
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                            <div className="w-10 h-10 bg-[#f4fbf6] rounded-xl flex items-center justify-center text-xl shadow-sm border border-border-soft/50">📄</div>
                            <div>
                              <div className="font-bold text-sm text-text">Features</div>
                              <div className="text-xs text-text-subtle">8.2K visits</div>
                           </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md shadow-black/10 rounded-[14px] p-3 flex flex-col relative w-40 md:w-48 border-2 border-[#fee2e2]">
                        <div className="absolute -top-3 right-2 bg-[#fee2e2] text-primary text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-primary/20">
                            ! High drop-off
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                            <div className="w-10 h-10 bg-[#fff8f6] rounded-xl flex items-center justify-center text-xl shadow-sm border border-border-soft/50">💳</div>
                            <div>
                              <div className="font-bold text-sm text-text">Pricing</div>
                              <div className="text-xs text-text-subtle">6.8K visits</div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white border border-border-soft rounded-lg px-3 py-2 text-[11px] font-bold text-text shadow-sm flex items-center justify-between w-[90px] cursor-pointer hover:bg-background-content transition-colors">
                  Legend <span className="text-[8px] text-text-subtle">▲</span>
                </div>
            </div>
          </section>
          
        </div>

        {/* === RIGHT COLUMN === (Col-Span 4) */}
        <div className="md:col-span-4 flex flex-col gap-6 w-full">

            {/* Top Conversion Paths (Top, re-swapped per final override) */}
            <section className="flex flex-col w-full h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-section-hd text-text-section tracking-wider uppercase">Top Conversion Paths</h2>
                <span className="text-[10px] text-primary font-bold cursor-pointer hover:underline uppercase">Go to Journey</span>
              </div>
              <div className="bg-card border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex flex-col justify-between gap-6 overflow-hidden h-full">
                  
                  {/* Path 1 */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center text-sm font-semibold text-text w-full">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-background-content text-text-subtle flex items-center justify-center text-[10px] font-bold border border-border-soft/50">1</span>
                          <span className="truncate text-[13px]">Pricing → Demo → Close</span>
                        </div>
                        <span className="font-bold shrink-0 ml-2">42%</span>
                    </div>
                    <div className="w-full bg-background-content h-2.5 rounded-full overflow-hidden border border-border-soft/30">
                        <div className="bg-success h-full transition-all" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  
                  {/* Path 2 */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center text-sm font-semibold text-text w-full">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-background-content text-text-subtle flex items-center justify-center text-[10px] font-bold border border-border-soft/50">2</span>
                          <span className="truncate text-[13px]">Blog → Chat → Qualify</span>
                        </div>
                        <span className="font-bold shrink-0 ml-2">28%</span>
                    </div>
                    <div className="w-full bg-background-content h-2.5 rounded-full overflow-hidden border border-border-soft/30">
                        <div className="bg-success h-full opacity-60 transition-all" style={{ width: '28%' }}></div>
                    </div>
                  </div>

                  {/* Path 3 */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center text-sm font-semibold text-text w-full">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-background-content text-text-subtle flex items-center justify-center text-[10px] font-bold border border-border-soft/50">3</span>
                          <span className="truncate text-[13px]">Direct → Engage → Book</span>
                        </div>
                        <span className="font-bold shrink-0 ml-2">15%</span>
                    </div>
                    <div className="w-full bg-background-content h-2.5 rounded-full overflow-hidden border border-border-soft/30">
                        <div className="bg-success h-full opacity-30 transition-all" style={{ width: '15%' }}></div>
                    </div>
                  </div>
              </div>
            </section>

            {/* Action Required Panel (Bottom) */}
            <section className="flex flex-col w-full">
              <h2 className="text-section-hd text-text-section tracking-wider uppercase mb-4">Action Required</h2>
              <div className="flex flex-col gap-3">
                  {[
                  { title: 'Hot Leads', count: 3, desc: 'Sarah from Acme Corp viewed pricing 3x', border: 'border-l-primary', badge: 'bg-primary/10 text-primary' },
                  { title: 'Follow-ups Due', count: 5, desc: '2 demos scheduled need confirmation', border: 'border-l-[#f59e0b]', badge: 'bg-[#f59e0b]/10 text-[#f59e0b]' },
                  { title: 'Voice Alert', count: 1, desc: 'Unusual traffic spike from enterprise segment', border: 'border-l-[#3b82f6]', badge: 'bg-[#3b82f6]/10 text-[#3b82f6]' }
                  ].map((alert, i) => (
                  <div key={i} className={`bg-card border-y border-r border-border-soft border-l-[3px] rounded-r-card rounded-l-sm p-4 shadow-md shadow-black/10 flex flex-col gap-2 relative group hover:shadow-lg transition-all cursor-pointer ${alert.border}`}>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[13px] text-text">{alert.title}</span>
                          <span className={`px-2 py-[2px] rounded-full text-[10px] font-bold ${alert.badge}`}>{alert.count}</span>
                        </div>
                        <span className="text-primary text-xs font-semibold flex items-center gap-1">
                          View <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                      <p className="text-[12px] text-text-paragraph tracking-tight">{alert.desc}</p>
                  </div>
                  ))}
              </div>
            </section>
            
        </div>

        {/* === BOTTOM SPAN (Engagement Trends Full Width) === */}
        <section className="md:col-span-12 flex flex-col w-full mt-2">
          <h2 className="text-section-hd text-text-section tracking-wider uppercase mb-4">Engagement Trends</h2>
          <div className="bg-card border border-border-soft rounded-card p-6 shadow-md shadow-black/10 flex flex-col min-h-[320px]">
              
              {/* Tabs */}
              <div className="flex gap-1 mb-8 bg-background-content w-fit p-1 rounded-card border border-border-soft">
                  <div className="px-4 py-1.5 bg-card text-text text-xs font-bold rounded-md shadow-sm border border-border-soft/50 cursor-pointer">Messages</div>
                  <div className="px-4 py-1.5 text-text-subtle text-xs font-semibold rounded-md hover:text-text transition-colors cursor-pointer">Visitor</div>
                  <div className="px-4 py-1.5 text-text-subtle text-xs font-semibold rounded-md hover:text-text transition-colors cursor-pointer">Profiles</div>
              </div>
              
              {/* Chart Representation */}
              <div className="relative w-full flex-1 flex items-end min-h-[220px]">
                  {/* Grid Lines Y-Axis */}
                  <div className="absolute inset-0 flex flex-col justify-between pt-2">
                      {[80, 60, 40, 20, 0].map(val => (
                        <div key={val} className="border-t border-border-soft/60 w-full flex items-start text-[10px] text-text-subtle font-medium">
                            <span className="-mt-2 pr-3 bg-card tracking-wider">{val}</span>
                        </div>
                      ))}
                  </div>
                  
                  {/* Chart Area */}
                  <div className="absolute inset-0 pl-8 pb-[18px]">
                      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {/* Fill gradient mock */}
                        <path d="M 0 60 Q 15 55, 30 65 T 60 20 T 90 70 L 100 70 L 100 100 L 0 100 Z" fill="rgba(0, 163, 255, 0.05)"/>
                        {/* Blue Line */}
                        <path d="M 0 60 Q 15 55, 30 65 T 60 20 T 90 70 L 100 70" fill="none" stroke="#3b82f6" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  
                  {/* X Axis labels */}
                  <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] font-medium text-text-subtle -mb-5 uppercase tracking-wider">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                  </div>
              </div>
          </div>
        </section>

      </div>
    </div>
  );
}
