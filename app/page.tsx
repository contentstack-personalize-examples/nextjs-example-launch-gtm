import Footer from '@/components/footer';
import GridComponent from '@/components/grid-component';
import Navbar from '@/components/navbar';
import {
  extractFooterProps,
  extractGridComponentProps,
  extractNavbarProps,
} from '@/helpers/extractHomepageProps';
import { getEntries } from '@/helpers/getEntries';
import Personalize from '@contentstack/personalize-edge-sdk';

export const dynamic = 'force-dynamic';

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) => {
  const params = await searchParams;
  let variantParam = decodeURIComponent(
    params[Personalize.VARIANT_QUERY_PARAM]
  );

  let [homepageEntry] = await getEntries(
    process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID as string,
    {},
    variantParam,
  ) as any[];
  let navbarProps = extractNavbarProps(homepageEntry);
  let footerProps = extractFooterProps(homepageEntry);
  let gridComponentProps = extractGridComponentProps(homepageEntry);

  return (
    <>
      <Navbar navLinks={navbarProps} />
      <div className='container flex-grow py-4 flex flex-col'>
        <GridComponent modularBlocks={gridComponentProps} />
      </div>
      <Footer footerText={footerProps} />
    </>
  );
};

export default Page;
