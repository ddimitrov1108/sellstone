import { GiMoebiusTriangle } from 'react-icons/gi';

export default function Brand() {
  return (
    <div className="flex items-center font-semibold text-2xl">
      <GiMoebiusTriangle className='rotate-[45deg] text-gold-dark text-5xl'/>
      <span className='text-gold-dark'>SELL</span>
      <span className='text-secondary'>STONE</span>
    </div>
  )
}