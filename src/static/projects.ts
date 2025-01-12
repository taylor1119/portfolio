import imageSources from './img-links'

const PROJECTS = [
	{
		name: 'Online Store',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/taylor1119/e-commerce-app',
		thumbnail: imageSources.projects['e-commerce-app'][0],
		images: imageSources.projects['e-commerce-app'],
		tags: ['NextJS', 'TailwindCSS', 'Typescript', 'Stripe', 'RecoilJS'],
	},

	{
		name: 'Dashboard (frontend only)',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/taylor1119/dashboard-nextjs',
		thumbnail: imageSources.projects['dashboard-nextjs'][0],
		images: imageSources.projects['dashboard-nextjs'],
		tags: ['NextJS', 'Typescript', 'RecoilJS', 'TailwindCSS', 'Tremor'],
	},

	{
		name: 'Airbnb Clone',
		links: ['https://taylor1119.github.io/airbnb-clone/'],
		repo: 'https://github.com/taylor1119/airbnb-clone',
		thumbnail: imageSources.projects['airbnb-clone'][1],
		images: imageSources.projects['airbnb-clone'],
		tags: [
			'NextJS',
			'Typescript',
			'TailwindCSS',
			'Next-auth',
			'Jotai',
			'Drizzle-ORM',
			'tRPC',
		],
	},

	{
		name: 'Events - Admin',
		links: ['https://events-admin-dashboard.vercel.app/'],
		thumbnail: imageSources.projects['events-admin'][0],
		images: imageSources.projects['events-admin'],
		tags: [
			'ReactJS',
			'Typescript',
			'TailwindCSS',
			'ExpressJS',
			'Firebase',
			'PostgresSQL',
		],
	},

	{
		name: 'Cash Flow',
		links: ['https://cash-flow-web.vercel.app/'],
		thumbnail: imageSources.projects['cash-flow'][0],
		images: imageSources.projects['cash-flow'],
		tags: [
			'ReactJS',
			'Typescript',
			'TailwindCSS',
			'Shadcn UI',
			'Tanstack Router',
			'ExpressJS',
			'PostgresSQL',
		],
	},

	{
		name: 'Events - Exhibit',
		links: ['https://events-exhibit.vercel.app/'],
		thumbnail: imageSources.projects['events-exhibit'][0],
		images: imageSources.projects['events-exhibit'],
		tags: [
			'ReactJS',
			'Typescript',
			'TailwindCSS',
			'ExpressJS',
			'Firebase',
			'PostgresSQL',
		],
	},

	{
		name: 'Brainwave',
		links: ['https://taylor1119.github.io/brainwave/'],
		repo: 'https://github.com/taylor1119/brainwave',
		thumbnail: imageSources.projects.brainwave[0],
		images: imageSources.projects.brainwave,
		tags: ['AstroJS', 'TailwindCSS', 'Typescript', 'RPC'],
	},

	{
		name: 'Card Matching Game',
		links: ['https://taylor1119.github.io/memory-matching-game/'],
		repo: 'https://github.com/taylor1119/memory-matching-game',
		thumbnail: imageSources.projects['memory-matching-game'][0],
		images: imageSources.projects['memory-matching-game'],
		tags: ['ReactJS', 'PreactJS', 'Typescript', 'CSS'],
	},

	{
		name: 'Landing Pages',
		links: ['https://taylor1119.github.io/landing-pages/'],
		repo: 'https://github.com/taylor1119/landing-pages/',
		thumbnail: imageSources.projects['landing-page'][0],
		images: imageSources.projects['landing-page'],
		tags: ['AstroJS', 'TailwindCSS', 'Typescript', 'GSAP'],
	},

	{
		name: 'Social Media App',
		links: ['https://social-media-app-eoga.onrender.com/'],
		repo: 'https://github.com/taylor1119/social-media-app',
		thumbnail: imageSources.projects['social-media-app'][5],
		images: imageSources.projects['social-media-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'RecoilJS',
			'React Router',
			'React Query',
		],
	},

	{
		name: 'Bookdex',
		links: ['https://bookdex.vercel.app/'],
		repo: 'https://github.com/taylor1119/bookdex',
		thumbnail: imageSources.projects['bookdex'][0],
		images: imageSources.projects['bookdex'],
		tags: [
			'SolidJS',
			'TailwindCSS',
			'Typescript',
			'Go',
			'Go Fiber',
			'Uber Fx',
			'PostgresSQL',
		],
	},

	{
		name: 'Instant Messaging App',
		links: [
			'https://messaging-app-2b7q.onrender.com',
		],
		repo: 'https://github.com/taylor1119/messaging-app',
		thumbnail: imageSources.projects['messaging-app'][1],
		images: imageSources.projects['messaging-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'RecoilJS',
			'React Router',
			'React Query',
		],
	}
]

export default PROJECTS
