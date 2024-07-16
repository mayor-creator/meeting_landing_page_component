import imageWomanInVideoCall from "../../assets/desktop/image-woman-in-videocall.jpg";
import imageWomenVideoCHat from "../../assets/desktop/image-women-videochatting.jpg";
import imageMenInMeeting from "../../assets/desktop/image-men-in-meeting.jpg";
import imageManTexting from "../../assets/desktop/image-man-texting.jpg";

import style from "./Main.module.css";

export function Main() {
	return (
		<>
			<main>
				<div className={style.lineContainer}>
					<div className={style.verticalLine}></div>
					<div className={style.circle}>
						<p className={style.circleVersion}>01</p>
					</div>
				</div>
				<div className={style.imageContainer}>
					<div>
						<img
							className={style.item}
							src={imageWomanInVideoCall}
							alt="a woman in video call"
						/>
					</div>
					<div>
						<img
							className={style.item}
							src={imageWomenVideoCHat}
							alt="women in video chat"
						/>
					</div>
					<div>
						<img
							className={style.item}
							src={imageMenInMeeting}
							alt="men in meeting"
						/>
					</div>
					<div>
						<img
							className={style.item}
							src={imageManTexting}
							alt="man texting on a phone"
						/>
					</div>
				</div>
				<div className={style.modernContainer}>
					<h2 className={style.modernBuilt}>Built for modern use</h2>
					<p className={style.modernHeader}>
						Smarter meetings, all in one place
					</p>
					<p className={style.modernMessage}>
						Send messages, share files, show your screen, and record your
						meetings — all in one workspace. Control who can join with
						invite-only team access, data encryption, and data export.
					</p>
				</div>
			</main>
		</>
	);
}
