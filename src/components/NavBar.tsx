import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GOAT.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image borderRadius="16px" src={logo} boxSize="60px" />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
