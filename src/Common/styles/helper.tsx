export const responsiveContainer = `
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }`;

export const responsiveColumns = `
  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  @media (min-width: 768px) {
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }`;

export const Outline = 'outline';
export const Primary = 'filled';
export const Text = 'text';
export const Rounded = 'rounded';

//state
export const Success = 'success';
export const Danger = 'danger';
export const Warning = 'warning';

export const Selected = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
    >
      <g id="selected" transform="translate(-13.743 -12.743)">
        <rect
          id="bg"
          width="26"
          height="26"
          transform="translate(13.743 12.743)"
          fill="#fff"
          opacity="0"
        />
        <g id="btn" transform="translate(16.743 14.743)">
          <g
            id="bg-2"
            data-name="bg"
            transform="translate(1 2)"
            fill="#fff"
            stroke="#4964f6"
            stroke-width="1"
          >
            <rect width="18" height="18" rx="9" stroke="none" />
            <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="none" />
          </g>
          <g id="active" transform="translate(13.59 7.923) rotate(90)">
            <line
              id="Line_274"
              data-name="Line 274"
              x1="2.27"
              y2="2.64"
              transform="translate(3.884 4.54)"
              fill="none"
              stroke="#1ab5ac"
              stroke-linecap="round"
              stroke-width="2"
            />
            <line
              id="Line_275"
              data-name="Line 275"
              x1="6.154"
              y1="4.54"
              transform="translate(0)"
              fill="none"
              stroke="#1ab5ac"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ValidFileTypes = () => { return [".pdf", ".png", ".jpeg", ".jpg"];}

export const Verify = () => {
  return (
    <svg
      id="verify"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <rect id="bg" width="32" height="32" fill="#fff" opacity="0" />
      <path
        id="Icon_material-refresh"
        data-name="Icon material-refresh"
        d="M17.893,8.046A6.968,6.968,0,1,0,19.7,14.708H17.893a5.222,5.222,0,1,1-4.92-6.967,5.151,5.151,0,0,1,3.675,1.55l-2.8,2.8h6.1V6Z"
        transform="translate(2.822 3.033)"
      />
    </svg>
  );
};
