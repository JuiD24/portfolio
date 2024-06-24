import React from 'react'

interface Props {
    title : string;
    year: string;
    company: string;
}
const SkillsItem = ({title, year, company} : Props) => {
  return (
    <div className='mb-[1rem] md:mb-[8rem]'>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
            {year}
        </span>
        <h1 className='mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white'>
            {company}
        </h1>
        <h6 className='mt-[2rem] mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white'>
            {title}
        </h6>
    </div>
  )
}

export default SkillsItem