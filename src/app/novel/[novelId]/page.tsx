//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import EpisodeIndex from '@/components/elements/episode/episode-index'

type Params = Promise<{novelId: string}>;

export default async function IndexPage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId}  = await params;
  return (
    <EpisodeIndex novelId={novelId}/>
  );
}