

 
import { ArtistCard,Error,Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';



const TopArtist = () => { 


   
    //const{activeSong, isPlaying} = useSelector((state)=> state.player)
    const {data, isFetching, error}= useGetTopChartsQuery()
   
    if (isFetching ) return <Loader title="Top Artist incoming"/> ;

    if (error) return <Error/>;




return (
<div className='flex flex-col '>
    <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artists
    </h2>

    <div className=' flex flex-wrap sm:justify-start justify-centered gap-8'>
        {data?.map((track)=>(
           <ArtistCard key ={track.key} track={track}/> 
                                 ))}
    </div>

</div>
)
}

export default TopArtist;
