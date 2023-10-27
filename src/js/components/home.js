import krustyKrabOutsideImgSrc from '../../images/krusty-krab-outside.jpg';
import './home.css';

function home() {
	const homeSection = document.createElement('section');
	homeSection.classList.add('content-section', 'content-home');
	homeSection.innerHTML = `
			<header>
				<h1 class="text-theme text-uppercase">The Krusty Krab</h1>
				<p class="mt-2">
					The Krusty Krab is a fast food restaurant located in Bikini Bottom,
					founded and owned by Eugene H. Krabs. It is also the most popular
					and best known restaurant in Bikini Bottom and one of the main
					locations of SpongeBob SquarePants. It first appears in the pilot
					episode "Help Wanted."
				</p>
				<p class="mt-1">
					Famous for its Krabby Patty burgers, it is a rival to Plankton's
					highly unpopular across-the-street restaurant called the Chum
					Bucket. Its employees are SpongeBob SquarePants and Squidward
					Tentacles, respectively the fry cook and cashier.
				</p>
			</header>
			<div class="content-home-right">
				<img
					src="${krustyKrabOutsideImgSrc}"
					alt="View of Krusty Krab from the outside"
				/>
			</div>
	`;
	return homeSection;
}

export default home;
