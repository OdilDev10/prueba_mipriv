import type { SelectProps } from "antd";
import { Select, Space } from "antd";

const options: SelectProps["options"] = [
  {
    label: "Dominican Republic",
    value: "repdom",
    emoji: '🇩🇴',
    desc: 'Republica Dominicana'
  },
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)",
  },
  {
    label: "Argentina",
    value: "argentina",
    emoji: "🇦🇷",
    desc: "Argentina",
  },
  {
    label: "Brazil",
    value: "brazil",
    emoji: "🇧🇷",
    desc: "Brazil (Brasil)",
  },
  {
    label: "Canada",
    value: "canada",
    emoji: "🇨🇦",
    desc: "Canada",
  },
  {
    label: "Mexico",
    value: "mexico",
    emoji: "🇲🇽",
    desc: "Mexico (México)",
  },
  {
    label: "Colombia",
    value: "colombia",
    emoji: "🇨🇴",
    desc: "Colombia",
  },
  {
    label: "Germany",
    value: "germany",
    emoji: "🇩🇪",
    desc: "Germany (Deutschland)",
  },
  {
    label: "France",
    value: "france",
    emoji: "🇫🇷",
    desc: "France",
  },
  {
    label: "Italy",
    value: "italy",
    emoji: "🇮🇹",
    desc: "Italy (Italia)",
  },
  {
    label: "Australia",
    value: "australia",
    emoji: "🇦🇺",
    desc: "Australia",
  },
  {
    label: "India",
    value: "india",
    emoji: "🇮🇳",
    desc: "India (भारत)",
  },
];

const SelectMultiple = ({
  handleChangeSelectMultiple,
}: {
  handleChangeSelectMultiple: (value: any) => void;
}) => (
  <Select
    mode="multiple"
    style={{ width: "100%" }}
    placeholder="select one country"
    defaultValue={["china"]}
    onChange={handleChangeSelectMultiple}
    optionLabelProp="label"
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);

export default SelectMultiple;
