import * as React from 'react';
import { Form, Button, DatePicker, Select } from 'antd';

export interface ISearchBarProps {
  search(value: any): void
}

export default function SearchBar(props: ISearchBarProps) {

  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;

  const rangeConfig = {
    rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
  };
  return (
    <div>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={props.search}>
        <Form.Item name="date"  {...rangeConfig}>
          <RangePicker />
        </Form.Item>
        <Form.Item name="hashtags">
          <Select mode="tags" placeholder="Keywords" style={{ width: 500 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
