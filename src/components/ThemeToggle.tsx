import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      className="theme-toggle"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '50%',
        width: 38,
        height: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--color-accent)',
        transition: 'all 0.2s ease',
        flexShrink: 0,
      }}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="rotate-transition" />
      ) : (
        <Moon size={18} className="rotate-transition" />
      )}
    </button>
  )
}
