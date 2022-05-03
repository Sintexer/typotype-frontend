import { Link as ThemeLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useLinkColors } from "src/styles/colors";

export const Link = ({to, ...props}) => (
    <ThemeLink as={RouterLink} to={to} {...props}>{props.children}</ThemeLink>
)

export const TextLink = ({ title, to, ...props }) => {
    const linkColors = useLinkColors();
    return (
        <Link
            to={to}
            p={2}
            color={linkColors.default}
            {...props}
            _hover={{
                color: linkColors.hover,
                textDecoration: "underline"
            }}
        >
            {title}
        </Link>
    )
}