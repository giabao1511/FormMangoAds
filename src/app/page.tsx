"use client";

import { Button, Checkbox, Form, Input } from "antd";

export default function Home() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const data = `  ApacheConfig exim.mangoads.com.vn.conf
  ServerName exim.mangoads.com.vn
  MappingPort http://localhost:6789

  APP_NAME Laravel
  APP_ENV Local
  APP_DEBUG TRUE
  APP_KEY	
  APP_URL
  ADMIN_FRONT_URL
  WEB_FRONT_URL	
  LOG_CHANNEL stderr
    
  DB_CONNECTION pgsql
  DB_HOST 206.189.81.38
  DB_PORT 5433
  DB_DATABASE	
  DB_USERNAME	
  DB_PASSWORD	
  DB_SEARCH_PATH	
  DB_SSL_MODE prefer

  REDIS_HOST 127.0.0.1
  REDIS_PASSWORD	
  SCRIBE_AUTH_KEY	
    
  CACHE_DRIVER file
  MAIL_DRIVER	log
  SENTINEL_MULTIPLE_SESSION_MAX 99999
  QUEUE_CONNECTION database
    
  FILESYSTEM_DISK minio
  MINIO_CDN https://cdn.mangoads.com.vn:9001
  MINIO_ENDPOINT http://209.97.162.202:9000
  MINIO_KEY	
  MINIO_SECRET	
  MINIO_BUCKET	
  MINIO_BUCKET_PROXY	
  MINIO_REGION us-east-1
  ELASTIC_APM_ENABLED FALSE
  REDIS_QUEUE default`;

  return (
    <>
      <div className="center">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {data?.split("\n")?.map((item, index) => {
            const element = item.split(" ");

            if (element?.length === 1 || element?.length === 5) {
              return (
                <>
                  <br key={index} />
                  <br key={index} />
                </>
              );
            }

            if (element?.[3] === "TRUE" || element?.[3] === "FALSE") {
              console.log(element[3]);
              return (
                <div key={index}>
                  <Form.Item
                    label={element[2]}
                    name={element[2]}
                    valuePropName="checked"
                    initialValue={element?.[3] === "TRUE" ? true : false}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <Form.Item
                    label={element[2]}
                    name={element[2]}
                    initialValue={element[3]}
                    className="asdasdas"
                  >
                    <Input />
                  </Form.Item>
                </div>
              );
            }
          })}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
