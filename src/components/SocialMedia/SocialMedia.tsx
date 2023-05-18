import { SiImdb } from 'react-icons/si';
import {
  GrYoutube,
  GrTwitter,
  GrInstagram,
  GrFacebookOption,
} from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';
import { useSocialMediaIds } from '@/src/fetch/getSocialMediaData';

const SocialMedia = ({
  id,
  mediaType,
  homePage,
}: {
  id: string;
  mediaType: string;
  homePage?: string;
}) => {
  const [socialMediaIds] = useSocialMediaIds(mediaType, id);

  return (
    <div className="flex items-center flex-wrap">
      {homePage && (
        <a href={`${homePage}`} target="_blank" rel="noopener noreferrer">
          <IoLinkSharp className="h-5 w-5 mb-2 mr-[5px]" />
        </a>
      )}

      {socialMediaIds?.facebook_id && (
        <a
          href={`https://www.facebook.com/${socialMediaIds.facebook_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrFacebookOption className="h-5 w-5 mb-2 mr-2" />
        </a>
      )}

      {socialMediaIds?.instagram_id && (
        <a
          href={`https://www.instagram.com/${socialMediaIds.instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram className="h-5 w-5 mb-2 mr-3" />
        </a>
      )}

      {socialMediaIds?.tiktok_id && (
        <a
          href={`https://www.tiktok.com/@${socialMediaIds.tiktok_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="h-5 w-5 mb-2 mr-3" />
        </a>
      )}

      {socialMediaIds?.twitter_id && (
        <a
          href={`https://www.twitter.com/${socialMediaIds.twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrTwitter className="h-5 w-5 mb-2 mr-3" />
        </a>
      )}

      {socialMediaIds?.youtube_id && (
        <a
          href={`https://www.youtube.com/${socialMediaIds.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrYoutube className="h-5 w-5 mb-2 mr-3" />
        </a>
      )}

      {socialMediaIds?.imdb_id && (
        <a
          href={`https://www.imdb.com/${
            mediaType === 'person' ? 'name' : 'title'
          }/${socialMediaIds.imdb_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiImdb className="h-6 w-6 mr-3 mb-2" />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
