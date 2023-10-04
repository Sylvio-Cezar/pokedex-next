export async function GET(request) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
    headers: {
    'Content-Type': 'application/json',
    },
  })
  const data = await res.json();

  const allPromisses = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url, {
    headers: {
    'Content-Type': 'application/json',
    },
  })
  const data = await res.json();
  pokemon.id = data.id;
  pokemon.types = data.types.map(t => t.type.name);
  pokemon.image = data.sprites.other['official-artwork'].front_default;
  });

  await Promise.all(allPromisses);
 
  return Response.json({ data })
}
