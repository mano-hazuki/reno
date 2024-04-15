import type { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
	textColor: string;
}

export function Logo({ textColor, ...props }: Props) {
	return (
		<svg {...props} viewBox="0 0 481 152" fill="none" xmlns="http://www.w3.org/2000/svg">
			<title>Logo</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M94.7653 124.907C84.9572 131.892 72.9583 136 60 136C26.8629 136 0 109.137 0 76C0 63.0417 4.10791 51.0428 11.0925 41.2347L18.284 48.4261C13.0488 56.3304 10 65.8092 10 76C10 103.614 32.3858 126 60 126C70.1908 126 79.6696 122.951 87.5739 117.716L94.7653 124.907ZM108.907 110.765C115.892 100.957 120 88.9583 120 76C120 42.8629 93.1371 16 60 16C47.0417 16 35.0428 20.1079 25.2347 27.0925L32.4261 34.284C40.3304 29.0488 49.8092 26 60 26C87.6142 26 110 48.3857 110 76C110 86.1908 106.951 95.6696 101.716 103.574L108.907 110.765Z"
				fill="#34D399"
			/>
			<path
				d="M174.96 74.576C175.504 68.7733 177.091 63.6507 179.72 59.208C182.349 54.6747 185.749 51.1387 189.92 48.6C194.091 46.0613 198.715 44.792 203.792 44.792C207.237 44.792 209.912 45.2 211.816 46.016C213.72 46.832 214.445 48.2827 213.992 50.368C213.72 51.728 213.085 52.544 212.088 52.816C211.091 53.088 209.867 53.1333 208.416 52.952C207.056 52.68 205.515 52.544 203.792 52.544C199.259 52.544 195.224 53.496 191.688 55.4C188.152 57.304 185.387 59.9333 183.392 63.288C181.397 66.552 180.4 70.3147 180.4 74.576H174.96ZM176.32 120C175.141 120 174.144 119.637 173.328 118.912C172.603 118.096 172.24 117.099 172.24 115.92V49.688C172.24 48.4187 172.603 47.4213 173.328 46.696C174.144 45.9707 175.141 45.608 176.32 45.608C177.589 45.608 178.587 45.9707 179.312 46.696C180.037 47.4213 180.4 48.4187 180.4 49.688V115.92C180.4 117.099 180.037 118.096 179.312 118.912C178.587 119.637 177.589 120 176.32 120ZM259.34 120.68C252.177 120.68 245.785 119.093 240.164 115.92C234.633 112.656 230.281 108.168 227.108 102.456C223.934 96.744 222.348 90.216 222.348 82.872C222.348 75.4373 223.844 68.9093 226.836 63.288C229.828 57.576 233.953 53.088 239.212 49.824C244.47 46.56 250.5 44.928 257.3 44.928C264.009 44.928 269.948 46.5147 275.116 49.688C280.284 52.7707 284.318 57.0773 287.22 62.608C290.121 68.048 291.572 74.3493 291.572 81.512C291.572 82.6907 291.209 83.6427 290.484 84.368C289.758 85.0027 288.806 85.32 287.628 85.32H227.788V78.248H289.804L283.82 82.736C284.001 76.8427 283.004 71.6293 280.828 67.096C278.652 62.5627 275.524 59.0267 271.444 56.488C267.454 53.8587 262.74 52.544 257.3 52.544C252.132 52.544 247.508 53.8587 243.428 56.488C239.438 59.0267 236.265 62.5627 233.908 67.096C231.641 71.6293 230.508 76.888 230.508 82.872C230.508 88.7653 231.732 93.9787 234.179 98.512C236.628 103.045 240.028 106.627 244.38 109.256C248.732 111.795 253.718 113.064 259.34 113.064C262.876 113.064 266.412 112.475 269.948 111.296C273.574 110.027 276.43 108.395 278.516 106.4C279.241 105.675 280.102 105.312 281.1 105.312C282.188 105.221 283.094 105.493 283.82 106.128C284.817 106.944 285.316 107.851 285.316 108.848C285.406 109.845 284.998 110.752 284.091 111.568C281.19 114.197 277.382 116.373 272.668 118.096C268.044 119.819 263.601 120.68 259.34 120.68ZM373.631 120C372.452 120 371.455 119.637 370.639 118.912C369.913 118.096 369.551 117.099 369.551 115.92V79.336C369.551 73.352 368.372 68.4107 366.015 64.512C363.748 60.6133 360.62 57.712 356.631 55.808C352.732 53.8133 348.289 52.816 343.303 52.816C338.407 52.816 334.009 53.768 330.111 55.672C326.212 57.4853 323.129 60.024 320.863 63.288C318.596 66.552 317.463 70.224 317.463 74.304H310.663C311.025 68.6827 312.703 63.6507 315.695 59.208C318.687 54.6747 322.585 51.1387 327.391 48.6C332.196 45.9707 337.5 44.656 343.303 44.656C349.831 44.656 355.679 46.016 360.847 48.736C366.105 51.3653 370.231 55.264 373.223 60.432C376.215 65.5093 377.711 71.8107 377.711 79.336V115.92C377.711 117.099 377.303 118.096 376.487 118.912C375.761 119.637 374.809 120 373.631 120ZM313.383 120C312.204 120 311.207 119.637 310.391 118.912C309.665 118.096 309.303 117.099 309.303 115.92V49.688C309.303 48.4187 309.665 47.4213 310.391 46.696C311.207 45.9707 312.204 45.608 313.383 45.608C314.652 45.608 315.649 45.9707 316.375 46.696C317.1 47.4213 317.463 48.4187 317.463 49.688V115.92C317.463 117.099 317.1 118.096 316.375 118.912C315.649 119.637 314.652 120 313.383 120ZM434.81 120.816C427.557 120.816 421.029 119.184 415.226 115.92C409.514 112.565 404.981 108.032 401.626 102.32C398.362 96.5173 396.73 90.0347 396.73 82.872C396.73 75.6187 398.362 69.136 401.626 63.424C404.981 57.6213 409.514 53.088 415.226 49.824C421.029 46.4693 427.557 44.792 434.81 44.792C442.064 44.792 448.546 46.4693 454.258 49.824C459.97 53.088 464.458 57.6213 467.722 63.424C471.077 69.136 472.754 75.6187 472.754 82.872C472.754 90.0347 471.077 96.5173 467.722 102.32C464.458 108.032 459.97 112.565 454.258 115.92C448.546 119.184 442.064 120.816 434.81 120.816ZM434.81 113.2C440.522 113.2 445.6 111.885 450.042 109.256C454.576 106.536 458.112 102.909 460.65 98.376C463.28 93.752 464.594 88.5387 464.594 82.736C464.594 77.024 463.28 71.9013 460.65 67.368C458.112 62.744 454.576 59.1173 450.042 56.488C445.6 53.768 440.522 52.408 434.81 52.408C429.189 52.408 424.112 53.768 419.578 56.488C415.045 59.1173 411.464 62.744 408.834 67.368C406.205 71.9013 404.89 77.0693 404.89 82.872C404.89 88.584 406.205 93.752 408.834 98.376C411.464 102.909 415.045 106.536 419.578 109.256C424.112 111.885 429.189 113.2 434.81 113.2Z"
				fill={textColor}
			/>
		</svg>
	);
}
