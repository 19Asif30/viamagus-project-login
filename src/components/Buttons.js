export const GoogleSignInButton = () => {
  return (
    <button
      aria-label="Sign in with Google"
      className="google-sign-in-button" 
      onClick={(e)=>e.preventDefault()}
    >
      <div className="google-logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="google-logo"
        >
          <title>Sign in with Google</title>
          {/* Path elements for Google logo colors */}
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            className="fill-google-logo-blue"
          ></path>
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            className="fill-google-logo-green"
          ></path>
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            className="fill-google-logo-yellow"
          ></path>
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            className="fill-google-logo-red"
          ></path>
        </svg>
      </div>
      <div className="button-text">
        <p>Sign in with Google</p>
      </div>
    </button>
  );
};

export const FacebookSignInButton = () => {
  return (
    <button
      aria-label="Sign in with Google"
      className="google-sign-in-button" 
      onClick={(e)=>e.preventDefault()}
    >
      <div className="google-logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="google-logo"
        >
          <title>Sign in with Facebook</title>
          {/* Path elements for Google logo colors */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <linearGradient
              id="a"
              x1="-277.375"
              x2="-277.375"
              y1="406.6018"
              y2="407.5726"
              gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0062e0" />
              <stop offset="1" stopColor="#19afff" />
            </linearGradient>
            <path
              fill="url(#a)"
              d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
            />
            <path
              fill="#fff"
              d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
            />
          </svg>
        </svg>
      </div>
      <div className="button-text">
        <p>Sign in with Facebook</p>
      </div>{" "}
    </button>
  );
};
