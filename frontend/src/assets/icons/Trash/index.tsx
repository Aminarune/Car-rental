import { ReactComponent as Outlined } from "./outlined.svg";
import { ReactComponent as Filled } from "./filled.svg";
import { ReactComponent as TwoTone } from "./twotone.svg";
import { ReactComponent as Bulk } from "./bulk.svg";
import { ReactComponent as Broken } from "./broken.svg";
import { IconProps } from "../../../types";

const TrashOutlined = ({ color, size, ...props }: IconProps) => {
  return (
    <Outlined
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
const TrashFilled = ({ color, size, ...props }: IconProps) => {
  return (
    <Filled
      style={{ width: size, height: size, fill: color, stroke: "transparent" }}
      {...props}
    />
  );
};
const TrashTwoTone = ({ color, size, ...props }: IconProps) => {
  return (
    <TwoTone
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
const TrashBulk = ({ color, size, ...props }: IconProps) => {
  return (
    <Bulk
      style={{ width: size, height: size, fill: color, stroke: "transparent" }}
      {...props}
    />
  );
};
const TrashBroken = ({ color, size, ...props }: IconProps) => {
  return (
    <Broken
      style={{ width: size, height: size, stroke: color, fill: "transparent" }}
      {...props}
    />
  );
};
export { TrashOutlined, TrashFilled, TrashTwoTone, TrashBulk, TrashBroken };
