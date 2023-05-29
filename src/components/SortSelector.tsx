import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortingOrder: string;
  onSelectSortingOrder: (selectedSortingOrder: string) => void;
}

const SortSelector = ({
  selectedSortingOrder,
  onSelectSortingOrder,
}: Props) => {
  const orderItem = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortLabel = orderItem.find(
    (e) => e.value === selectedSortingOrder
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortLabel || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderItem.map((e) => (
          <MenuItem
            onClick={() => onSelectSortingOrder(e.value)}
            key={e.value}
            value={e.value}
          >
            {e.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
