import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BackArrow, UserIcon } from '../styles/icons/icons';
import variables from '../styles/variables.module.scss';
import { Button } from './buttons';
import logoSymbol from '../../images/logo_ma_symbol.svg';

export const NavigationBar = styled.div.attrs(() => {
  return {
    className: 'sticky-header',
  };
})`
  color: ${({ theme }) => theme.primaryTextColor};
  & .header-wrap{
    height: 74px;
    max-width: 650px;
    margin: auto;
  }
  & > img {
    margin: auto;
    padding-right: ${variables.size};
  }
  &.transparent-header{
    background: none;
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    color: ${variables.primaryBgColor};
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 74px;
      background: radial-gradient(#597cfa1f 100%,transparent);
      z-index: -1;
      left: 0;
    }
    &.tertiary{
      &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 74px;
        background: radial-gradient(${variables.secondary} 100%,transparent);
        opacity: 0.09;
        z-index: -1;
        left: 0;
      }
    }
    & .action-back-btn{
      & svg{
        & path{
          fill: ${variables.primaryBgColor};
        }
      }
    }
    & .avatar-btn > button{
      background: ${variables.primaryBgColor};
    }
  }
  &.bg-gray{
    color: #000;
    background: ${variables.gray200};
    & .action-back-btn{
      & svg{
        & path{
          fill: ${variables.primaryBgColor};
        }
      }
    }
    & .avatar-btn > button{
      background: ${variables.primaryBgColor};
    }
  }
`;
const NavigationClaim = styled.div.attrs(() => {
  return {
    className: 'd-flex px-6 items-center sticky-header',
  };
})`
  height: 64px;
  color: #000;
  background: ${variables.gray200};
  & > img {
    margin: auto;
  }
`;

const ActionButton = styled.div.attrs(({ state }) => {
  return {
    className: `${state ? 'd-inline cursor-pointer action-back-btn' : 'd-none'}`,
  };
})`	
& svg{	
  vertical-align: middle;	
}	
`;

const TitleBar = styled.div.attrs(() => {
  return {
    className: 'flex-1',
  };
})`
  & h2 {
    font-weight: 400;
    font-size: ${variables.size};
    line-height: ${variables.size_lg};
  }
`;

const TitleLayout = (props, ...rest) => {
  return (
    <TitleBar {...rest}>
      <h2 className="mb-0">
        {props?.title && props.title}
        {props?.subtitle && (
          <span className="fw-sb d-block">
          {props?.subtitle && (
            <label className='label-xs'>
              {props.subLabel}
            </label>
          )}
            {props.subtitle}
          </span>
        )}
      </h2>
      {props?.children}
    </TitleBar>
  );
};
const Avatar = styled.div.attrs(() => {
  return {
    className: 'avatar-btn',
  };
})`
  & button {
    background: rgba(255, 255, 255, 18%);
    width: 40px;
    height: 40px;
    border-radius: ${variables.size_2xl};
    padding: 0;
    border: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      border: 0;
      background: rgba(255, 255, 255, 18%);
    }
    &:focus {
      border: 0;
      background: rgba(255, 255, 255, 18%);
    }
    & svg {
      margin: auto !important;
    }
  }
`;

export const HeaderClaimList = (props) => {
  const history = useHistory();
  return (
    <NavigationClaim>
      <div className="back-arrow" onClick={() => history.push(props.claimLink)}>
        <BackArrow />
      </div>
      <TitleLayout title={'Your Claims'} subtitle={props.subtitle} />
      {/* <Search />
      <Avatar>
        <UserIcon />
      </Avatar> */}
    </NavigationClaim>
  );
};

const Header = (props) => {
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <NavigationBar id="header" className={props.className}>
      <div className='d-flex gap-4 px-6 items-center header-wrap'>
        {props.isShowBackBtn && props.backComponentPath && (
          <ActionButton
            state={true}
            onClick={() => history.push(props.backComponentPath)}
          >
            <BackArrow />
          </ActionButton>
        )}
        {props.isShowBackBtn && !props.backComponentPath && (
          <ActionButton state={true} onClick={() => history.push('/home')}>
            <BackArrow />
          </ActionButton>
        )}

        {props.isShowLogo && (
          <img
            alt="home"
            src={logoSymbol}
            onClick={() => history.push(props.logoPath ?? '/home')}
          />
        )}

        {path === '/eligibility-with-package' ||
        path === '/eligibility-without-package' ? (
          <TitleLayout title={'Know'} subtitle={'Your treatment eligibilty'} />
        ) : (
          <TitleLayout
            title={props && props.name ? props.name : 'Hello'}
            subtitle={props && props.subtitle ? props.subtitle : ''}
            subLabel={props && props.subLabel ? props.subLabel : ''}
          />
        )}

        {localStorage.getItem('accessToken') && (
          <div
            className="relative"
            // onClick={() => setShowDropdown(!showDropdown)}
            onClick={()=>  history.push('/account') }
          >
            <Avatar>
              {props.showButton && <Button btnTheme="outline">
                <UserIcon />
              </Button>}
            </Avatar>
            {/* {showDropdown && (
              <Dropdown>
                <Button
                  btnTheme="outline"
                  onClick={() => {
                    history.push('/account');
                  }}
                >
                  Profile
                </Button>
                <Button
                  btnTheme="outline"
                  onClick={() => {
                    history.push('/help');
                  }}
                >
                  Help
                </Button>
                <Button
                  btnTheme="outline"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to Log out?')) {
                      history.push('/logout');
                    }
                  }}
                >
                  Log out
                </Button>
              </Dropdown>
            )} */}
          </div>
        )}
      </div>
    </NavigationBar>
)};

export default Header;
