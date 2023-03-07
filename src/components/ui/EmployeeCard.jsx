export default function EmployeeCard({ employee }) {
  return (
    <div
    className="opacity-0 hidden-section employee-card p-6 bg-black-dark/20 transition-all duration-300 shadow-md  grid gap-2 rounded-lg"
  >
    <div className="overflow-hidden w-fit mx-auto p-4 pb-0 rounded-lg">
      {employee.img}
    </div>
    <div className="grid items-center gap-4 p-2">
      <div className="grid gap-2">
        <span className="text-primaryHeaderText text-left text-lg font-semibold truncate ...">
          {employee.name}
        </span>
        <span className="text-gold-main text-left truncate ...">
          {employee.title}
        </span>
      </div>
      <div className="flex items-center gap-4 text-xl transition-all duration-500">
        {employee.socials.map(({ id, url, icon }) => (
          <div key={id} className="p-2 rounded-full bg-[#1E2329]">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 rounded-full text-[#848E9C] hover:text-gold-main"
            >
              {icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}