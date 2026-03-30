export const ScrollIndicator = () => {

  const handleClick = () => {
    const next = document.querySelector('section:nth-of-type(2)') as HTMLElement
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      aria-label="Hacer scroll hacia abajo"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <span style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        color: 'rgba(0, 255, 136, 0.35)',
        letterSpacing: '4px',
        lineHeight: 1,
      }}>
        {'{ }'}
      </span>

      <span style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        color: 'var(--color-accent, #00ff88)',
        letterSpacing: '1px',
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '1px',
      }}>
        scroll.init()
        <span style={{
          display: 'inline-block',
          width: '7px',
          height: '12px',
          background: 'var(--color-accent, #00ff88)',
          borderRadius: '1px',
          marginLeft: '1px',
          animation: 'cursorBlink 1.1s step-end infinite',
        }} />
      </span>

      <div style={{ display: 'flex', gap: '5px', marginTop: '2px' }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: 'var(--color-accent, #00ff88)',
              opacity: 1 - i * 0.28,
              animation: 'arrowDrop 1.6s ease-in-out infinite',
              animationDelay: `${i * 0.15}s`,
              display: 'inline-block',
              lineHeight: 1,
            }}
          >
            ↓
          </span>
        ))}
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes arrowDrop {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  )
}

export default ScrollIndicator
