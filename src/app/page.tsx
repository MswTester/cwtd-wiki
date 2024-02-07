'use client'

import Link from 'next/link'
import tl from './data/lang'
import { useEffect, useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState<string>('en')
  useEffect(() => {
    let l = localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en'
    setLang(l)
    localStorage.setItem('lang', l)
  }, [])
  return <>
    <div className='w-full h-full flex flex-col justify-center items-center gap-32'>
      <h1 className='text-5xl font-mono font-bold select-none'>{tl('title', lang)}</h1>
      <div className='flex flex-row gap-10'>
        <Link href="/towers">
          <div className='p-5 select-none cursor-pointer hover:shadow-lg hover:bg-gray-100 dark:hover:bg-[#0a0a0a] rounded-lg flex flex-col gap-3'>
            <h1 className='text-xl font-bold'>{tl('towers', lang)}</h1>
            <p>{tl('towers_desc', lang)}</p>
          </div>
        </Link>
        <Link href="/worlds">
          <div className='p-5 select-none cursor-pointer hover:shadow-lg hover:bg-gray-100 dark:hover:bg-[#0a0a0a] rounded-lg flex flex-col gap-3'>
            <h1 className='text-xl font-bold'>{tl('worlds', lang)}</h1>
            <p>{tl('worlds_desc', lang)}</p>
          </div>
        </Link>
      </div>
    </div>
  </>
}
