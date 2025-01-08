//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
const BASE_INDEX_SITE_PATH:string     = '/novel/[novelId]';
const BASE_EPISODE_SITE_PATH:string   = '/novel/[novelId]/[episodeId]';
const BASE_GLOSSARY_SITE_PATH:string  = '/novel/[novelId]/note';
const BASE_NOTE_SITE_PATH:string      = '/novel/[novelId]/note/[noteId]';

const BASE_DATA_URL = process.env.NEXT_PUBLIC_DATA_URL;
const BASE_INDEX_DATA_PATH: string    = BASE_DATA_URL + '[novelId]/_index.json';
const BASE_EPISODE_DATA_PATH: string  = BASE_DATA_URL + '[novelId]/[episodeId].json';
const BASE_EPISODE_IMAGE_PATH: string = BASE_DATA_URL + '[novelId]/images/[imageFile]';
const BASE_GLOSSARY_DATA_PATH: string = BASE_DATA_URL + '[novelId]/note/_glossary.json';
const BASE_NOTE_DATA_PATH: string     = BASE_DATA_URL + '[novelId]/note/[noteId].json';

export type episode = {
  id:string;
  title: string;
}

export type chapter = {
  id: string;
  title: string;
  episodes: Array<episode>;
}

export const getNovelIdList = () => {
  return [
    {novelId: 'progstars01'},
  ];
}

export const getIndexSitePath = (
  novelId:string,
) => {
  return BASE_INDEX_SITE_PATH.replace('[novelId]', novelId);
};

export const getEpisodeSitePath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_SITE_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
};

export const getGlossarySitePath = (
  novelId:string,
) => {
  return BASE_GLOSSARY_SITE_PATH.replace('[novelId]', novelId);
};

export const getNoteSitePath = (
    novelId:string,
    noteId:string
  ) => {
    return BASE_NOTE_SITE_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
  };

export const getIndexDataPath = (
  novelId:string
) => {
  return BASE_INDEX_DATA_PATH.replace('[novelId]', novelId);
};

export const getEpisodeDataPath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_DATA_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
};

export const getEpisodeImagePath = (
  novelId:string,
  imageFile:string
) => {
  return BASE_EPISODE_IMAGE_PATH.replace('[novelId]', novelId).replace('[imageFile]', imageFile);
};

export const getGlossaryDataPath = (
  novelId:string,
) => {
  return BASE_GLOSSARY_DATA_PATH.replace('[novelId]', novelId);
};

export const getNoteDataPath = (
  novelId:string,
  noteId:string
) => {
  return BASE_NOTE_DATA_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
};

export async function getIndexData(novelId:string) {
  const path = getIndexDataPath(novelId);
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getEpisodeData(novelId:string, episodeId: string) {
  const path = getEpisodeDataPath(novelId, episodeId);
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getGlossaryData(novelId:string) {
  const path = getGlossaryDataPath(novelId);
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getNoteData(novelId:string, noteId: string) {
  const path = getNoteDataPath(novelId, noteId);
  const data = await fetch(path).then((res) => res.json());
  return data;
}
