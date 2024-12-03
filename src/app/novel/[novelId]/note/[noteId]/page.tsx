//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import NoteContainer from '@/components/elements/note/note-container'

type Params = Promise<{novelId: string, noteId: string }>;

export default async function IndexPage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId, noteId}  = await params;
  return (
    <NoteContainer novelId={novelId} noteId={noteId}/>
  );
}