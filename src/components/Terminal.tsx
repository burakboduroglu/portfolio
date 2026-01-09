import React from 'react'
import { animate } from 'animejs'

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'ascii'
  content: string
  delay?: number
}

const commands: Record<string, TerminalLine[]> = {
  help: [
    { type: 'output', content: 'Available commands:' },
    { type: 'output', content: '' },
    { type: 'success', content: '  help      Show this help message' },
    { type: 'success', content: '  about     Learn about me' },
    { type: 'success', content: '  skills    View my technical skills' },
    { type: 'success', content: '  contact   Get contact information' },
    { type: 'success', content: '  clear     Clear terminal' },
  ],
  about: [
    { type: 'output', content: 'About Me' },
    { type: 'output', content: '════════════════════════════════════════' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Full-Stack Engineer & RPA Developer with' },
    { type: 'output', content: 'passion for building scalable applications' },
    { type: 'output', content: 'and enterprise automation solutions.' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Focus    : Enterprise Solutions & AI' },
    { type: 'success', content: 'Location : Turkey' },
  ],
  skills: [
    { type: 'output', content: 'Technical Skills' },
    { type: 'output', content: '════════════════════════════════════════' },
    { type: 'output', content: '' },
    { type: 'success', content: '████████████████████░░  90%  Java & Spring Boot' },
    { type: 'success', content: '█████████████████░░░░░  85%  TypeScript & React' },
    { type: 'success', content: '█████████████████░░░░░  85%  Next.js' },
    { type: 'success', content: '████████████████░░░░░░  80%  Python' },
    { type: 'success', content: '████████████████████░░  90%  UiPath & RPA' },
    { type: 'success', content: '███████████████░░░░░░░  75%  Docker & DevOps' },
  ],
  contact: [
    { type: 'output', content: 'Contact Information' },
    { type: 'output', content: '════════════════════════════════════════' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Email    : info@burakboduroglu.com.tr' },
    { type: 'success', content: 'LinkedIn : /in/burakboduroglu' },
    { type: 'success', content: 'GitHub   : /burakboduroglu' },
    { type: 'output', content: '' },
    { type: 'output', content: "Feel free to reach out!" },
  ],
}

export function Terminal() {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { type: 'success', content: 'Welcome! Type "help" for available commands.' },
    { type: 'output', content: '' },
  ])
  const [input, setInput] = React.useState('')
  const [isProcessing, setIsProcessing] = React.useState(false)
  const terminalRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setIsProcessing(true)

    setHistory((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }])

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
      for (let i = 0; i < response.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 25))
        setHistory((prev) => [...prev, response[i]])
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'error', content: `Command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" to see available commands.' },
      ])
    }

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
      // Animate button
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
        return 'text-accent-cyan'
      case 'error':
        return 'text-red-400'
      case 'success':
        return 'text-green-400'
      default:
        return 'text-dark-300'
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
        {/* Terminal header */}
        <div className='flex items-center justify-between px-4 py-3 bg-dark-800/80 border-b border-dark-700/50 rounded-t-xl'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors'></div>
            <div className='w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors'></div>
          </div>
          <div className='text-dark-500 text-xs font-mono tracking-wide'>
            burak@portfolio ~ zsh
          </div>
          <div className='w-16'></div>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className='p-4 h-64 overflow-y-auto bg-dark-900/90 font-mono text-sm leading-relaxed'>
          {history.map((line, index) => (
            <div key={index} className={`${getLineClass(line.type)} whitespace-pre-wrap`}>
              {line.content}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className='flex items-center gap-2 mt-1'>
            <span className='text-accent-cyan'>$</span>
            <input
              ref={inputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isProcessing}
              className='flex-1 bg-transparent border-none outline-none text-dark-100 placeholder-dark-600 font-mono'
              placeholder={isProcessing ? 'processing...' : 'type a command...'}
              autoComplete='off'
              spellCheck='false'
            />
            <span className='w-2 h-4 bg-accent-cyan animate-pulse'></span>
          </form>
        </div>
      </div>

      {/* Quick command buttons - Symmetric */}
      <div className='flex justify-center gap-2 mt-4'>
        {['help', 'about', 'skills', 'contact'].map((cmd) => (
          <button
            key={cmd}
            data-cmd={cmd}
            onClick={() => handleButtonClick(cmd)}
            disabled={isProcessing}
            className='px-4 py-2 text-xs font-mono font-medium text-dark-400 bg-dark-800/60 border border-dark-700/50 rounded-lg hover:bg-dark-700/60 hover:text-dark-200 hover:border-primary-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
            {cmd}
          </button>
        ))}
      </div>
    </section>
  )
}
