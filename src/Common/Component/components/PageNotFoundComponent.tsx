import { ReactElement } from 'react';
import { Container } from '../styles/layouts';
import pageNotFound from '../../images/data-broken.png';
import Header from './header';

const PageNotFoundComponent = (): ReactElement => {
  return (
    <Container className="overflowX-hidden">
      <Header isShowBackBtn={true} className="transparent-header"  />
      <div className="has-sticky-header">
        <div className='p-6 no-data'>
          <img src={pageNotFound} className="w-full" alt="pageNotFound" />
          <h4 className='my-2 text-center'>Page not found</h4>
          <p className='text-center'>Well, this is awkward. The page you're looking for is not here.
            {/* <br />
            <a href="/" style={{ textDecoration: 'none', color: variables.active }}>Contact</a> us for more details */}
          </p>
        </div>
      </div>
    </Container>
  )

};

export default PageNotFoundComponent;
