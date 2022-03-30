import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" className="menu__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6332 8.20475L21.6643 11.1344C22.1119 11.5677 22.1119 12.2687 21.6643 12.7013C21.4403 12.9178 21.1468 13.0256 20.8532 13.0256C20.5603 13.0256 20.2673 12.9179 20.0425 12.7013L12.4631 5.37546C12.2175 5.13881 11.7824 5.13881 11.5355 5.37617L3.95736 12.7013C3.50992 13.1345 2.78315 13.1345 2.33555 12.7013C1.88815 12.2687 1.88815 11.5676 2.33555 11.1344L9.91443 3.8094C11.0277 2.73148 12.9678 2.72957 14.0836 3.80745L16.3405 5.98885V4.82056C16.3405 4.20865 16.8535 3.71275 17.4861 3.71275C18.1202 3.71275 18.6332 4.20865 18.6332 4.82056V8.20475ZM11.6018 7.47906C11.8214 7.26636 12.1779 7.26636 12.3981 7.47906L19.0638 13.9203C19.1695 14.022 19.2287 14.1608 19.2287 14.3057V19.0038C19.2287 20.1062 18.3038 21 17.1633 21H13.8627V16.0597H10.1365V21H6.83593C5.69536 21 4.77052 20.1062 4.77052 19.0037V14.3057C4.77052 14.1608 4.83019 14.022 4.93544 13.9203L11.6018 7.47906Z" fill="#524151"/>
              </svg>
            </NavLink>
          </li>
        
          <li className="menu__item">
            <NavLink to="/cases/" className="menu__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_170_4)">
                  <path d="M21.3119 11.4606C20.9723 10.9772 20.5317 10.5845 20.0204 10.3058C20.0617 10.0645 20.0825 9.82005 20.0825 9.57477C20.0825 7.18489 18.1382 5.24055 15.7482 5.24055C15.2912 5.24055 14.8459 5.31036 14.4184 5.4486C13.9478 4.66446 13.3014 3.99739 12.5258 3.49997C11.5702 2.88712 10.4626 2.56317 9.32258 2.56317C6.04687 2.56317 3.38191 5.22813 3.38191 8.50383C3.38191 9.1802 3.49332 9.83809 3.71375 10.4663C2.65781 11.162 2 12.3557 2 13.641C2 15.7357 3.70414 17.4398 5.79875 17.4398H9.33074V17.2306C8.18262 16.3843 7.50648 15.0567 7.50648 13.6174C7.50645 11.9198 8.44703 10.3855 9.96113 9.61325L10.6326 9.27079L11.4046 12.6848H12.5954L13.3674 9.2704L14.0388 9.61282C15.553 10.385 16.4936 11.9195 16.4935 13.6174C16.4935 15.0572 15.8173 16.3852 14.6693 17.2316V17.4397H18.2013C20.2959 17.4397 22 15.7356 22 13.6409C22 12.8554 21.7621 12.1015 21.3119 11.4606Z" fill="#524151"/>
                  <path d="M13.4974 16.5997L13.7705 16.4272C14.7418 15.8138 15.3217 14.7634 15.3217 13.6174C15.3217 12.6277 14.8892 11.7129 14.1573 11.0904L13.5318 13.8566H10.4682L9.84272 11.0908C9.11088 11.7133 8.67831 12.6279 8.67834 13.6174C8.67834 14.7628 9.25823 15.8129 10.2295 16.4262L10.5026 16.5987V21.4368H13.4974L13.4974 16.5997Z" fill="#524151"/>
                </g>
                <defs>
                  <clipPath id="clip0_170_4">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
          </li>
        
          <li className="menu__item">
            <NavLink to="/services/" className="menu__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3333 5.70001H19.7083C20.975 5.70001 22 6.80701 22 8.17501V10.236L12.2 13.764C12.1333 13.791 12.0667 13.8 12 13.8C11.9333 13.8 11.8667 13.791 11.8 13.764L2 10.236V8.17501C2 6.80701 3.025 5.70001 4.29167 5.70001H8.66667V4.8C8.66667 3.8073 9.41417 3 10.3333 3H13.6667C14.5858 3 15.3333 3.8073 15.3333 4.8V5.70001ZM10.3333 5.70001V4.8H13.6667V5.70001H10.3333ZM12.5917 15.042C12.4417 15.105 12.225 15.15 12 15.15C11.775 15.15 11.5583 15.105 11.3583 15.024L2 11.658V18.525C2 19.893 3.025 21 4.29167 21H19.7083C20.975 21 22 19.893 22 18.525V11.658L12.5917 15.042Z" fill="#524151"/>
              </svg>
            </NavLink>
          </li>
        
          <li className="menu__item">
            <NavLink to="/contacts/" className="menu__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00004 8.4H1.8C1.35817 8.4 1 8.04183 1 7.6C1 7.15817 1.35817 6.8 1.8 6.8H3.00396C3.10894 4.13129 5.30559 2 8.00003 2H18C20.7614 2 23 4.23858 23 7V17C23 19.7614 20.7614 22 18 22H8.00003C5.3056 22 3.10895 19.8687 3.00396 17.2H1.8C1.35817 17.2 1 16.8418 1 16.4C1 15.9582 1.35817 15.6 1.8 15.6H3.00004V12.8H1.8C1.35817 12.8 1 12.4419 1 12C1 11.5582 1.35817 11.2 1.8 11.2H3.00004V8.4ZM14.4572 12.7071C15.0303 12.2685 15.3999 11.5774 15.3999 10.8C15.3999 9.47451 14.3254 8.39999 12.9999 8.39999C11.6745 8.39999 10.5999 9.47451 10.5999 10.8C10.5999 11.5774 10.9696 12.2685 11.5427 12.7071C10.2805 13.2665 9.39996 14.5304 9.39996 16H10.2C10.2 14.4536 11.4536 13.2 13 13.2C14.5464 13.2 15.8 14.4536 15.8 16H16.6C16.6 14.5304 15.7194 13.2665 14.4572 12.7071ZM13 12.4C13.8836 12.4 14.6 11.6836 14.6 10.8C14.6 9.91633 13.8836 9.19999 13 9.19999C12.1163 9.19999 11.4 9.91633 11.4 10.8C11.4 11.6836 12.1163 12.4 13 12.4Z" fill="#524151"/>
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Menu;