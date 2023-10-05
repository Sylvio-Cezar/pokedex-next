async function getData({ name }) {
    const res = await fetch(`http://localhost:3000/api/pokemon/${name}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Pokemon({ params }) {
    const pokemon = await getData({ name: params.name })
    return <div>My pokemon stats:
                <ul>
                    {pokemon.stats.map(stat => {
                        <li className="flex gap-3">
                            {stat.base_stat}: 
                            <span className="block w-[100px] h-5 bg-green-800 relative before:absolute before:inset-0 before:bg-red-500"/>
                        </li>
                    })}
                </ul>
           </div>
}