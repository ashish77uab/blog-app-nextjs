
import React from 'react'
import CreateGameForm from './components/CreateGameForm'
import { getGames } from '@/utils/api/games'

const CreateGame = async () => {
    const games = await getGames('games/all-games')
    return (
        <div className='px-4 py-2'>
            <h4 className='text-2xl mb-4 font-semibold'>Create Game</h4>
            <CreateGameForm/>
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Games List</h2>
                      
                    </div>
                    <ul className='space-y-2 mt-4'>
                    {games?.games?.map((game,index) => (
                            <li key={game.id} className={` border bg-white border-slate-400 flex items-center gap-4 rounded-md p-4 `}>
                                <div className='flex-grow'>
                                    <h6 className='font-semibold'>
                                       {index+1}. {game.gameName}
                                    </h6>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
             
        </div>
    )
}

export default CreateGame