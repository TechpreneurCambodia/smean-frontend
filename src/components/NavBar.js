import React from 'react';
import { useState } from "react";

function NavBar({ isSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar pl-[32px] bg-white m-x-[20px] w-full sticky">
      <div
        className={`flex-1 flex items-center gap-5 ${isSidebarOpen ? 'pl-64' : 'pl-0'
          } transition-padding duration-300 ease-in-out`}
      >
        <a href="/home">
          <img
            className="h-[48px] max-w-full "
            alt="Tailwind CSS Navbar component"
            src="/smean_logo_03.png"

          />

        </a>
        {/* <a className="font-semibold text-xl cursor-pointer" href="/home">ស្មៀន/Smean</a> */}
      </div>
      <div className="flex-none gap-2 ">
        <div className="dropdown dropdown-end w-full">
          <div className="relative flex items-center justify-end">
            {/* Hamburger Button - Visible on Mobile */}
            <button
              className="sm:hidden p-2 border rounded-md hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16m-7 6h7" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {/* Main Content (Visible on larger screens, or when mobile menu is open) */}
            <div className={`absolute sm:static top-12 right-0 bg-white sm:bg-transparent sm:flex flex-col sm:flex-row items-start  sm:items-center gap-6 sm:gap-6 p-2 mt-4 sm:mr-4 sm:p-0 shadow-lg sm:shadow-none sm:z-10 z-20 ${isOpen ? "flex" : "hidden"}`}>

              {/* Profile, Dark Mode and Other Icons */}
              <div className="flex items-center justify-center gap-2 h-full border sm:border sm:p-[10px] p-2 rounded-lg sm:rounded-lg border-stone-200 ">
                <button className='flex items-center justify-center gap-2 h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none" className="ml-2">
                  <rect width="32" height="24" fill="#032EA1" />
                  <rect y="6" width="32" height="12" fill="#E00025" />
                  <g transform="translate(8, 6.5)">
                    <path d="M4.61914 4.31006H11.4471V6.93806H4.61914V4.31006Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M11.0991 5.7561H11.3091V6.7461H11.0991V5.7561ZM4.61914 5.2701H11.4471V5.5701H4.61914V5.2701ZM4.61914 4.8501H11.4471V5.1261H4.61914V4.8501Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M4.61914 4.44202H11.4471V4.70002H4.61914V4.44202Z" fill="white" stroke="#0F172A" strokeWidth="0.054" strokeLinejoin="bevel" />
                    <path d="M6.41969 5.7561H6.63569V6.7461H6.41969V5.7561ZM9.35969 5.7561H9.57569V6.7461H9.35969V5.7561ZM4.67969 5.7561H4.88969V6.7461H4.67969V5.7561ZM5.09969 5.7561H5.30969V6.7461H5.09969V5.7561ZM5.54969 5.7561H5.75969V6.7461H5.54969V5.7561ZM5.99969 5.7561H6.20969V6.7461H5.99969V5.7561ZM9.76769 5.7561H9.98369V6.7461H9.76769V5.7561ZM10.2177 5.7561H10.4337V6.7461H10.2177V5.7561ZM10.6677 5.7561H10.8837V6.7461H10.6677V5.7561Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M1.94922 7.07007C2.07468 7.00177 2.16917 6.88796 2.21322 6.75208H13.7992C13.8433 6.88796 13.9378 7.00177 14.0632 7.07007H1.94922Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.86008 0.308031C7.86008 0.308031 7.85408 0.0620303 7.99808 0.0560303C8.13608 0.0560303 8.13008 0.308031 8.13008 0.308031H7.86008ZM7.11008 3.57803V3.24803C7.11008 3.08003 6.94208 3.06803 6.94208 2.94803C6.94208 2.94803 6.91808 2.76803 6.96608 2.68403C7.03208 2.92403 7.14608 2.88203 7.14608 2.78003C7.14608 2.69603 7.08608 2.61203 6.94808 2.40203C6.90008 2.33603 6.93008 2.12603 6.99008 2.04803C7.01408 2.22803 7.04408 2.31803 7.12208 2.31803C7.17008 2.31803 7.20608 2.28803 7.20608 2.19803C7.20608 2.07803 7.12808 2.01803 7.08608 1.91003C7.0654 1.85628 7.06062 1.79772 7.07232 1.74133C7.08403 1.68494 7.11171 1.63311 7.15208 1.59203C7.18208 1.77203 7.17608 1.84403 7.25408 1.84403C7.41608 1.79003 7.25408 1.55603 7.21808 1.49603C7.18208 1.43003 7.27808 1.29203 7.27808 1.29203C7.32608 1.45403 7.33808 1.46603 7.39808 1.44803C7.47008 1.43003 7.45808 1.32803 7.37408 1.24403C7.32008 1.18403 7.32608 1.10603 7.38608 1.04603C7.44608 1.16003 7.51808 1.15403 7.52408 1.08203L7.47608 0.818031H8.52008L8.46608 1.07603C8.45408 1.14803 8.55008 1.16603 8.61008 1.04603C8.67008 1.10603 8.67608 1.19003 8.62208 1.24403C8.53808 1.32803 8.52608 1.43003 8.59808 1.44803C8.65808 1.46603 8.67008 1.44803 8.71808 1.29203C8.71808 1.29203 8.80808 1.38203 8.77808 1.49603C8.74208 1.55603 8.58008 1.79603 8.74208 1.84403C8.82008 1.84403 8.81408 1.77203 8.84408 1.59203C8.88343 1.63376 8.91 1.68589 8.92063 1.74225C8.93127 1.79861 8.92552 1.85684 8.90408 1.91003C8.86808 2.01803 8.78408 2.07803 8.78408 2.19803C8.78408 2.28803 8.82608 2.31803 8.87408 2.31803C8.95208 2.31803 8.98208 2.23403 9.00608 2.04803C9.06608 2.12603 9.09608 2.33603 9.04808 2.40803C8.91008 2.61203 8.84408 2.69603 8.84408 2.78003C8.84408 2.88203 8.96408 2.92403 9.02408 2.68403C9.07808 2.76803 9.05408 2.94803 9.05408 2.94803C9.05408 3.06803 8.89208 3.08003 8.88608 3.24803V3.57803H7.11008ZM7.54208 0.818031L7.51808 0.632032H8.47208L8.44808 0.818031H7.54208ZM7.60208 0.62603L7.59008 0.47603H8.40008L8.38208 0.62603H7.60208ZM7.74008 0.470032L7.72208 0.314033H8.26208L8.25608 0.470032H7.74008ZM9.72008 7.07003C9.60008 7.02803 9.42008 6.89603 9.42008 6.77003V5.31203L9.57608 5.10803H6.42008L6.57008 5.31203V6.77003C6.57008 6.89603 6.45008 7.02803 6.33008 7.07003H9.72008Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M6.97266 5.75598H7.18866V6.74598H6.97266V5.75598ZM8.79666 5.75598H9.01266V6.74598H8.79666V5.75598Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />

                    <path d="M6.35952 3.45203V5.10802H9.59952V3.45203C9.56208 3.4657 9.52842 3.48806 9.5013 3.51726C9.47419 3.54646 9.45438 3.58168 9.44352 3.62003V4.32802H6.52152V3.62003C6.52152 3.62003 6.48552 3.50003 6.35352 3.45203H6.35952Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M9.15514 7.07008C9.04714 7.02808 8.81914 6.89608 8.81914 6.77008V5.13808C8.84314 5.04808 8.96314 4.99408 9.04114 4.93408H6.89914C7.00114 4.99408 7.11514 5.03608 7.15714 5.13808V6.77008C7.15714 6.89608 6.97714 7.02808 6.86914 7.07008H9.15514Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M9.44348 4.95199V3.77599H9.14948V3.66199H6.82148V3.78199H6.52148V4.95199H9.44348ZM8.69948 7.06999C8.59148 7.02799 8.44148 6.89599 8.44148 6.76999V5.37799L8.52548 5.25199H7.46348L7.55348 5.37199V6.76999C7.55348 6.89599 7.39748 7.02799 7.29548 7.06999H8.69948Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.72266 5.25208H8.26266V7.07007H7.72266V5.25208Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M8.54411 4.85007C8.54411 4.73007 8.89211 4.72407 9.07211 4.62207H6.91211C7.09211 4.72407 7.43411 4.73007 7.43411 4.85007L7.50611 5.08407L8.40611 5.12007L8.54411 4.85007Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M8.96397 3.57806C8.96397 3.28406 8.97597 3.17606 9.06597 3.17606V4.10006C8.84397 4.18406 8.68797 4.46006 8.68797 4.46006H7.29597C7.29597 4.46006 7.13997 4.18406 6.91797 4.10006V3.17006C7.02597 3.17006 7.02597 3.29006 7.02597 3.57206L8.96397 3.57806ZM9.06597 3.45806C9.06597 3.12206 9.35997 3.08606 9.35997 3.08606V3.38606C9.24597 3.38006 9.19197 3.48206 9.19197 3.62606C9.19197 3.77606 9.28197 3.77606 9.28197 3.77606V4.62806H9.06597V3.45806Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M6.91705 3.45806C6.91705 3.12206 6.62305 3.08606 6.62305 3.08606V3.38606C6.73705 3.38006 6.79105 3.48206 6.79105 3.62606C6.79105 3.77606 6.70105 3.77606 6.70105 3.77606V4.62806H6.91705V3.45806Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.48808 1.13599H8.52008M7.36808 1.45999H8.62808M7.24808 1.84999H8.74208M7.12208 2.32399H8.89208M7.08008 2.86399H8.90408" stroke="#0F172A" strokeWidth="0.048" />
                    <path d="M6.52734 4.64001H9.44334M7.45134 4.64001H8.53134V5.03601H7.45134V4.64001Z" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.32031 3.75209C7.50031 3.96809 7.47631 4.33409 7.47631 4.55009H8.52031C8.52031 4.33409 8.49631 3.96809 8.67631 3.75209H7.32031ZM7.90231 1.29209L7.75831 1.21409V1.00409C7.81831 1.02209 7.87831 1.02809 7.89031 1.12409C7.90831 0.986092 7.95031 0.998092 8.00431 0.944092C8.06431 0.998092 8.09431 0.986092 8.11831 1.12409C8.11831 1.02809 8.19031 1.02209 8.24431 1.00409V1.21409L8.10631 1.28609L7.90231 1.29209Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.89039 1.63401L7.65039 1.466V1.28C7.74039 1.298 7.83039 1.31001 7.84239 1.41201C7.86639 1.26201 7.92039 1.19 8.00439 1.13C8.08239 1.19 8.13639 1.26201 8.16639 1.41201C8.17239 1.31001 8.26839 1.298 8.34639 1.28V1.47201L8.11239 1.63401H7.89039Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.87284 2.16807L7.60284 1.92807V1.64607C7.69884 1.67007 7.80684 1.68207 7.81884 1.83207C7.84884 1.62207 7.90884 1.50807 7.99884 1.42407C8.09484 1.50807 8.15484 1.62207 8.19084 1.83207C8.20284 1.68207 8.31084 1.67007 8.40684 1.64607V1.92807L8.13084 2.16807H7.87284ZM8.37684 2.48607L8.13684 2.82807H7.85484L7.60884 2.48607H8.37684ZM7.46484 3.05607C7.58484 3.12207 7.63284 3.26007 7.64484 3.51207H8.34084C8.35284 3.26007 8.40084 3.12207 8.52084 3.05607H7.46484Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />

                    <path d="M8.53117 2.48003V2.14403C8.47952 2.15504 8.4315 2.17898 8.39162 2.21361C8.35174 2.24824 8.32131 2.29243 8.30317 2.34203C8.30317 2.22203 8.15317 1.96403 7.99117 1.83203C7.82917 1.97603 7.67317 2.21603 7.67917 2.33603C7.64917 2.24603 7.57117 2.17403 7.45117 2.14403V2.48603L8.53117 2.48003Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M8.5803 3.05608V2.72008C8.4543 2.75608 8.3703 2.82208 8.3343 2.91808C8.3343 2.79808 8.1723 2.54008 7.9923 2.40808C7.8123 2.55808 7.6443 2.79208 7.6503 2.91808C7.6203 2.82808 7.5303 2.75608 7.4043 2.72008V3.06208L8.5803 3.05608Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M8.72391 3.758V3.362C8.59896 3.40102 8.49104 3.48144 8.41791 3.59C8.41791 3.38 8.17791 3.05 7.99191 2.948C7.79991 3.056 7.56591 3.392 7.56591 3.59C7.49091 3.48068 7.38084 3.40025 7.25391 3.362V3.758H8.72391Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M8.63975 4.63997V4.23198C8.49575 4.28598 8.45975 4.41798 8.41175 4.51398C8.42975 4.09998 8.18375 3.66197 7.99175 3.54797C7.79975 3.66197 7.54775 4.11197 7.57175 4.50797C7.52375 4.42397 7.48175 4.28598 7.34375 4.23198V4.63398L8.63975 4.63997Z" fill="white" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M8.54345 5.25206V4.84406C8.39345 4.88006 8.38745 4.93406 8.33945 5.02406C8.35745 4.77806 8.18345 4.49606 7.99145 4.38806C7.79945 4.49606 7.63145 4.77806 7.64345 5.02406C7.59545 4.93406 7.58945 4.88006 7.43945 4.84406V5.25206H8.54345Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.21936 6.75202V5.52802C2.17736 5.37202 2.03936 5.22802 1.94336 5.20402V4.12402L2.16536 4.24402L2.42336 5.37802V6.75802L2.21936 6.75202Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.21936 6.758V5.528C2.17736 5.372 2.03936 5.228 1.94336 5.204V4.052C2.09336 4.052 2.16536 4.244 2.16536 4.244L2.42336 5.378V6.752L2.21936 6.758Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.05664 7.07001C2.15864 7.02801 2.30864 6.89601 2.30864 6.77001V5.23401L2.23664 5.11401H4.85864L4.75664 5.23401V6.77001C4.76104 6.8336 4.78225 6.89488 4.81809 6.94759C4.85393 7.0003 4.90312 7.04254 4.96064 7.07001H2.05664Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M4.42808 7.07003C4.32608 7.02803 4.17608 6.89603 4.17608 6.77003V5.31203L4.39208 5.10803H2.61608L2.83208 5.31203V6.77003C2.83208 6.89603 2.68208 7.02803 2.58008 7.07003H4.42808Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M4.18217 7.07007C4.08017 7.02807 3.92417 6.89607 3.92417 6.77007V5.45007L4.06817 5.25208H2.94017L3.08417 5.45007V6.77007C3.08417 6.89607 2.93417 7.02807 2.82617 7.07007H4.18217Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.23842 5.25208H3.77242V7.07607H3.23242L3.23842 5.25208Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.50045 5.756H2.71645V6.746H2.50045V5.756ZM4.34845 5.756H4.55845V6.746H4.34245L4.34845 5.756ZM2.31445 4.088H2.57845V5.108H2.31445V4.088ZM2.31445 3.896H2.57245V4.088H2.31445V3.896ZM4.45045 4.31H4.81645V5.09H4.45045V4.31Z" fill="white" />
                    <path d="M2.31445 4.088H2.57845V5.108H2.31445V4.088ZM2.31445 4.088H2.57245V3.896H2.31445V4.088ZM2.50045 5.756H2.71645V6.746H2.50045V5.756ZM4.34845 5.756H4.55845V6.746H4.34245L4.34845 5.756ZM4.45045 4.31H4.81645V5.09H4.45045V4.31Z" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />

                    <path d="M2.57416 5.09602V3.35602C2.64616 3.35602 2.65816 3.61402 2.82616 3.61402C2.91616 3.61402 2.91016 3.50602 2.85616 3.42202C2.81416 3.34402 2.76016 3.24202 2.83216 3.04402C2.88616 3.19402 3.01816 3.24202 2.99416 3.15202C2.95216 2.99002 2.82616 2.96002 2.92216 2.71402C2.95216 2.91802 3.08416 2.91202 3.05416 2.79202C3.01816 2.65402 2.94016 2.59402 3.03616 2.40202C3.09016 2.62402 3.15616 2.61202 3.15616 2.47402C3.15616 2.27002 3.15616 2.05402 3.40816 1.97602C3.40816 1.97602 3.42616 1.79602 3.52216 1.79602C3.61216 1.79602 3.63016 1.97602 3.63016 1.97602C3.88816 2.05402 3.88216 2.27602 3.88216 2.47402C3.88216 2.61202 3.94816 2.62402 4.00216 2.40202C4.09816 2.59402 4.02016 2.65402 3.98416 2.79202C3.95416 2.91202 4.08616 2.91802 4.11616 2.71402C4.21216 2.96002 4.08616 2.99002 4.04416 3.15202C4.02016 3.24202 4.15216 3.19402 4.20616 3.04402C4.27816 3.24202 4.22416 3.34402 4.18216 3.42202C4.13416 3.50602 4.12216 3.61402 4.21216 3.61402C4.38016 3.61402 4.39216 3.36202 4.46416 3.36202V5.09602H2.57416ZM2.16016 3.78202V5.10802H2.31016V3.78202C2.25616 3.75202 2.20816 3.75202 2.16016 3.78202Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.17188 4.63998C2.35788 4.73598 2.54388 4.84998 2.59188 5.10798H2.17188V4.63998ZM4.76388 4.24398V5.10798H4.88387V4.24398C4.84787 4.22598 4.79387 4.21998 4.76388 4.24398Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M4.88353 4.63996C4.69753 4.72996 4.51153 4.83797 4.46353 5.10197H4.88353V4.63996ZM3.64753 2.61796L3.75553 2.52796V2.40796C3.71953 2.40796 3.69553 2.42596 3.66553 2.46796C3.65388 2.42943 3.6346 2.39364 3.60883 2.36271C3.58306 2.33179 3.55133 2.30637 3.51553 2.28796C3.47921 2.30505 3.44669 2.32926 3.41989 2.35915C3.3931 2.38904 3.37257 2.424 3.35953 2.46197C3.32953 2.41997 3.31153 2.41397 3.26953 2.40197V2.52197L3.37753 2.61796H3.64753Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.70753 2.91208L3.75553 2.79808V2.64808C3.71953 2.64808 3.69553 2.66608 3.66553 2.70808C3.65388 2.66954 3.6346 2.63375 3.60883 2.60283C3.58306 2.5719 3.55133 2.54648 3.51553 2.52808C3.47921 2.54517 3.44669 2.56938 3.41989 2.59926C3.3931 2.62915 3.37257 2.66411 3.35953 2.70208C3.32953 2.66008 3.31153 2.65408 3.26953 2.64808V2.79808L3.31753 2.91208H3.70753Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.71844 3.30801L3.87444 3.11001V2.91801C3.81444 2.91801 3.78444 2.94801 3.74244 3.01401C3.70044 2.87601 3.62244 2.85201 3.51444 2.78601C3.40044 2.84601 3.32244 2.87601 3.28644 3.00801C3.23844 2.94201 3.20844 2.92401 3.14844 2.91801V3.11001L3.31044 3.30801H3.71844Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.76045 3.69805C3.76045 3.69805 3.95245 3.53605 3.95845 3.44605V3.23605C3.88645 3.24205 3.82045 3.26005 3.76645 3.35005C3.71845 3.17605 3.64645 3.12805 3.51445 3.05005C3.37645 3.12805 3.30445 3.17605 3.26245 3.35005C3.20245 3.26005 3.14245 3.24205 3.06445 3.23005V3.44605C3.11485 3.54122 3.18191 3.62657 3.26245 3.69805H3.76045Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.83988 4.41805C3.83988 4.41805 4.10388 4.13605 4.10988 4.02205V3.69805C4.01388 3.71005 3.91788 3.77605 3.84588 3.91405C3.78588 3.64405 3.68988 3.45805 3.51588 3.32605C3.33588 3.45805 3.23988 3.64405 3.17988 3.91405C3.10788 3.77605 3.01788 3.71005 2.92188 3.69805V4.02205C2.93988 4.13605 3.18588 4.41805 3.18588 4.41805H3.83988Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.83988 4.84399C3.83988 4.84399 4.06188 4.62198 4.10988 4.52598V4.20199C4.01388 4.21399 3.91788 4.27999 3.84588 4.41199C3.82982 4.30281 3.79242 4.19787 3.73579 4.10315C3.67917 4.00844 3.60444 3.92581 3.51588 3.85999C3.33588 3.99199 3.23988 4.14199 3.17988 4.41199C3.10788 4.27999 3.01788 4.21399 2.92188 4.20199V4.52598C2.98188 4.62198 3.18588 4.84399 3.18588 4.84399H3.83988Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />

                    <path d="M3.93027 5.09604C3.87027 4.81404 3.81027 4.60404 3.50427 4.39404C3.19227 4.60404 3.13827 4.81404 3.07227 5.09604H3.93027Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M4.09187 5.25199V4.84399C3.94788 4.90399 3.82188 4.98199 3.77388 5.07199C3.72588 4.84399 3.62388 4.74799 3.49788 4.60999C3.37188 4.74799 3.28788 4.84999 3.23388 5.07199C3.18588 4.98199 3.05987 4.89799 2.92188 4.84399V5.25199H4.09187Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M13.7826 6.75202V5.52802C13.8246 5.37202 13.9626 5.22802 14.0586 5.20402V4.12402L13.8366 4.24402L13.5786 5.37802V6.75802L13.7826 6.75202Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M13.7826 6.758V5.528C13.8246 5.372 13.9626 5.228 14.0586 5.204V4.052C13.9086 4.052 13.8366 4.244 13.8366 4.244L13.5786 5.378V6.752L13.7826 6.758Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M13.9453 7.07001C13.8433 7.02801 13.6933 6.89601 13.6933 6.77001V5.23401L13.7653 5.11401H11.1433L11.2453 5.23401V6.77001C11.2409 6.8336 11.2197 6.89488 11.1839 6.94759C11.148 7.0003 11.0988 7.04254 11.0413 7.07001H13.9453Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M11.5739 7.07003C11.6759 7.02803 11.8259 6.89603 11.8259 6.77003V5.31203L11.6099 5.10803H13.3859L13.1699 5.31203V6.77003C13.1699 6.89603 13.3199 7.02803 13.4219 7.07003H11.5739Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M11.8198 7.07007C11.9218 7.02807 12.0778 6.89607 12.0778 6.77007V5.45007L11.9338 5.25208H13.0618L12.9178 5.45007V6.77007C12.9178 6.89607 13.0678 7.02807 13.1758 7.07007H11.8198Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.7635 5.25208H12.2295V7.07607H12.7695L12.7635 5.25208Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M13.5015 5.756H13.2855V6.746H13.5015V5.756ZM11.6535 5.756H11.4435V6.746H11.6595L11.6535 5.756ZM13.6875 4.088H13.4235V5.108H13.6875V4.088ZM13.6875 3.896H13.4295V4.088H13.6875V3.896ZM11.5515 4.31H11.1855V5.09H11.5515V4.31Z" fill="white" />
                    <path d="M13.6875 4.088H13.4235V5.108H13.6875V4.088ZM13.6875 4.088H13.4295V3.896H13.6875V4.088ZM13.5015 5.756H13.2855V6.746H13.5015V5.756ZM11.6535 5.756H11.4435V6.746H11.6595L11.6535 5.756ZM11.5515 4.31H11.1855V5.09H11.5515V4.31Z" stroke="#0F172A" strokeWidth="0.06" strokeLinejoin="bevel" />
                    <path d="M13.4278 5.09602V3.35602C13.3558 3.35602 13.3438 3.61402 13.1758 3.61402C13.0858 3.61402 13.0918 3.50602 13.1458 3.42202C13.1878 3.34402 13.2418 3.24202 13.1698 3.04402C13.1158 3.19402 12.9838 3.24202 13.0078 3.15202C13.0498 2.99002 13.1758 2.96002 13.0798 2.71402C13.0498 2.91802 12.9178 2.91202 12.9478 2.79202C12.9838 2.65402 13.0618 2.59402 12.9658 2.40202C12.9118 2.62402 12.8458 2.61202 12.8458 2.47402C12.8458 2.27002 12.8458 2.05402 12.5938 1.97602C12.5938 1.97602 12.5758 1.79602 12.4798 1.79602C12.3898 1.79602 12.3718 1.97602 12.3718 1.97602C12.1138 2.05402 12.1198 2.27602 12.1198 2.47402C12.1198 2.61202 12.0538 2.62402 11.9998 2.40202C11.9038 2.59402 11.9818 2.65402 12.0178 2.79202C12.0478 2.91202 11.9158 2.91802 11.8858 2.71402C11.7898 2.96002 11.9158 2.99002 11.9578 3.15202C11.9818 3.24202 11.8498 3.19402 11.7958 3.04402C11.7238 3.24202 11.7778 3.34402 11.8198 3.42202C11.8678 3.50602 11.8798 3.61402 11.7898 3.61402C11.6218 3.61402 11.6098 3.36202 11.5378 3.36202V5.09602H13.4278ZM13.8418 3.78202V5.10802H13.6918V3.78202C13.7458 3.75202 13.7938 3.75202 13.8418 3.78202Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M13.8301 4.63998C13.6441 4.73598 13.4581 4.84998 13.4101 5.10798H13.8301V4.63998ZM11.2381 4.24398V5.10798H11.1181V4.24398C11.1541 4.22598 11.2081 4.21998 11.2381 4.24398Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />

                    <path d="M11.1184 4.63996C11.3044 4.72996 11.4904 4.83797 11.5384 5.10197H11.1184V4.63996ZM12.3544 2.61796L12.2464 2.52796V2.40796C12.2824 2.40796 12.3064 2.42596 12.3364 2.46796C12.3481 2.42943 12.3674 2.39364 12.3931 2.36271C12.4189 2.33179 12.4506 2.30637 12.4864 2.28796C12.5227 2.30505 12.5553 2.32926 12.5821 2.35915C12.6089 2.38904 12.6294 2.424 12.6424 2.46197C12.6724 2.41997 12.6904 2.41397 12.7324 2.40197V2.52197L12.6244 2.61796H12.3544Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.2944 2.91208L12.2464 2.79808V2.64808C12.2824 2.64808 12.3064 2.66608 12.3364 2.70808C12.3481 2.66954 12.3674 2.63375 12.3931 2.60283C12.4189 2.5719 12.4506 2.54648 12.4864 2.52808C12.5227 2.54517 12.5553 2.56938 12.5821 2.59926C12.6089 2.62915 12.6294 2.66411 12.6424 2.70208C12.6724 2.66008 12.6904 2.65408 12.7324 2.64808V2.79808L12.6844 2.91208H12.2944Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.2835 3.30801L12.1275 3.11001V2.91801C12.1875 2.91801 12.2175 2.94801 12.2595 3.01401C12.3015 2.87601 12.3795 2.85201 12.4875 2.78601C12.6015 2.84601 12.6795 2.87601 12.7155 3.00801C12.7635 2.94201 12.7935 2.92401 12.8535 2.91801V3.11001L12.6915 3.30801H12.2835Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.2415 3.69805C12.2415 3.69805 12.0495 3.53605 12.0435 3.44605V3.23605C12.1155 3.24205 12.1815 3.26005 12.2355 3.35005C12.2835 3.17605 12.3555 3.12805 12.4875 3.05005C12.6255 3.12805 12.6975 3.17605 12.7395 3.35005C12.7995 3.26005 12.8595 3.24205 12.9375 3.23005V3.44605C12.8871 3.54122 12.82 3.62657 12.7395 3.69805H12.2415Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.1621 4.41805C12.1621 4.41805 11.8981 4.13605 11.8921 4.02205V3.69805C11.9881 3.71005 12.0841 3.77605 12.1561 3.91405C12.2161 3.64405 12.3121 3.45805 12.4861 3.32605C12.6661 3.45805 12.7621 3.64405 12.8221 3.91405C12.8941 3.77605 12.9841 3.71005 13.0801 3.69805V4.02205C13.0621 4.13605 12.8161 4.41805 12.8161 4.41805H12.1621Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.1621 4.84399C12.1621 4.84399 11.9401 4.62198 11.8921 4.52598V4.20199C11.9881 4.21399 12.0841 4.27999 12.1561 4.41199C12.1721 4.30281 12.2095 4.19787 12.2662 4.10315C12.3228 4.00844 12.3975 3.92581 12.4861 3.85999C12.6661 3.99199 12.7621 4.14199 12.8221 4.41199C12.8941 4.27999 12.9841 4.21399 13.0801 4.20199V4.52598C13.0201 4.62198 12.8161 4.84399 12.8161 4.84399H12.1621Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M12.0717 5.09604C12.1317 4.81404 12.1917 4.60404 12.4977 4.39404C12.8097 4.60404 12.8637 4.81404 12.9297 5.09604H12.0717Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M11.9101 5.25199V4.84399C12.0541 4.90399 12.1801 4.98199 12.2281 5.07199C12.2761 4.84399 12.3781 4.74799 12.5041 4.60999C12.6301 4.74799 12.7141 4.84999 12.7681 5.07199C12.8161 4.98199 12.9421 4.89799 13.0801 4.84399V5.25199H11.9101Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M0.641953 8.55805H15.36V9.30805H0.641953V8.55805ZM0.251953 9.30805H15.75V10.0581H0.251953V9.30805ZM1.41595 7.43005H14.58V7.91605H1.41595V7.43005Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M1.03125 7.91598H14.9753V8.55198H1.03125V7.91598ZM1.64325 7.05798H14.3632V7.42998H1.64325V7.05798Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.02344 7.05798H3.98344V10.058H3.02344V7.05798Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M3.24037 7.05798H3.77437V10.058H3.23438L3.24037 7.05798ZM7.50037 7.05798H8.46037V10.058H7.50037V7.05798Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M7.72266 7.05798H8.26266V10.058H7.72266V7.05798ZM12.0127 7.05798H12.9727V10.058H12.0127V7.05798Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />

                    <path d="M12.2227 7.05798H12.7627V10.058H12.2227V7.05798Z" fill="white" stroke="#0F172A" strokeWidth="0.06" />
                    <path d="M2.2207 6.75208H13.8007M3.2287 9.68007H3.7807M3.2287 9.30208H3.7807M3.2287 8.93007H3.7807M3.2287 8.55208H3.7807M3.2287 8.18007H3.7807M3.2287 7.80208H3.7807M3.2287 7.43007H3.7807M7.7287 9.68007H8.2447M7.7287 9.30208H8.2447M7.7287 8.93007H8.2447M7.7287 8.55208H8.2447M7.7287 8.18007H8.2447M7.7287 7.80208H8.2447M7.7287 7.43007H8.2447M12.2167 9.68007H12.7687M12.2167 9.30208H12.7687M12.2167 8.93007H12.7687M12.2167 8.55208H12.7687M12.2167 8.18007H12.7687M12.2167 7.80208H12.7687M12.2167 7.43007H12.7687" stroke="#0F172A" strokeWidth="0.06" />
                  </g>
                </svg>
                <span>kh</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.41 8.57996L12 13.17L16.59 8.57996L18 9.99996L12 16L6 9.99996L7.41 8.57996Z" fill="#64748B" />
                </svg>
                </button>
              </div>
              {/* Dark/Light Mode Icon */}
              <div className="h-full">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" className="rounded-sm" >
                  <path d="M7.5 1.99997C5.71 3.14997 4.5 5.17997 4.5 7.49997C4.5 9.81997 5.71 11.85 7.53 13C4.46 13 2 10.54 2 7.49997C2 6.04128 2.57946 4.64233 3.61091 3.61088C4.64236 2.57943 6.04131 1.99997 7.5 1.99997ZM19.07 3.49997L20.5 4.92997L4.93 20.5L3.5 19.07L19.07 3.49997ZM12.89 5.92997L11.41 4.99997L9.97 5.99997L10.39 4.29997L9 3.23997L10.75 3.11997L11.33 1.46997L12 3.09997L13.73 3.12997L12.38 4.25997L12.89 5.92997ZM9.59 9.53997L8.43 8.80997L7.31 9.58997L7.65 8.26997L6.56 7.43997L7.92 7.34997L8.37 6.05997L8.88 7.32997L10.24 7.35997L9.19 8.22997L9.59 9.53997ZM19 13.5C19 14.9587 18.4205 16.3576 17.3891 17.3891C16.3576 18.4205 14.9587 19 13.5 19C12.28 19 11.15 18.6 10.24 17.93L17.93 10.24C18.6 11.15 19 12.28 19 13.5ZM14.6 20.08L17.37 18.93L17.13 22.28L14.6 20.08ZM18.93 17.38L20.08 14.61L22.28 17.15L18.93 17.38ZM20.08 12.42L18.94 9.63997L22.28 9.87997L20.08 12.42ZM9.63 18.93L12.4 20.08L9.87 22.27L9.63 18.93Z" fill="#64748B" />
                </svg>
                </button>
              </div>
              <div tabIndex={0} role="button" className=" avatar ">

                {/* Profile Icon */}
                <div tabIndex={0} role="button" className="avatar">
                  <div className="h-[48px] rounded-full border hover:shadow-lg">
                    <img alt="user profile icon" src="/SOMETH.jpg" />
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;