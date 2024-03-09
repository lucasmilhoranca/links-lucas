import { Card } from "./components/card"

function App() {
	return (
		<>
			<div className="relative mx-auto max-w-md h-[56rem] my-12 space-y-12 p-5 bg-gray-500 rounded-lg inset-0">
				<header className="flex flex-col items-center justify-center">
					<span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto w-32 h-32">
						<img src="../public/Design_sem_nome-remasovebg.png" alt="profile-picture" className="rounded-full" />
					</span>
					<div className="text-2xl font-bold text-gray-950 mt-5">@lucasmilhoranca</div>
					<h3 className="text-gray-50">Studant and Web Developer</h3>
					<h4>🚀🚀🚀</h4>
				</header>
				<main className="flex flex-col items-center justify-center gap-3">
					<Card link={"https://github.com/lucasmilhoranca"} icon={"bi bi-github"} name={"Github"} />
					<Card link={"https://www.linkedin.com/in/lucas-milhoranca/"} icon={"bi bi-linkedin"} name={"LinkedIn"} />
					<Card link={"https://www.instagram.com/lucas.milhoranca/"} icon={"bi bi-instagram"} name={"Instagram"} />
					<Card link={"https://twitter.com/lucasmilhoranca"} icon={"bi bi-twitter-x"} name={"Twitter"} />
				</main>
				<footer className="absolute inset-x-0 bottom-0 w-full flex items-center justify-center p-5 cursor-pointer">
					<span className="text-gray-50">Powered By ©lucasmilhoranca</span>
				</footer>
			</div >
		</>
	)
}

export default App