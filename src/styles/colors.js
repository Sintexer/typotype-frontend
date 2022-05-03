import {
    extendTheme, useColorModeValue, withDefaultColorScheme
} from "@chakra-ui/react";

const colorsExtension = extendTheme(
    withDefaultColorScheme({ colorScheme: "green" })
);

const useColors = () => {
    const warning = useColorModeValue("yellow.400", "yellow.400");

    return {
        warning: warning,
    };
};

const useLinkColors = () => {
    const linkColor = useColorModeValue("white", "gray.100");
    const linkHoverColor = useColorModeValue("green.200", "green.300");
    const linkActiveColor = useColorModeValue("green.300", "green.400");
    const hoverBackgroundColor = useColorModeValue("green.100", "green.100");

    return {
        default: linkColor,
        hover: linkHoverColor,
        active: linkActiveColor,
        hoverBackground: hoverBackgroundColor
    };
};

const useTextColors = () => {
    const primaryColor = useColorModeValue("gray.800", "gray.200");
    const secondaryColor = useColorModeValue("gray.500", "gray.300");
    const darkColor = useColorModeValue("gray.800", "gray.900")

    return {
        primary: primaryColor,
        secondary: secondaryColor,
        dark: darkColor
    };
};

const useBackgroundColors = () => {
    const navBg = useColorModeValue("gray.800", "gray.900");
    const subNavBg = useColorModeValue("gray.700", "gray.800");
    const mainBg = useColorModeValue("gray.100", "gray.800");
    const footerBg = useColorModeValue("gray.600", "gray.900");
    const cardBg = useColorModeValue("white", "green.700");
    const cardHoverBg = useColorModeValue("gray.100", "green.600");

    return {
        default: mainBg,
        nav: navBg,
        subNav: subNavBg,
        footer: footerBg,
        card: cardBg,
        cardHover: cardHoverBg
    };
};

const useBorderColors = () => {
    const navBorder = useColorModeValue("gray.200", "gray.600");
    const mainBorder = useColorModeValue("gray.200", "gray.900");
    const footerBorder = useColorModeValue("gray.200", "gray.900");
    const widgetBorder = useColorModeValue("gray.300", "gray.600");
    const lightBorder = useColorModeValue("gray.300", "gray.500")

    return {
        default: mainBorder,
        nav: navBorder,
        footer: footerBorder,
        widget: widgetBorder,
        lightBorder: lightBorder
    };
};

export {
    colorsExtension,
    useColors,
    useLinkColors,
    useBackgroundColors,
    useBorderColors,
    useTextColors
};