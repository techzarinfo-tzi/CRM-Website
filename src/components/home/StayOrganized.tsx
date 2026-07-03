"use client";

import Image from "next/image";
import { useState } from "react";

interface KanbanCard {
  id: string;
  name: string;
  company: string;
  assignedTo: string;
  created: string;
  value: string;
  textColor: string;
  tagBg: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  count: number;
  headerBg: string;
  headerTextColor: string;
  cards: KanbanCard[];
}

interface LeadRow {
  id: string;
  name: string;
  contact: string;
  company: string;
  clientType: string;
  country: string;
  status: 'Hot' | 'Warm' | 'Cold' | 'Junk';
  assignee: string;
}

interface ReminderItem {
  id: string;
  name: string;
  date: string;
  time: string;
  timeAgo: string;
  expiresIn: string;
  isRead: boolean;
  isCompleted: boolean;
}

export default function StayOrganized() {
  // --- Kanban State ---
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: "qualification",
      title: "Qualification",
      count: 33,
      headerBg: "bg-[#EAEFFF]",
      headerTextColor: "text-[#0052FF]",
      cards: [
        {
          id: "john",
          name: "John Davis",
          company: "ABC Solutions",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "3,45,656 INR",
          textColor: "#0052FF",
          tagBg: "#EAEFFF"
        },
        {
          id: "david",
          name: "David Miller",
          company: "Modern Tech",
          assignedTo: "Sharan",
          created: "21 Jul 2026",
          value: "14,240 USD",
          textColor: "#0052FF",
          tagBg: "#EAEFFF"
        }
      ]
    },
    {
      id: "proposal",
      title: "Proposal Sent-Negotiation",
      count: 2,
      headerBg: "bg-[#FFF0E6]",
      headerTextColor: "text-[#FF6B00]",
      cards: [
        {
          id: "felson",
          name: "Fiona Nelson",
          company: "ComCans",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "3,45,656 INR",
          textColor: "#FF6B00",
          tagBg: "#FFF0E6"
        },
        {
          id: "kenny",
          name: "Kenneth Chen",
          company: "Teddy Stores",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "3,45,656 INR",
          textColor: "#FF6B00",
          tagBg: "#FFF0E6"
        }
      ]
    },
    {
      id: "invoice",
      title: "Invoice Sent",
      count: 2,
      headerBg: "bg-[#E1FAFC]",
      headerTextColor: "text-[#00A3C4]",
      cards: [
        {
          id: "leo",
          name: "Leonard Vance",
          company: "Snow Solutions",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "11,20,353 INR",
          textColor: "#00A3C4",
          tagBg: "#E1FAFC"
        },
        {
          id: "andres",
          name: "Andrew Cooper",
          company: "99 Store",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "83,788 INR",
          textColor: "#00A3C4",
          tagBg: "#E1FAFC"
        }
      ]
    },
    {
      id: "closed",
      title: "Closed Won",
      count: 2,
      headerBg: "bg-[#E2FBE9]",
      headerTextColor: "text-[#00A854]",
      cards: [
        {
          id: "luffy",
          name: "Lucas Foster",
          company: "Moon Tech",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "30,15,999 INR",
          textColor: "#00A854",
          tagBg: "#E2FBE9"
        },
        {
          id: "eren",
          name: "Ethan Reynolds",
          company: "Titan Technologies",
          assignedTo: "Kishore",
          created: "22 Jul 2026",
          value: "13,20,455 INR",
          textColor: "#00A854",
          tagBg: "#E2FBE9"
        }
      ]
    }
  ]);

  const [draggedCardId, setDraggedCardId] = useState<string | null>(null);
  const [draggedSourceColId, setDraggedSourceColId] = useState<string | null>(null);
  const [activeOverColId, setActiveOverColId] = useState<string | null>(null);

  const handleDragStart = (cardId: string, sourceColId: string) => {
    setDraggedCardId(cardId);
    setDraggedSourceColId(sourceColId);
  };

  const handleDragOver = (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    setActiveOverColId(colId);
  };

  const handleDragLeave = () => {
    setActiveOverColId(null);
  };

  const handleDrop = (colId: string) => {
    setActiveOverColId(null);
    if (!draggedCardId || !draggedSourceColId || draggedSourceColId === colId) return;

    let cardToMove: KanbanCard | undefined;
    const newColumns = columns.map((col) => {
      if (col.id === draggedSourceColId) {
        cardToMove = col.cards.find((c) => c.id === draggedCardId);
        return {
          ...col,
          cards: col.cards.filter((c) => c.id !== draggedCardId),
          count: col.count - 1
        };
      }
      return col;
    });

    if (cardToMove) {
      const updatedCard = { ...cardToMove };
      if (colId === "qualification") {
        updatedCard.textColor = "#0052FF";
        updatedCard.tagBg = "#EAEFFF";
      } else if (colId === "proposal") {
        updatedCard.textColor = "#FF6B00";
        updatedCard.tagBg = "#FFF0E6";
      } else if (colId === "invoice") {
        updatedCard.textColor = "#00A3C4";
        updatedCard.tagBg = "#E1FAFC";
      } else if (colId === "closed") {
        updatedCard.textColor = "#00A854";
        updatedCard.tagBg = "#E2FBE9";
      }

      setColumns(
        newColumns.map((col) => {
          if (col.id === colId) {
            return {
              ...col,
              cards: [...col.cards, updatedCard],
              count: col.count + 1
            };
          }
          return col;
        })
      );
    }

    setDraggedCardId(null);
    setDraggedSourceColId(null);
  };

  // --- Interactive Leads State ---
  const [leads, setLeads] = useState<LeadRow[]>([
    { id: "1", name: "Sarah Jenkins", contact: "9100054020", company: "Venus", clientType: "Enterprise", country: "Australia", status: "Hot", assignee: "Subaspresan I" },
    { id: "2", name: "Oliver Vance", contact: "9885444555", company: "SADF", clientType: "SMB", country: "Antarctica", status: "Warm", assignee: "Kishore" },
    { id: "3", name: "Ahmed Ali", contact: "9158401200", company: "Rays Ltd", clientType: "SMB", country: "India", status: "Cold", assignee: "Sharan" },
    { id: "4", name: "Ahmed Verma", contact: "8882777272", company: "Klug.co", clientType: "Enterprise", country: "India", status: "Junk", assignee: "Kishore" },
    { id: "5", name: "Mohanad Al-Subai", contact: "7558745501", company: "SCA", clientType: "SMB", country: "India", status: "Hot", assignee: "Sharan" }
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("All");

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lead.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAssignee = assigneeFilter === "All" || lead.assignee.toLowerCase().includes(assigneeFilter.toLowerCase());
    return matchesSearch && matchesAssignee;
  });

  // --- Interactive Reminders State ---
  const [reminders, setReminders] = useState<ReminderItem[]>([
    {
      id: "rem-1",
      name: "Ahmed Hassan",
      date: "4/8/2026",
      time: "4:48:00 PM",
      timeAgo: "about 6 hours ago",
      expiresIn: "17 hours",
      isRead: false,
      isCompleted: false
    },
    {
      id: "rem-2",
      name: "Muthees Wari",
      date: "4/10/2026",
      time: "6:30:00 AM",
      timeAgo: "about 8 hours ago",
      expiresIn: "1 day",
      isRead: false,
      isCompleted: false
    },
    {
      id: "rem-3",
      name: "Sarah Johnson",
      date: "4/12/2026",
      time: "8:30:00 PM",
      timeAgo: "about 12 hours ago",
      expiresIn: "3 days",
      isRead: true,
      isCompleted: false
    }
  ]);

  const toggleRead = (id: string) => {
    setReminders(reminders.map(rem => rem.id === id ? { ...rem, isRead: !rem.isRead } : rem));
  };

  const toggleCompleted = (id: string) => {
    setReminders(reminders.map(rem => rem.id === id ? { ...rem, isCompleted: !rem.isCompleted } : rem));
  };

  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Heading ── */}
        <div className="flex flex-col gap-[16px] w-full lg:w-[675px] lg:h-[228px] justify-between">
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-gray-900 tracking-tight"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
              lineHeight: '58px',
              letterSpacing: '-1.8px'
            }}
          >
            What Your Sales Team Needs to{" "}
            <span className="text-blue-500">Stay Organized</span>
          </h2>
          <p 
            className="text-base sm:text-[18px] lg:text-[22px]"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '-0.8px',
              color: '#555E67'
            }}
          >
            Managing leads across spreadsheets, emails, messaging apps, and multiple tools can slow down your sales process and also create unnecessary confusion among the team.
          </p>
        </div>

        {/* ── Full-width pipeline card with Interactive Kanban ── */}
        <div 
          className="mt-10 sm:mt-12 rounded-[24px] border border-gray-100 bg-[#F7F8FA] flex flex-col lg:flex-row lg:h-[504px] items-stretch overflow-hidden shadow-sm animate-fade-in p-5 sm:p-8 lg:pt-[40px] lg:pb-[40px] lg:pl-[40px] lg:pr-[40px]"
          style={{
            width: '100%',
            maxWidth: '1223px',
            gap: '23px'
          }}
        >
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col justify-between py-2">
            <div>
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px'
                }}
              >
                Complete Sales Pipeline Visibility
              </h3>
              <p 
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px',
                  color: '#555E67'
                }}
              >
                Monitor every stage of the customer journey - from lead capture to deal closure with real-time insights and performance tracking.
              </p>
            </div>
            <div className="mt-6 hidden lg:block p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-[11px] leading-relaxed">
              <span className="font-semibold">💡 Drag &amp; Drop:</span> Try dragging lead cards between columns to change their stages instantly!
            </div>
          </div>

          {/* Interactive Kanban Board container */}
          <div className="flex-1 w-full overflow-x-auto lg:overflow-hidden flex flex-col pb-3 scrollbar-thin">
            <div className="flex gap-3 h-full items-start justify-between min-w-[820px] lg:min-w-0 lg:w-full">
              {columns.map((column) => (
                <div
                  key={column.id}
                  onDragOver={(e) => handleDragOver(e, column.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={() => handleDrop(column.id)}
                  className={`flex flex-col gap-3 rounded-xl p-2 transition-all duration-300 ${
                    activeOverColId === column.id 
                      ? "bg-blue-50/70 ring-2 ring-blue-300 ring-dashed" 
                      : "bg-[#F3F4F6]/50"
                  }`}
                  style={{
                    width: '195px',
                    minWidth: '195px'
                  }}
                >
                  {/* Column Header */}
                  <div className={`flex items-center justify-between px-3 py-1.5 rounded-full ${column.headerBg}`}>
                    <span 
                      className={`text-[11px] font-bold tracking-tight ${column.headerTextColor}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {column.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-white text-[9px] font-extrabold text-gray-500 shadow-sm">
                      {column.count}
                    </span>
                  </div>

                  {/* Column Body Cards */}
                  <div className="flex flex-col gap-2.5">
                    {column.cards.map((card) => (
                      <div
                        key={card.id}
                        draggable
                        onDragStart={() => handleDragStart(card.id, column.id)}
                        className="bg-white border border-gray-200/80 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-grab active:cursor-grabbing flex flex-col gap-2.5 group"
                      >
                        {/* Name & More */}
                        <div className="flex items-center justify-between">
                          <span 
                            className="font-bold text-sm transition-colors duration-200"
                            style={{ 
                              color: card.textColor,
                              fontFamily: 'Inter, sans-serif'
                            }}
                          >
                            {card.name}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          </button>
                        </div>

                        {/* Company Pill */}
                        <div>
                          <span 
                            className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded"
                            style={{ 
                              background: card.tagBg, 
                              color: card.textColor,
                              fontFamily: 'Inter, sans-serif' 
                            }}
                          >
                            {card.company}
                          </span>
                        </div>

                        {/* Assigned To */}
                        <div className="flex items-center gap-1.5 border-t border-dashed border-gray-100 pt-2 text-[10px]">
                          <div className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-[9px] font-bold text-indigo-600">
                            {card.assignedTo[0]}
                          </div>
                          <span className="text-[10px] text-gray-500 font-medium">
                            Assigned To <strong className="text-gray-700">{card.assignedTo}</strong>
                          </span>
                        </div>

                        {/* Created & Value */}
                        <div className="rounded-lg bg-[#FCFDF9] border border-[#ECEFE6] p-1.5 flex justify-between items-center gap-1.5">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full bg-amber-100 flex items-center justify-center text-[8px] text-amber-700 font-bold">
                              👤
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold leading-none mb-1">Created</span>
                              <span className="text-[9px] text-gray-700 font-bold leading-none">{card.created}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold leading-none mb-1">Value</span>
                            <span className="text-[9px] text-gray-800 font-extrabold leading-none">{card.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {column.cards.length === 0 && (
                      <div className="border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-[10px] text-gray-400 py-6">
                        Drop here
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Two cards: Lead Management + Follow-Ups ── */}
        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row gap-6 justify-between items-center w-full max-w-[1252px] mx-auto">
          
          {/* Card 1: Centralized Lead Management (Interactive Leads Table Widget) */}
          <div 
            className="rounded-[20px] bg-[#F4F5F6] border border-[#EDEEF0] flex flex-col justify-between overflow-hidden w-full lg:w-[614px] lg:h-[554px]"
          >
            {/* Text content block */}
            <div className="p-6 sm:p-10 flex flex-col gap-[10px] lg:h-[159px]">
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px'
                }}
              >
                Centralized Lead Management
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#555E67'
                }}
              >
                Capture, assign, and track every lead from one dashboard. No more lost contacts or scattered customer information.
              </p>
            </div>
            
            {/* Interactive Leads Table Widget */}
            <div className="mx-4 mb-8 bg-white border border-[#EBEFF5] rounded-xl shadow-sm p-4 flex flex-col gap-3 h-[320px]">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                  <span className="text-blue-500">📁</span> Leads Management
                </span>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
                  <input
                    type="text"
                    placeholder="Search by name/company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2.5 py-1 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 w-[140px]"
                  />
                  <select
                    value={assigneeFilter}
                    onChange={(e) => setAssigneeFilter(e.target.value)}
                    className="px-2 py-1 text-xs border border-gray-200 rounded-md bg-white text-gray-600 focus:outline-none"
                  >
                    <option value="All">All Assignees</option>
                    <option value="Kishore">Kishore</option>
                    <option value="Sharan">Sharan</option>
                    <option value="Jeevika">Jeevika</option>
                  
                  </select>
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors cursor-default"
                  >
                    + Create Lead
                  </button>
                </div>
              </div>

              {/* Table wrapper */}
              <div className="flex-1 overflow-auto scrollbar-thin">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      <th className="py-2 pl-2">Lead</th>
                      <th className="py-2">Company</th>
                      <th className="py-2">Country</th>
                      <th className="py-2">Status</th>
                      <th className="py-2 pr-2">Assignee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr 
                        key={lead.id} 
                        className="border-b border-gray-50 text-[11px] hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="py-2.5 pl-2 font-bold text-gray-800 flex flex-col">
                          <span>{lead.name}</span>
                          <span className="text-[9px] text-gray-400 font-normal">{lead.contact}</span>
                        </td>
                        <td className="py-2.5 text-gray-600 font-semibold">{lead.company}</td>
                        <td className="py-2.5 text-gray-500">{lead.country}</td>
                        <td className="py-2.5">
                          <select
                            value={lead.status}
                            onChange={(e) => {
                              const newStatus = e.target.value as 'Hot' | 'Warm' | 'Cold' | 'Junk';
                              setLeads(leads.map(l => l.id === lead.id ? { ...l, status: newStatus } : l));
                            }}
                            className={`px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                              lead.status === 'Hot' 
                                ? 'bg-red-50 text-red-600 border border-red-100' 
                                : lead.status === 'Warm' 
                                ? 'bg-amber-50 text-amber-600 border border-amber-100'
                                : lead.status === 'Cold'
                                ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                : 'bg-gray-100 text-gray-500 border border-gray-200'
                            }`}
                          >
                            <option value="Hot">Hot</option>
                            <option value="Warm">Warm</option>
                            <option value="Cold">Cold</option>
                            <option value="Junk">Junk</option>
                          </select>
                        </td>
                        <td className="py-2.5 pr-2 font-medium text-gray-500">{lead.assignee}</td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-xs text-gray-400">
                          No matching leads found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 2: Follow-Ups & Reminders (Interactive Reminders Widget) */}
          <div 
            className="rounded-[20px] bg-[#F4F5F6] border border-[#EDEEF0] flex flex-col justify-between overflow-hidden w-full lg:w-[614px] lg:h-[554px]"
          >
            {/* Text content block */}
            <div className="p-6 sm:p-10 flex flex-col gap-[10px] lg:h-[185px]">
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '140%',
                  letterSpacing: '-0.2px'
                }}
              >
                Follow-Ups &amp; Reminders
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#555E67'
                }}
              >
                Advanced lead tracking software will never miss an opportunity with automated emails, task reminders and follow-up notifications that keep deals moving forward.
              </p>
            </div>
            
            {/* Interactive Reminders Widget */}
            <div className="mx-4 mb-8 bg-white border border-[#EBEFF5] rounded-xl shadow-sm p-4 flex flex-col gap-3 h-[320px]">
              <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                <span className="text-orange-500">🔔</span> Upcoming Follow-ups 
                <span className="ml-1 bg-orange-100 text-orange-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                  {reminders.filter(r => !r.isCompleted).length} Due
                </span>
              </span>

              {/* Feed items */}
              <div className="flex-1 overflow-auto pr-1 scrollbar-thin">
                <div className="flex flex-col gap-2.5 min-w-[450px]">
                  {reminders.map((rem) => (
                    <div 
                      key={rem.id}
                      className={`border border-[#EDEEF0] rounded-xl p-3 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                        rem.isCompleted 
                          ? 'bg-gray-50/50 opacity-60' 
                          : rem.isRead 
                          ? 'bg-[#FCFDFD]' 
                          : 'bg-blue-50/20 border-blue-100'
                      }`}
                    >
                      {/* Checkbox trigger to mark as complete */}
                      <input
                        type="checkbox"
                        checked={rem.isCompleted}
                        onChange={() => toggleCompleted(rem.id)}
                        className="mt-1 h-3.5 w-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer"
                      />

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between">
                          <span className={`text-[12px] font-bold text-gray-800 ${rem.isCompleted ? 'line-through text-gray-400' : ''}`}>
                            Deal Follow-up due: <strong className="text-gray-950">{rem.name}</strong>
                          </span>
                          {!rem.isCompleted && !rem.isRead && (
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          Follow-up date: {rem.date}, {rem.time}
                        </span>
                        
                        {/* Action Triggers */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-dashed border-gray-100 text-[10px]">
                          <button
                            onClick={() => toggleRead(rem.id)}
                            className="text-blue-500 hover:text-blue-700 font-bold transition-colors"
                          >
                            {rem.isRead ? "Mark as unread" : "Mark as read"}
                          </button>
                          <span className="text-amber-600 font-semibold">
                            ⏳ Expires in {rem.expiresIn}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
