interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
  size?: 'default' | 'large'
}

export function AnimatedButton({ 
  children, 
  onClick, 
  type = 'submit',
  size = 'default' 
}: AnimatedButtonProps) {
  return (
    <div className="relative w-full">
      {/* Animated rainbow border container */}
      <div 
        className="absolute -inset-1 rounded-lg opacity-75"
        style={{
          backgroundImage: 'url(/images/rainbow-colourful.gif)',
          backgroundSize: 'cover',
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-lg" />
      </div>

      {/* Button content */}
      <button
        onClick={onClick}
        type={type}
        className={`relative w-full rounded-lg bg-[#1a1a1a] text-white
                 transform transition-all duration-300
                 hover:scale-[1.02] hover:bg-black
                 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                 active:scale-[0.98]
                 ${size === 'large' ? 'px-8 py-3 text-xl font-semibold' : 'px-4 py-1.5 text-sm'}`}
      >
        {children}
      </button>
    </div>
  )
} 