"use client";

import { Button, Checkbox, Form, Input } from "antd";

export default function Home() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    ApacheConfig?: string;
    ServerName?: string;
    MappingPort?: string;
    APP_NAME?: string;
    APP_ENV?: string;
    APP_DEBUG?: boolean;
    APP_KEY?: string;
    APP_URL?: string;
    ADMIN_FRONT_URL?: string;
    WEB_FRONT_URL?: string;
    LOG_CHANNEL?: string;
    DB_CONNECTION?: string;
    DB_HOST?: string;
    DB_PORT?: number;
    DB_DATABASE?: string;
    DB_USERNAME?: string;
    DB_PASSWORD?: string;
    DB_SEARCH_PATH?: string;
    DB_SSL_MODE?: string;
    REDIS_HOST?: string;
    REDIS_PASSWORD?: string;
    SCRIBE_AUTH_KEY?: string;
    CACHE_DRIVER?: string;
    MAIL_DRIVER?: string;
    SENTINEL_MULTIPLE_SESSION_MAX?: string;
    QUEUE_CONNECTION?: string;
    FILESYSTEM_DISK?: string;
    MINIO_CDN?: string;
    MINIO_ENDPOINT?: string;
    MINIO_KEY?: string;
    MINIO_SECRET?: string;
    MINIO_BUCKET?: string;
    MINIO_BUCKET_PROXY?: string;
    MINIO_REGION?: string;
    ELASTIC_APM_ENABLED?: boolean;
    REDIS_QUEUE?: string;
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

  console.log(data.split("\n"));

  return (
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
        console.log(element);

        if (element?.length === 1 || element?.length === 5) {
          return <br key={index} />;
        }

        if (element?.[3] === "TRUE" || element?.[3] === "FALSE") {
          return (
            <div key={index}>
              <Form.Item
                label={element[2]}
                name={element[2]}
                valuePropName="checked"
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
                rules={[
                  {
                    required: true,
                    message: `Please input your ${element[2]}!`,
                  },
                ]}
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
  );
}
