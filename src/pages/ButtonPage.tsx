import { Fragment } from 'react';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = (): void => {
    console.log('Clicked!!!');
  };

  return (
    <Fragment>
      <div>
        <Button buttonClass="mb-5" success rounded outline>
          <GoBell />
          Click Here!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </Fragment>
  );
}

export default ButtonPage;
