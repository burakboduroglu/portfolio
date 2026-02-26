import React from 'react'
import { animate } from 'animejs'

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'ascii'
  content: string
  delay?: number
}

const commands: Record<string, TerminalLine[]> = {
  help: [
    { type: 'output', content: '📋 Available commands:' },
    { type: 'output', content: '' },
    { type: 'success', content: '  help     →  Show this help message' },
    { type: 'success', content: '  about    →  Learn about me' },
    { type: 'success', content: '  skills   →  View my technical skills' },
    { type: 'success', content: '  contact  →  Get contact information' },
    { type: 'success', content: '  clear    →  Clear terminal' },
    { type: 'output', content: '' },
    { type: 'output', content: '🎮 Fun commands:' },
    { type: 'success', content: '  secret   →  🎉 Easter egg!' },
    { type: 'success', content: '  matrix   →  💊 Enter the Matrix' },
    { type: 'success', content: '  joke     →  😂 Developer humor' },
    { type: 'success', content: '  coffee   →  ☕ Check coffee status' },
  ],
  secret: [
    { type: 'output', content: '' },
    { type: 'success', content: '🎮 SECRET UNLOCKED!' },
    { type: 'output', content: '─────────────────────────────────' },
    { type: 'output', content: '' },
    { type: 'output', content: '  🕹️  KONAMI CODE:' },
    { type: 'output', content: '' },
    { type: 'success', content: '  ↑ ↑ ↓ ↓ ← → ← → B A' },
    { type: 'output', content: '' },
    { type: 'output', content: '  Enter this code on your keyboard' },
    { type: 'output', content: '  to unlock the ULTIMATE secret! 🔓' },
    { type: 'output', content: '' },
    { type: 'output', content: '  Arrow keys + B + A keys' },
    { type: 'output', content: '  Good luck, gamer! 🎯' },
  ],
  matrix: [
    { type: 'output', content: '' },
    { type: 'success', content: '💊 Wake up, Neo...' },
    { type: 'output', content: '' },
    { type: 'output', content: '  01001000 01100101 01101100' },
    { type: 'output', content: '  01101100 01101111 00100001' },
    { type: 'output', content: '' },
    { type: 'success', content: '  The Matrix has you...' },
    { type: 'output', content: '  Follow the white rabbit. 🐰' },
  ],
  joke: [
    { type: 'output', content: '' },
    { type: 'success', content: '😂 Developer Joke:' },
    { type: 'output', content: '' },
    { type: 'output', content: '  Why do programmers prefer dark mode?' },
    { type: 'output', content: '' },
    { type: 'success', content: '  Because light attracts bugs! 🐛' },
  ],
  coffee: [
    { type: 'output', content: '' },
    { type: 'success', content: '☕ Coffee Status:' },
    { type: 'output', content: '' },
    { type: 'output', content: '  [████████████████████] 100%' },
    { type: 'output', content: '' },
    { type: 'success', content: '  CRITICAL: Coffee levels optimal!' },
    { type: 'output', content: '  Ready to code for 12 more hours.' },
  ],
  hello: [
    { type: 'output', content: '' },
    { type: 'success', content: '👋 Hello there!' },
    { type: 'output', content: '' },
    { type: 'output', content: '  Nice to meet you!' },
    { type: 'output', content: '  Welcome to my portfolio.' },
  ],
  sudo: [
    { type: 'output', content: '' },
    { type: 'error', content: '🚫 Permission denied!' },
    { type: 'output', content: '' },
    { type: 'output', content: '  Nice try, but you are not root here 😏' },
  ],
  about: [
    { type: 'output', content: '👨‍💻 About Me' },
    { type: 'output', content: '─────────────────────────────────' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Full-Stack Engineer & RPA Developer' },
    { type: 'output', content: 'Building scalable web applications' },
    { type: 'output', content: 'and enterprise automation solutions.' },
    { type: 'output', content: '' },
    { type: 'success', content: '🎯 Focus    →  Enterprise Solutions & AI' },
    { type: 'success', content: '📍 Location →  Turkey' },
  ],
  skills: [
    { type: 'output', content: '⚡ Technical Skills' },
    { type: 'output', content: '─────────────────────────────────' },
    { type: 'output', content: '' },
    { type: 'success', content: '██████████░░  90%  ☕ Java & Spring Boot' },
    { type: 'success', content: '█████████░░░  85%  ⚛️  React & TypeScript' },
    { type: 'success', content: '█████████░░░  85%  ▲  Next.js' },
    { type: 'success', content: '████████░░░░  80%  🐍 Python' },
    { type: 'success', content: '██████████░░  90%  🤖 UiPath & RPA' },
    { type: 'success', content: '███████░░░░░  75%  🐳 Docker & DevOps' },
  ],
  contact: [
    { type: 'output', content: '📬 Contact Information' },
    { type: 'output', content: '─────────────────────────────────' },
    { type: 'output', content: '' },
    { type: 'success', content: '📧 Email    →  info@burakboduroglu.com.tr' },
    { type: 'success', content: '💼 LinkedIn →  /in/burakboduroglu' },
    { type: 'success', content: '🐙 GitHub   →  /burakboduroglu' },
    { type: 'output', content: '' },
    { type: 'output', content: '✨ Feel free to reach out!' },
  ],
}

export function Terminal() {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { type: 'success', content: 'Welcome! Type "help" for commands.' },
  ])
  const [input, setInput] = React.useState('')
  const [isProcessing, setIsProcessing] = React.useState(false)
  const terminalRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Auto scroll to bottom when history changes
  React.useEffect(() => {
    if (terminalRef.current) {
      // Scroll to the very bottom
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setIsProcessing(true)

    // Add user input to history (zsh style)
    setHistory((prev) => [...prev, { type: 'input', content: `burak ❯ ${cmd}` }])

    await new Promise((resolve) => setTimeout(resolve, 100))

    if (trimmedCmd === 'clear') {
      setHistory([])
      setIsProcessing(false)
      return
    }

    if (trimmedCmd === '') {
      setIsProcessing(false)
      return
    }

    const response = commands[trimmedCmd]

    if (response) {
      // Add each line with a small delay for typing effect
      for (let i = 0; i < response.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 25))
        setHistory((prev) => [...prev, response[i]])
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'error', content: `zsh: command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" to see available commands.' },
      ])
    }

    // Add empty line after response
    setHistory((prev) => [...prev, { type: 'output', content: '' }])
    setIsProcessing(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isProcessing) {
      executeCommand(input)
      setInput('')
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const handleButtonClick = (cmd: string) => {
    if (!isProcessing) {
      const btn = document.querySelector(`[data-cmd="${cmd}"]`)
      if (btn) {
        animate(btn, {
          scale: [{ to: 0.95 }, { to: 1 }],
          duration: 200,
          ease: 'outQuad',
        })
      }
      executeCommand(cmd)
    }
  }

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input':
        return 'text-cyan-300 font-medium'
      case 'error':
        return 'text-red-400 font-medium'
      case 'success':
        return 'text-emerald-400'
      default:
        return 'text-gray-200'
    }
  }

  return (
    <section className='w-full'>
      {/* Section Title */}
      <h2 className='text-xs font-semibold text-dark-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-3'>
        <span className='w-12 h-[1px] bg-gradient-to-r from-transparent to-primary-500/50'></span>
        Interactive Terminal
        <span className='w-12 h-[1px] bg-gradient-to-l from-transparent to-primary-500/50'></span>
      </h2>

      {/* Terminal Window */}
      <div
        className='terminal-window-large mx-auto cursor-text'
        onClick={handleTerminalClick}
        role='application'
        aria-label='Interactive terminal'>
        {/* Terminal header - macOS style */}
        <div className='flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-dark-800/90 border-b border-dark-700/50 rounded-t-xl'>
          <div className='flex items-center gap-1.5 md:gap-2'>
            <div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500'></div>
            <div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500'></div>
            <div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500'></div>
          </div>
          <div className='text-dark-400 text-[10px] md:text-xs font-mono'>burak — zsh</div>
          <div className='w-10 md:w-16'></div>
        </div>

        {/* Terminal body - all content left-aligned */}
        <div
          ref={terminalRef}
          className='p-3 md:p-5 h-44 md:h-72 overflow-y-auto bg-[#0a0e14] font-mono text-[11px] md:text-[14px] leading-5 md:leading-6 rounded-b-xl text-left'>
          {/* History - each line left-aligned */}
          {history.map((line, index) => (
            <div key={index} className={`${getLineClass(line.type)} whitespace-pre text-left`}>
              {line.content || '\u00A0'}
            </div>
          ))}

          {/* Input prompt - zsh style */}
          <form onSubmit={handleSubmit} className='flex items-center mt-1 text-left'>
            <span className='text-cyan-300 font-semibold mr-1'>burak</span>
            <span className='text-pink-400 mr-1.5 font-bold'>❯</span>
            <input
              ref={inputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isProcessing}
              className='flex-1 bg-transparent border-none outline-none text-white font-mono text-[11px] md:text-[14px] text-left'
              autoComplete='off'
              spellCheck='false'
            />
            {!isProcessing && (
              <span className='w-2 h-4 md:w-2.5 md:h-5 bg-emerald-400 animate-pulse rounded-sm'></span>
            )}
          </form>
        </div>
      </div>

      {/* Quick command buttons */}
      <div className='flex flex-wrap justify-center gap-1.5 md:gap-2 mt-3 md:mt-4'>
        {['help', 'about', 'skills', 'contact'].map((cmd) => (
          <button
            key={cmd}
            data-cmd={cmd}
            onClick={() => handleButtonClick(cmd)}
            disabled={isProcessing}
            className='px-2.5 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-mono font-medium text-dark-400 bg-dark-800/60 border border-dark-700/50 rounded-md md:rounded-lg hover:bg-dark-700/60 hover:text-dark-200 hover:border-primary-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
            {cmd}
          </button>
        ))}
      </div>
      {/* Fun command buttons */}
      <div className='flex flex-wrap justify-center gap-1.5 md:gap-2 mt-2'>
        {['secret', 'matrix', 'joke', 'coffee'].map((cmd) => (
          <button
            key={cmd}
            data-cmd={cmd}
            onClick={() => handleButtonClick(cmd)}
            disabled={isProcessing}
            className='px-2.5 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-mono font-medium text-wise-green/70 bg-wise-green/10 border border-wise-green/20 rounded-md md:rounded-lg hover:bg-wise-green/20 hover:text-wise-green hover:border-wise-green/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
            {cmd}
          </button>
        ))}
      </div>
    </section>
  )
}
