/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from 'antd';
import './RoundedSelect.css';
type RoundedSelectType = { value: string; label: string }[];
export default function RoundedSelecte({
  data,
  value,
  onChange,
}: {
  data: RoundedSelectType;
  value: string;
  onChange: (v: any) => void;
}) {
  return (
    <Select
      className={'roundedSelect'}
      size='large'
      value={value}
      onChange={onChange}
      // style={{ width: 200 }}
    >
      {data.map(item => (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
}
