import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../../context/currentUser';
// import anime from "animejs/lib/anime.es.js";

export default function Navigation() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <nav className="md:justify-between justify-center" style={{ width: '100%', height: '290px' }}>
      <div>
        <div className="ml-4 md:visible invisible title">
          <Link to="/">
            <svg
              width="422"
              height="86"
              viewBox="0 0 422 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="font-effect-fire-animation"
            >
              <mask
                id="path-1-outside-1_1_5"
                maskUnits="userSpaceOnUse"
                x="0.765625"
                y="0.078125"
                width="421"
                height="86"
                fill="black"
              >
                <rect
                  fill="white"
                  x="0.765625"
                  y="0.078125"
                  width="421"
                  height="86"
                />
                <path d="M36.9375 11.8438C43.0938 11.8438 48.4062 13.2031 52.875 15.9219C57.375 18.6406 60.7969 22.5312 63.1406 27.5938C65.5156 32.6562 66.7031 38.6094 66.7031 45.4531C66.7031 52.4219 65.375 58.5938 62.7188 63.9688C60.0625 69.3438 56.3281 73.5156 51.5156 76.4844C46.7344 79.4531 41.25 80.9375 35.0625 80.9375C25.6562 80.9375 18.4219 78.0156 13.3594 72.1719C8.29688 66.3281 5.76562 57.8906 5.76562 46.8594C5.76562 39.8906 7.03125 33.75 9.5625 28.4375C12.0938 23.125 15.7031 19.0312 20.3906 16.1562C25.1094 13.2812 30.625 11.8438 36.9375 11.8438ZM36.4688 20C30.0625 20 25.1719 22.1562 21.7969 26.4688C18.4531 30.7812 16.7812 37.4219 16.7812 46.3906C16.7812 55.1094 18.3438 61.6875 21.4688 66.125C24.625 70.5625 29.3125 72.7812 35.5312 72.7812C41.9375 72.7812 46.8906 70.5312 50.3906 66.0312C53.9219 61.5312 55.6875 54.8281 55.6875 45.9219C55.6875 37.3594 54.0469 30.9062 50.7656 26.5625C47.5156 22.1875 42.75 20 36.4688 20Z" />
                <path d="M132.469 79.5312L116.625 80L115.688 73.2969C113.781 75.0156 111.188 76.7188 107.906 78.4062C104.625 80.0938 101.297 80.9375 97.9219 80.9375C92.7969 80.9375 88.9531 79.4375 86.3906 76.4375C83.8281 73.4375 82.5469 69.2188 82.5469 63.7812V36.7812L74.3906 34.8594V29.6094L92.1562 29.1406V62.7969C92.1562 66.2031 92.8281 68.7188 94.1719 70.3438C95.5156 71.9688 97.7188 72.7812 100.781 72.7812C103.219 72.7812 105.453 72.2344 107.484 71.1406C109.547 70.0156 111.266 68.7812 112.641 67.4375C114.016 66.0938 114.703 65.3594 114.703 65.2344V36.7812L106.547 34.8594V29.6094L124.312 29.1406V72.3125L132.469 74.2344V79.5312Z" />
                <path d="M155.438 36.125C157.25 34.1562 159.391 32.3438 161.859 30.6875C164.359 29 167.062 28.1562 169.969 28.1562C171.375 28.1562 172.703 28.2656 173.953 28.4844C175.234 28.7031 176.281 28.9375 177.094 29.1875C177.906 29.4062 178.406 29.5469 178.594 29.6094L178.125 43.5312H171.844L170.438 36.3125C167.25 36.3125 164.5 37.0781 162.188 38.6094C159.875 40.1406 157.984 41.875 156.516 43.8125V72.3125L166.125 74.7031V80H138.75V74.7031L146.906 72.3125V36.7812L138.75 34.8594V29.6094L154.594 29.1406L155.438 36.125Z" />
                <path d="M191.531 20.4688L183.375 18.5469V13.2969L201.609 12.7812H211.688C218.781 12.7812 224.234 14.5469 228.047 18.0781C231.859 21.6094 233.766 26.4062 233.766 32.4688C233.766 39.8438 231.5 45.4531 226.969 49.2969C222.469 53.1406 216.094 55.0625 207.844 55.0625H201.609V72.3125L209.766 74.2344V80H183.375V74.2344L191.531 72.3125V20.4688ZM207.844 47.375C213.094 47.375 217.047 46.2188 219.703 43.9062C222.359 41.5938 223.688 38.2656 223.688 33.9219C223.688 29.9531 222.594 26.7188 220.406 24.2188C218.25 21.7188 215.188 20.4688 211.219 20.4688H201.609V47.375H207.844Z" />
                <path d="M265.125 80H238.547V74.7031L246.703 72.3125V13.7656L238.547 11.8438V6.54688L256.5 6.07812V72.3125L265.125 74.7031V80Z" />
                <path d="M272.812 32C273.312 31.8125 274.562 31.4219 276.562 30.8281C278.594 30.2031 280.984 29.6094 283.734 29.0469C286.484 28.4531 289.078 28.1562 291.516 28.1562C297.328 28.1562 301.734 29.3125 304.734 31.625C307.766 33.9375 309.281 37.75 309.281 43.0625V72.3125L316.969 74.2344V79.5312L302.062 80L300.047 73.2969C297.984 75.3594 295.594 77.1562 292.875 78.6875C290.188 80.1875 287.328 80.9375 284.297 80.9375C279.766 80.9375 276.234 79.6875 273.703 77.1875C271.172 74.6562 269.906 71.1094 269.906 66.5469C269.906 61.2344 271.812 57.4375 275.625 55.1562C279.438 52.8438 284.891 51.6875 291.984 51.6875H299.672V44C299.672 41.1875 298.891 39.0469 297.328 37.5781C295.766 36.1094 293.5 35.375 290.531 35.375C288.812 35.375 287.234 35.4844 285.797 35.7031C284.359 35.9219 283.219 36.1406 282.375 36.3594C281.562 36.5781 281.062 36.7188 280.875 36.7812L279.516 44H273.281L272.812 32ZM292.969 57.9219C288.219 57.9219 284.812 58.5625 282.75 59.8438C280.719 61.125 279.703 63.2031 279.703 66.0781C279.703 68.2656 280.328 70.0156 281.578 71.3281C282.828 72.6406 284.547 73.2969 286.734 73.2969C288.859 73.2969 290.875 72.7188 292.781 71.5625C294.688 70.4062 296.312 69.1562 297.656 67.8125C299 66.4688 299.672 65.7344 299.672 65.6094V57.9219H292.969Z" />
                <path d="M356.812 36.7812C356.375 36.6562 355.328 36.4688 353.672 36.2188C352.016 35.9688 350.188 35.8438 348.188 35.8438C343.594 35.8438 340.047 37.3281 337.547 40.2969C335.047 43.2656 333.797 47.7031 333.797 53.6094C333.797 60.0156 335.109 64.9062 337.734 68.2812C340.359 71.625 344 73.2969 348.656 73.2969C351.344 73.2969 353.797 72.8594 356.016 71.9844C358.234 71.1094 360.047 70.1875 361.453 69.2188C362.859 68.2188 363.562 67.6562 363.562 67.5312L366.938 73.2969C366.938 73.4219 365.938 74.1562 363.938 75.5C361.969 76.8438 359.547 78.0938 356.672 79.25C353.828 80.375 350.844 80.9375 347.719 80.9375C339.906 80.9375 333.953 78.625 329.859 74C325.766 69.375 323.719 62.8906 323.719 54.5469C323.719 49.4219 324.734 44.8594 326.766 40.8594C328.828 36.8594 331.734 33.75 335.484 31.5312C339.234 29.2812 343.625 28.1562 348.656 28.1562C351.219 28.1562 353.719 28.4531 356.156 29.0469C358.594 29.6094 360.578 30.2031 362.109 30.8281C363.641 31.4219 364.609 31.8125 365.016 32L364.5 44.9375H358.266L356.812 36.7812Z" />
                <path d="M382.734 56C382.734 61.25 384.016 65.4531 386.578 68.6094C389.141 71.7344 392.5 73.2969 396.656 73.2969C399.469 73.2969 402.078 72.9062 404.484 72.125C406.891 71.3438 408.875 70.5 410.438 69.5938C412 68.6562 412.781 68.125 412.781 68L416.156 72.9688C416.156 73.0938 415.109 73.875 413.016 75.3125C410.953 76.7188 408.391 78.0156 405.328 79.2031C402.297 80.3594 399.078 80.9375 395.672 80.9375C388.109 80.9375 382.375 78.6562 378.469 74.0938C374.594 69.5312 372.656 63.1875 372.656 55.0625C372.656 50 373.641 45.4219 375.609 41.3281C377.609 37.2344 380.391 34.0156 383.953 31.6719C387.547 29.3281 391.625 28.1562 396.188 28.1562C409.625 28.1562 416.344 35.6719 416.344 50.7031C416.344 51.7344 416.281 52.7656 416.156 53.7969C416.031 54.8281 415.938 55.5 415.875 55.8125L382.734 56ZM406.172 48.7812C406.172 44.875 405.328 41.7188 403.641 39.3125C401.984 36.875 399.328 35.6562 395.672 35.6562C391.953 35.6562 389 36.9062 386.812 39.4062C384.656 41.9062 383.422 45.0312 383.109 48.7812H406.172Z" />
              </mask>
              <path
                className="path-0"
                d="M36.9375 11.8438C43.0938 11.8438 48.4062 13.2031 52.875 15.9219C57.375 18.6406 60.7969 22.5312 63.1406 27.5938C65.5156 32.6562 66.7031 38.6094 66.7031 45.4531C66.7031 52.4219 65.375 58.5938 62.7188 63.9688C60.0625 69.3438 56.3281 73.5156 51.5156 76.4844C46.7344 79.4531 41.25 80.9375 35.0625 80.9375C25.6562 80.9375 18.4219 78.0156 13.3594 72.1719C8.29688 66.3281 5.76562 57.8906 5.76562 46.8594C5.76562 39.8906 7.03125 33.75 9.5625 28.4375C12.0938 23.125 15.7031 19.0312 20.3906 16.1562C25.1094 13.2812 30.625 11.8438 36.9375 11.8438ZM36.4688 20C30.0625 20 25.1719 22.1562 21.7969 26.4688C18.4531 30.7812 16.7812 37.4219 16.7812 46.3906C16.7812 55.1094 18.3438 61.6875 21.4688 66.125C24.625 70.5625 29.3125 72.7812 35.5312 72.7812C41.9375 72.7812 46.8906 70.5312 50.3906 66.0312C53.9219 61.5312 55.6875 54.8281 55.6875 45.9219C55.6875 37.3594 54.0469 30.9062 50.7656 26.5625C47.5156 22.1875 42.75 20 36.4688 20Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-1"
                d="M132.469 79.5312L116.625 80L115.688 73.2969C113.781 75.0156 111.188 76.7188 107.906 78.4062C104.625 80.0938 101.297 80.9375 97.9219 80.9375C92.7969 80.9375 88.9531 79.4375 86.3906 76.4375C83.8281 73.4375 82.5469 69.2188 82.5469 63.7812V36.7812L74.3906 34.8594V29.6094L92.1562 29.1406V62.7969C92.1562 66.2031 92.8281 68.7188 94.1719 70.3438C95.5156 71.9688 97.7188 72.7812 100.781 72.7812C103.219 72.7812 105.453 72.2344 107.484 71.1406C109.547 70.0156 111.266 68.7812 112.641 67.4375C114.016 66.0938 114.703 65.3594 114.703 65.2344V36.7812L106.547 34.8594V29.6094L124.312 29.1406V72.3125L132.469 74.2344V79.5312Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-2"
                d="M155.438 36.125C157.25 34.1562 159.391 32.3438 161.859 30.6875C164.359 29 167.062 28.1562 169.969 28.1562C171.375 28.1562 172.703 28.2656 173.953 28.4844C175.234 28.7031 176.281 28.9375 177.094 29.1875C177.906 29.4062 178.406 29.5469 178.594 29.6094L178.125 43.5312H171.844L170.438 36.3125C167.25 36.3125 164.5 37.0781 162.188 38.6094C159.875 40.1406 157.984 41.875 156.516 43.8125V72.3125L166.125 74.7031V80H138.75V74.7031L146.906 72.3125V36.7812L138.75 34.8594V29.6094L154.594 29.1406L155.438 36.125Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-3"
                d="M191.531 20.4688L183.375 18.5469V13.2969L201.609 12.7812H211.688C218.781 12.7812 224.234 14.5469 228.047 18.0781C231.859 21.6094 233.766 26.4062 233.766 32.4688C233.766 39.8438 231.5 45.4531 226.969 49.2969C222.469 53.1406 216.094 55.0625 207.844 55.0625H201.609V72.3125L209.766 74.2344V80H183.375V74.2344L191.531 72.3125V20.4688ZM207.844 47.375C213.094 47.375 217.047 46.2188 219.703 43.9062C222.359 41.5938 223.688 38.2656 223.688 33.9219C223.688 29.9531 222.594 26.7188 220.406 24.2188C218.25 21.7188 215.188 20.4688 211.219 20.4688H201.609V47.375H207.844Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-4"
                d="M265.125 80H238.547V74.7031L246.703 72.3125V13.7656L238.547 11.8438V6.54688L256.5 6.07812V72.3125L265.125 74.7031V80Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-5"
                d="M272.812 32C273.312 31.8125 274.562 31.4219 276.562 30.8281C278.594 30.2031 280.984 29.6094 283.734 29.0469C286.484 28.4531 289.078 28.1562 291.516 28.1562C297.328 28.1562 301.734 29.3125 304.734 31.625C307.766 33.9375 309.281 37.75 309.281 43.0625V72.3125L316.969 74.2344V79.5312L302.062 80L300.047 73.2969C297.984 75.3594 295.594 77.1562 292.875 78.6875C290.188 80.1875 287.328 80.9375 284.297 80.9375C279.766 80.9375 276.234 79.6875 273.703 77.1875C271.172 74.6562 269.906 71.1094 269.906 66.5469C269.906 61.2344 271.812 57.4375 275.625 55.1562C279.438 52.8438 284.891 51.6875 291.984 51.6875H299.672V44C299.672 41.1875 298.891 39.0469 297.328 37.5781C295.766 36.1094 293.5 35.375 290.531 35.375C288.812 35.375 287.234 35.4844 285.797 35.7031C284.359 35.9219 283.219 36.1406 282.375 36.3594C281.562 36.5781 281.062 36.7188 280.875 36.7812L279.516 44H273.281L272.812 32ZM292.969 57.9219C288.219 57.9219 284.812 58.5625 282.75 59.8438C280.719 61.125 279.703 63.2031 279.703 66.0781C279.703 68.2656 280.328 70.0156 281.578 71.3281C282.828 72.6406 284.547 73.2969 286.734 73.2969C288.859 73.2969 290.875 72.7188 292.781 71.5625C294.688 70.4062 296.312 69.1562 297.656 67.8125C299 66.4688 299.672 65.7344 299.672 65.6094V57.9219H292.969Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-6"
                d="M356.812 36.7812C356.375 36.6562 355.328 36.4688 353.672 36.2188C352.016 35.9688 350.188 35.8438 348.188 35.8438C343.594 35.8438 340.047 37.3281 337.547 40.2969C335.047 43.2656 333.797 47.7031 333.797 53.6094C333.797 60.0156 335.109 64.9062 337.734 68.2812C340.359 71.625 344 73.2969 348.656 73.2969C351.344 73.2969 353.797 72.8594 356.016 71.9844C358.234 71.1094 360.047 70.1875 361.453 69.2188C362.859 68.2188 363.562 67.6562 363.562 67.5312L366.938 73.2969C366.938 73.4219 365.938 74.1562 363.938 75.5C361.969 76.8438 359.547 78.0938 356.672 79.25C353.828 80.375 350.844 80.9375 347.719 80.9375C339.906 80.9375 333.953 78.625 329.859 74C325.766 69.375 323.719 62.8906 323.719 54.5469C323.719 49.4219 324.734 44.8594 326.766 40.8594C328.828 36.8594 331.734 33.75 335.484 31.5312C339.234 29.2812 343.625 28.1562 348.656 28.1562C351.219 28.1562 353.719 28.4531 356.156 29.0469C358.594 29.6094 360.578 30.2031 362.109 30.8281C363.641 31.4219 364.609 31.8125 365.016 32L364.5 44.9375H358.266L356.812 36.7812Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                className="path-7"
                d="M382.734 56C382.734 61.25 384.016 65.4531 386.578 68.6094C389.141 71.7344 392.5 73.2969 396.656 73.2969C399.469 73.2969 402.078 72.9062 404.484 72.125C406.891 71.3438 408.875 70.5 410.438 69.5938C412 68.6562 412.781 68.125 412.781 68L416.156 72.9688C416.156 73.0938 415.109 73.875 413.016 75.3125C410.953 76.7188 408.391 78.0156 405.328 79.2031C402.297 80.3594 399.078 80.9375 395.672 80.9375C388.109 80.9375 382.375 78.6562 378.469 74.0938C374.594 69.5312 372.656 63.1875 372.656 55.0625C372.656 50 373.641 45.4219 375.609 41.3281C377.609 37.2344 380.391 34.0156 383.953 31.6719C387.547 29.3281 391.625 28.1562 396.188 28.1562C409.625 28.1562 416.344 35.6719 416.344 50.7031C416.344 51.7344 416.281 52.7656 416.156 53.7969C416.031 54.8281 415.938 55.5 415.875 55.8125L382.734 56ZM406.172 48.7812C406.172 44.875 405.328 41.7188 403.641 39.3125C401.984 36.875 399.328 35.6562 395.672 35.6562C391.953 35.6562 389 36.9062 386.812 39.4062C384.656 41.9062 383.422 45.0312 383.109 48.7812H406.172Z"
                stroke="#ffffff"
                strokeWidth="10"
                mask="url(#path-1-outside-1_1_5)"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex nav-links">
        {isLoggedIn() ? (
          <>
            <Link to="/landing">Dashboard</Link>
            <button type="button" onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="hover:text-emerald-200 hover:scale-125 hover:-translate-x-1" to="/login">Login</Link>
            <Link className="hover:text-emerald-200 hover:scale-125 hover:translate-x-1" to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
