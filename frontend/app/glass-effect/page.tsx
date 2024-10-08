import { css, cx } from '@emotion/css';
import { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './styles.css';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Glass Effect',
  description: 'Generated by create next app',
};

const section = css`
  font-size: 6rem;
  margin: 0;
  height: 100vh;
  width: 100%;
  background-color: red;
  /* background-image: url(bg); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Helvetica';
`;

const glassEffectStyles = css`
  font-size: 3rem;
`;

function GlassPage() {
  return (
    <section className='section'>
      <div className='glassEffectStyles'>
        <h1>Easy Glass Effect</h1>
        <h2>Made with css </h2>
        <Link href={`glass-effect/glass-cards`}>Cards </Link>
      </div>
    </section>
  );
}

export default GlassPage;
