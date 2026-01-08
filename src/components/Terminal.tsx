import React from 'react'
import { animate, stagger } from 'animejs'

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'ascii'
  content: string
  delay?: number
}

const ASCII_ART = `> burak_boduroglu`

const commands: Record<string, TerminalLine[]> = {
  help: [
    { type: 'output', content: '📋 Available commands:' },
    { type: 'output', content: '' },
    { type: 'success', content: '  help      - Show this help message' },
    { type: 'success', content: '  about     - Learn about me' },
    { type: 'success', content: '  skills    - View my technical skills' },
    { type: 'success', content: '  exp       - Show work experience' },
    { type: 'success', content: '  contact   - Get contact information' },
    { type: 'success', content: '  projects  - View featured projects' },
    { type: 'success', content: '  clear     - Clear terminal' },
    { type: 'success', content: '  ascii     - Show ASCII art' },
  ],
  about: [
    { type: 'output', content: '👨‍💻 About Me' },
    { type: 'output', content: '─'.repeat(40) },
    { type: 'output', content: '' },
    { type: 'output', content: 'Full-Stack Engineer & RPA Developer with' },
    { type: 'output', content: 'passion for building scalable applications' },
    { type: 'output', content: 'and enterprise automation solutions.' },
    { type: 'output', content: '' },
    { type: 'success', content: '🎯 Focus: Enterprise Solutions & AI' },
    { type: 'success', content: '📍 Location: Turkey' },
    { type: 'success', content: '☕ Fuel: Coffee & Curiosity' },
  ],
  skills: [
    { type: 'output', content: '🛠️ Technical Skills' },
    { type: 'output', content: '─'.repeat(40) },
    { type: 'output', content: '' },
    { type: 'success', content: '█████████░ 90% - Java & Spring Boot' },
    { type: 'success', content: '████████░░ 85% - TypeScript & React' },
    { type: 'success', content: '████████░░ 85% - Next.js' },
    { type: 'success', content: '███████░░░ 80% - Python' },
    { type: 'success', content: '█████████░ 90% - UiPath & RPA' },
    { type: 'success', content: '███████░░░ 75% - Docker & DevOps' },
    { type: 'success', content: '████████░░ 85% - REST APIs' },
  ],
  exp: [
    { type: 'output', content: '💼 Work Experience' },
    { type: 'output', content: '─'.repeat(40) },
    { type: 'output', content: '' },
    { type: 'success', content: '🏢 RPA Developer @ Enterprise Company' },
    { type: 'output', content: '   Developing intelligent automation solutions' },
    { type: 'output', content: '   using UiPath Agentic AI & Power Platform' },
    { type: 'output', content: '' },
    { type: 'success', content: '💻 Full-Stack Engineer @ Various Projects' },
    { type: 'output', content: '   Building web applications with modern stack' },
  ],
  contact: [
    { type: 'output', content: '📬 Contact Information' },
    { type: 'output', content: '─'.repeat(40) },
    { type: 'output', content: '' },
    { type: 'success', content: '📧 Email: info@burakboduroglu.com.tr' },
    { type: 'success', content: '💼 LinkedIn: /in/burakboduroglu' },
    { type: 'success', content: '🐙 GitHub: /burakboduroglu' },
    { type: 'output', content: '' },
    { type: 'output', content: "Feel free to reach out! I'm always open" },
    { type: 'output', content: 'to discussing new opportunities.' },
  ],
  projects: [
    { type: 'output', content: '🚀 Featured Projects' },
    { type: 'output', content: '─'.repeat(40) },
    { type: 'output', content: '' },
    { type: 'success', content: '📦 Enterprise RPA Solutions' },
    { type: 'output', content: '   Process automation with 90%+ efficiency' },
    { type: 'output', content: '' },
    { type: 'success', content: '🌐 Full-Stack Web Applications' },
    { type: 'output', content: '   Modern React/Next.js with Spring Boot' },
    { type: 'output', content: '' },
    { type: 'success', content: '🤖 AI-Powered Automation' },
    { type: 'output', content: '   Integrating GenAI with business processes' },
  ],
  ascii: [
    { type: 'ascii', content: ASCII_ART },
    { type: 'output', content: '' },
    { type: 'success', content: 'Full-Stack Engineer & RPA Developer' },
  ],
}

export function Terminal() {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { type: 'success', content: 'Welcome! 🚀 Type "help" for commands.' },
  ])
  const [input, setInput] = React.useState('')
  const [isProcessing, setIsProcessing] = React.useState(false)
  const terminalRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 200,
        ease: 'outExpo',
      })
    }
  }, [])

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setIsProcessing(true)

    // Add user input to history
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
      // Add each line with a small delay for effect
      for (let i = 0; i < response.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 30))
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

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input':
        return 'text-accent-cyan'
      case 'error':
        return 'text-red-400'
      case 'success':
        return 'text-green-400'
      case 'ascii':
        return 'text-primary-400 whitespace-pre text-[10px] md:text-xs leading-tight'
      default:
        return 'text-dark-300'
    }
  }

  return (
    <section ref={containerRef} className='w-full mx-auto opacity-0'>
      <h2 className='text-xs font-semibold text-dark-400 uppercase tracking-widest mb-3 text-center flex items-center justify-center gap-2'>
        <span className='w-6 h-[1px] bg-gradient-to-r from-transparent to-primary-500'></span>
        Terminal
        <span className='w-6 h-[1px] bg-gradient-to-l from-transparent to-primary-500'></span>
      </h2>

      <div
        className='terminal-window cursor-text'
        onClick={handleTerminalClick}
        role='application'
        aria-label='Interactive terminal'>
        {/* Terminal header */}
        <div className='terminal-header py-2'>
          <div className='flex items-center gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-red-500'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-yellow-500'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-green-500'></div>
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 text-dark-500 text-[10px] font-mono'>
            zsh
          </div>
        </div>

        {/* Terminal body */}
        <div ref={terminalRef} className='terminal-body'>
          {history.map((line, index) => (
            <div key={index} className={`font-mono text-xs ${getLineClass(line.type)}`}>
              {line.content}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className='flex items-center gap-1.5 mt-1'>
            <span className='text-accent-cyan font-mono text-xs'>$</span>
            <input
              ref={inputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isProcessing}
              className='terminal-input text-xs'
              placeholder={isProcessing ? '...' : 'command'}
              autoComplete='off'
              spellCheck='false'
            />
          </form>
        </div>
      </div>

      {/* Quick command buttons */}
      <div className='flex flex-wrap justify-center gap-1.5 mt-3'>
        {['help', 'about', 'skills', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              if (!isProcessing) {
                executeCommand(cmd)
              }
            }}
            className='terminal-btn text-[10px] px-2.5 py-1'>
            {cmd}
          </button>
        ))}
      </div>
    </section>
  )
}
