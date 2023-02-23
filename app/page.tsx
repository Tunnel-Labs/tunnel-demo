import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Telecom.",
    description:
      "Communicate with your team using our built-in chat and video conferencing.",
    icon: PhoneIcon,
  },
  {
    name: "Commenting and threads.",
    description: "Leave comments and start threads on any HTML element.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Multiplayer coding.",
    description: "Collaborate on code with VSCode Live Share.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Organization dashboard.",
    description: "View your teams live tunnels, comments, and more.",
    icon: ComputerDesktopIcon,
  },
];

export default function Example() {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-12 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-md leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Introducing Tunnel v1.0.0.{" "}
                <a href="#" className="font-medium text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-8xl">
                Real-time collaboration for software teams
              </h1>
              <p className="mt-8 sm:mt-12 text-xl sm:text-3xl font-light leading-8 text-gray-600">
                Build, preview, and test web applications, APIs, webhooks, and
                more.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Put localhost on the web in 10 seconds
                </p>
                <p className="mt-6 text-lg sm:text-2xl font-light leading-8 text-gray-600">
                  Get a shareable URL for your local development environment
                </p>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                          node
                        </div>
                        <div className="border-r border-gray-600/10 py-2 px-4">
                          zsh
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14 text-white font-mono">
                      {`
                        % npx tunnelcli create --client 3000 --server 8080
                      `}
                    </div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                Zero configuration
              </h2>
              <p className="mt-6 text-xl sm:text-2xl font-light leading-8 text-gray-600">
                We use an intelligent proxy to configure a tunnel for your
                favorite frameworks.
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                alt="Next.js"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left grayscale"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                alt="Angular"
                width={200}
                height={100}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt="Express"
                width={147}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://mms.businesswire.com/media/20201208005380/en/845097/23/Apollo_Logo.jpg"
                alt="Apollo GraphQL"
                width={200}
                height={100}
              />
              <img
                className="max-h-12 w-full object-contain object-left grayscale"
                src="https://trpc.io/img/logo.svg"
                alt="tRPC"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left grayscale"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png"
                alt="Ruby on Rails"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Preview changes instantly
            </p>
            <p className="mt-6 text-lg sm:text-2xl font-light leading-8 text-gray-600">
              With Tunnel, you can preview changes to your codebase in real-time
              without any delay.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <img
              src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Robust collaboration tools
            </p>
            <p className="mt-6 text-lg sm:text-2xl font-light leading-8 text-gray-600">
              Tools that make every pull request better.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-3xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-3xl grid-cols-1 gap-x-6 gap-y-10 text-lg leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16 lg:gap-y-24">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-10">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline font-light">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Supercharge your development workflow.
                <br />
                Collaborate using Tunnel.
              </h2>
              <p className="mt-6 text-lg sm:text-2xl font-light leading-8 text-gray-300">
                To get started, sign up for early access.
              </p>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
