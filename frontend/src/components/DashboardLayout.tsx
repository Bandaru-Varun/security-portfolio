export default function DashboardLayout({ children }: any) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">

      {/* Top security bar */}
      <div className="border-b border-slate-800 bg-black/40 backdrop-blur px-6 py-3 flex justify-between items-center">

        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400">
            SECURITY SYSTEM ONLINE
          </span>
        </div>

        <div className="text-xs text-slate-500">
          Zero Trust Access Environment
        </div>

      </div>

      {/* Dashboard grid */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">

        {children}

      </div>

    </div>
  )
}
