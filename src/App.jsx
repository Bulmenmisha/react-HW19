import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

function App() {
  // состояние полей формы
  const [formData, setFormData] = useState({ name: '', description: '' });
  // данные, которые показываем в карточке после отправки
  const [submittedData, setSubmittedData] = useState(null);

  // обновление состояния при вводе
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // отправка формы
  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div className="app">
      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Введите описание' }]}
        >
          <Input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card>
          <Title level={4}>Отправленные данные:</Title>
          <Paragraph>
            <Text strong>Имя:</Text> {submittedData.name}
          </Paragraph>
          <Paragraph>
            <Text strong>Описание:</Text> {submittedData.description}
          </Paragraph>
        </Card>
      )}
    </div>
  );
}

export default App;
