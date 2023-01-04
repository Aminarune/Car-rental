import { ReactComponent as Outlined } from "./outlined.svg";
import { ReactComponent as Filled } from "./filled.svg";
import { ReactComponent as TwoTone } from "./twotone.svg";
import { ReactComponent as Bulk } from "./bulk.svg";
import { ReactComponent as Broken } from "./broken.svg";
import { Icon } from "../../../types";
const BatteryEmptyOutlined = ({
  color = "#000",
  size = 12,
  ...props
}: Icon) => {
  return (
    <Outlined
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
const BatteryEmptyFilled = ({ color = "#000", size = 12, ...props }: Icon) => {
  return (
    <Filled
      style={{ width: size, height: size, fill: color, stroke: "transparent" }}
      fill={color}
      width={size}
      height={size}
      {...props}
    />
  );
};
const BatteryEmptyTwoTone = ({ color = "#000", size = 12, ...props }: Icon) => {
  return (
    <TwoTone
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
const BatteryEmptyBulk = ({ color = "#000", size = 12, ...props }: Icon) => {
  return (
    <Bulk
      style={{ width: size, height: size, fill: color, stroke: "transparent" }}
      {...props}
    />
  );
};
const BatteryEmptyBroken = ({ color = "#000", size = 12, ...props }: Icon) => {
  return (
    <Broken
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
export {
  BatteryEmptyOutlined,
  BatteryEmptyFilled,
  BatteryEmptyTwoTone,
  BatteryEmptyBulk,
  BatteryEmptyBroken,
};
