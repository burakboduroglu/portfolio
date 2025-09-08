interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
  subtitle: string
}

export function Profile({ imageUrl, name, bio, subtitle }: ProfileProps) {
  return (
    <section
      className='flex flex-col items-center text-center gap-4 mb-10'
      aria-label='Profile Section'>
      <img
        src={imageUrl}
        alt={`Profile picture of ${name}`}
        className='w-20 h-20 rounded-full object-cover'
        loading='lazy'
        width='80'
        height='80'
      />
      <div>
        <h1 className='text-2xl font-semibold'>{name}</h1>
        <p className='text-gray-300 text-sm mt-1'>{bio}</p>
        <p className='text-gray-500 text-xs mt-1'>{subtitle}</p>
      </div>

      <div className='mt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full max-w-2xl'>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🤖</span>
          <span className='text-[10px] text-gray-300 text-center'>UiPath Agentic AI</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🧩</span>
          <span className='text-[10px] text-gray-300 text-center'>Copilot Studio</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🧱</span>
          <span className='text-[10px] text-gray-300 text-center'>Power Platform</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>☁️</span>
          <span className='text-[10px] text-gray-300 text-center'>Azure OpenAI</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🧰</span>
          <span className='text-[10px] text-gray-300 text-center'>REFramework</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🔗</span>
          <span className='text-[10px] text-gray-300 text-center'>API Integration</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🧭</span>
          <span className='text-[10px] text-gray-300 text-center'>Agile & Scrum</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>📋</span>
          <span className='text-[10px] text-gray-300 text-center'>JIRA</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>✨</span>
          <span className='text-[10px] text-gray-300 text-center'>Generative AI</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🐍</span>
          <span className='text-[10px] text-gray-300 text-center'>Python</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🐳</span>
          <span className='text-[10px] text-gray-300 text-center'>Docker</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>💎</span>
          <span className='text-[10px] text-gray-300 text-center'>C#</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>⚛️</span>
          <span className='text-[10px] text-gray-300 text-center'>React</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🐱</span>
          <span className='text-[10px] text-gray-300 text-center'>GitHub</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>⚡</span>
          <span className='text-[10px] text-gray-300 text-center'>JS</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🚀</span>
          <span className='text-[10px] text-gray-300 text-center'>Next.js</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>☕</span>
          <span className='text-[10px] text-gray-300 text-center'>Java</span>
        </div>
        <div className='flex flex-col items-center p-2 bg-white/5 rounded-lg border border-white/10'>
          <span className='text-xl mb-1'>🍃</span>
          <span className='text-[10px] text-gray-300 text-center'>Spring Boot</span>
        </div>
      </div>

      <div className='mt-4 w-full max-w-2xl text-left md:text-center space-y-2 text-[12px] text-gray-300'>
        <h2 className='text-sm font-semibold text-white'>About</h2>
        <p>
          I build enterprise process automations and generative AI solutions. With UiPath Agentic
          AI, Microsoft Copilot Studio and Power Platform, I design end‑to‑end automations; with
          Python, C# and Java I deliver robust API integrations and backends. I use Spring Boot for
          microservices and React/Next.js for performant UIs. I follow Agile & Scrum with JIRA and
          create value by combining GenAI with practical automation.
        </p>
      </div>
    </section>
  )
}
