//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import NoteGlossary from '@/components/elements/note/note-glossary'

type Params = Promise<{novelId: string}>;

export default async function IndexPage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId}  = await params;
  return (
    <NoteGlossary novelId={novelId}/>
  );
}