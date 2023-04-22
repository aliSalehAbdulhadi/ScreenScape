import Image from 'next/image';
import GridComp from '@/src/components/GridComp/GridComp';
import DelayDisplay from '../DelayDisplay/DelayDisplay';

const images = [
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
  {
    url: '/images/716rIayrVWL._AC_SL1500_.jpg',
  },
  { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
];
const SearchPage = () => {
  return (
    <div className="pt-10 background-fade px-10 fade-in">
      <GridComp title="Looking For" changeableTitle="John Wick">
        {images.map((cast, i) => (
          <DelayDisplay key={i} delay={i * 50}>
            <div key={cast.url + i} className=" mb-3 cursor-pointer w-fit">
              <Image
                src={cast.url}
                width={150}
                height={150}
                alt="Actor Image"
                className="h-[240px] w-[180px] object-fit rounded"
                loading="lazy"
              />
            </div>
          </DelayDisplay>
        ))}
      </GridComp>
    </div>
  );
};

export default SearchPage;
