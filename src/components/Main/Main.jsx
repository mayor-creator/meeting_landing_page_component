import imageWomanInVideoCall from "../../assets/desktop/image-woman-in-videocall.jpg";
import imageWomenVideoCHat from "../../assets/desktop/image-women-videochatting.jpg";
import imageMenInMeeting from "../../assets/desktop/image-men-in-meeting.jpg";
import imageManTexting from "../../assets/desktop/image-man-texting.jpg";

export function Main() {
	return (
		<>
			<main>
				<div className="vertical-line"></div>
				<div className="circle">
					<p>01</p>
				</div>
				<div className="image-container">
					<div>
						<img
							src={imageWomanInVideoCall}
							alt="a woman in video call"
						/>
					</div>
					<div>
						<img
							src={imageWomenVideoCHat}
							alt="women in video chat"
						/>
					</div>
					<div>
						<img
							src={imageMenInMeeting}
							alt="men in meeting"
						/>
					</div>
					<div>
						<img
							src={imageManTexting}
							alt="man texting on a phone"
						/>
					</div>
				</div>
				<div>
					<p>Built for modern use</p>
					<h2>Smarter meetings, all in one place</h2>
					<p>
						Send messages, share files, show your screen, and record your
						meetings — all in one workspace. Control who can join with
						invite-only team access, data encryption, and data export.
					</p>
				</div>
			</main>
		</>
	);
}
