export function Button({ children, className }) {
	return (
		<button
			type="button"
			className={className}>
			{children}
		</button>
	);
}

Button.propTypes;
