export function Spinner() {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 border-4 border-violet-600/30 border-t-violet-600 rounded-full animate-spin" />
        <p className="text-sm text-violet-100">Loading...</p>
      </div>
    </div>
  )
} 