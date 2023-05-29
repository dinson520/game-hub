import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const orderItem: string[] = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {orderItem.map((e) => {
          return <MenuItem key={e}>{e}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
