//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import EpisodeContainer from '@/components/elements/episode/episode-container'

type Params = Promise<{novelId: string, episodeId: string }>;

export default async function EpisodePage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId, episodeId}  = await params;
  return (
    <EpisodeContainer
      novelId={novelId}
      episodeId={episodeId}
    />
  );
}