import * as React from 'react'
import { Card } from '../components'
import Cards from '../data/cards';

export default function Home() {
  return (
    <div className='grid place-items-center'>
      <h2 className="text-3xl font-bold dark:text-white text-slate-400 pb-10">
        Tool Repository
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            {Cards && Cards.length>0 
            ? 
            Cards.map((e)=>{
                return (
                <Card r={e.ref} description={e.description} title={e.title} key={e.ref}/>
                );})
            :
            <h3 className='p-2'>No documents saved in the database.</h3>
            }
        </div>
    </div>

  )
}
