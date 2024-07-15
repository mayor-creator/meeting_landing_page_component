import { Button } from "../Button";

import logo from "../../assets/logo.svg";
import imageHeroLeft from "../../assets/desktop/image-hero-left.png";
import imageHeroRight from "../../assets/desktop/image-hero-right.png";
import imageHero from "../../assets/tablet/image-hero.png";

export function Header() {
	return (
		<>
			<header>
				<nav>
					<div>
						<img
							className="logo"
							src={logo}
							alt="meet logo"
						/>
					</div>
				</nav>
				<div className="laptop-container">
					<div className="hero-left-container">
						<img
							src={imageHeroLeft}
							alt="portrait of different people"
						/>
					</div>
					<div className="group-chat">
						<h1>Group Chat for Everyone</h1>
						<p>
							Meet makes it easy to connect with others face-to-face virtually
							and collaborate across any device.
						</p>
						<div className="buttons">
							<Button>Download v1.3</Button>
							<Button>What is it?</Button>
						</div>
					</div>
					<div className="hero-right-container">
						<img
							src={imageHeroRight}
							alt="portrait of different people"
						/>
					</div>
				</div>

				<div className="tablet-mobile-container">
					<div className="hero-image">
						<img
							src={imageHero}
							alt="portrait of different people"
						/>
						<div className="group-chat">
							<h1>Group Chat for Everyone</h1>
							<p>
								Meet makes it easy to connect with others face-to-face virtually
								and collaborate across any device.
							</p>
							<div className="buttons">
								<Button>Download v1.3</Button>
								<Button>What is it?</Button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
