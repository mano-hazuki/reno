import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface Props extends FontAwesomeIconProps {}

export function Icon({ icon, className = "", ...props }: Props) {
	return <FontAwesomeIcon icon={icon} className={className} {...props} />;
}
