export default function Portfolio() {
  return (
    <div className='w-full h-screen bg-slate-950 flex flex-col items-center justify-center'>
      <section className='text-center mb-8'>
        <p className='text-3xl text-yellow-400 p-5'>Projects</p>
        <div className='flex flex-wrap justify-center gap-4 max-h-3/4 overflow-auto'>
          {/* Project Cards */}
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className='max-w-md mb-4'>
              <div className='bg-slate-600 p-4 rounded-md'>
                <img
                  src={`https://via.placeholder.com/300?text=Project+${
                    index + 1
                  }`}
                  alt={`Project ${index + 1}`}
                  className='w-full h-28 object-cover mb-2 rounded-md'
                />
                <div>
                  <h1 className='text-lg font-bold text-white mb-1'>
                    Project {index + 1}
                  </h1>
                  <p className='text-gray-300 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='text-center mb-8'>
        <h1 className='text-3xl text-yellow-400 mb-4'>What I know</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {/* Skill Cards */}
          {[
            {
              category: 'Frontend',
              skills: [
                'HTML',
                'CSS',
                'Tailwind',
                'JavaScript',
                'TypeScript',
                'React JS',
              ],
            },
            { category: 'Backend', skills: ['Node JS', 'Express'] },
            {
              category: 'Database',
              skills: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL'],
            },
            { category: 'Devops', skills: ['Docker', 'Kubernetes', 'Git'] },
          ].map((item, index) => (
            <div key={index} className='w-28 p-2 bg-slate-700 rounded-md mb-2'>
              <p className='text-md text-gray-300 mb-1'>{item.category}</p>
              <div className='flex flex-wrap gap-1'>
                {item.skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className='text-gray-300 text-xs rounded-full bg-slate-600 px-2 py-1'
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
