import BaseCheckbox from './BaseCheckbox';
import BaseButton from './BaseButton';
import BaseModal from './BaseModal';

function TheModalEmbedPlaylist({ onClose: handleClose }) {
  return (
    <BaseModal classes="w-[660px] bg-neutral-900" onClose={handleClose}>
      <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed">
        Embed Playlist
      </h1>
      <div className="py-6 px-8 text-neutral-500 text-[13px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, sint
        omnis ducimus{' '}
        <a href="/" className="text-white font-bold hover:underline">
          dolore cumque cum
        </a>
        !
      </div>
      <div className="flex justify-end items-center gap-4 text-right pb-6 px-8">
        <BaseCheckbox>Show code</BaseCheckbox>
        <BaseButton accent>Copy</BaseButton>
      </div>
    </BaseModal>
  );
}

export default TheModalEmbedPlaylist;
