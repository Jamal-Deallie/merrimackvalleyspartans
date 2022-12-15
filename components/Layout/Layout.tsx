import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Container, Main } from './styles';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}
