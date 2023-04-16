import profile from "./assets/anya.gif";

function App() {
  return (
    <>
      <div className="flex justify-center	items-center h-screen">
        <div className="w-96 h-96 rounded-3xl flex items-center flex-col p-3.5 flex justify-center items-center bg-rose-400 shadow-2xl">
          <img
            src={profile}
            alt="foto de Endi Oliveira"
            class="rounded-full w-32 h-32 p-2"
          />
          <h1 className="text-white text-3xl">Endi Oliveira</h1>
          <p className="text-sm text-white font-extralight">
            Desenvolvedora Web
          </p>
          <br />
          <p className="text-white text-center">
            Nesse perfil eu posto coisas relacionadas a programação e estudos no
            geral.
          </p>

          <div className="flex justify-center	items-center gap-4 p-6	">
            <a href="https://github.com/endioliveira" target="_blank">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a href="https://www.instagram.com/medeiros_eo/" target="_blank">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/endioliveira/" target="_blank">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://portfolio-endioliveira.vercel.app/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-monitor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
