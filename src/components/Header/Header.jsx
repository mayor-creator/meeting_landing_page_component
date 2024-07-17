import { Button } from "../Button";

import logo from "../../assets/logo.svg";
import imageHeroLeft from "../../assets/desktop/image-hero-left.png";
import imageHeroRight from "../../assets/desktop/image-hero-right.png";
import imageHero from "../../assets/tablet/image-hero.png";

import style from "./Header.module.css";

export function Header() {
	return (
		<>
			<header>
				<nav>
					<div className={style.logoContainer}>
						<img
							className="logo"
							src={logo}
							alt="meet logo"
						/>
					</div>
				</nav>

				<div className={style.laptopContainer}>
					<div className="hero-left-container">
						<img
							src={imageHeroLeft}
							alt="portrait of different people"
						/>
					</div>
					<div className={style.groupChatContainer}>
						<h1 className={style.groupChatHeader}>Group Chat for Everyone</h1>
						<p className={style.groupChatMessage}>
							Meet makes it easy to connect with others face-to-face virtually
							and collaborate across any device.
						</p>
						<div className="buttons">
							<Button className={style.groupChatButtonVersion}>
								Download <span className={style.spanVersion}>v1.3</span>
							</Button>
							<Button className={style.groupChatButtonQuestion}>
								What is it?
							</Button>
						</div>
					</div>
					<div className="hero-right-container">
						<img
							src={imageHeroRight}
							alt="portrait of different people"
						/>
					</div>
				</div>

				<div className={style.tabletMobileContainer}>
					<div>
						<img
							className={style.heroImage}
							src={imageHero}
							alt="portrait of different people"
						/>
						<div className={style.groupChatContainer}>
							<h1 className={style.groupChatHeader}>Group Chat for Everyone</h1>
							<p className={style.groupChatMessage}>
								Meet makes it easy to connect with others face-to-face virtually
								and collaborate across any device.
							</p>
							<div className="buttons">
								<Button className={style.groupChatButtonVersion}>
									Download <span className={style.spanVersion}>v1.3</span>
								</Button>
								<Button className={style.groupChatButtonQuestion}>
									What is it?
								</Button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
