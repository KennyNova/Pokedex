import Head from 'next/head'
import Layout from "../component/Layout.js"
import Link from 'next/link'



export default function Home({ pokemon }) {
  return (
    <Layout title="NextJS Pokedex">
      <style jsx>{`
        .toggle-checkbox:checked {
          @apply: right-0 border-green-400;
          right: 0;
          border-color: #68D391;

          transition: all 0.3s ease-in-out;
        }
        .toggle-checkbox:checked + .toggle-label {
          @apply: bg-green-400;
          background-color: #68D391;
          transition: all 0.3s ease-in-out;
        }
        .secondary-gray{
          background-color:#282e32;
        }
        .black{
          background-color:#131313;
        }
      `}</style>
        <h1 className="text-4xl mb-8 text-center text-white">NextJS Pokedex</h1>
        <ul className=" flex -mx-2 flex-wrap">
          {pokemon.map((pokeman, index) => (
            <li className="w-1/4 h-full flex-wrap" key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <a className=" p-4 border-gray my-1 mx-2 capitalize flex text-lg rounded-md secondary-gray text-white">
                  <img className="w-20 h-20 mr-3" src={pokeman.image} alt={pokeman.name}/>
                  <span className="mr-2 font-bold text-white">{index + 1}.</span>
                  {pokeman.name}
                  </a>
              </Link>
              <div className="relative mx-2 inline-block w-10 mr-2 align-middle select-none transition-all duration-200 ease-in">
                <input type="checkbox" name="toggle" id={index}  className="toggle-checkbox absolute block w-6 h-6 rounded-full black appearance-none cursor-pointer"/>
                <label htmlFor="toggle" name="toggle" className="toggle-label block overflow-hidden h-6 rounded-full secondary-gray cursor-pointer"></label>
              </div>
              <label htmlFor="toggle" className="text-xs text-gray-300">Captured</label>
              <div className="flex items-center justify-center w-full"></div>
            </li>
          ))}
        </ul>
    </Layout>
  )
}


export async function getStaticProps(context){
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const {results} = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return{...pokeman,image};
    });
    return {
      props: { pokemon },
    };
  } catch (err){
    console.error(err);
  }
}