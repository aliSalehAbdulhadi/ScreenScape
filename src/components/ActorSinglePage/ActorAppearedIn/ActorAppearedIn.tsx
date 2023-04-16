import Image from 'next/image';
import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';

const ActorAppearedIn = () => {
  const images = [
    { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
    {
      url: '/images/716rIayrVWL._AC_SL1500_.jpg',
    },
    { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
    { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
    { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  ];
  return (
    <GridComp title="Appeared In">
      {images.map((cast, i) => (
        <Link
          href="/browse/sss"
          key={cast.url + i}
          className=" mb-3 cursor-pointer w-fit"
        >
          <Image
            src={cast.url}
            width={150}
            height={150}
            alt="Actor Image"
            className="h-[240px] w-[180px] object-fit rounded"
          />
        </Link>
      ))}
    </GridComp>
  );
};

export default ActorAppearedIn;
