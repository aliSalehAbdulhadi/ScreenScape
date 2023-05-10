import { SiImdb } from 'react-icons/si';
import {
  GrYoutube,
  GrTwitter,
  GrInstagram,
  GrFacebookOption,
} from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';

const SocialMedia = ({ personSocialMedia }: { personSocialMedia: any }) => {
  return (
    <div className="flex items-center flex-wrap">
      {personSocialMedia?.facebook_id && (
        <a
          href={`https://www.facebook.com/${personSocialMedia.facebook_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrFacebookOption className="h-5 w-5 mr-2" />
        </a>
      )}

      {personSocialMedia?.instagram_id && (
        <a
          href={`https://www.instagram.com/${personSocialMedia.instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram className="h-5 w-5 mr-3" />
        </a>
      )}

      {personSocialMedia?.tiktok_id && (
        <a
          href={`https://www.tiktok.com/@${personSocialMedia.tiktok_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="h-5 w-5 mr-3" />
        </a>
      )}

      {personSocialMedia?.twitter_id && (
        <a
          href={`https://www.twitter.com/${personSocialMedia.twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrTwitter className="h-5 w-5 mr-3" />
        </a>
      )}

      {personSocialMedia?.youtube_id && (
        <a
          href={`https://www.youtube.com/${personSocialMedia.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrYoutube className="h-5 w-5 mr-3" />
        </a>
      )}

      {personSocialMedia?.imdb_id && (
        <a
          href={`https://www.imdb.com/name/${personSocialMedia.imdb_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiImdb className="h-6 w-6 mr-3" />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
