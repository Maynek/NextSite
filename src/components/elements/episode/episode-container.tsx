//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Image from 'next/image'
import { getIndexSitePath, getEpisodeSitePath, getEpisodeImagePath, getEpisodeData } from '@/libs/util'
import LoadError from '@/components/elements/loading/load-error'
import ContentsBody from '@/components/elements/contents/contents-body'
import EpisodePagination from '@/components/elements/episode/episode-pagination'

export default async function EpisodeContainer({
  novelId,
  episodeId,
}:{
  novelId: string
  episodeId: string
}) {
  const data = await getEpisodeData(novelId, episodeId);

  if (!data) {
    return ( <LoadError /> );
  } else {
    const indexPath = getIndexSitePath(novelId);
    const imagePath = data.image ? getEpisodeImagePath(novelId, data.image) : null;
    const prevPath = data.prevId ? getEpisodeSitePath(novelId, data.prevId) : null;
    const nextPath = data.nextId ? getEpisodeSitePath(novelId, data.nextId) : null;

    return (
      <div className="flex flex-col h-full">
        <div className="my-6">
          <EpisodePagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        { imagePath ?
          <div className="flex justify-center items-center"> 
            <Image src={imagePath} alt={data.image} width={512} height={512}/>
          </div>   
          :
          <></>
        }
        <div className="flex-1 leading-loose">
          <ContentsBody body={data.body} novelId={novelId}/>
        </div>
        <div className="my-6">
          <EpisodePagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
      </div>
    );
  }
}