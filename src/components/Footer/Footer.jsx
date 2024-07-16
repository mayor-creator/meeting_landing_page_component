import { Button } from "../Button";
import style from "./Footer.module.css";

export function Footer() {
	return (
		<>
			<footer className={style.footer}>
				<div className={style.lineContainer}>
					<div className={style.verticalLine}></div>
					<div className={style.circle}>
						<p className={style.circleVersion}>02</p>
					</div>
				</div>
				<div className={style.footerContainer}>
					<h3 className={style.footerHeader}>Experience more together</h3>
					<p className={style.footerMessage}>
						Stay connected with reliable HD meetings and unlimited one-on-one
						and group video sessions.
					</p>
					<Button className={style.footerButtonVersion}>Download v1.3</Button>
				</div>
			</footer>
		</>
	);
}
